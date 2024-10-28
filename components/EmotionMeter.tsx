import { Progress } from "@/components/ui/progress";

interface EmotionMeterProps {
  primary: { type: string; value: number };
  secondary: { type: string; value: number };
}

export function EmotionMeter({ primary, secondary }: EmotionMeterProps) {
  return (
    <div>
      <div className="text-sm text-gray-500 mb-2">Caller Emotion</div>
      <div className="space-y-2">
        <div>
          <div className="flex justify-between mb-1">
            <span>{primary.type}</span>
            <span>{primary.value}%</span>
          </div>
          <Progress value={primary.value} className="bg-gray-200" />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span>{secondary.type}</span>
            <span>{secondary.value}%</span>
          </div>
          <Progress value={secondary.value} className="bg-gray-200" />
        </div>
      </div>
    </div>
  );
}