"use client";

import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Tooltip, GeoJSON, useMap } from "react-leaflet";
import L from "leaflet";
import { StoreLocation, storeTypeConfig } from "@/data/storeLocations";
import indiaGeoData from "../../public/geo/india.json";

// High-performance dark canvas basemap with zero API key requirement and zero watermarks
const DARK_TILE_URL =
  "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}";

const DARK_TILE_ATTRIBUTION =
  '&copy; <a href="https://www.esri.com/">Esri</a> &copy; OpenStreetMap';

/** Geographic extent of complete India (including Ladakh & J&K) — SW & NE corners */
const INDIA_SW: [number, number] = [6.7, 68.0];
const INDIA_NE: [number, number] = [37.2, 97.5];

/** Padded bounds so the full country is visible with balanced margins */
function getFullIndiaBounds() {
  return L.latLngBounds(INDIA_SW, INDIA_NE).pad(0.03);
}

function FitFullIndiaView({ compact }: { compact: boolean }) {
  const map = useMap();

  useEffect(() => {
    const fit = () => {
      map.invalidateSize();
      map.fitBounds(getFullIndiaBounds(), {
        paddingTopLeft: compact ? [14, 24] : [24, 24],
        paddingBottomRight: compact ? [14, 72] : [24, 24],
        animate: false,
      });
    };

    // Invalidate size once layout stabilizes and whenever container resizes
    const timer = setTimeout(fit, 150);
    const container = map.getContainer();
    const observer =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => fit()) : null;
    if (observer) {
      observer.observe(container);
    }

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [map, compact]);

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
      boundsOptions={{
        paddingTopLeft: compact ? [14, 24] : [24, 24],
        paddingBottomRight: compact ? [14, 72] : [24, 24],
      }}
      minZoom={3}
      maxBounds={indiaBounds.pad(0.4)}
      zoomSnap={0.1}
      scrollWheelZoom={false}
      zoomControl={!compact}
      attributionControl={false}
      className="india-leaflet-map h-full w-full rounded-2xl"
      style={{ background: "#081325" }}
    >
      <TileLayer url={DARK_TILE_URL} attribution={DARK_TILE_ATTRIBUTION} />
      
      {/* Official full-India outline (including complete Jammu & Kashmir and Ladakh) */}
      <GeoJSON
        data={indiaGeoData as GeoJSON.GeoJsonObject}
        style={{
          fillColor: "#0a2035",
          fillOpacity: 0.85,
          color: "#00E5FF",
          weight: 1.8,
          opacity: 0.85,
          dashArray: "4, 6",
        }}
      />

      <FitFullIndiaView compact={compact} />

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
