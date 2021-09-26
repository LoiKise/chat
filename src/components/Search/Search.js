import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.css';
import EventNoteIcon from "@material-ui/icons/EventNote";
import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import { Modal, Tab, Tabs, Card, Alert, Table } from "react-bootstrap";
import moment from 'moment'
import CustomNoRowsOverlay from "../Admin/Dashboard/Order/CustomNoRowsOverlay"
import * as ReatBootStrap from 'react-bootstrap'
import requestAPI from "../../apis";

export default function Search(props) {


  const [show, setShow] = useState(false);


  //search lấy giá trị 
  const [type, setType] = useState({ //send
    name: '',
    customerPhone: '',
    date: null
  })
  const [dataFormat, setDataFormat] = useState({ //show
    name: '',
    customerPhone: '',
    date: null
  })
  console.log('userComment', type);

  const handleChangeInput = (event) => {
    let { value, name, valueAsNumber } = event.target;
    console.log({ date: event.target });
    let state = event.target.type === 'date' ? valueAsNumber : value
    setType({
      ...type,
      [name]: state
    })
    setDataFormat({
      ...dataFormat,
      [name]: value

    })
  }
  const [state, setstate] = useState()
  const [loading, setLoading] = useState(false)
  const handleSubmit = (event) => {
    // chặn sự kiện submit browser
    event.preventDefault();
    // setLoading(true);
    setTimeout(() => {
      if (type.name && type.name.length > 0) {
        setShow(true)
        requestAPI("/search/order", "POST", type)
          .then(res => {
            if (res) {
              console.log(res.data);
              setstate(res.data);
              setLoading(true);

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
                      placeholder="Nhập mã đơn"
                      onChange={handleChangeInput}
                      value={dataFormat.name}
                    />
                  </div>
                  <div className="form-group" >
                    <p>Số điện thoại</p>
                    <input type="text"
                      name="customerPhone"
                      className="tabs__search form-control"
                      placeholder="Nhập mã đơn"
                      onChange={handleChangeInput}
                      value={dataFormat.customerPhone}
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
                      value={dataFormat.date}
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn_tab_search" >
                      <SearchSharpIcon /> Tra cứu vận đơn
                      {/* <ReatBootStrap.Spinner animation="border" /> */}

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

















            {/* <Modal show={show} onHide={handleClose} size="lg">
                 {loading && <h1>Loading.... </h1>} 
                <Modal.Header closeButton>
                  <Modal.Title>Kết quả tìm kiếm </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../assets/img/icon/dark_logo.png"
                      alt="this is logo" />
                    <Card.Text>
                      {state?.map(item => {
                        return (
                          <Card.Body className="w-100">
                            <Card.Title>Tên người gửi: {item?.customerName} </Card.Title>
                            <Card.Title>Số điện thoại: {item?.customerPhone} </Card.Title>
                            <Card.Title>Ngày gửi: {moment(item?.updatedAt).format("DD-MM-YYYY")} </Card.Title>
                            <Card.Title>Tên người nhận: {item?.receiverName} </Card.Title>
                            <Card.Title>Hàng hóa: {item?.orderName} </Card.Title>
                            <Card.Title>Chi phí: {item?.totalPrice} </Card.Title>
                          </Card.Body>
                        )
                      })}
                    </Card.Text>
                  </Card>
                </Modal.Body>
              </Modal> */}



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
