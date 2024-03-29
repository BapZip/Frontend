import React, { useEffect, useRef, useState } from "react";
import api from "../../api/LoginTokenApi";

import scraddImgBtn from "../../images/BottomNav4/addImgBtn.png";

export default function Profile(props) {
  const [imgFile, setImgFile] = useState({});
  const [imgSrc, setScr] = useState();
  const imgRef = useRef();

  const handleButtonClick = (e) => {
    imgRef.current.click();
  };

  const handleChange = (e) => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(file);
      setScr(reader.result);
      postImage(file);
    };
  };
  const urlPost = `https://babzip.seunga.shop/myPage/api/img/snapshot`;
  function postImage(input) {
    let formData = new FormData();
    formData.append("images", input); // 'file'은 업로드할 이미지 파일입니다.
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    api
      .post(urlPost, formData, config)
      .then((response) => {
        setData(response.data.result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  const [userData, setData] = useState({});
  const urlgetPF = "https://babzip.seunga.shop/myPage/info";

  function getProfile() {
    api
      .get(urlgetPF)
      .then(function (response) {
        setData(response.data.result);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  if (!userData.nickname) {
    getProfile();
  }
  useEffect(() => {
    props.setName(userData.nickname);
  }, [userData]);
  const name = userData.nickname;
  const school = userData.schoolName;
  const major = userData.major;
  return (
    <div className="profile-BottomNav4">
      <div className="imageSection-profile">
        <div
          className="img-profile"
          style={{
            backgroundImage: `url(${userData.imageUrl})`,
            backgroundSize: "cover",
          }}
        />
        <img
          src={scraddImgBtn}
          alt="추가버튼"
          className="addImgBtn-profile"
          onClick={handleButtonClick}
        />
        <input
          type="file"
          accept="image/jpg, image/jpeg, image/png"
          style={{ display: "none" }}
          onChange={handleChange}
          ref={imgRef}
        />
      </div>
      <div className="textSection-profile">
        <p className="name-profile">{name}님</p>
        <div className="edu-profile">
          <p className="school-profile">{school}</p>
          <p>|</p>
          <p className="major-profile">{major}</p>
        </div>
      </div>
    </div>
  );
}
