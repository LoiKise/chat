import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.css';
import EventNoteIcon from "@material-ui/icons/EventNote";
import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import { Tab, Tabs, Table } from "react-bootstrap";
import moment from 'moment'
import CustomNoRowsOverlay from "../Admin/Dashboard/Order/CustomNoRowsOverlay"

import requestAPI from "../../apis";

export default function Search(props) {


  const [show, setShow] = useState(false);


  //search lấy giá trị 
  const [type, setType] = useState({ //send
    name: '',
    customerPhone: '',
    date: ''
  })
  // const [dataFormat, setDataFormat] = useState({ //show
  //   name: '',
  //   customerPhone: '',
  //   date: '',
  // })


  const handleChangeInput = (event) => {
    let { value, name, valueAsDate } = event.target;
    // console.log({ date: event.target });
    // let state = event.target.type === 'date' ? valueAsDate : value
    // console.log(type)
    // console.log(valueAsDate)
    setType({
      ...type,
      [name]: value
    })
    // setDataFormat({
    //   ...dataFormat,
    //   [name]: value
    // })
  }
  const [state, setstate] = useState()

  const handleSubmit = (event) => {
    // chặn sự kiện submit browser
    event.preventDefault();
    setTimeout(() => {
      if (type.name && type.name.length > 0) {
        setShow(true)
        requestAPI("/search/order", "POST", type)
          .then(res => {
            if (res) {
              // console.log(res.data);
              setstate(res.data);
              // setLoading(true);
            }
          }).catch(err => console.log(err))
      } else {
        // handleShow()
      
      }
    }, 1000);
  }
  return (
    <div className="search">
      <div className="container">
        <div className="wrap-search">
          <Tabs defaultActiveKey="first">
            <Tab eventKey="first" title={<span>Vận đơn <EventNoteIcon /></span>} >
              <div className="content__tab1">
                <form onSubmit={handleSubmit}>
                  <div className="form-group" >
                    <p>Tên khách hàng</p>
                    <input type="text"
                      name="name"
                      className="tabs__search form-control"
                      placeholder="Nhập tên khách hàng"
                      onChange={handleChangeInput}
                      value={type.name}
                      required
                    />
                   
                  </div>
                  <div className="form-group" >
                    <p>Số điện thoại</p>
                    <input type="text"
                      name="customerPhone"
                      className="tabs__search form-control"
                      placeholder="Nhập số điện thoại"
                      onChange={handleChangeInput}
                      value={type.customerPhone}
                      required
                    />
                  </div>
                  <div className="form-group" >
                    <p>Nhập ngày </p>
                    <input
                      type="date"
                      name="date"
                      className="tabs__search form-control"
                      placeholder="Nhập ngày cần tìm kiếm"
                      min="2000-01-01" max="2030-12-31"
                      onChange={handleChangeInput}
                      value={type.date}
                      requiredw
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn_tab_search" >
                      <SearchSharpIcon /> Tra cứu vận đơn
                    </button>
                  </div>
                </form>
              </div>
              {show &&
                <Table striped bordered hover size="lg" >
                  {
                    state && state.length > 0 ?
                      <thead>
                        <tr>
                          <th className="font-weight-bold text-center">Người gửi</th>
                          <th className="font-weight-bold text-center">Số điện thoại</th>
                          <th className="font-weight-bold text-center">Ngày gửi</th>
                          <th className="font-weight-bold text-center">Tên người nhận</th>
                          <th className="font-weight-bold text-center">Hàng hóa</th>
                          <th className="font-weight-bold text-center">Chi phí</th>
                        </tr>
                      </thead>
                      : <thead>
                        <tr>
                          <th className="font-weight-bold text-center">Kết Quả</th>
                        </tr>
                      </thead>
                  }

                  {state && state.length > 0 ?
                    state?.map(item => {
                      return (
                        <tbody>
                          <td className="h5">{item?.customerName}</td>
                          <td className="h5">{item?.customerPhone}</td>
                          <td className="h5">{moment(item?.updatedAt).format("DD-MM-YYYY")}</td>
                          <td className="h5">{item?.receiverName}</td>
                          <td className="h5">{item?.orderName}</td>
                          <td className="h5">{item?.totalPrice}</td>
                        </tbody>
                      )
                    })
                    :
                    <tbody><div><CustomNoRowsOverlay /></div></tbody>
                  }
                </Table>
              }
            </Tab>
            <Tab eventKey="second" title={<span>Cước vận chuyển <MonetizationOnRoundedIcon /></span>}>
              <div className="tab_content_move">
                <p className="text-left pl-5">Gửi từ</p>
                <div className="row">
                  <div className="col-md-4 mb-4">
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
                  <div className="col-md-4 mb-4">
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
                  <div className="col-md-4 mb-4">
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
                  <div className="col-md-4 mb-4">
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
                  <div className="col-md-4 mb-4">
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
                  <div className="col-md-4 mb-4">
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
                  <div className="col-md-4 mb-4">
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
                  <SearchSharpIcon /> Tra cước vận chuyển
                </button>
              </div>
            </Tab>
            <Tab eventKey="third" title={<span>Bưu cục<EventNoteIcon /></span>} >
              <div className="tab_content_Office row justify-content-center">
                <div className="col-md-4 mb-4">
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
                <div className="col-md-4 mb-4">
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
            </Tab>
          </Tabs>
        </div>
      </div>
    </div >
  );
}
