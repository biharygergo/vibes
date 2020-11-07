import React from "react";
import {
  ResponsiveContainer,
  Area,
  Tooltip,
  AreaChart,
  XAxis,
  CartesianGrid,
  YAxis,
} from "recharts";
import styled from "styled-components";

export interface AreaChartProps<T> {
  data: readonly T[];
  dataKey: keyof T;
  strokeColor: string;
  id: string;
  height?: number;
  labelKey?: keyof T;
}

export default function GradientAreaChart<T>(props: AreaChartProps<T>) {
  return (
    <ResponsiveContainer width="100%" height={props.height || 120}>
      <AreaChart
        data={props.data as any[]}
        margin={{ left: 0, right: 0, top: 5 }}
      >
        <defs>
          <linearGradient id={props.id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={props.strokeColor} stopOpacity={0.4} />
            <stop offset="100%" stopColor={props.strokeColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip />
        {props.labelKey && (
          <XAxis
            dataKey={props.labelKey.toString()}
            orientation="top"
            tickLine={false}
            padding={{ left: 20, right: 20 }}
            tick={{fontSize: '12px'}}
          />
        )}

        <YAxis tickCount={0} hide={true}/>
        <CartesianGrid stroke="#f5f5f5" />
        <Area
          type="monotone"
          dataKey={props.dataKey.toString()}
          stroke={props.strokeColor}
          strokeWidth={2}
          fillOpacity={1}
          fill={`url(#${props.id})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
