# INCASMART Technologies LLP — Full Website & Technical Documentation

> **Official Comprehensive Project Specification, Architecture, Language Stack, and Design System**  
> *Generated for INCASMART Technologies LLP Web Application (`incsmart-web`)*

---

## Table of Contents
1. [Company & Executive Overview](#1-company--executive-overview)
2. [Complete Technology Stack & Languages](#2-complete-technology-stack--languages)
3. [Design System & Master Color Palette (All Codes)](#3-design-system--master-color-palette-all-codes)
4. [Typography & Hierarchy](#4-typography--hierarchy)
5. [Complete Route Map & Pages](#5-complete-route-map--pages)
6. [Component Architecture & Directory Map](#6-component-architecture--directory-map)
7. [Core Solutions & Engineering Blueprints](#7-core-solutions--engineering-blueprints)
8. [Case Studies & Live Deployment Portfolio](#8-case-studies--live-deployment-portfolio)
9. [Interactive Features & Visual Utilities](#9-interactive-features--visual-utilities)
10. [Corporate Directory & Contact Channels](#10-corporate-directory--contact-channels)

---

## 1. Company & Executive Overview

| Attribute | Details |
| :--- | :--- |
| **Legal Entity** | **INCASMART Technologies LLP** |
| **Year Founded** | 2017 |
| **Government Recognition** | Startup India Certified Company |
| **Headquarters** | E-202, GIDC Rd, Sector 26, Gandhinagar, Gujarat 382028, India |
| **Core Specialization** | Industrial IoT, Smart HVAC Optimization, Building Management Systems (BMS), Electrical Telemetry, and Fire Suppression Pipeline Monitoring |
| **Flagship Value Proposition** | Delivering up to **20% proven energy savings** in heavy commercial HVAC infrastructure and actively slashing enterprise carbon footprints |
| **Target Clientele** | Entertainment (Cinemas), Heavy Manufacturing, Transit & Railways, Hospitality, Commercial Real Estate, Warehousing & Data Centers |

---

## 2. Complete Technology Stack & Languages

### 2.1 Programming & Markup Languages
* **TypeScript (`v5.x`)**: Primary language used across the entire web application for strict type safety, data models (`CaseStudyData`, `StoreLocation`, `NavItem`), and component contracts.
* **JavaScript (`ES2024` / Node.js runtime `v20+`)**: Execution runtime for Next.js build scripts and client-side hydration.
* **HTML5**: Semantic web markup (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`) with enhanced accessibility attributes (`aria-*`).
* **CSS3 / Vanilla CSS Custom Properties**: Custom design tokens, glassmorphism filters, keyframe animations, and gradient text clips.

### 2.2 Frameworks & Core Libraries
* **Framework**: [Next.js](https://nextjs.org/) `16.2.9` (React 19 App Router architecture with client and server components).
* **UI Engine**: [React](https://react.dev/) `19.2.4` & `react-dom` `19.2.4`.
* **Styling Framework**: [Tailwind CSS](https://tailwindcss.com/) `v4.x` via `@tailwindcss/postcss` with inline `@theme` declarations.
* **Icons**: [Lucide React](https://lucide.dev/) `v1.21.0` (Comprehensive tree-shaken SVG icon system).
* **Mapping Engine**: [Leaflet](https://leafletjs.com/) `v1.9.4` & [React-Leaflet](https://react-leaflet.js.org/) `v5.0.0` with custom dark-mode tile rendering and vector canvas overlays.
* **Code Quality & Linter**: ESLint `v9.x` with `eslint-config-next`.

---

## 3. Design System & Master Color Palette (All Codes)

The visual design system of INCASMART is engineered for a **cyber-industrial, high-tech enterprise aesthetic**. It uses a dark navy base to reduce visual fatigue, paired with high-contrast electric cyan and lime green accents to signify innovation and sustainable energy conservation.

### 3.1 Primary Brand & Theme Colors

| Role | Color Name | Hex Code | RGB | HSL | Tailwind / CSS Variable | Semantic Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Canvas Background** | Deep Space Navy | `#07111D` | `rgb(7, 17, 29)` | `hsl(213, 61%, 7%)` | `var(--background)` / `bg-[#07111D]` | Main page background, root viewport canvas |
| **Primary Text** | Ghost Slate White | `#F8FAFC` | `rgb(248, 250, 252)` | `hsl(210, 40%, 98%)` | `var(--foreground)` / `text-[#F8FAFC]` | Primary headings, prominent body copy |
| **Primary Accent** | Electric Cyan | `#06B6D4` | `rgb(6, 182, 212)` | `hsl(189, 94%, 43%)` | `var(--color-brand-cyan)` / `cyan-500` | Primary buttons, telemetry highlights, glows, active links |
| **Sustainability Accent** | High-Efficiency Lime | `#84CC16` | `rgb(132, 204, 22)` | `hsl(84, 81%, 44%)` | `var(--color-brand-lime)` / `lime-500` | Energy savings metrics, ROI indicators, green highlights |
| **Verified Green** | Emerald Green | `#10B981` | `rgb(16, 185, 129)` | `hsl(160, 84%, 39%)` | `var(--color-brand-green)` / `emerald-500` | Audit success tags, verified stats, gradient blends |
| **Auxiliary Tech Blue** | Precision Blue | `#3B82F6` | `rgb(59, 130, 246)` | `hsl(217, 91%, 60%)` | `var(--color-brand-blue)` / `blue-500` | Cloud nodes, edge architecture tags, secondary links |

---

### 3.2 Surface, Card & Layer Colors

| Element | Color / Value | Description |
| :--- | :--- | :--- |
| **Glow Card Surface** | `rgba(13, 27, 42, 0.40)` | Semi-transparent deep navy surface with `backdrop-filter: blur(12px)` |
| **Subtle Card Border** | `rgba(255, 255, 255, 0.05)` | Micro-border providing depth without harsh separation |
| **Hovered Card Border** | `rgba(6, 182, 212, 0.30)` | Electric cyan glow edge when hovering over interactive cards |
| **Header Backdrop** | `rgba(7, 17, 29, 0.85)` | Sticky navigation backdrop with frosted glass effect |
| **Dropdown / Flyout** | `#0B1626` / `rgb(11, 22, 38)` | Solid dark popover background with crisp edge borders |
| **Tooltip Surface** | `rgba(8, 19, 37, 0.95)` | Map pin tooltips and interactive micro-data tooltips |

---

### 3.3 Text & Secondary Tone Hierarchy

| Tier | Hex Code | RGB | Semantic Usage |
| :--- | :--- | :--- | :--- |
| **Heading / Pure** | `#FFFFFF` | `rgb(255, 255, 255)` | Hero titles, highlighted KPIs, statistics numbers |
| **Primary Text** | `#F8FAFC` | `rgb(248, 250, 252)` | Main content text, section subheadings |
| **Secondary Text** | `#CBD5E1` | `rgb(203, 213, 225)` | Descriptive paragraphs, technical specifications |
| **Muted Text** | `#94A3B8` | `rgb(148, 163, 184)` | Meta labels, footer links, timestamps, breadcrumbs |
| **Faint / Disabled**| `#64748B` | `rgb(100, 116, 139)` | Disabled form buttons, inactive toggle indicators |

---

### 3.4 Gradient Specifications

* **Cyan-to-Lime Energy Gradient** (`.text-gradient-cyan-lime`):
  ```css
  background: linear-gradient(135deg, #06B6D4 0%, #10B981 50%, #84CC16 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ```
* **Lime-to-Cyan Flow Gradient** (`.text-gradient-lime-cyan`):
  ```css
  background: linear-gradient(135deg, #84CC16 0%, #10B981 50%, #06B6D4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ```
* **Glass Border Mask Gradient** (`.glow-card::before`):
  ```css
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(132, 204, 22, 0.1), transparent 60%);
  ```
* **Background Grid Lines** (`.bg-grid-pattern`):
  ```css
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  ```

---

### 3.5 Proposed Alternative Palette (from `/theme-preview`)

Engineered as a client design proposal to prevent monochromatic blue/green fatigue by introducing deep charcoal, electric cyan, and purple accents:
* **Background Void**: `#060C16`
* **Royal Violet Accent**: `#8B5CF6` / `#7C3AED`
* **Deep Purple Glow**: `rgba(139, 92, 246, 0.15)`
* **Active Green**: `#10B981` (Reserved strictly for energy & verified sustainability KPIs)

---

## 4. Typography & Hierarchy

Both typefaces are imported from Google Fonts inside [globals.css](file:///Users/diya/Documents/Projects/Incsmart-new/incsmart-web/src/app/globals.css):

### 4.1 Fonts
1. **Headings Font**: **Outfit** (`'Outfit', -apple-system, BlinkMacSystemFont, sans-serif`)
   * Weights: `300` (Light), `400` (Regular), `500` (Medium), `600` (Semi-Bold), `700` (Bold), `800` (Extra-Bold).
   * Used for: Hero headings, section titles, KPI numbers, and modal titles.
2. **Body & Interface Font**: **Plus Jakarta Sans** (`'Plus Jakarta Sans', sans-serif`)
   * Weights: `300`, `400`, `500`, `600`, `700`, `800`.
   * Used for: Paragraphs, navigation items, buttons, form inputs, tooltips, and data tables.

---

## 5. Complete Route Map & Pages

```
/
├── / ............................. Landing Page (7 Core Sections + Map)
├── /solutions .................... Detailed 5 Engineering Pillars (Dual Blueprints)
├── /projects ..................... Live Deployments, Gallery & Filter System
├── /case-studies ................. Case Studies Index (Cinemas, Rail, Industrial)
│   ├── /case-studies/rajhans-cinemas
│   ├── /case-studies/pvr-inox
│   ├── /case-studies/western-railway
│   └── /case-studies/ultratech-cement
├── /about
│   ├── /about/our-team ........... Founders, Leadership & Tech Support Desk
│   └── /about/faqs ............... Alternate FAQ Route
├── /contact ...................... Contact Form, WhatsApp, HQ Location & Map
├── /faqs ......................... Comprehensive Categorized Q&A Accordion
├── /reviews ...................... Client Testimonials & Endorsements
├── /careers ...................... Open Roles & Engineering Culture
└── /theme-preview ................ Interactive Theme Comparison (Client Proposal)
```

### Detailed Breakdown of Every Route

#### 1. Home Page (`/`)
* **Components Loaded**: `Header`, `HeroSection`, `BrandsBanner`, `SolutionsSection`, `WhyChooseSection`, `AchievementsSection`, `ProcessSection`, `HomeCTASection`, `Footer`.
* **Features**: Dynamic Leaflet India map showing deployments, live energy savings ticker, animated client logos marquee.

#### 2. Solutions Page (`/solutions`)
* Deep dive into all 5 pillars with a **Dual-Perspective format**:
  1. *High-Technical Blueprint* (Edge protocols, Modbus RTU/TCP, MQTT, closed-loop delta-T).
  2. *In Simple Terms* (Business value, utility savings, layman explanation).

#### 3. Projects Page (`/projects`)
* Filterable portfolio grid categorized by: All, Entertainment & Cinema, Heavy Industry, Transit & Infrastructure, Textiles & Commercial.

#### 4. Case Studies (`/case-studies` & `[slug]`)
* Rich analytical breakdowns including 7-day audited energy logs, kilowatt-hour savings, payback periods, admitting/occupancy correlations, and before/after comparisons.

#### 5. About & Leadership (`/about/our-team`)
* Executive team cards:
  * **Viral Patel** — Founder & CEO
  * **Bhaumik Patel** — Founder & Managing Director
  * **Prit Patel** — Managing Director
* Technical Engineering & Support desk direct lines:
  * Dharmendra Jadav, Mayank Sagar, Chirag Barot.

#### 6. Contact Page (`/contact`)
* Inquiries form with automated routing, direct phone and WhatsApp hotlines, interactive Google/Leaflet office map pin.

#### 7. FAQs (`/faqs`)
* Filtered accordion system answering questions regarding installation timeframes, non-invasive retrofitting, payback guarantees, and data security.

#### 8. Reviews (`/reviews`)
* Verified enterprise feedback from cinema chain operators, plant managers, and facility executives.

#### 9. Careers (`/careers`)
* Job descriptions for IoT firmware developers, BMS technicians, sales engineers, and embedded systems specialists.

#### 10. Theme Preview (`/theme-preview`)
* Interactive side-by-side mode toggle to preview alternative color theories for future website iterations.

---

## 6. Component Architecture & Directory Map

Located in [`src/components/`](file:///Users/diya/Documents/Projects/Incsmart-new/incsmart-web/src/components):

| Component Name | File | Description & Purpose |
| :--- | :--- | :--- |
| **`Header.tsx`** | [Header.tsx](file:///Users/diya/Documents/Projects/Incsmart-new/incsmart-web/src/components/Header.tsx) | Sticky frosted-glass navigation bar with desktop dropdowns, mobile drawer, and quick CTA |
| **`HeroSection.tsx`** | [HeroSection.tsx](file:///Users/diya/Documents/Projects/Incsmart-new/incsmart-web/src/components/HeroSection.tsx) | Hero headline, value propositions, CTA buttons, and integrated deployment map |
| **`BrandsBanner.tsx`** | [BrandsBanner.tsx](file:///Users/diya/Documents/Projects/Incsmart-new/incsmart-web/src/components/BrandsBanner.tsx) | Infinite marquee displaying India's leading client logos (PVR, Western Railway, UltraTech, etc.) |
| **`SolutionsSection.tsx`** | [SolutionsSection.tsx](file:///Users/diya/Documents/Projects/Incsmart-new/incsmart-web/src/components/SolutionsSection.tsx) | 5-card grid summarizing primary technical capabilities with direct solution links |
| **`WhyChooseSection.tsx`** | [WhyChooseSection.tsx](file:///Users/diya/Documents/Projects/Incsmart-new/incsmart-web/src/components/WhyChooseSection.tsx) | Value pillars: Rapid ROI, Non-Invasive Retrofitting, ESG Compliance, and 24/7 Monitoring |
| **`AchievementsSection.tsx`** | [AchievementsSection.tsx](file:///Users/diya/Documents/Projects/Incsmart-new/incsmart-web/src/components/AchievementsSection.tsx) | Animated statistics: 20% HVAC savings, millions of kWh conserved, nationwide footprint |
| **`ProcessSection.tsx`** | [ProcessSection.tsx](file:///Users/diya/Documents/Projects/Incsmart-new/incsmart-web/src/components/ProcessSection.tsx) | 4-step deployment cycle: Energy Audit → Retrofit Deployment → Calibration → Automated Optimization |
| **`HomeCTASection.tsx`** | [HomeCTASection.tsx](file:///Users/diya/Documents/Projects/Incsmart-new/incsmart-web/src/components/HomeCTASection.tsx) | High-conversion banner driving free energy audits and client consultations |
| **`HomeContactSection.tsx`**| [HomeContactSection.tsx](file:///Users/diya/Documents/Projects/Incsmart-new/incsmart-web/src/components/HomeContactSection.tsx)| Embedded contact widget with direct inquiry form fields |
| **`Footer.tsx`** | [Footer.tsx](file:///Users/diya/Documents/Projects/Incsmart-new/incsmart-web/src/components/Footer.tsx) | Comprehensive 4-column footer with certification badges, site links, legal notes, and social handles |
| **`IndiaMap.tsx`** | [IndiaMap.tsx](file:///Users/diya/Documents/Projects/Incsmart-new/incsmart-web/src/components/IndiaMap.tsx) | Dynamic Leaflet-based interactive map of India with custom animated pulsing SVG pins |
| **`IndiaMapCanvas.tsx`** | [IndiaMapCanvas.tsx](file:///Users/diya/Documents/Projects/Incsmart-new/incsmart-web/src/components/IndiaMapCanvas.tsx) | High-performance HTML5 Canvas fallback map for lightning-fast loads |
| **`IndustriesSection.tsx`** | [IndustriesSection.tsx](file:///Users/diya/Documents/Projects/Incsmart-new/incsmart-web/src/components/IndustriesSection.tsx) | Detailed breakdown of industrial sectors served |
| **`ProjectsSection.tsx`** | [ProjectsSection.tsx](file:///Users/diya/Documents/Projects/Incsmart-new/incsmart-web/src/components/ProjectsSection.tsx) | Filterable project showcase gallery |
| **`FAQSection.tsx`** | [FAQSection.tsx](file:///Users/diya/Documents/Projects/Incsmart-new/incsmart-web/src/components/FAQSection.tsx) | Accessible expandable/collapsible accordion for user inquiries |
| **`OurJourneyTimeline.tsx`**| [OurJourneyTimeline.tsx](file:///Users/diya/Documents/Projects/Incsmart-new/incsmart-web/src/components/OurJourneyTimeline.tsx)| Historical company milestones from 2017 founding to pan-India presence |
| **`FormSelect.tsx`** | [FormSelect.tsx](file:///Users/diya/Documents/Projects/Incsmart-new/incsmart-web/src/components/FormSelect.tsx) | Styled select input component for contact and quote request forms |

---

## 7. Core Solutions & Engineering Blueprints

### 1. IoT & Automation Architecture
* **Technical Blueprint**: Low-latency edge computing nodes interfacing via industrial **Modbus RTU/TCP over RS-485**. Continuous sensor polling streams telemetry over **MQTT** to secure cloud brokers with bidirectional WebSocket synchronization.
* **Operational Benefit**: Unifies isolated plant machinery into a central glass dashboard with deterministic automated scheduling and microsecond fault alarms.

### 2. HVAC Management Systems (Smart Retrofitting)
* **Technical Blueprint**: Non-invasive retrofits on Air Handling Units (AHUs), chillers, and primary cooling loops. Algorithmic closed-loop control modulating Variable Frequency Drives (VFDs) and electronic expansion valves based on real-time delta-T and thermal cooling load.
* **Operational Benefit**: **Up to 20% electricity reduction** by matching compressor work to occupant demand instead of operating at static full blast.

### 3. Smart Energy Management
* **Technical Blueprint**: Digital electrical telemetry logging active power ($kW$), reactive power ($kVAR$), apparent power ($kVA$), and Power Factor ($PF$). Micro-fluctuation machine learning detects harmonic distortion and impending insulation breakdown.
* **Operational Benefit**: Eliminates utility power factor surcharges and transforms reactive breakdown repairs into proactive predictive maintenance.

### 4. Building Management Systems (BMS)
* **Technical Blueprint**: BACnet and Modbus unified orchestration integrating smart LED arrays (PWM/0-10V dimming), sub-metering, and spatial occupancy sensors.
* **Operational Benefit**: Slashes after-hours "vampire" power loads and increases equipment Mean Time Between Failures (MTBF).

### 5. Smart Hydrant & Sprinkler Monitoring
* **Technical Blueprint**: High-precision digital pressure transducers and ultrasonic flow meters sampling pipeline pressure ($PSI/Bar$) across hydrant mains, sprinkler risers, and jockey/diesel pump rooms.
* **Operational Benefit**: Continuous health check that isolates leak zones before water damage occurs and ensures 100% emergency readiness.

---

## 8. Case Studies & Live Deployment Portfolio

Managed in [`src/data/caseStudiesData.ts`](file:///Users/diya/Documents/Projects/Incsmart-new/incsmart-web/src/data/caseStudiesData.ts):

| Client | Industry | Key Metric Achieved | Payback Period |
| :--- | :--- | :--- | :--- |
| **Rajhans Cinemas** | Entertainment & Multiplexes | **18.4% HVAC Power Cut**, ₹4.8L+ Annual Savings | 7.5 Months |
| **PVR INOX** | Pan-India Multiplex Network | **19.8% Cooling Energy Cut**, Automated Screen Schedules | 6.2 Months |
| **Western Railway** | National Transit Infrastructure | Centralized HVAC Telemetry across major transit concourses | Rapid Public ROI |
| **UltraTech Cement** | Heavy Manufacturing | Power Factor Optimization & Sub-metering diagnostics | Continuous Savings |

---

## 9. Interactive Features & Visual Utilities

### 9.1 Interactive Map Coordinates (`storeLocations.ts`)
Pins rendered across India on Leaflet map:
* **Gandhinagar (Head Office)**: `23.2156° N, 72.6369° E`
* **Mumbai (Deployment)**: `19.0760° N, 72.8777° E`
* **New Delhi (Deployment)**: `28.6139° N, 77.2090° E`
* **Bengaluru (Deployment)**: `12.9716° N, 77.5946° E`

### 9.2 Custom CSS Animation Utility Classes
* `.animate-marquee`: Smooth 25-second continuous brand ticker loop.
* `.animate-float`: 4-second sinusoidal vertical floating motion for tech badges.
* `.map-pin-pulse`: Expanding radar ring animation for active IoT nodes.
* `.glow-cyan`: `box-shadow: 0 0 25px rgba(6, 182, 212, 0.25)`.
* `.glow-lime`: `box-shadow: 0 0 25px rgba(132, 204, 22, 0.25)`.

---

## 10. Corporate Directory & Contact Channels

### 10.1 Executive Leadership
* **Viral Patel** — *Founder & CEO*  
  📞 `+91 98378 96176`  
  ✉️ `viral.patel@incsmart.in`
* **Bhaumik Patel** — *Founder & Managing Director (MD)*  
  📞 `+91 79841 86121`  
  ✉️ `bhaumikpatel@incsmart.in`
* **Prit Patel** — *Managing Director (MD)*  
  📞 `+91 92740 40750`

### 10.2 Technical Service & Engineering Desk
* **Dharmendra Jadav**: `+91 98249 62067`
* **Mayank Sagar**: `+91 70436 90021`
* **Chirag Barot**: `+91 93164 36699`
* **Central Support Email**: `service@incsmart.in`

### 10.3 Digital & Social Footprint
* **Website**: `https://www.incsmart.in`
* **LinkedIn**: [INCASMART on LinkedIn](https://www.linkedin.com/company/34023211/)
* **Facebook**: [INCASMART Energy Tech](https://www.facebook.com/IncSmartenergytech)
* **YouTube**: [@IncSmartTechnologies](https://www.youtube.com/@IncSmartTechnologies)

---
*Documentation compiled and maintained for INCASMART Technologies LLP.*
