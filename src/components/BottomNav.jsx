import React from "react";
import srcBtnHomeOff from "../images/BottomNav2/btnHomeOff.png";
import srcBtnReviewOff from "../images/BottomNav2/btnReviewOff.png";
import srcBtnListOff from "../images/BottomNav2/btnListOff.png";
import srcBtnMypageOff from "../images/BottomNav2/btnMypageOff.png";
import srcBtnHomeOn from "../images/BottomNav2/btnHomeOn.png";
import srcBtnReviewOn from "../images/BottomNav2/btnReviewOn.png";
import srcBtnListOn from "../images/BottomNav2/btnListOn.png";
import srcBtnMypageOn from "../images/BottomNav2/btnMypageOn.png";
import { Link } from "react-router-dom";

export default function BottomNav(props) {
  return (
    <nav className="container-bottomNav">
      <div className="btnHome" style={{ position: "relative", zIndex: 2 }}>
        <Link to="/Home">
          <img
            src={props.menu === "Home" ? srcBtnHomeOn : srcBtnHomeOff}
            alt="btn"
            style={{ zIndex: 0 }}
          />
        </Link>
      </div>
      <div className="btnReview" style={{ position: "relative", zIndex: 2 }}>
        <Link to="/Review">
          <img
            src={props.menu === "Review" ? srcBtnReviewOn : srcBtnReviewOff}
            alt="btn"
            style={{ zIndex: 0 }}
          />
        </Link>
      </div>
      <div className="btnList" style={{ position: "relative", zIndex: 2 }}>
        <Link to="/List">
          <img
            src={props.menu === "List" ? srcBtnListOn : srcBtnListOff}
            alt="btn"
            style={{ zIndex: 0 }}
          />
        </Link>
      </div>
      <div className="btnMyPage" style={{ position: "relative", zIndex: 2 }}>
        <Link to="/">
          <img
            src={props.menu === "MyPage" ? srcBtnMypageOn : srcBtnMypageOff}
            alt="btn"
            style={{ zIndex: 0 }}
          />
        </Link>
      </div>
    </nav>
  );
}
