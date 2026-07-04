"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { MapPin, Phone, Building2 } from "lucide-react";
import {
  StoreLocation,
  storeTypeConfig,
  StoreType,
} from "@/data/storeLocations";

const IndiaMapCanvas = dynamic(() => import("./IndiaMapCanvas"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-[#081325]/60 rounded-2xl">
      <div className="flex flex-col items-center gap-2">
        <div className="w-8 h-8 border-2 border-brand-cyan/30 border-t-brand-cyan rounded-full animate-spin" />
        <span className="text-[10px] text-slate-500 font-medium">Loading map…</span>
      </div>
    </div>
  ),
});

interface IndiaMapProps {
  locations: StoreLocation[];
  className?: string;
  showLegend?: boolean;
  showLocationList?: boolean;
  showPanIndiaBadge?: boolean;
  title?: string;
  subtitle?: string;
  /** "compact" — map-only embed for hero sections; "default" — full map + location panel */
  variant?: "default" | "compact";
}

export default function IndiaMap({
  locations,
  className = "",
  showLegend = true,
  showLocationList = true,
  showPanIndiaBadge = true,
  title,
  subtitle,
  variant = "default",
}: IndiaMapProps) {
  const [activeId, setActiveId] = useState<string | null>(
    locations[0]?.id ?? null
  );
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeLocation =
    locations.find((l) => l.id === activeId) ?? locations[0];
  const highlightedId = hoveredId ?? activeId;
  const isCompact = variant === "compact";

  const handlePinClick = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  const mapCanvas = (
    <IndiaMapCanvas
      locations={locations}
      highlightedId={highlightedId}
      onPinClick={handlePinClick}
      onPinHover={setHoveredId}
      compact={isCompact}
    />
  );

  if (isCompact) {
    return (
      <div className={`relative w-full ${className}`}>
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-3xl border border-white/5 bg-[#081325]/30 p-2 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 via-transparent to-brand-blue/5 pointer-events-none z-10" />

          <div className="relative w-full h-full z-0 india-leaflet-map">{mapCanvas}</div>

          <div className="absolute top-3 left-3 z-20 bg-[#081325]/90 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md pointer-events-none">
            <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-wider">
              {locations.length} Mega Cities
            </span>
          </div>

          {activeLocation && (
            <div className="absolute bottom-3 left-3 right-3 z-20 bg-[#081325]/95 border border-white/10 rounded-xl px-3 sm:px-4 py-2.5 backdrop-blur-md pointer-events-none">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: storeTypeConfig[activeLocation.type].color,
                    }}
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-white truncate">
                      {activeLocation.city}, {activeLocation.state}
                    </p>
                    <p className="text-[10px] text-slate-400">{activeLocation.role}</p>
                  </div>
                </div>
                <span
                  className="text-[9px] font-bold uppercase tracking-wider flex-shrink-0 px-2 py-0.5 rounded-full"
                  style={{
                    color: storeTypeConfig[activeLocation.type].color,
                    backgroundColor: `${storeTypeConfig[activeLocation.type].color}18`,
                  }}
                >
                  {storeTypeConfig[activeLocation.type].label}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-3 justify-center max-h-28 overflow-y-auto sm:max-h-none sm:overflow-visible px-1">
          {locations.map((loc) => {
            const cfg = storeTypeConfig[loc.type];
            const isActive = activeId === loc.id;
            return (
              <button
                key={loc.id}
                onClick={() => setActiveId(loc.id)}
                onMouseEnter={() => setHoveredId(loc.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`text-[10px] font-semibold px-3 py-1 rounded-full border transition-all cursor-pointer ${
                  isActive
                    ? "border-brand-blue/40 bg-brand-blue/10 text-white"
                    : "border-white/5 bg-[#0b1a2d]/40 text-slate-400 hover:border-white/10 hover:text-slate-200"
                }`}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle"
                  style={{ backgroundColor: cfg.color }}
                />
                {loc.name}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {(title || subtitle) && (
        <div>
          {title && (
            <h3 className="text-xl font-bold text-white font-heading">{title}</h3>
          )}
          {subtitle && (
            <p className="text-xs text-slate-400 mt-1">{subtitle}</p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
        <div className="lg:col-span-3 relative rounded-3xl border border-white/5 bg-[#081325]/40 overflow-hidden min-h-[320px] sm:min-h-[400px]">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 via-transparent to-brand-blue/5 pointer-events-none z-10" />
          <div className="relative w-full h-full min-h-[320px] sm:min-h-[400px] z-0 india-leaflet-map">
            {mapCanvas}
          </div>

          {activeLocation && (
            <div className="sm:hidden absolute bottom-3 left-3 right-3 z-20 bg-[#081325]/95 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-md pointer-events-none">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: storeTypeConfig[activeLocation.type].color,
                  }}
                />
                <div>
                  <p className="text-xs font-bold text-white">
                    {activeLocation.city}, {activeLocation.state}
                  </p>
                  <p className="text-[10px] text-slate-400">{activeLocation.role}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          {showLocationList && (
            <div className="flex flex-col gap-2 flex-1">
              {locations.map((loc) => {
                const cfg = storeTypeConfig[loc.type];
                const isActive = activeId === loc.id;

                return (
                  <button
                    key={loc.id}
                    onClick={() => setActiveId(loc.id)}
                    onMouseEnter={() => setHoveredId(loc.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`w-full text-left rounded-2xl border p-4 transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#0b1a2d]/80 border-brand-blue/40 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                        : "bg-[#0b1a2d]/40 border-white/5 hover:border-white/10 hover:bg-[#0b1a2d]/60"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-1 w-3 h-3 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: cfg.color,
                          boxShadow: `0 0 8px ${cfg.ring}`,
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-bold text-white font-heading truncate">
                            {loc.city}, {loc.state}
                          </h4>
                          <span
                            className="text-[9px] font-bold uppercase tracking-wider flex-shrink-0 px-2 py-0.5 rounded-full"
                            style={{
                              color: cfg.color,
                              backgroundColor: `${cfg.color}18`,
                            }}
                          >
                            {cfg.label}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">{loc.role}</p>

                        {isActive && loc.address && (
                          <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">
                            {loc.address}
                          </p>
                        )}
                        {isActive && loc.phone && (
                          <a
                            href={`tel:${loc.phone.replace(/\s/g, "")}`}
                            className="inline-flex items-center gap-1.5 text-[10px] text-brand-cyan mt-2 hover:text-brand-blue transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Phone className="w-3 h-3" />
                            {loc.phone}
                          </a>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {showLegend && (
            <div className="bg-[#0b1a2d]/40 border border-white/5 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-brand-blue" />
                <span className="text-xs font-bold text-white">Map Legend</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {(
                  Object.entries(storeTypeConfig) as [
                    StoreType,
                    (typeof storeTypeConfig)[StoreType],
                  ][]
                ).map(([type, cfg]) => (
                  <div key={type} className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: cfg.color }}
                    />
                    <span className="text-[10px] text-slate-400">{cfg.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {showPanIndiaBadge && (
            <div className="bg-[#0b1a2d]/55 border border-white/5 rounded-2xl p-5 flex items-center space-x-4">
              <Building2 className="w-6 h-6 text-brand-blue flex-shrink-0" />
              <div>
                <h5 className="text-xs font-bold text-white">Pan India Support</h5>
                <p className="text-[10px] text-slate-400 mt-1">
                  Our team is available across India to deliver seamless support and
                  timely service.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
