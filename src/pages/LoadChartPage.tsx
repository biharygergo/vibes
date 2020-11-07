import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../style";
import GradientAreaChart, { AreaChartProps } from "./components/AreaChart";
import EmojiBarChart, { EmojiBarChartProps } from "./components/EmojiBarChart";
import { emojiLookup } from "./FeelingNowPage";

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px 10px;
`;

const Header = styled.div`
  padding-top: 30px;
  z-index: 99;
`;

const Content = styled.div``;

const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.text};
  margin-bottom: 40px;
  z-index: 99;
`;

const ChartTitle = styled.h5`
  color: ${(props) => props.theme.text};
  margin-bottom: 1rem;
`;

const ChartCard = styled.div`
  border-radius: 25px;
  box-shadow: ${(props) => props.theme.boxShadow};
`;

const ChartCardInner = styled.div`
  background: white;
  border-radius: 25px;
  padding-top: 10px;
`;

interface WorkloadData {
  time: string;
  value: number;
}

const mockWorkloadData: AreaChartProps<WorkloadData> = {
  data: [
    { time: "wed", value: 2 },
    { time: "thu", value: 1 },
    { time: "fri", value: 3 },
    { time: "sat", value: 2 },
    { time: "sun", value: 1 },
  ],
  dataKey: "value",
  strokeColor: theme.accent,
  id: "workloadchart",
  height: 200,
  labelKey: "time",
};

interface VibeData {
  time: string;
  value: number;
  label: string;
}

const mockVibeData: VibeData[] = [
  {
    time: "wed",
    label: emojiLookup.Awesome.emoji,
    value: emojiLookup.Awesome.value,
  },
  {
    time: "thu",
    label: emojiLookup.Awesome.emoji,
    value: emojiLookup.Awesome.value,
  },
  {
    time: "fri",
    label: emojiLookup.Crazy.emoji,
    value: emojiLookup.Crazy.value,
  },
  {
    time: "sat",
    label: emojiLookup.Breakdown.emoji,
    value: emojiLookup.Breakdown.value,
  },
  {
    time: "sun",
    label: emojiLookup.Awesome.emoji,
    value: emojiLookup.Awesome.value,
  },
];

const mockEmojiData: EmojiBarChartProps<VibeData> = {
  data: mockVibeData,
  dataKey: "value",
  strokeColor: theme.accent,
  id: "vibechart",
  height: 200,
  labelKey: "time",
};

export const LoadChartPage = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/received");
    }, 10000);
  }, [history]);
  return (
    <PageLayout>
      <Header>
        <HeaderTitle>
          Your vibes
          <br /> and workload
        </HeaderTitle>
      </Header>
      <Content>
        <ChartTitle>Workload</ChartTitle>
        <ChartCard>
          <ChartCardInner>
            <GradientAreaChart {...mockWorkloadData} />
          </ChartCardInner>
        </ChartCard>
        <ChartTitle>Vibes</ChartTitle>
        <ChartCard>
          <ChartCardInner>
            <EmojiBarChart {...mockEmojiData} />
          </ChartCardInner>
        </ChartCard>
      </Content>
    </PageLayout>
  );
};
