import React from 'react'
import { Link } from 'react-router-dom'

import scrReviewBtn from '../../images/BottomNav4/manageReviewBtn.png'
import scrPointBtn from '../../images/BottomNav4/viewPointBtn.png'
import scrCouponBtn from '../../images/BottomNav4/viewCouponBtn.png'

export default function SelectBar() {
  return (
    <div className='selectBar-BottomNav4'>
        <Link to="/ManageReivew" className='manageReview-selectBar' style={{ textDecoration: "none"}}>
            <img src={scrReviewBtn} alt="이미지" className='image-selectBar'/>
            <p className='text-selectBar'>리뷰 관리</p>
        </Link>
        <Link to="/" className='point-selectBar' style={{ textDecoration: "none"}}>
            <img src={scrPointBtn} alt="이미지" className='image-selectBar'/>
            <p className='text-selectBar'>포인트</p>
        </Link>
        <Link to="/" className='coupon-selectBar' style={{ textDecoration: "none"}}>
            <img src={scrCouponBtn} alt="이미지" className='image-selectBar'/>
            <p className='text-selectBar'>쿠폰함</p>
        </Link>
    </div>
  )
}
