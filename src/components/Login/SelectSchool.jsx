import React from "react";
import { BodyDiv, WrapperDiv, Div } from "../../styles/LoginSelection.style";
import { HeaderDiv, Submit } from "../../styles/Login2.style";
import {
  XImage,
  MainPDiv,
  MainP,
  Highlight,
  SearchBox,
  SearchImag,
  SearchBoxDiv,
  ExPDiv,
  ExP1,
  ExP2,
  CircleImgDiv,
  CircleImage,
} from "../../styles/Select.style";

import { Link } from "react-router-dom";

import X from "../../images/Login/X.svg";
import search from "../../images/Login/search.svg";
import yellowCircle from "../../images/Login/yellowCircle.svg";
import grayCircle from "../../images/Login/grayCircle.svg";

export default function SelectSchool() {
  return (
    <BodyDiv>
      <WrapperDiv>
        <Div height="100%">
          <HeaderDiv justifyContent="flex-end">
            <XImage src={X} alt="X" />
          </HeaderDiv>

          <MainPDiv>
            <MainP>
              어느 <Highlight>학교</Highlight>에
            </MainP>
            <MainP>다니고 계신가요?</MainP>
          </MainPDiv>

          <SearchBoxDiv>
            <SearchBox placeholder="학교명 검색" name="school_name" />
            <SearchImag src={search} alt="search" />
          </SearchBoxDiv>

          <ExPDiv>
            <ExP1>입력 예시</ExP1>
            <ExP2>덕성여자대학교 (O)</ExP2>
            <ExP2>덕성여대 (X)</ExP2>
          </ExPDiv>

          <CircleImgDiv>
            <CircleImage src={yellowCircle} />
            <CircleImage src={grayCircle} />
          </CircleImgDiv>

          {/* <Submit
            type="submit"
            value="입력하기"
            backgroundColor="#EDEDED"
            marginBottom="30px"
          /> */}

          <Link to="#" style={{ textDecoration: "none" }}>
            <Submit type="submit" value="다음" marginBottom="30px" />
          </Link>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}
