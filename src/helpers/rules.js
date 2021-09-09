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
  phone: {
    required: {
      value: true,
      message: "Số điện thoại là bắt buộc nhập",
    },
    maxLength: {
      value: 20,
      message: "Số điện thoại có độ dài tối đa là 20 ký tự",
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
