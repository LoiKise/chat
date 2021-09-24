import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ButtonCustom from "../../utils/Buttons/ButtonCustom";
import CategoryTitle from "../Home/Category/CategoryTitle/CategoryTitle";
import requestAPI from "../../apis";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { rules } from "../../helpers/rules";
import ErrorMessage from "../../components/ErrorMessage/index";

// import { set } from 'immer/dist/internal';

export default function Index() {
  const IconService = "./assets/img/icon/planes.png";

  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      address: "",
      borough: "",
      district: "",
      city: "",
      typeProduct: "",
      weight: "",
      fastShip: false,
      hangdonglanh: false,
      hangdevo: false,
    },
  });
  const handleValue = async (data) => {
    let note = "";
    let fastShip = false;
    const address = `${data.address}, ${data.borough}, ${data.district}, ${data.city}.`;
    if (data.devo && data.devo !== undefined) {
      note += "Dễ vỡ,";
    }
    if (data.hangdonglanh && data.hangdonglanh !== undefined) {
      note += " Hàng đông lạnh";
    }
    if (data.fastShip) {
      fastShip = true;
    }

    const body = {
      fullname: data.fullname,
      email: data.email,
      phone: data.phone,
      address: address,
      typeProduct: data.typeProduct,
      weight: data.weight,
      fastShip: fastShip,
      note: note,
    };
    try {

      const res = await requestAPI("/request", "POST", body);
      reset();
      console.log(res);
    
      toast.success("Đặt hàng thành công", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
     
      toast.error("Đặt hàng thất bại", {
        position: "top-center",
        autoClose: 3000,
      });
      console.log(error);
    }
  };

  return (
    <div className="order">
      <div className="container">
        <div style={{ display: "block", width: 700, padding: 30 }}>
          <Tabs defaultActiveKey="first">
            <Tab eventKey="first" title="Giao hàng tiêu chuẩn">
              <h1>Dịch vụ chuyển phát tiêu chuẩn</h1>
              <span className="mb-3">
                TK Logistic là thương hiệu chuyển phát nhanh dựa trên sự phát
                triển của công nghệ và internet. TK Logistic cam kết mang đến
                cho khách hàng những trải nghiệm tốt nhất khi lựa chọn sử dụng
                dịch vụ của chúng tôi.
              </span>
              <span>
                TK Logistic là thương hiệu chuyển phát nhanh dựa trên sự phát
                triển của công nghệ và internet. TK Logistic cam kết mang đến
                cho khách hàng những trải nghiệm tốt nhất khi lựa chọn sử dụng
                dịch vụ của chúng tôi.
              </span>
              <span>
                TK Logistic là thương hiệu chuyển phát nhanh dựa trên sự phát
                triển của công nghệ và internet. TK Logistic cam kết mang đến
                cho khách hàng những trải nghiệm tốt nhất khi lựa chọn sử dụng
                dịch vụ của chúng tôi.
              </span>
            </Tab>
            <Tab eventKey="second" title="Giao hàng nhanh">
              <h1>Dịch vụ Nhanh - TK Fast</h1>
              <span>
                TK Logistic là thương hiệu chuyển phát nhanh dựa trên sự phát
                triển của công nghệ và internet
              </span>
            </Tab>
          </Tabs>
        </div>
        <div className="list-cost">
          <span>BẢNG GIÁ</span>
        </div>
        <div className="form_order mt-5 container">
          <div className="ordernow section-area">
            <div className="container">
              <div className="ordernow__top">
                <div className="row justify-content-md-center">
                  <div className="col-md-6">
                    <CategoryTitle title="Đặt hàng" content="Đặt hàng ngay" />
                  </div>
                </div>
              </div>
              <form
                action="#"
                onSubmit={handleSubmit(handleValue)}
                className="ordernow-form"
              >
                <div className="ordernow-form__userinfor">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="ordernow-form__userinfor-item">
                        <Controller
                          name="fullname"
                          control={control}
                          rules={rules.name}
                          render={({ field }) => (
                            <input
                              name="fullname"
                              className="ordernow-form__username"
                              onChange={field.onChange}
                              placeholder="Họ và Tên"
                              value={getValues("fullname")}
                            />
                          )}
                        />
                        <img
                          src="./assets/img/icon/tomato_user.png"
                          className="ordernow-form__icon"
                          alt=""
                        />
                      </div>
                      <ErrorMessage name="fullname" errors={errors} color />
                    </div>
                    <div className="col-md-4">
                      <div className="ordernow-form__userinfor-item">
                        <Controller
                          name="phone"
                          control={control}
                          rules={rules.phone}
                          render={({ field }) => (
                            <input
                              name="phone"
                              onChange={field.onChange}
                              className="ordernow-form__userphone"
                              placeholder="Số Điện Thoại"
                              value={getValues("phone")}
                            />
                          )}
                        />
                        <img
                          src="./assets/img/icon/tomato_phone.png"
                          className="ordernow-form__icon"
                          alt=""
                        />
                      </div>
                      <ErrorMessage name="phone" errors={errors} color />
                    </div>
                    <div className="col-md-4">
                      <div className="ordernow-form__userinfor-item">
                        <Controller
                          name="email"
                          control={control}
                          rules={rules.email}
                          render={({ field }) => (
                            <input
                              name="email"
                              onChange={field.onChange}
                              className="ordernow-form__useremail"
                              placeholder="Email"
                              value={getValues("email")}
                            />
                          )}
                        />
                        <img
                          src="./assets/img/icon/tomato_email.png"
                          className="ordernow-form__icon"
                          alt=""
                        />
                      </div>
                      <ErrorMessage name="email" errors={errors} color />
                    </div>
                  </div>
                </div>

                <div className="ordernow-form__deliverylocation">
                  <h3 className="ordernow-form__deliverylocation-header">
                    Điểm Giao Hàng
                  </h3>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="ordernow-form__deliverylocation-item">
                        <Controller
                          name="city"
                          control={control}
                          rules={rules.batbuoc}
                          render={({ field }) => (
                            <input
                              name="city"
                              onChange={field.onChange}
                              className="ordernow-form__province"
                              placeholder="Tỉnh / Thành Phố"
                              value={getValues("city")}
                            />
                          )}
                        />
                        <img
                          src="./assets/img/icon/tomato_down_arrow.png"
                          className="ordernow-form__icon"
                          alt=""
                        />
                      </div>
                      <ErrorMessage name="city" errors={errors} color />
                    </div>
                    <div className="col-md-3">
                      <div className="ordernow-form__deliverylocation-item">
                        <Controller
                          name="district"
                          rules={rules.batbuoc}
                          control={control}
                          render={({ field }) => (
                            <input
                              name="district"
                              onChange={field.onChange}
                              className="ordernow-form__province"
                              placeholder="Huyện / Quận"
                              value={getValues("district")}
                            />
                          )}
                        />
                        <img
                          src="./assets/img/icon/tomato_down_arrow.png"
                          className="ordernow-form__icon"
                          alt=""
                        />
                      </div>
                      <ErrorMessage name="district" errors={errors} color />
                    </div>
                    <div className="col-md-3">
                      <div className="ordernow-form__deliverylocation-item">
                        <Controller
                          name="borough"
                          rules={rules.batbuoc}
                          control={control}
                          render={({ field }) => (
                            <input
                              name="borough"
                              onChange={field.onChange}
                              className="ordernow-form__province"
                              placeholder="Xã / Thị Xã"
                              value={getValues("borough")}
                            />
                          )}
                        />
                        <img
                          src="./assets/img/icon/tomato_down_arrow.png"
                          className="ordernow-form__icon"
                          alt=""
                        />
                      </div>
                      <ErrorMessage name="borough" errors={errors} color />
                    </div>
                    <div className="col-md-3">
                      <div className="ordernow-form__deliverylocation-item">
                        <Controller
                          name="address"
                          rules={rules.batbuoc}
                          control={control}
                          render={({ field }) => (
                            <input
                              name="address"
                              onChange={field.onChange}
                              className="ordernow-form__province"
                              placeholder="Địa Chỉ"
                              value={getValues("address")}
                            />
                          )}
                        />
                      </div>
                      <ErrorMessage name="address" errors={errors} color />
                    </div>
                  </div>
                </div>
                <div className="ordernow-form__about">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="ordernow-form__about-item">
                        <Controller
                          name="typeProduct"
                          control={control}
                          rules={rules.batbuoc}
                          render={({ field }) => (
                            <input
                              name="typeProduct"
                              onChange={field.onChange}
                              className="ordernow-form__typepackage"
                              placeholder="Loại Hàng"
                              value={getValues("typeProduct")}
                            />
                          )}
                        />
                        <img
                          src="./assets/img/icon/tomato_down_arrow.png"
                          className="ordernow-form__icon"
                          alt=""
                        />
                      </div>
                      <ErrorMessage name="typeProduct" errors={errors} color />
                    </div>
                    <div className="col-md-3">
                      <div className="ordernow-form__about-item">
                        <Controller
                          name="weight"
                          control={control}
                          rules={rules.weight}
                          render={({ field }) => (
                            <input
                              name="weight"
                              onChange={field.onChange}
                              className="ordernow-form__weight"
                              placeholder="Cân Nặng"
                              value={getValues("weight")}
                            />
                          )}
                        />
                      </div>
                      <ErrorMessage name="weight" errors={errors} color />
                    </div>
                    <div className="col-md-6">
                      <div className="ordernow-form__about-check">
                        <ul className="form__about-checklist">
                          <li className="form__about-checkitem">
                            <Controller
                              name="fastShip"
                              control={control}
                              render={({ field }) => (
                                <input
                                  type="checkbox"
                                  name="fastShip"
                                  onChange={field.onChange}
                                  value={getValues("fastShip")}
                                />
                              )}
                            />

                            <span>Chuyển phát nhanh</span>
                          </li>
                          <li className="form__about-checkitem">
                            <Controller
                              name="devo"
                              control={control}
                              render={({ field }) => (
                                <input
                                  type="checkbox"
                                  name="devo"
                                  onChange={field.onChange}
                                  value={getValues("hangdevo")}
                                />
                              )}
                            />
                            <span>Dễ vỡ</span>
                          </li>
                          <li className="form__about-checkitem">
                            <Controller
                              name="hangdonglanh"
                              control={control}
                              render={({ field }) => (
                                <input
                                  type="checkbox"
                                  name="hangdonglanh"
                                  onChange={field.onChange}
                                  value={getValues("hangdonglanh")}
                                />
                              )}
                            />
                            <span>Hàng đông lạnh</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-area__btn">
                  <ButtonCustom
                    type="submit"
                    name="Gửi Yêu Cầu"
                    linkIcon={IconService}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
