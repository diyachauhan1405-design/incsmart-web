"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

type Option = { value: string; label: string };

interface FormSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder: string;
  required?: boolean;
}

export default function FormSelect({
  value,
  onChange,
  options,
  placeholder,
  required,
}: FormSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find((option) => option.value === value)?.label;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full bg-[#040B13]/60 border rounded-xl px-4 py-3 text-xs text-left flex items-center justify-between focus:outline-none transition-all ${
          isOpen ? "border-brand-blue/30" : "border-white/5"
        } ${selectedLabel ? "text-slate-200" : "text-slate-600"}`}
      >
        <span>{selectedLabel || placeholder}</span>
        <ChevronDown
          className={`h-4 w-4 text-slate-500 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {required && (
        <input
          type="text"
          value={value}
          required
          tabIndex={-1}
          readOnly
          aria-hidden
          className="sr-only pointer-events-none absolute opacity-0"
        />
      )}

      {isOpen && (
        <ul
          role="listbox"
          className="absolute z-50 w-full mt-1 bg-[#0b1a2d] border border-white/10 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] py-1 overflow-hidden"
        >
          {options.map((option) => (
            <li key={option.value} role="option" aria-selected={value === option.value}>
              <button
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2.5 text-xs text-left transition-colors ${
                  value === option.value
                    ? "bg-brand-blue/20 text-white font-semibold"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
