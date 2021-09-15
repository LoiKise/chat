import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Order from '../Home/Order/Order'


export default function index() {



  return (
    <div className="order" >
      <div className="container">
        <div style={{ display: 'block', width: 700, padding: 30 }}>
          <Tabs defaultActiveKey="first">
            <Tab eventKey="first" title="Giao hàng tiêu chuẩn">
              <h1>Dịch vụ chuyển phát tiêu chuẩn</h1>
              <span className='mb-3'>
                TK Logistic là thương hiệu chuyển phát nhanh dựa trên sự phát triển của công nghệ và internet. TK Logistic cam kết mang đến cho khách hàng những trải nghiệm tốt nhất khi lựa chọn sử dụng dịch vụ của chúng tôi.
              </span>
              <span>
                TK Logistic là thương hiệu chuyển phát nhanh dựa trên sự phát triển của công nghệ và internet. TK Logistic cam kết mang đến cho khách hàng những trải nghiệm tốt nhất khi lựa chọn sử dụng dịch vụ của chúng tôi.
              </span>
              <span>
                TK Logistic là thương hiệu chuyển phát nhanh dựa trên sự phát triển của công nghệ và internet. TK Logistic cam kết mang đến cho khách hàng những trải nghiệm tốt nhất khi lựa chọn sử dụng dịch vụ của chúng tôi.
              </span>
            </Tab>
            <Tab eventKey="second" title="Giao hàng nhanh">
              <h1>Dịch vụ Nhanh - TK Fast</h1>
              <span>
                TK Logistic là thương hiệu chuyển phát nhanh dựa trên sự phát triển của công nghệ và internet
              </span>
            </Tab>
          </Tabs>
        </div>
        <div className="list-cost">
          <span>BẢNG GIÁ</span>
        </div>
        <div className="form_order mt-5 container">
          <Order />
        </div>
      </div>
    </div>

  )
}
