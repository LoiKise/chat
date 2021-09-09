import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import { rules } from "../../helpers/rules";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";

export default function Index() {
  const IMGGG = "/assets/img/icon/Asset 18.png";
  const IMGFB = "/assets/img/icon/Asset 19.png";

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      name: "",
      sdt: "",
      password: "",
    },
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegister = async (data) => {
    const body = {
      name: data.name,
      sdt: data.sdt,
      password: data.password,
    };

    try {
      const res = await dispatch(register(body));
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
    <div className="signup container">
      <div className="row">
        <div className="col col-12 signup__form">
          <h3 className="text-center p-1">ĐĂNG KÝ</h3>
          <div className="signup__social">
            <button className="signup__google d-flex justify-content-center align-items-center">
              <img src={IMGGG} alt="icon__google" />
              <p className="signup__google--title font-weight-bold">
                Đăng nhập với Google
              </p>
            </button>
            <button className="signup__face d-flex justify-content-center align-items-center">
              <img src={IMGFB} alt="icon__face" />
              <p className="signup__face--title font-weight-bold">
                Đăng nhập với Facebook
              </p>
            </button>
            <p className="title__social">
              Đăng ký nhanh với Google hoặc Facebook
            </p>
          </div>
          <div className="signup__input">
            <form action="#" onSubmit={handleSubmit(handleRegister)}>
              <div className="form-group">
                <label htmlFor="form-group-name" className="font-weight-bold">
                  Họ và tên
                </label>
                <Controller
                  name="name"
                  control={control}
                  rules={rules.name}
                  render={({ field }) => (
                    <input
                      type="text"
                      name="name"
                      placeholder="Mời nhập tên"
                      onChange={field.onChange}
                      value={getValues("name")}
                      className="form-control rounded-0"
                      id="form-group-name"
                    />
                  )}
                />
                <ErrorMessage name="name" errors={errors} />
              </div>
              <div className="form-group">
                <label htmlFor="form-group-phone" className="font-weight-bold">
                  Số điện thoại
                </label>
                <Controller
                  name="sdt"
                  control={control}
                  rules={rules.phone}
                  render={({ field }) => (
                    <input
                      type="text"
                      onChange={field.onChange}
                      placeholder="Mời nhập số điện thoại"
                      value={getValues("sdt")}
                      className="form-control rounded-0"
                      id="form-group-phone"
                    />
                  )}
                />
                <ErrorMessage name="sdt" errors={errors} />
              </div>
              <div className="form-group">
                <label
                  htmlFor="form-group-password"
                  className="font-weight-bold"
                >
                  Mật khẩu
                </label>
                <Controller
                  name="password"
                  control={control}
                  rules={rules.password}
                  render={({ field }) => (
                    <input
                      type="password"
                      onChange={field.onChange}
                      placeholder="Mời nhập mật khẩu"
                      value={getValues("password")}
                      className="form-control rounded-0"
                      id="form-group-password"
                    />
                  )}
                />
                <ErrorMessage name="password" errors={errors} />
              </div>
              <div className="button__submit">
                <button type="submit" className="submit-form">
                  Đăng Ký
                </button>
              </div>
            </form>
          </div>
          <p className="accept--rules">
            Bạn đăng ký đồng nghĩa với bạn đồng ý các{" "}
            <Link to="">điều khoản sử dụng </Link>
            của chúng tôi
          </p>
          <div className="yes--account">
            <span>Bạn đã có tải khoản ? </span>
            <Link to="/login" className="login__link">
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
