'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';
import React from 'react';
import { InteractiveCard } from './interactive-card';

type StrategicPillarCardProps = {
  pillar: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
};

export function StrategicPillarCard({ pillar }: StrategicPillarCardProps) {
  const { icon: Icon, title, description } = pillar;

  return (
    <InteractiveCard className="h-full">
      <Card
        className="h-full border bg-secondary/50 text-left transition-all duration-300 hover:bg-secondary hover:shadow-2xl"
        style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}
      >
        <CardHeader>
          <div
            className="bg-primary/10 text-primary mb-4 inline-block rounded-md p-3"
            style={{ transform: 'translateZ(50px)' }}
          >
            <Icon className="h-8 w-8" />
          </div>
          <CardTitle style={{ transform: 'translateZ(30px)' }}>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent style={{ transform: 'translateZ(20px)' }}>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </InteractiveCard>
  );
}
