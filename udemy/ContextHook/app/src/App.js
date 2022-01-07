import React from "react";
import styled from "styled-components";
import SmartAccordion, { SmartAccordionHeader, SmartAccordionBody, } from "./components/SmartAccordion";

const App = () => {
  return (
    <>
      <SmartAccordion>
        <SmartAccordionHeader>여기 박스 누르면 메롱이 나올걸?</SmartAccordionHeader>
        <SmartAccordionBody>메로롱 메롱이다</SmartAccordionBody>
      </SmartAccordion>

      <SmartAccordion>
        <StyledSmartHeader>I'm smart Accordion222</StyledSmartHeader>
        <StyledSmartBody>Body</StyledSmartBody>
      </SmartAccordion>

      <WrapBox>
        <Box>
          <div>직사각형</div>
        </Box>
        <div>
          <div>부적절한 권한 관리</div>
          <div>입력 크기를 확인하지 않고 버퍼 복사 (`Classic Buffer Overflow`)</div>
        </div>
        <Box>
          <div>해당 자산 4</div>
        </Box>
      </WrapBox>

    </>
  );
};

const WrapBox = styled.div`
  width:90%;
  padding:2% 5%;
  display:flex;
  margin-top:10%;
  background-color:#f3f3f3;
  justify-content: space-between;
  align-items: center;
`;
const Box = styled.div`
  display:flex;
  
`;

const StyledSmartHeader = styled(SmartAccordionHeader)`
  background-color: green;
`;

const StyledSmartBody = styled(SmartAccordionBody)`
  border: 1px solid green;
`;


export default App;
