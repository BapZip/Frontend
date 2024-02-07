import React, { useState, useEffect } from "react";
import {
  BodyDiv,
  WrapperDiv,
  Div,
} from "../../styles/Login/LoginSelection.style";
import { Link } from "react-router-dom";
import { checkNicknameAvailability } from "../../api/loginApi";

import {
  ArrowLeftImage,
  Submit,
  Form,
  SearchLink,
  HeaderDiv,
  PDiv,
} from "../../styles/Login/Login2.style";
import {
  Label,
  Input,
  CheckDivO,
  CheckDivX,
  Button,
  InputDiv,
} from "../../styles/Login/SineUp.style";
import arrowLeft from "../../images/Login/arrowLeft.svg";

export default function SineUp() {
  const [form, setForm] = useState({
    nickName: "",
    id: "",
    password: "",
    passwordCheck: "",
    schoolAndMajor: "",
    schoolEmail: "",
    schoolEmailCheck: "",
  });

  const [validNickName, setValidNickName] = useState(false);
  const [validId, setValidId] = useState(false);
  const [validPassword, setValidPassword] = useState(null);
  const [validPasswordCheck, setValidPasswordCheck] = useState(false);
  const [validSchoolAndMajor, setValidSchoolAndMajor] = useState(true); // 검증하지 않음, 예제에서는 true로 설정
  const [validSchoolEmail, setValidSchoolEmail] = useState(false);
  const [validSchoolEmailCheck, setValidSchoolEmailCheck] = useState(false);
  const [submitBtnColor, setSubmitBtnColor] = useState("#EDEDED");

  useEffect(() => {
    if (
      validNickName &&
      validId &&
      validPassword &&
      validPasswordCheck &&
      validSchoolAndMajor &&
      validSchoolEmail &&
      validSchoolEmailCheck
    ) {
      setSubmitBtnColor("#FFBA35");
    } else {
      setSubmitBtnColor("#EDEDED");
    }
  }, [
    validNickName,
    validId,
    validPassword,
    validPasswordCheck,
    validSchoolAndMajor,
    validSchoolEmail,
    validSchoolEmailCheck,
  ]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handlePWCh = (e) => {
    const password = e.target.value;
    setForm({ ...form, password });

    if (password.trim() === "") {
      setValidPassword(null);
    } else {
      const isValidPassword =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/.test(
          password
        );
      setValidPassword(isValidPassword);
    }
  };

  const handlePWChCh = (e) => {
    const passwordCheck = e.target.value;
    setForm({ ...form, passwordCheck });

    if (passwordCheck.trim() === "") {
      setValidPasswordCheck(null);
    } else {
      const isValidPasswordCheck = passwordCheck === form.password;
      setValidPasswordCheck(isValidPasswordCheck);
    }
  };

  return (
    <BodyDiv>
      <WrapperDiv justifyContent="flex-start">
        <Div height="100%">
          <HeaderDiv>
            <SearchLink to="/Login2">
              <ArrowLeftImage src={arrowLeft} alt="arrowLeft" />
            </SearchLink>
            <PDiv>회원가입</PDiv>
          </HeaderDiv>
          <Form margin="auto" padding="45px 0">
            <Label htmlFor="nickName">닉네임</Label>
            <InputDiv>
              <Input
                type="text"
                id="nickName"
                value={form.nickName}
                onChange={handleChange}
                placeholder="닉네임을 입력해 주세요."
                width="330px"
              />
              <Button type="button" onClick={() => setValidNickName(true)}>
                중복 확인
              </Button>
            </InputDiv>

            {validNickName && <CheckDivO>사용 가능한 닉네임입니다.</CheckDivO>}

            <Label htmlFor="id">아이디</Label>
            <InputDiv>
              <Input
                type="text"
                id="id"
                value={form.id}
                onChange={handleChange}
                placeholder="아이디를 입력해 주세요."
                width="330px"
              />
              <Button type="button" onClick={() => setValidId(true)}>
                중복 확인
              </Button>
            </InputDiv>

            {validId && <CheckDivO>사용 가능한 아이디입니다.</CheckDivO>}

            <Label htmlFor="password">비밀번호</Label>
            <InputDiv>
              <Input
                type="password"
                id="password"
                value={form.password}
                onChange={handlePWCh}
                placeholder="비밀번호를 입력해 주세요."
              />
            </InputDiv>

            <InputDiv>
              <Input
                type="password"
                id="passwordCheck"
                value={form.passwordCheck}
                onChange={handlePWChCh}
                placeholder="비밀번호 확인."
              />
            </InputDiv>

            {validPassword === false ? (
              <CheckDivX>
                비밀번호를 영문, 숫자, 특수문자 포함 8~12자리로 설정해주세요.
              </CheckDivX>
            ) : validPassword === true ? (
              <CheckDivO>사용 가능한 비밀번호입니다.</CheckDivO>
            ) : (
              <CheckDivX></CheckDivX>
            )}

            <Label htmlFor="schoolAndMajor">학교 및 전공</Label>
            <InputDiv>
              <Input
                type="text"
                id="schoolAndMajor"
                value={form.schoolAndMajor}
                onChange={handleChange}
                placeholder="학교와 전공을 입력해 주세요."
                width="330px"
              />
              <Link to="/SineUp/Select_School">
                <Button>입력하기</Button>
              </Link>
            </InputDiv>
            <CheckDivX></CheckDivX>

            <Label htmlFor="schoolEmail">본인 인증</Label>
            <InputDiv>
              <Input
                type="email"
                id="schoolEmail"
                value={form.schoolEmail}
                onChange={handleChange}
                placeholder="학교 이메일을 입력해 주세요."
                width="330px"
              />

              <Button
                type="button"
                onClick={() => {
                  setValidSchoolEmail(true);
                  setValidSchoolEmailCheck(true);
                }}
              >
                인증 요청
              </Button>
            </InputDiv>

            <InputDiv>
              <Input
                type="text"
                id="schoolEmailCheck"
                value={form.schoolEmailCheck}
                onChange={handleChange}
                placeholder="인증번호 입력"
              />
            </InputDiv>

            {validSchoolEmail && validSchoolEmailCheck && (
              <CheckDivO>이메일 인증이 완료되었습니다.</CheckDivO>
            )}
          </Form>

          <Link
            to="/SineUp/SineUp-Completion"
            style={{
              textDecoration: "none",
            }}
          >
            <Submit
              type="submit"
              value="회원 가입"
              backgroundColor="#EDEDED"
              marginBottom="30px"
            />
          </Link>
        </Div>
      </WrapperDiv>
    </BodyDiv>
  );
}
