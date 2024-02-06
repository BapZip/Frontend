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
} from "../../styles/Login/Select.style";

import { Link } from "react-router-dom";

import X from "../../images/Login/X.svg";
import search from "../../images/Login/search.svg";
import yellowCircle from "../../images/Login/yellowCircle.svg";
import grayCircle from "../../images/Login/grayCircle.svg";

export default function SelectSchool() {
  const [schoolCheck, setSchoolCheck] = useState(false);
  const { userInfo, setUserInfo } = useSignUp();

  const [form, setForm] = useState({
    school: "",
  });

  const handleSchoolApi = async () => {
    try {
      //API 요청 URL
      const url = `http://babzip-beanstalk-env.eba-y4csfs2a.ap-northeast-2.elasticbeanstalk.com/school/search?schoolName=${form.school}`;

      //axios.get 메소드를 사용하여 요청을 보냄
      const response = await axios.get(url);

      //잘 됐는지 확인
      console.log(response.data.result[0].name);
      // console.log(response.data.result[0].id);
      console.log(response.data.result[1].id);

      // 학교 이름 저장
      const school = response.data.result[0].name;
      // console.log("타입 확인");
      // console.log(typeof response.data.result[0].name);
      setForm({ ...form, school });

      //학교 아이디 저장
      // const school_id = response.data.result[0].id;
      const school_id = response.data.result[1].id;

      setUserInfo((userInfo) => ({
        ...userInfo,
        school: school,
        school_id: school_id,
      }));

      setSchoolCheck(true);

      console.log("test");
      console.log(userInfo);
    } catch (error) {
      console.error(
        "school check error",
        error.response ? error.response.data : error
      );
      //에러 상황에 대한 처리 로직 추가
    }
  };
  return (
    <BodyDiv>
      <WrapperDiv>
        <Div>
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
