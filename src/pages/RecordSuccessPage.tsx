import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { PageLayout, Header, HeaderTitle, Content, Button } from "../style";

const PlaneWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
`;

const PlaneEmoji = styled.span`
  font-size: 8rem;
  emojishadow: "-6px 10px 15px rgba(17,17,224,0.40)";
`;

const DescriptionText = styled.p`
  color: ${(props) => props.theme.lightText};
  text-align: center;
  margin-bottom: 3rem;
`;

export const RecordSuccessPage = () => {
  const history = useHistory();
  const onNext = () => {
    history.push("/all");
  };

  return (
    <PageLayout>
      <Header>
        <HeaderTitle>You are a true Vibe champion!</HeaderTitle>
      </Header>
      <Content>
        <PlaneWrapper>
          <PlaneEmoji>✈️</PlaneEmoji>
        </PlaneWrapper>
        <DescriptionText>Your Vibe is on its way to Peter.</DescriptionText>
        <Button onClick={onNext}>Close</Button>
      </Content>
    </PageLayout>
  );
};
