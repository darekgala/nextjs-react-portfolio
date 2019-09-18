import * as React from 'react';

export type TimelineItem = {
  logo: string,
  period: string,
  name: string,
  content: string | React.Node
}

export type TimelineItems = {
  items: TimelineItem[],
  periodComponentWidth: number
}
