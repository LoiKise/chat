import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.css';
import EventNoteIcon from "@material-ui/icons/EventNote";
import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import requestAPI from "../../apis";
import { Modal, Tab, Tabs, Card } from "react-bootstrap";


export default function Search(props) {

  const fakeData = [

    {
      name: 'Nguyễn Tấn Lợi',
      SDT: '0903693306',
      date: '10/1/2021',
      product: 'sữa',
    },
    {
      name: 'Nguyễn Tấn A',
      SDT: '0903693306',
      date: '10/1/2021',
      product: 'thuốc',
    },
    {
      name: 'Nguyễn Tấn B',
      SDT: '0903693306',
      date: '10/1/2021',
      product: 'bia',
    },
  ]
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //search lấy giá trị 
  const [type, setType] = useState({
    name: '',
    SDT: '',
    date: ''
  })
  console.log('userComment', type);

  const handleChangeInput = (event) => {
    let { value, name } = event.target;
    setType({
      ...type,
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
        let temp = fakeData.find(item => item.name === type.name && item.SDT === type.SDT);
        console.log(temp);
        setstate(temp);
        setLoading(false);
      } else {
        //Show noti
      }
    }, 1000);


  }
  return (
    <div className="search">
      <div className="container">
        <div style={{ display: 'block', padding: 30 }}>
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
                      value={type.name}
                    />
                  </div>
                  <div className="form-group" >
                    <p>Số điện thoại</p>
                    <input type="text"
                      name="SDT"
                      className="tabs__search form-control"
                      placeholder="Nhập mã đơn"
                      onChange={handleChangeInput}
                      value={type.SDT}
                    />
                  </div>
                  <div className="form-group" >
                    <p>Nhập ngày </p>
                    <input type="date"
                      name="date"
                      className="tabs__search form-control"
                      placeholder="Nhập ngày cần tìm kiếm"
                      min="2000-01-01" max="2030-12-31"
                      onChange={handleChangeInput}
                      value={type.date}
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn_tab_search" onClick={handleShow}>
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
                    <Card.Img variant="top" src="./assets/img/icon/dark_logo.png"
                      alt="this is logo" />
                    <Card.Body>
                      <Card.Title>Tên: {state?.name}</Card.Title>
                      <Card.Title>Số điện thoại: {state?.SDT}</Card.Title>
                      <Card.Text>
                        <Card.Title>sản phẩm: {state?.product} </Card.Title>
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
    </div>
  );
}
