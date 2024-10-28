"use client";

import { MapPin, Phone } from "lucide-react";
import { useTime } from "@/hooks/useTime";

export function Header() {
  const currentTime = useTime();

  return (
    <header className="bg-[#1a3a3d] text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Phone className="h-5 w-5" />
        <span className="font-semibold">LOCATION</span>
        <MapPin className="h-5 w-5 text-red-500" />
      </div>
      <div className="text-sm">
        {currentTime} | SAN FRANCISCO, CA
      </div>
    </header>
  );
}