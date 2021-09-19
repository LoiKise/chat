"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = requestAPI;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Syntax
// requestAPI('/search', 'POST', {code}, { Authorization: `Bearer ${localStorage.getItem('TOKEN')}` })
function requestAPI(url, method, body, injectHeader) {
  var urlOrigin, headers, objMeta;
  return regeneratorRuntime.async(function requestAPI$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          urlOrigin = "https://localhost:3000";
          headers = _objectSpread({
            "Content-Type": "application/json",
            // 'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*"
          }, injectHeader);
          objMeta = {
            method: method,
            url: "".concat(urlOrigin).concat(url),
            headers: headers,
            data: body
          };
          _context.next = 5;
          return regeneratorRuntime.awrap((0, _axios["default"])(objMeta));

        case 5:
          return _context.abrupt("return", _context.sent);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}