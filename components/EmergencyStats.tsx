import { Home } from "lucide-react";
import { Card } from "@/components/ui/card";
import { EmergencyList } from "@/components/EmergencyList";
import type { Emergency } from "@/lib/types";

interface EmergencyStatsProps {
  emergencies: Emergency[];
  onEmergencyClick: (emergency: Emergency) => void;
}

export function EmergencyStats({ emergencies, onEmergencyClick }: EmergencyStatsProps) {
  const criticalCount = emergencies.filter(e => e.status === 'critical').length;
  const resolvedCount = emergencies.filter(e => e.status === 'resolved').length;

  return (
    <Card className="p-4 bg-white/90 backdrop-blur-sm">
      <div className="flex items-center space-x-2 mb-4">
        <Home className="h-5 w-5" />
        <h2 className="font-semibold">Emergencies</h2>
      </div>
      
      <div className="grid grid-cols-3 text-center mb-4">
        <div>
          <div className="text-xl font-bold">{emergencies.length}</div>
          <div className="text-sm text-gray-500">Total</div>
        </div>
        <div>
          <div className="text-xl font-bold">{criticalCount}</div>
          <div className="text-sm text-gray-500">Critical</div>
        </div>
        <div>
          <div className="text-xl font-bold">{resolvedCount}</div>
          <div className="text-sm text-gray-500">Resolved</div>
        </div>
      </div>

      <EmergencyList emergencies={emergencies} onEmergencyClick={onEmergencyClick} />
    </Card>
  );
}