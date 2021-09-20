import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { rules } from "../../helpers/rules";
import ErrorMessage from "../ErrorMessage";
import { contact } from "../../features/contact/contactSlice";
import { unwrapResult } from "@reduxjs/toolkit";
//
export default function Index() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      sdt: "",
      title: "",
      content: "",
    },
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleContact = async (data) => {
    const body = {
      name: data.name,
      email: data.email,
      sdt: data.sdt,
      title: data.title,
      content: data.content,
    };

    try {
      const res = await dispatch(contact(body));
      unwrapResult(res);
      history.push("/");
    } catch (error) {
      if (error.status === 422) {
        for (const key in error.data) {
          setError(key, {
            type: "server",
            message: error.data[key],
          });
        }
      }
    }
  };

  return (
    <div id="section__contact" className="contact section-area">
      <div className="container">
        <div className="contact__top">
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <div className="section__top">
                <span>Liên hệ</span>
                <h2 className="section__top-header">Liên hệ với chúng tôi</h2>
                {/* <div class="section__top-note">
      Vận chuyển hàng hóa trong nước và quốc tế
    </div>   */}
              </div>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit(handleContact)}>
          <div className="row">
            <div className="col-md-4">
              <ul className="content-text__list">
                <li className="content-text__item">
                  <img
                    src="./assets/img/icon/tomato_circle_phone.png"
                    alt=""
                    className="content-text__icon"
                  />
                  <div className="content-text__text">
                    <h3 className="content-text__text-header">Hot Line</h3>
                    <p>0962165083</p>
                  </div>
                </li>
                <li className="content-text__item">
                  <img
                    src="./assets/img/icon/tomato_circle_email.png"
                    alt=""
                    className="content-text__icon"
                  />
                  <div className="content-text__text">
                    <h3 className="content-text__text-header">Mail</h3>
                    <p>tklogistics@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-form__userinfor">
                    <Controller
                      name="name"
                      control={control}
                      rules={rules.name}
                      render={({ field }) => (
                        <input
                          name="name"
                          type="text"
                          placeholder="Họ và Tên"
                          onChange={field.onChange}
                          value={getValues("name")}
                        />
                      )}
                    />
                    <img
                      src="./assets/img/icon/tomato_user.png"
                      alt=""
                      className="contact-form__icon"
                    />
                    <ErrorMessage name="name" errors={errors} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-form__userinfor">
                    <Controller
                      name="email"
                      control={control}
                      rules={rules.email}
                      render={({ field }) => (
                        <input
                          name="email"
                          placeholder="Email"
                          onChange={field.onChange}
                          value={getValues("email")}
                        />
                      )}
                    />
                    <img
                      src="./assets/img/icon/tomato_email.png"
                      alt=""
                      className="contact-form__icon"
                    />
                    <ErrorMessage name="email" errors={errors} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-form__userinfor">
                    <Controller
                      name="sdt"
                      control={control}
                      rules={rules.phone}
                      render={({ field }) => (
                        <input
                          name="sdt"
                          placeholder="Số điện thoại"
                          onChange={field.onChange}
                          value={getValues("sdt")}
                        />
                      )}
                    />
                    <img
                      src="./assets/img/icon/tomato_phone.png"
                      alt=""
                      className="contact-form__icon"
                    />
                    <ErrorMessage name="sdt" errors={errors} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-form__userinfor">
                    <Controller
                      name="title"
                      control={control}
                      rules={rules.title}
                      render={({ field }) => (
                        <input
                          name="title"
                          placeholder="Tiêu đề"
                          onChange={field.onChange}
                          value={getValues("title")}
                        />
                      )}
                    />
                    <img
                      src="./assets/img/icon/tomato_input.png"
                      alt=""
                      className="contact-form__icon"
                    />
                    <ErrorMessage name="title" errors={errors} />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="contact-form__userinfor contact-form__userinfor-input">
                    <Controller
                      name="content"
                      control={control}
                      rules={rules.content}
                      render={({ field }) => (
                        <textarea
                          name="content"
                          placeholder="Nhập tin nhắn"
                          className="contact-form__userinfor__input"
                          onChange={field.onChange}
                          value={getValues("content")}
                        />
                      )}
                    />
                    <img
                      src="./assets/img/icon/tomato_input.png"
                      alt=""
                      className="contact-form__icon"
                    />
                    <ErrorMessage name="content" errors={errors} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-area__btn">
            <button>
              Gửi yêu cầu
              <img
                src="./assets/img/icon/planes.png"
                alt=""
                className="section-area__btn-icon"
              />
            </button>
          </div>
        </form>
        <img
          src="./assets/img/imgs/Decoration/square_deco.png"
          alt=""
          className="ordernow-decoration1"
        />
        <img
          src="./assets/img/imgs/Decoration/circle_deco.png"
          alt=""
          className="ordernow-decoration2"
        />
      </div>
    </div>
  );
}
