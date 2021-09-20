import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Tab, Tabs, AppBar, Typography } from "@material-ui/core";
import BlockIcon from "@material-ui/icons/Block";
import EventNoteIcon from "@material-ui/icons/EventNote";
import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";
import HomeWorkSharpIcon from "@material-ui/icons/HomeWorkSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import Order from "../Home/Order/Order";

export default function Search(props) {
  const listMenuTabs = [
    {
      icon: "./assets/img/icon/planes.png",
      name: "Vận đơn",
      tabs: "first",
    },
    {
      icon: "./assets/img/icon/planes.png",
      name: "Cước vận chuyển",
      tabs: "second",
    },
    {
      icon: "./assets/img/icon/planes.png",
      name: "Bưu cục",
      tabs: "third",
    },
    {
      icon: "./assets/img/icon/planes.png",
      name: "Hàng cấm gửi",
      tabs: "fourth",
    },
  ];

  const [index, setIndex] = useState(0);
  const onTabClicked = (event, index) => {
    setIndex(index);
  };

  const Panel = (props) => (
    <div hidden={props.value !== props.index}>
      {props.value === props.index && <Typography>{props.children}</Typography>}
    </div>
  );

  return (
    <div className="search">
      <div className="container">
        <div className="header_tabs">
          <Tabs value={index} onChange={onTabClicked}>
            <Tab label="Vận đơn" icon={<EventNoteIcon />} />
            <Tab label="Cước vận chuyển" icon={<MonetizationOnRoundedIcon />} />
            <Tab label="Bưu cục" icon={<HomeWorkSharpIcon />} />
          </Tabs>
        </div>
        <div className="tabs_content">
          <Panel value={index} index={0}>
            <div className="tabs__content__code">
              <input type="text" name="" id="" className="tabs__search" />
              <p>Nhập mã đơn của bạn vào đây để tra cứu</p>
              <button>
                <SearchSharpIcon /> Tra cứu vận đơn
              </button>
            </div>
          </Panel>
          <Panel value={index} index={1}>
            <div className="tab_content_move">
              <p className="text-left pl-5">Gửi từ</p>
              <div className="row">
                <div className="col-md-4">
                  <div className="ordernow-form__userinfor-item">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="ordernow-form__username"
                      placeholder="Tỉnh/Thành Phố"
                    />
                    <img
                      src="./assets/img/icon/tomato_down_arrow.png"
                      className="ordernow-form__icon"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="ordernow-form__userinfor-item">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="ordernow-form__userphone"
                      placeholder="Huyện/Quận"
                    />
                    <img
                      src="./assets/img/icon/tomato_down_arrow.png"
                      className="ordernow-form__icon"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="ordernow-form__userinfor-item">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="ordernow-form__useremail"
                      placeholder="Xã/Thị Xã"
                    />
                    <img
                      src="./assets/img/icon/tomato_down_arrow.png"
                      className="ordernow-form__icon"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <p className="text-left pl-5">Gửi đến</p>
              <div className="row">
                <div className="col-md-4">
                  <div className="ordernow-form__userinfor-item">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="ordernow-form__username"
                      placeholder="Tỉnh/Thành Phố"
                    />
                    <img
                      src="./assets/img/icon/tomato_down_arrow.png"
                      className="ordernow-form__icon"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="ordernow-form__userinfor-item">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="ordernow-form__userphone"
                      placeholder="Huyện/Quận"
                    />
                    <img
                      src="./assets/img/icon/tomato_down_arrow.png"
                      className="ordernow-form__icon"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="ordernow-form__userinfor-item">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="ordernow-form__useremail"
                      placeholder="Xã/Thị Xã"
                    />
                    <img
                      src="./assets/img/icon/tomato_down_arrow.png"
                      className="ordernow-form__icon"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <p className="text-left pl-5">Trọng Lượng</p>
              <div className="row">
                <div className="col-md-4">
                  <div className="ordernow-form__userinfor-item">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="ordernow-form__username"
                      placeholder="Kg"
                    />
                    <img
                      src="./assets/img/icon/tomato_down_arrow.png"
                      className="ordernow-form__icon"
                      alt=""
                    />
                  </div>
                </div>
                <ul className="form__about-checklist">
                  <li className="form__about-checkitem">
                    <input type="checkbox" name="" id="" />
                    <span>Chuyển phát nhanh</span>
                  </li>
                </ul>
              </div>
              <button className="btn_tab_search">
                <SearchSharpIcon /> Tra cứu vận chuyển
              </button>
            </div>
          </Panel>
          <Panel value={index} index={2}>
            <div className="tab_content_Office">
              <div className="col-md-4">
                <div className="ordernow-form__userinfor-item">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="ordernow-form__username"
                    placeholder="Tỉnh/Thành Phố"
                  />
                  <img
                    src="./assets/img/icon/tomato_down_arrow.png"
                    className="ordernow-form__icon"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="ordernow-form__userinfor-item">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="ordernow-form__userphone"
                    placeholder="Huyện/Quận"
                  />
                  <img
                    src="./assets/img/icon/tomato_down_arrow.png"
                    className="ordernow-form__icon"
                    alt=""
                  />
                </div>
              </div>
              <button className="btn_tab_search">
                <SearchSharpIcon /> Tra cứu
              </button>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
