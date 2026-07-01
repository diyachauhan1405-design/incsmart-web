"use client";

import { useState } from "react";
import LandingPage from "@/components/LandingPage";
import HomePage from "@/components/HomePage";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <HomePage />;
  }

  return <LandingPage onSignInSuccess={() => setIsLoggedIn(true)} />;
}
