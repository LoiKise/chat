import React from 'react'
import MemberItem from './MemberItem'

export default function Members() {

  const memberItem = [
    {
      avtar: './assets/img/imgs/Member/member01.jpg',
      nameMembe: 'James',
      position: 'Nhà sáng lập',
    },
    {
      avtar: './assets/img/imgs/Member/member02.jpg',
      nameMembe: 'JACK',
      position: '  Giám đốc',
    },
    {
      avtar: './assets/img/imgs/Member/member03.jpg',
      nameMembe: 'Davis',
      position: 'Trưởng phòng tài chính',
    },
    {
      avtar: './assets/img/imgs/Member/member04.jpg',
      nameMembe: 'Olivia',
      position: '  Trưởng phòng nhân sự',
    },
  ]

  return (
    <div>
      <div className="ourmember section-area">
        <div className="container">
          <div className="ourmember__top">
            <div className="row justify-content-md-center">
              <div className="col-md-6">
                <div className="section__top">
                  <span>Đội ngũ</span>
                  <h2 className="section__top-header">Đội Ngũ Của Chúng Tôi</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="ourmember-list">
            <div className="row">

              <MemberItem memberItem={memberItem} />

            </div>
            <div className="section-area__btn">
              <button>Xem thêm
                <img src="./assets/img/icon/planes.png" className="section-area__btn-icon" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
