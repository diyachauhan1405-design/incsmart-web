export type StoreType = "head-office" | "regional" | "store";

export interface StoreLocation {
  id: string;
  name: string;
  city: string;
  state: string;
  role: string;
  type: StoreType;
  /** Latitude — used for automatic pin placement on the map */
  lat: number;
  /** Longitude — used for automatic pin placement on the map */
  lng: number;
  address?: string;
  phone?: string;
}

/** Add or edit locations here to update map pins across the site */
export const storeLocations: StoreLocation[] = [
  {
    id: "surat",
    name: "Surat",
    city: "Surat",
    state: "Gujarat",
    role: "Head Office",
    type: "head-office",
    lat: 21.1702,
    lng: 72.8311,
    address:
      "305, The Landmark, Near Swaminarayan Temple, Mota Varachha, Surat, Gujarat 394101",
    phone: "+91 89800 01836",
  },
  {
    id: "mumbai",
    name: "Mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    role: "Regional Office",
    type: "regional",
    lat: 19.076,
    lng: 72.8777,
  },
  {
    id: "delhi",
    name: "New Delhi",
    city: "New Delhi",
    state: "Delhi",
    role: "Regional Office",
    type: "regional",
    lat: 28.6139,
    lng: 77.209,
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    role: "Regional Office",
    type: "regional",
    lat: 12.9716,
    lng: 77.5946,
  },
];

/** Indian mega cities — used on Our Team page for pan-India availability map */
export const megaCityLocations: StoreLocation[] = [
  {
    id: "mumbai",
    name: "Mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    role: "Service Available",
    type: "regional",
    lat: 19.076,
    lng: 72.8777,
  },
  {
    id: "delhi",
    name: "Delhi",
    city: "New Delhi",
    state: "Delhi",
    role: "Service Available",
    type: "regional",
    lat: 28.6139,
    lng: 77.209,
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    role: "Service Available",
    type: "regional",
    lat: 12.9716,
    lng: 77.5946,
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    role: "Service Available",
    type: "store",
    lat: 17.385,
    lng: 78.4867,
  },
  {
    id: "chennai",
    name: "Chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    role: "Service Available",
    type: "store",
    lat: 13.0827,
    lng: 80.2707,
  },
  {
    id: "kolkata",
    name: "Kolkata",
    city: "Kolkata",
    state: "West Bengal",
    role: "Service Available",
    type: "store",
    lat: 22.5726,
    lng: 88.3639,
  },
  {
    id: "pune",
    name: "Pune",
    city: "Pune",
    state: "Maharashtra",
    role: "Service Available",
    type: "store",
    lat: 18.5204,
    lng: 73.8567,
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    role: "Service Available",
    type: "store",
    lat: 23.0225,
    lng: 72.5714,
  },
  {
    id: "surat",
    name: "Surat",
    city: "Surat",
    state: "Gujarat",
    role: "Head Office",
    type: "head-office",
    lat: 21.1702,
    lng: 72.8311,
  },
  {
    id: "jaipur",
    name: "Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    role: "Service Available",
    type: "store",
    lat: 26.9124,
    lng: 75.7873,
  },
];

export const storeTypeConfig: Record<
  StoreType,
  { label: string; color: string; ring: string }
> = {
  "head-office": {
    label: "Head Office",
    color: "#A855F7",
    ring: "rgba(168, 85, 247, 0.4)",
  },
  regional: {
    label: "Regional Office",
    color: "#10B981",
    ring: "rgba(16, 185, 129, 0.4)",
  },
  store: {
    label: "Store",
    color: "#06B6D4",
    ring: "rgba(6, 182, 212, 0.4)",
  },
};
