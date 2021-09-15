export const rules = {
  name: {
    required: {
      value: true,
      message: "Tên là bắt buộc nhập",
    },
    maxLength: {
      value: 160,
      message: "Tên có độ dài tối đa là 160 ký tự",
    },
  },
  email: {
    required: {
      value: true,
      message: "Email là bắt buộc nhập",
    },
    minLength: {
      value: 6,
      message: "Email có độ dài từ 6 - 160 ký tự",
    },
    maxLength: {
      value: 160,
      message: "Email có độ dài tối đa 160 ký tự",
    },
    validate: {
      email: (value) =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        ) || "Email không đúng định dạng",
    },
  },
  phone: {
    required: {
      value: true,
      message: "Số điện thoại là bắt buộc nhập",
    },
    minLength: {
      value: 9,
      message: "Số điện thoại có độ dài trên 9 ký tự trở lên",
    },
    maxLength: {
      value: 20,
      message: "Số điện thoại có độ dài tối đa là 20 ký tự",
    },
    validate: {
      number: (value) =>
        /^[0-9]*$/.test(value) || "Số điện thoại không đúng định dạng",
    },
  },
  password: {
    required: {
      value: true,
      message: "Mật khẩu là bắt buộc nhập",
    },
    minLength: {
      value: 6,
      message: "Mật khẩu có độ dài từ 6 - 160 ký tự",
    },
    maxLength: {
      value: 160,
      message: "Mật khẩu có độ dài tối đa là 160 ký tự",
    },
  },
};
