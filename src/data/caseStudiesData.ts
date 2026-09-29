export interface CaseStudyData {
  id: string;
  slug: string;
  client: string;
  title: string;
  subtitle: string;
  industry: string;
  location: string;
  heroImage: string;
  secondaryImage?: string;
  provider: string;
  energyRate: string;
  conservativeBuffer: string;
  featured?: boolean;
  executiveSummary: {
    annualSavings: string;
    energyReduction: string;
    staffInterventionReduction: string;
    paybackPeriod: string;
    fiveYearSavings: string;
    sevenDaySavings: string;
    conservativeSevenDaySavings: string;
    dailySavings: string;
    totalAuditsPeriod: string;
  };
  metrics: {
    label: string;
    value: string;
    sub: string;
    accent?: string;
  }[];
  challenge: {
    title: string;
    description: string;
    bulletPoints?: string[];
  };
  objective: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
    points: string[];
  };
  methodology: {
    title: string;
    description: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  parameters: {
    category: string;
    items: string[];
  }[];
  manualData?: {
    date: string;
    manualReadingKwh: number;
    admitCount: number;
    showCount: number;
    conAdmitDaily: number;
    conShow: number;
    highTemp: number;
    lowTemp: number;
  }[];
  automatedData?: {
    date: string;
    manualReadingKwh: number;
    admitCount: number;
    showCount: number;
    consumptionPerAdmit: number;
    conShow: number;
    highTemp: number;
    lowTemp: number;
  }[];
  comparisonAnalysis?: {
    manual: {
      totalEnergy: string;
      totalShows: string;
      totalAdmits: string;
      kwhPerAdmit: string;
      kwhPerShow: string;
      avgHighTemp: string;
      avgLowTemp: string;
      totalCost: string;
      avgCostPerAdmit: string;
      avgCostPerShow: string;
    };
    automated: {
      totalEnergy: string;
      totalShows: string;
      totalAdmits: string;
      kwhPerAdmit: string;
      kwhPerShow: string;
      avgHighTemp: string;
      avgLowTemp: string;
      totalCost: string;
      avgCostPerAdmit: string;
      avgCostPerShow: string;
    };
    diff: {
      energySavingKwh: string;
      energySavingPercent: string;
      costSavings: string;
      savingsPerAdmit: string;
      savingsPerAdmitPercent: string;
      savingsPerShow: string;
      savingsPerShowPercent: string;
      tempDifferenceNote: string;
    };
  };
  temperatureInsights?: {
    title: string;
    description: string;
    points: {
      title: string;
      description: string;
    }[];
  };
  roiRoadmap?: {
    phase: string;
    timeline: string;
    title: string;
    description: string;
  }[];
  transformationPillars?: {
    title: string;
    points: string[];
  }[];
  implementationProcess?: {
    step: string;
    phase: string;
    duration: string;
    description: string;
  }[];
  businessValue?: {
    title: string;
    value: string;
    description?: string;
  }[];
}

export const caseStudiesList: CaseStudyData[] = [
  {
    id: "rajhans-cinemas",
    slug: "rajhans-cinemas",
    client: "Rajhans Cinemas",
    title: "IoT-driven Energy Optimization & HVAC Automation at Rajhans Cinemas",
    subtitle: "A case study on implementing smart climate control technology to reduce energy consumption while maintaining optimal viewer comfort",
    industry: "Cinema Exhibition & Entertainment",
    location: "Gujarat, India",
    heroImage: "/rajhans-cinemas-auditorium.jpg",
    secondaryImage: "/rajhans-cinemas-controller.jpg",
    provider: "INCSMART TECHNOLOGIES LLP",
    energyRate: "₹12.5 per kWh",
    conservativeBuffer: "30% Conservative Buffer Ensures Reliable Savings Estimates",
    featured: true,
    executiveSummary: {
      annualSavings: "₹851,545",
      energyReduction: "18.74%",
      staffInterventionReduction: "79%",
      paybackPeriod: "12 Months",
      fiveYearSavings: "₹4.2M",
      sevenDaySavings: "₹23,325",
      conservativeSevenDaySavings: "₹16,328",
      dailySavings: "₹2,333",
      totalAuditsPeriod: "July - August 2025 Multi-Week Telemetry Audit"
    },
    metrics: [
      { label: "Annual Projected Savings", value: "₹851,545", sub: "Per cinema location (conservative estimate)", accent: "text-brand-lime" },
      { label: "Energy Reduction", value: "18.74%", sub: "Achieved per ticket admit", accent: "text-brand-cyan" },
      { label: "Staff Intervention Drop", value: "79%", sub: "Automated real-time thermostat regulation", accent: "text-blue-400" },
      { label: "Full ROI Payback", value: "12 Months", sub: "Break-even achieved in 3-6 months", accent: "text-emerald-400" }
    ],
    challenge: {
      title: "The Challenge",
      description: "Rajhans Cinemas was experiencing high energy consumption with their manually controlled HVAC systems, leading to inconsistent temperatures and unnecessary energy usage during low occupancy periods.",
      bulletPoints: [
        "Uncontrolled HVAC running at full capacity during low occupancy and pre-show gaps.",
        "Manual floor staff interventions causing dramatic temperature swings and patron discomfort.",
        "Rapidly escalating electricity costs with baseline rates at ₹12.5 per kWh.",
        "Absence of real-time visibility into auditorium thermal dynamics and live power draw."
      ]
    },
    objective: {
      title: "The Objective",
      description: "Implement an IoT-based automation system to optimize energy usage while maintaining or improving viewer comfort levels across all auditoriums."
    },
    solution: {
      title: "The Solution",
      description: "Deploy smart sensors and automated controls that adjust HVAC settings based on real-time occupancy, temperature readings, and show schedules.",
      points: [
        "Deployed multi-point precision IoT temperature, humidity, and occupancy sensors across all auditoriums.",
        "Automated HVAC actuator and damper modulation synchronized with movie show schedules.",
        "Integrated edge controller with central cloud platform for live telemetry and anomaly alerts.",
        "Dynamic setpoint management ensuring rapid pre-cooling without overcooling during screenings."
      ]
    },
    methodology: {
      title: "Data Collection & Validation Methodology",
      description: "To accurately assess the impact of the IoT automation system, we conducted a comprehensive data collection process:",
      steps: [
        {
          title: "Dual Mode Operation",
          description: "Collected extensive operational data in both Manual and Auto operation modes over multi-week audit intervals."
        },
        {
          title: "Fair Filtered Comparison",
          description: "Filtered data to compare days with similar admission and screening show counts for an objective, normalized evaluation."
        },
        {
          title: "Comprehensive Metric Tracking",
          description: "Measured key metrics including total energy consumption, kWh per admit ratio, kWh per show, temperature stability, and comfort metrics."
        },
        {
          title: "Occupancy-Varying Stress Testing",
          description: "Monitored system performance across multiple days with varying occupancy levels from quiet matinees to weekend blockbusters."
        },
        {
          title: "Comfort Range Maintenance",
          description: "Recorded continuous high and low temperatures to assess comfort range maintenance and thermal stability."
        }
      ]
    },
    parameters: [
      {
        category: "Energy Metrics",
        items: [
          "Manual reading (kWh)",
          "Online reading (kWh)",
          "Budget baseline (kWh)",
          "Percentage difference from budget"
        ]
      },
      {
        category: "Occupancy Metrics",
        items: [
          "Daily admits (ticket holders)",
          "Daily shows (screenings)",
          "Consumption per admit ratio (kWh/Admit)",
          "Consumption per show ratio (kWh/Show)"
        ]
      },
      {
        category: "Comfort Metrics",
        items: [
          "High temperature (°C)",
          "Low temperature (°C)",
          "Average high temperature",
          "Average low temperature"
        ]
      }
    ],
    manualData: [
      { date: "12/07/25", manualReadingKwh: 1435, admitCount: 1362, showCount: 15, conAdmitDaily: 1.05, conShow: 95.67, highTemp: 33.00, lowTemp: 27.00 },
      { date: "13/07/25", manualReadingKwh: 1507, admitCount: 1137, showCount: 14, conAdmitDaily: 1.33, conShow: 107.64, highTemp: 35.00, lowTemp: 27.00 },
      { date: "26/07/25", manualReadingKwh: 1682, admitCount: 1769, showCount: 16, conAdmitDaily: 0.95, conShow: 105.13, highTemp: 34.00, lowTemp: 27.00 },
      { date: "28/07/25", manualReadingKwh: 1034, admitCount: 1059, showCount: 14, conAdmitDaily: 0.98, conShow: 73.86, highTemp: 28.00, lowTemp: 26.00 },
      { date: "02/08/25", manualReadingKwh: 1425, admitCount: 1408, showCount: 15, conAdmitDaily: 1.01, conShow: 95.00, highTemp: 33.00, lowTemp: 26.00 },
      { date: "03/08/25", manualReadingKwh: 1630, admitCount: 1454, showCount: 16, conAdmitDaily: 0.66, conShow: 101.88, highTemp: 31.00, lowTemp: 28.00 },
      { date: "05/08/25", manualReadingKwh: 1243, admitCount: 1160, showCount: 15, conAdmitDaily: 1.07, conShow: 82.87, highTemp: 32.00, lowTemp: 27.00 }
    ],
    automatedData: [
      { date: "19/07/25", manualReadingKwh: 972, admitCount: 1122, showCount: 14, consumptionPerAdmit: 0.87, conShow: 69.43, highTemp: 32.00, lowTemp: 25.00 },
      { date: "20/07/25", manualReadingKwh: 1472, admitCount: 2418, showCount: 16, consumptionPerAdmit: 0.61, conShow: 92.00, highTemp: 33.00, lowTemp: 26.00 },
      { date: "21/07/25", manualReadingKwh: 1102, admitCount: 1465, showCount: 14, consumptionPerAdmit: 0.75, conShow: 78.71, highTemp: 32.00, lowTemp: 26.00 },
      { date: "22/07/25", manualReadingKwh: 1185, admitCount: 1768, showCount: 14, consumptionPerAdmit: 0.67, conShow: 84.64, highTemp: 35.00, lowTemp: 27.00 },
      { date: "23/07/25", manualReadingKwh: 1140, admitCount: 1276, showCount: 14, consumptionPerAdmit: 0.89, conShow: 81.43, highTemp: 34.00, lowTemp: 29.00 },
      { date: "24/07/25", manualReadingKwh: 1162, admitCount: 1150, showCount: 13, consumptionPerAdmit: 1.01, conShow: 89.38, highTemp: 36.00, lowTemp: 27.00 },
      { date: "25/07/25", manualReadingKwh: 1057, admitCount: 1111, showCount: 16, consumptionPerAdmit: 0.95, conShow: 66.06, highTemp: 36.00, lowTemp: 27.00 }
    ],
    comparisonAnalysis: {
      manual: {
        totalEnergy: "9,956 kWh",
        totalShows: "105",
        totalAdmits: "10,347",
        kwhPerAdmit: "0.96",
        kwhPerShow: "94.81",
        avgHighTemp: "32.29°C",
        avgLowTemp: "26.86°C",
        totalCost: "₹124,450",
        avgCostPerAdmit: "₹12.02",
        avgCostPerShow: "₹1,185.23"
      },
      automated: {
        totalEnergy: "8,090 kWh",
        totalShows: "101",
        totalAdmits: "10,310",
        kwhPerAdmit: "0.78",
        kwhPerShow: "80.10",
        avgHighTemp: "34.00°C",
        avgLowTemp: "26.71°C",
        totalCost: "₹101,125",
        avgCostPerAdmit: "₹9.81",
        avgCostPerShow: "₹1,001.24"
      },
      diff: {
        energySavingKwh: "1,866 kWh",
        energySavingPercent: "18.74%",
        costSavings: "₹23,325",
        savingsPerAdmit: "₹2.21",
        savingsPerAdmitPercent: "18.39%",
        savingsPerShow: "₹183.99",
        savingsPerShowPercent: "15.52%",
        tempDifferenceNote: "Key Achievement: Despite the automated system running at a slightly higher average ambient high (+1.71°C), significant energy savings were achieved while consistently maintaining optimal patron comfort."
      }
    },
    temperatureInsights: {
      title: "Temperature Control Insights & Automated System Benefits",
      description: "Explore the key advantages of our automated temperature control system, showcasing its efficiency and superior comfort delivery.",
      points: [
        {
          title: "Responsive to Occupancy",
          description: "Dynamically adjusts to real occupancy levels, avoiding unnecessary heating/cooling when halls are empty. Optimizes comfort and energy savings simultaneously."
        },
        {
          title: "Optimized Showtime Comfort",
          description: "Maintains ideal temperatures during showtimes. Learns and adapts to comfort requirements during peak hours for a consistent, premium audience experience."
        },
        {
          title: "Consistent Peak Period Performance",
          description: "Provides consistent comfort during high-demand periods. Prevents extreme temperature drifts caused by manual staff adjustments, ensuring patron satisfaction."
        }
      ]
    },
    roiRoadmap: [
      {
        phase: "Phase 1",
        timeline: "0 - 3 Months",
        title: "Initial Setup & System Optimization",
        description: "Investment phase with immediate energy savings beginning from day 1 of sensor activation."
      },
      {
        phase: "Phase 2",
        timeline: "3 - 6 Months",
        title: "Break-Even Point Achievement",
        description: "System fully operational, algorithmic fine-tuning complete, ROI realization accelerates."
      },
      {
        phase: "Phase 3",
        timeline: "6 - 12 Months",
        title: "First Year Milestone",
        description: "₹851,545 annual savings confirmed, full capital payback successfully achieved."
      },
      {
        phase: "Phase 4",
        timeline: "Year 2 - 3",
        title: "Growth Acceleration",
        description: "Cumulative savings cross ₹2.5 Million with sustained HVAC lifecycle extension and minimal maintenance."
      },
      {
        phase: "Phase 5",
        timeline: "Year 4 - 5",
        title: "Maximum ROI",
        description: "Reach ₹4.2 Million in cumulative operational savings, maximizing total return on investment."
      }
    ],
    transformationPillars: [
      {
        title: "Real-Time Monitoring & Control",
        points: [
          "Monitor all cinema locations and auditoriums from one unified cloud dashboard",
          "Live energy telemetry across chillers, AHUs, and secondary circuits",
          "Instant automated alerts for maintenance needs and anomalous consumption",
          "Complete cost and kWh visibility in real-time"
        ]
      },
      {
        title: "Data-Driven Operations",
        points: [
          "Historical analytics for smarter seasonal show scheduling",
          "Predictive insights for continuous setpoint optimization",
          "Automated executive reporting for facility management",
          "Multi-location performance tracking and peer benchmarking"
        ]
      },
      {
        title: "Massive Cost Savings",
        points: [
          "₹851,545 annual savings per location (conservative estimate)",
          "79% reduction in manual staff intervention",
          "18.74% energy consumption reduction per patron admit",
          "Full capital payback achieved within 12 months"
        ]
      },
      {
        title: "Future-Ready Technology",
        points: [
          "Industry-leading energy efficiency standards for green cinema ratings",
          "Enhanced patron indoor air quality and consistent thermal comfort",
          "Strong sustainability credentials enhancing corporate ESG reputation",
          "Modular architecture ready for additional IoT sensors and microgrid integrations"
        ]
      }
    ],
    implementationProcess: [
      {
        step: "1",
        phase: "Phase 1: Pilot at Select Locations",
        duration: "3 Months",
        description: "Targeted rollout to demonstrate immediate impact, collect baseline data, and fine-tune machine learning algorithms."
      },
      {
        step: "2",
        phase: "Phase 2: Full Rollout Across All Cinemas",
        duration: "6 Months",
        description: "Expand integration across the entire cinema chain leveraging operational lessons learned for seamless, zero-disruption adoption."
      },
      {
        step: "3",
        phase: "Phase 3: Advanced Features & Optimization",
        duration: "Ongoing",
        description: "Implement predictive equipment maintenance, automated filter health alarms, and executive-level analytics reporting."
      },
      {
        step: "4",
        phase: "Phase 4: Full Support & Training Provided",
        duration: "Continuous",
        description: "Comprehensive engineering assistance, SOP documentation, and technician training to ensure lasting operational success."
      }
    ],
    businessValue: [
      { title: "Annual Savings", value: "₹851,545", description: "Per cinema property" },
      { title: "Savings per Admit", value: "₹2.21", description: "Direct per-ticket cost reduction" },
      { title: "Efficiency Gains", value: "18.74%", description: "Verified energy drop per admit" },
      { title: "Staff Intervention Drop", value: "79%", description: "Automated climate management" },
      { title: "Enhanced Customer Comfort", value: "100%", description: "Maintains ideal temperature reliably" },
      { title: "Projected 5-Year Savings", value: "₹4.2M", description: "Cumulative return across equipment life" }
    ]
  },
  {
    id: "pvr-inox",
    slug: "pvr-inox",
    client: "PVR INOX Multiplex Chain",
    title: "Intelligent HVAC Automation & 20% Energy Reduction Across Multiplex Theaters",
    subtitle: "Centralized chillers and AHU automation responding to live occupancy and ticket reservation telemetry",
    industry: "Commercial Entertainment & Malls",
    location: "Mumbai, Delhi & Ahmedabad",
    heroImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    provider: "INCSMART TECHNOLOGIES LLP",
    energyRate: "₹12.0 per kWh",
    conservativeBuffer: "Standard BMS Calibration",
    executiveSummary: {
      annualSavings: "₹1,240,000",
      energyReduction: "20.0%",
      staffInterventionReduction: "82%",
      paybackPeriod: "8.5 Months",
      fiveYearSavings: "₹6.8M",
      sevenDaySavings: "₹28,500",
      conservativeSevenDaySavings: "₹22,000",
      dailySavings: "₹3,400",
      totalAuditsPeriod: "60-Day Post-Commissioning Audit"
    },
    metrics: [
      { label: "Energy Savings", value: "20%", sub: "Verified utility bill reduction", accent: "text-brand-lime" },
      { label: "Auditoriums Covered", value: "14", sub: "Across 3 tier-1 metro cities", accent: "text-brand-cyan" },
      { label: "Payback Period", value: "8.5 Mo", sub: "Full CAPEX investment return", accent: "text-emerald-400" },
      { label: "Comfort Rating", value: "98.4%", sub: "Patron feedback index", accent: "text-purple-400" }
    ],
    challenge: {
      title: "The Challenge",
      description: "PVR INOX operates hundreds of screens nationwide. Cinema auditoriums present a unique thermal challenge: cooling demands fluctuate wildly between packed weekend blockbuster screenings and vacant weekday mornings. Running chillers and AHUs at full load during off-peak hours was generating massive utility waste."
    },
    objective: {
      title: "The Objective",
      description: "Achieve continuous dynamic load modulation across chillers and AHUs synchronized with live ticketing software."
    },
    solution: {
      title: "The Solution",
      description: "IncSmart deployed edge IoT gateways communicating over BACnet MS/TP with existing Trane and Daikin chillers, paired with carbon dioxide (CO2) and occupancy sensors in every screening hall.",
      points: [
        "Installed 14 edge micro-gateways connected directly to air handling unit (AHU) frequency drives.",
        "Integrated ticket booking API telemetry to pre-cool auditoriums based on actual seat reservation counts.",
        "Deployed 24×7 real-time cloud telemetry dashboards with automatic temperature drift alerts.",
        "Standardized temperature protocols across multiple properties from a central facility command view."
      ]
    },
    methodology: {
      title: "Engineering Deployment",
      description: "Continuous BACnet and Modbus telemetry integration paired with ticketing APIs.",
      steps: [
        { title: "Sensor Commissioning", description: "CO2 and thermal array installation in 14 halls." },
        { title: "BMS Interfacing", description: "Bidirectional control protocols with chillers." },
        { title: "Dynamic Load Profiling", description: "Algorithms tailored to ticket sales velocity." }
      ]
    },
    parameters: [
      { category: "System Metrics", items: ["Chiller kW/ton", "AHU Variable Speed Hz", "Auditorium PPM CO2", "Seat Occupancy Ratio"] }
    ]
  },
  {
    id: "western-railway",
    slug: "western-railway",
    title: "Remote IoT Substation Health & Predictive Monitoring for Indian Railways",
    subtitle: "Mission-critical 24x7 traction power telemetry preventing catenary line outages across rail corridors",
    client: "Western Railway (Indian Railways)",
    industry: "Rail Transit & Critical Infrastructure",
    location: "Western Zone, India",
    heroImage: "https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&w=1200&q=80",
    provider: "INCSMART TECHNOLOGIES LLP",
    energyRate: "Grid Tariff",
    conservativeBuffer: "Mission Critical Rail Standard",
    executiveSummary: {
      annualSavings: "₹2,100,000",
      energyReduction: "15.0%",
      staffInterventionReduction: "88%",
      paybackPeriod: "6 Months",
      fiveYearSavings: "₹10.5M",
      sevenDaySavings: "₹45,000",
      conservativeSevenDaySavings: "₹38,000",
      dailySavings: "₹5,750",
      totalAuditsPeriod: "Continuous 12-Month Rail NOC Audit"
    },
    metrics: [
      { label: "Downtime Reduction", value: "15%", sub: "Prevented line failures", accent: "text-brand-cyan" },
      { label: "Substations Monitored", value: "18", sub: "Across Western Zone tracks", accent: "text-brand-lime" },
      { label: "Alert Dispatch Time", value: "< 2s", sub: "GSM / Ethernet dual failover", accent: "text-amber-400" },
      { label: "System Uptime", value: "99.95%", sub: "Continuous NOC visibility", accent: "text-emerald-400" }
    ],
    challenge: {
      title: "The Challenge",
      description: "High-voltage traction power substations supply 25kV power to overhead catenary lines 24 hours a day, where unpredicted failure causes cascading passenger transit delays. Substations in remote unmanned sections relied on manual logbook readings."
    },
    objective: {
      title: "The Objective",
      description: "Provide instantaneous telemetry and predictive anomaly detection to prevent catastrophic transformer and breaker trips."
    },
    solution: {
      title: "The Solution",
      description: "IncSmart deployed ruggedized industrial edge telemetry units housed in IP66 enclosures streaming Modbus data over cellular failover directly to the Railway Operations Control Center.",
      points: [
        "Surge-hardened edge controllers capable of operating in severe electrical noise environments.",
        "Dual cellular SIM failover with automatic local offline data caching during connectivity drops.",
        "Predictive anomaly detection models identifying transformer winding degradation weeks before thermal runaway.",
        "Integrated live multi-site dashboard into the Divisional Railway Manager's operations control center."
      ]
    },
    methodology: {
      title: "Industrial Rigor",
      description: "Deployed to Indian Railways RDSO specifications with galvanic isolation.",
      steps: [
        { title: "Current Transformer Coupling", description: "Non-invasive CT sensors on secondary metering." },
        { title: "RTD Thermal Probes", description: "Direct transformer core and oil temperature tracking." },
        { title: "Instantaneous Telemetry", description: "Sub-2 second alert dispatch via encrypted cloud relay." }
      ]
    },
    parameters: [
      { category: "Electrical Telemetry", items: ["3-Phase Current & Voltage", "Power Factor", "Transformer Oil Temp", "Breaker Status"] }
    ]
  },
  {
    id: "ultratech-cement",
    slug: "ultratech-cement",
    title: "Heavy Equipment Vibration Telemetry & Power Optimization at Process Plants",
    subtitle: "Edge AI vibration spectral breakdown and condition-based predictive maintenance on heavy kiln drives",
    client: "UltraTech Cement Ltd.",
    industry: "Heavy Industry & Process Manufacturing",
    location: "Gujarat, India",
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    provider: "INCSMART TECHNOLOGIES LLP",
    energyRate: "Industrial HT Tariff",
    conservativeBuffer: "Continuous Plant Calibration",
    executiveSummary: {
      annualSavings: "₹3,450,000",
      energyReduction: "12.0%",
      staffInterventionReduction: "90%",
      paybackPeriod: "4.5 Months",
      fiveYearSavings: "₹17.2M",
      sevenDaySavings: "₹72,000",
      conservativeSevenDaySavings: "₹60,000",
      dailySavings: "₹9,800",
      totalAuditsPeriod: "9-Month Production Run Audit"
    },
    metrics: [
      { label: "Motor Downtime", value: "-100%", sub: "Zero unplanned kiln halts", accent: "text-brand-lime" },
      { label: "Heavy Motors Monitored", value: "40+", sub: "Ball mills & kiln blowers", accent: "text-brand-cyan" },
      { label: "Power Factor Gain", value: "+12%", sub: "Reduced reactive penalty", accent: "text-emerald-400" },
      { label: "Data Points / Day", value: "1.2M", sub: "Real-time vibration FFT stream", accent: "text-blue-400" }
    ],
    challenge: {
      title: "The Challenge",
      description: "Bearing fatigue and mechanical misalignment on raw mill drive motors could cause sudden bearing seizures. An unplanned kiln shutdown takes over 36 hours to cool down and reheat, costing tens of lakhs of rupees in lost throughput."
    },
    objective: {
      title: "The Objective",
      description: "Eliminate unexpected machinery stoppage and optimize power draw per metric ton of pulverized clinker."
    },
    solution: {
      title: "The Solution",
      description: "IncSmart installed tri-axial wireless vibration and surface temperature telemetry nodes on motor drive ends and non-drive ends with real-time Fast Fourier Transform (FFT) analysis.",
      points: [
        "Installed magnetic-mount wireless sensor nodes across 40 critical 500kW+ induction motors.",
        "Configured high-frequency burst sampling (up to 10kHz) for detailed velocity and acceleration spectral breakdown.",
        "Connected live power analyzers to calculate real-time energy intensity per metric ton of clinker.",
        "Delivered condition-based maintenance (CBM) dashboards to the plant maintenance engineering bay."
      ]
    },
    methodology: {
      title: "Predictive Analytics Architecture",
      description: "Edge FFT vibration processing paired with cloud time-series machine learning.",
      steps: [
        { title: "Sensor Array Mounts", description: "IP68 tri-axial sensors on DE and NDE bearing housings." },
        { title: "FFT Harmonic Breakdown", description: "Automatic 1X/2X rotational frequency tracking." },
        { title: "Alert Thresholds", description: "ISO 10816 vibration severity standard alerts." }
      ]
    },
    parameters: [
      { category: "Predictive Metrics", items: ["Vibration RMS Velocity (mm/s)", "Peak Acceleration (g)", "Bearing Temperature (°C)", "Motor kW Load"] }
    ]
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
  return caseStudiesList.find((study) => study.slug === slug || study.id === slug);
}
