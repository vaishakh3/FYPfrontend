import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EmotionMeter } from "@/components/EmotionMeter";
import type { Emergency } from "@/lib/types";

interface EmergencyDetailsProps {
  emergency: Emergency;
}

export function EmergencyDetails({ emergency }: EmergencyDetailsProps) {
  return (
    <Card className="p-4 bg-white/90 backdrop-blur-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">Details</h2>
        <Badge 
          variant={emergency.status === 'critical' ? 'destructive' : 'secondary'}
        >
          {emergency.status.toUpperCase()}
        </Badge>
      </div>

      <h3 className="text-lg font-bold mb-4">{emergency.details.title}</h3>

      <div className="space-y-4">
        <div className="flex justify-between">
          <div>
            <div className="text-sm text-gray-500">Time of Call</div>
            <div>{emergency.details.timeOfCall}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Location</div>
            <div>{emergency.details.location}</div>
          </div>
        </div>

        <EmotionMeter 
          primary={emergency.details.emotions.primary}
          secondary={emergency.details.emotions.secondary}
        />

        <div>
          <h4 className="font-semibold mb-2">Dispatch first responders:</h4>
          <div className="flex space-x-2">
            <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
              Police
            </Button>
            <Button variant="default" className="bg-red-500 hover:bg-red-600">
              Firefighters
            </Button>
            <Button variant="default" className="bg-green-500 hover:bg-green-600">
              Paramedics
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}