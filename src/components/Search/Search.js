import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.css';
import EventNoteIcon from "@material-ui/icons/EventNote";
import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import requestAPI from "../../apis";
import { Modal, Tab, Tabs, Card } from "react-bootstrap";
import moment from 'moment'

export default function Search(props) {

  // const fakeData = [

  //   {
  //     name: 'Nguyễn Tấn Lợi',
  //     SDT: '0903693306',
  //     date: '10/1/2021',
  //     product: 'sữa',
  //   },
  //   {
  //     name: 'Nguyễn Tấn A',
  //     SDT: '0903693306',
  //     date: '10/1/2021',
  //     product: 'thuốc',
  //   },
  //   {
  //     name: 'Nguyễn Tấn B',
  //     SDT: '0903693306',
  //     date: '10/1/2021',
  //     product: 'bia',
  //   },
  // ]
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    setLoading(true);
    setTimeout(() => {
      if (type.name && type.name.length > 0) {
        requestAPI("/search/order", "POST", type)
          .then(res => {
            if (res) {
              console.log(res.data[0]);
              setstate(res.data[0]);
              handleShow()
              // setLoading(false);
            }
          }).catch(err => console.log(err))
      } else {
        //Show noti
      }
    }, 1000);
  }
  return (
    <div className="search">
      <div className="container">
        <div style={{ display: 'block', width: 700, padding: 30 }}>
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
                    </button>
                  </div>
                </form>
              </div>
              <Modal show={show} onHide={handleClose} size="lg">
                {/* {loading && <h1>Loading.... </h1>} */}
                <Modal.Header closeButton>
                  <Modal.Title>Kết quả tìm kiếm </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../assets/img/icon/dark_logo.png"
                      alt="this is logo" />
                    <Card.Body>
                      <Card.Title>Tên: {state?.customerName}</Card.Title>
                      <Card.Title>Số điện thoại: {state?.phone}</Card.Title>
                      <Card.Text>
                        {state?.products?.map(item => {
                          return (
                            <Card.Title>sản phẩm: {item?.name} </Card.Title>
                          )
                        })}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Modal.Body>
              </Modal>
            </Tab>


            <Tab eventKey="second" title={<span>Cước vận chuyển <MonetizationOnRoundedIcon /></span>}>
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
                  <SearchSharpIcon /> Tra cước vận chuyển
                </button>
              </div>
            </Tab>
            <Tab eventKey="third" title={<span>Bưu cục<EventNoteIcon /></span>} >
              <div className="tab_content_Office  d-flex">
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
              {/* <button className="btn_tab_search">
                <SearchSharpIcon /> Tra cứu vận chuyển
              </button> */}
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
