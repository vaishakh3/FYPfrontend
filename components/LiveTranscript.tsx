"use client";

import { Circle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import type { Emergency } from "@/lib/types";

interface LiveTranscriptProps {
  emergency: Emergency;
}

export function LiveTranscript({ emergency }: LiveTranscriptProps) {
  return (
    <Card className="p-4 bg-white/90 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold">Live Transcript</h2>
        <div className="flex items-center text-green-500">
          <Circle className="h-3 w-3 fill-current mr-2" />
          AI Operator Connected
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <div>
            <div className="text-sm text-gray-500">CALLER EMOTION</div>
            <div>{emergency.details.emotions.primary.type}</div>
            <Progress value={emergency.details.emotions.primary.value} className="w-32" />
            <div className="text-xs text-right">{emergency.details.emotions.primary.value}%</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">CALLER EMOTION</div>
            <div>{emergency.details.emotions.secondary.type}</div>
            <Progress value={emergency.details.emotions.secondary.value} className="w-32" />
            <div className="text-xs text-right">{emergency.details.emotions.secondary.value}%</div>
          </div>
        </div>
      </div>

      <div className="max-h-[400px] overflow-y-auto space-y-4 mb-4">
        <div className="text-sm text-gray-500">CALL TRANSCRIPT</div>
        {emergency.transcript.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "operator" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`rounded-lg p-3 max-w-[80%] ${
                message.role === "operator"
                  ? "bg-gray-100"
                  : "bg-blue-500 text-white"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <Button className="w-full bg-green-500 hover:bg-green-600">
        Transfer
      </Button>
    </Card>
  );
}