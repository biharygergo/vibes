import React from "react";
import {
  ResponsiveContainer,
  Area,
  Tooltip,
  AreaChart,
  XAxis,
  CartesianGrid,
  YAxis,
  BarChart,
  Bar,
  LabelList,
} from "recharts";
import { theme } from "../../style";

export interface EmojiBarChartProps<T> {
  data: readonly T[];
  dataKey: keyof T;
  strokeColor: string;
  id: string;
  height?: number;
  labelKey: keyof T;
}

export default function EmojiBarChart<T>(props: EmojiBarChartProps<T>) {
  return (
    <ResponsiveContainer width="100%" height={props.height || 120}>
      <BarChart
        data={props.data as any[]}
        margin={{ left: 0, right: 0, top: 5 }}
      >
        <XAxis
          dataKey={props.labelKey.toString()}
          orientation="top"
          tickLine={false}
          padding={{ left: 20, right: 20 }}
          tick={{ fontSize: "12px" }}
        />
        <YAxis tickCount={0} hide={true} domain={[0, 6]}/>
        <Bar
          dataKey={props.dataKey.toString()}
          fill={theme.accent}
          label={{ position: "top" }}
          barSize={5}
        >
          <LabelList dataKey="label" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
