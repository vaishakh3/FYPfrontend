"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { EmergencyStats } from "@/components/EmergencyStats";
import { EmergencyDetails } from "@/components/EmergencyDetails";
import { LiveTranscript } from "@/components/LiveTranscript";
import { emergencies } from "@/lib/data";
import type { Emergency } from "@/lib/types";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Home() {
  const [location] = useState({ lat: 37.8199, lng: -122.4783 });
  const [selectedEmergency, setSelectedEmergency] = useState<Emergency | null>(null);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 grid grid-cols-12 gap-4 p-4 relative">
        {/* Left Sidebar */}
        <div className="col-span-3 z-10">
          <EmergencyStats 
            emergencies={emergencies}
            onEmergencyClick={setSelectedEmergency} 
          />
        </div>

        {/* Map Section - Always full width in background */}
        <div className="absolute inset-0 z-0">
          <Map center={location} emergencies={emergencies} />
        </div>

        {/* Right Section */}
        {selectedEmergency && (
          <div className="col-span-4 col-start-9 z-10 space-y-4">
            <EmergencyDetails emergency={selectedEmergency} />
            <LiveTranscript emergency={selectedEmergency} />
          </div>
        )}
      </div>
    </main>
  );
}