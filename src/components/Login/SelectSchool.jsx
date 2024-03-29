import { React, useState } from "react";
import { useSignUp } from "../../context/SignUpContext";
import axios from "axios";
import {
  BodyDiv,
  WrapperDiv,
  Div,
} from "../../styles/Login/LoginSelection.style";
import { HeaderDiv, Submit } from "../../styles/Login/Login2.style";
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
  SearchListWrapper,
  SearchListDiv,
} from "../../styles/Login/Select.style";

import { Link } from "react-router-dom";

import X from "../../images/Login/X.svg";
import search from "../../images/Login/search.svg";
import yellowCircle from "../../images/Login/yellowCircle.svg";
import grayCircle from "../../images/Login/grayCircle.svg";

export default function SelectSchool() {
  const [schoolCheck, setSchoolCheck] = useState(false);
  const [schoolList, setSchoolList] = useState([]);
  const { userInfo, setUserInfo } = useSignUp();
  const [selectBox, setSelectBox] = useState(false);

  const [form, setForm] = useState({
    school: "",
  });

  const handleSchoolApi = async () => {
    try {
      //API 요청 URL
      const url = `https://babzip.seunga.shop/school/search?schoolName=${form.school}`;

      //axios.get 메소드를 사용하여 요청을 보냄
      const response = await axios.get(url);

      // console.log(response.data.result);
      setSchoolList(response.data.result);

      setSelectBox(true);

      // setSchoolCheck(true);
    } catch (error) {
      console.error(
        "school check error",
        error.response ? error.response.data : error
      );
      //에러 상황에 대한 처리 로직 추가
    }
  };

  const clickSchool = (id, name) => {
    setForm((prevForm) => ({ ...prevForm, school: name }));
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      school: name,
      school_id: id,
    }));

    setSelectBox(false);
    setSchoolCheck(true);
  };

  return (
    <BodyDiv>
      <WrapperDiv>
        <Div height="100%">
          <HeaderDiv justifyContent="flex-end">
            <Link to="/users/auth/signup">
              <XImage src={X} alt="X" />
            </Link>
          </HeaderDiv>

          <MainPDiv>
            <MainP>
              어느 <Highlight>학교</Highlight>에
            </MainP>
            <MainP>다니고 계신가요?</MainP>
          </MainPDiv>

          <SearchBoxDiv>
            <form>
              <SearchBox
                id="school"
                placeholder="학교명 검색"
                name="school"
                value={form.school}
                onChange={(e) => setForm({ ...form, school: e.target.value })}
              />
            </form>

            <SearchImag onClick={handleSchoolApi} src={search} alt="search" />
          </SearchBoxDiv>

          {selectBox ? (
            schoolList.length === 0 ? (
              <SearchListWrapper>
                <SearchListDiv>입력한 결과가 없습니다.</SearchListDiv>
              </SearchListWrapper>
            ) : (
              <SearchListWrapper>
                {schoolList.map((school) => {
                  return (
                    <SearchListDiv
                      key={school.id}
                      onClick={() => clickSchool(school.id, school.name)}
                      bgColor="#fff8ec"
                    >
                      {school.name}
                    </SearchListDiv>
                  );
                })}
              </SearchListWrapper>
            )
          ) : null}
          <ExPDiv>
            <ExP1>입력 예시</ExP1>
            <ExP2>덕성여자대학교 (O)</ExP2>
            <ExP2>덕성여대 (X)</ExP2>
          </ExPDiv>

          <CircleImgDiv>
            <CircleImage src={yellowCircle} />
            <CircleImage src={grayCircle} />
          </CircleImgDiv>

          {schoolCheck === false ? (
            <Submit
              type="submit"
              value="입력하기"
              backgroundColor="#EDEDED"
              marginBottom="30px"
            />
          ) : (
            <Link
              to="/SineUp/Select_major"
              style={{
                textDecoration: "none",
                marginBottom: "30px",
                cursor: "default",
              }}
            >
              <Submit type="submit" value="다음" />
            </Link>
          )}
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}
