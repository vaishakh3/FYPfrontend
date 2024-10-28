"use client";

import { Activity, Flame, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Emergency } from "@/lib/types";

interface EmergencyListProps {
  emergencies: Emergency[];
  onEmergencyClick: (emergency: Emergency) => void;
}

const icons = {
  earthquake: Activity,
  fire: Flame,
  medical: Heart,
};

export function EmergencyList({ emergencies, onEmergencyClick }: EmergencyListProps) {
  return (
    <div className="space-y-2">
      {emergencies.map((emergency) => {
        const Icon = icons[emergency.type as keyof typeof icons] || Activity;
        
        return (
          <div 
            key={emergency.id}
            className="border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => onEmergencyClick(emergency)}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <Icon className="h-5 w-5 text-red-500 inline mr-2" />
                <span>{emergency.details.title}</span>
              </div>
              <Badge 
                variant={emergency.status === 'critical' ? 'destructive' : 'secondary'}
              >
                {emergency.status.toUpperCase()}
              </Badge>
            </div>
            <div className="text-sm text-gray-500">{emergency.timestamp}</div>
          </div>
        );
      })}
    </div>
  );
}