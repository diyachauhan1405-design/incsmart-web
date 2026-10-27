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

/** Geographic extent of India — SW & NE corners */
const INDIA_SW: [number, number] = [6.8, 68.0];
const INDIA_NE: [number, number] = [37.2, 97.5];

/** Padded bounds so the full country is visible with balanced margins */
function getFullIndiaBounds() {
  return L.latLngBounds(INDIA_SW, INDIA_NE).pad(0.08);
}

function FitFullIndiaView({ compact }: { compact: boolean }) {
  const map = useMap();

  useEffect(() => {
    // Invalidate size once layout stabilizes so pins are never clustered
    const timer = setTimeout(() => {
      map.invalidateSize();
      map.fitBounds(getFullIndiaBounds(), {
        padding: compact ? [15, 15] : [25, 25],
        animate: false,
      });
    }, 150);

    return () => clearTimeout(timer);
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
      center={[22.5, 79.5]}
      zoom={compact ? 4 : 4.5}
      zoomSnap={0.1}
      scrollWheelZoom={false}
      zoomControl={!compact}
      attributionControl={false}
      className="india-leaflet-map h-full w-full rounded-2xl"
      style={{ background: "#081325" }}
    >
      <TileLayer url={DARK_TILE_URL} attribution={DARK_TILE_ATTRIBUTION} />
      
      {/* Visual outline and subtle fill for the territory of India */}
      <GeoJSON
        data={indiaGeoData as any}
        style={{
          fillColor: "#00E5FF",
          fillOpacity: 0.05,
          color: "#00E5FF",
          weight: 1.6,
          opacity: 0.75,
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
