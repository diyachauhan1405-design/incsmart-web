"use client";

import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";
import { StoreLocation, storeTypeConfig } from "@/data/storeLocations";

const DARK_TILE_URL =
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

const DARK_TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';

/** Geographic extent of India — SW & NE corners */
const INDIA_SW: [number, number] = [6.4, 67.5];
const INDIA_NE: [number, number] = [37.3, 97.8];

/** Padded bounds so the full country is visible with neighbouring regions at the edges */
function getFullIndiaBounds() {
  return L.latLngBounds(INDIA_SW, INDIA_NE).pad(0.12);
}

function FitFullIndiaView() {
  const map = useMap();

  useEffect(() => {
    map.fitBounds(getFullIndiaBounds(), {
      padding: [20, 20],
      animate: false,
    });
  }, [map]);

  return null;
}

function createPinIcon(color: string, ring: string, active: boolean, compact: boolean) {
  const outer = compact ? (active ? 16 : 12) : active ? 22 : 16;
  const inner = compact ? (active ? 7 : 5) : active ? 9 : 6;

  return L.divIcon({
    className: "",
    html: `
      <div class="map-pin" style="width:${outer}px;height:${outer}px;">
        ${active ? `<span class="map-pin-pulse" style="background:${ring};"></span>` : ""}
        <span class="map-pin-ring" style="border-color:${color};background:${ring};"></span>
        <span class="map-pin-dot" style="background:${color};width:${inner}px;height:${inner}px;"></span>
      </div>
    `,
    iconSize: [outer, outer],
    iconAnchor: [outer / 2, outer / 2],
  });
}

interface IndiaMapCanvasProps {
  locations: StoreLocation[];
  highlightedId: string | null;
  onPinClick: (id: string) => void;
  onPinHover: (id: string | null) => void;
  compact?: boolean;
}

export default function IndiaMapCanvas({
  locations,
  highlightedId,
  onPinClick,
  onPinHover,
  compact = false,
}: IndiaMapCanvasProps) {
  const indiaBounds = useMemo(() => getFullIndiaBounds(), []);

  return (
    <MapContainer
      bounds={indiaBounds}
      boundsOptions={{ padding: [20, 20] }}
      scrollWheelZoom={false}
      zoomControl={!compact}
      attributionControl={false}
      className="india-leaflet-map h-full w-full rounded-2xl"
      style={{ background: "#081325" }}
    >
      <TileLayer url={DARK_TILE_URL} attribution={DARK_TILE_ATTRIBUTION} />
      <FitFullIndiaView />

      {locations.map((loc) => {
        const cfg = storeTypeConfig[loc.type];
        const isHighlighted = highlightedId === loc.id;

        return (
          <Marker
            key={loc.id}
            position={[loc.lat, loc.lng]}
            icon={createPinIcon(cfg.color, cfg.ring, isHighlighted, compact)}
            eventHandlers={{
              click: () => onPinClick(loc.id),
              mouseover: () => onPinHover(loc.id),
              mouseout: () => onPinHover(null),
            }}
          >
            {isHighlighted && (
              <Tooltip
                permanent
                direction="top"
                offset={[0, compact ? -10 : -14]}
                className="map-pin-tooltip"
              >
                {loc.name}
              </Tooltip>
            )}
          </Marker>
        );
      })}
    </MapContainer>
  );
}
