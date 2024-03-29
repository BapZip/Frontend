import React, { useState } from "react";
import api from "../../api/LoginTokenApi";

export default function ReviewRanking() {
  const [userData, setData] = useState({});
  function getRancking() {
    const urlget = `https://babzip.seunga.shop/reviews/ranking`;
    api
      .get(urlget)
      .then(function (response) {
        setData(response.data.result);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  if (!userData[0]) {
    getRancking();
  }
  return (
    <div className="container-reviewRanking">
      <div className="title-reviewRanking">
        <p>주간 리뷰 랭킹 TOP 3</p>
      </div>
      <div className="contents-reviewRanking">
        {userData[1] ? (
          <div className="section-rank">
            <div className="detail-rank">
              <img
                src={userData[1].imageUrl}
                alt="imgsecond"
                className="img-ranking"
              />
              <p className="name">{userData[1].nickname}</p>
              <p className="likes">좋아요 {userData[1].likesCount}개</p>
            </div>
            <p className="rankSecond">2</p>
          </div>
        ) : (
          <div className="section-rank" />
        )}
        {userData[0] ? (
          <div className="section-rankFirst">
            <div className="detail-firstRank">
              <img
                src={userData[0].imageUrl}
                alt="imgfirst"
                className="img-ranking"
              />
              <p className="name">{userData[0].nickname}</p>
              <p className="likes">좋아요 {userData[0].likesCount}개</p>
            </div>
            <p className="rankfirst">1</p>
          </div>
        ) : (
          <div className="section-rankFirst" />
        )}
        {userData[2] ? (
          <div className="section-rank">
            <div className="detail-rank">
              <img
                src={userData[2].imageUrl}
                alt="imgthird"
                className="img-ranking"
              />
              <p className="name">{userData[2].nickname}</p>
              <p className="likes">좋아요 {userData[2].likesCount}</p>
            </div>
            <p className="rankThird">3</p>
          </div>
        ) : (
          <div className="section-rank" />
        )}
      </div>
    </div>
  );
}
