webpackHotUpdate("main",{

/***/ "./src/client/Views/Login.js":
/*!***********************************!*\
  !*** ./src/client/Views/Login.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _Container = __webpack_require__(/*! ../Components/Container */ "./src/client/Components/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _Row = __webpack_require__(/*! ../Components/Row */ "./src/client/Components/Row.js");

var _Row2 = _interopRequireDefault(_Row);

var _auth = __webpack_require__(/*! ../Actions/auth */ "./src/client/Actions/auth.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Login extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      email: '',
      password: '',
      err: null
    }, this.loginHandler = e => {
      e.preventDefault();
      _axios2.default.post('.http://vshare.codends.net/api/user/login', {
        email: this.state.email,
        password: this.state.password
      }).then(res => {
        // console.log(res.data)
        localStorage.setItem('auth', res.data.token);
        localStorage.setItem('acc_type', res.data.acc_type);
        this.props.startLogin(res.data);
        this.props.history.push('/dashboard');
      }).catch(e => {
        this.setState({
          err: 'Login Unsuccessfull'
        });
        console.log('Error login', e);
      });
    }, _temp;
  }

  render() {
    const props = this.props;
    return _react2.default.createElement(
      'section',
      { className: 'Login text-center' },
      _react2.default.createElement(
        _Container2.default,
        null,
        _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(
            'div',
            { id: 'regLoginForm', className: 'col-sm-5' },
            _react2.default.createElement(
              'form',
              { className: 'form-group', onSubmit: this.loginHandler },
              _react2.default.createElement(
                'div',
                {
                  className: 'closeBtnLogin',
                  onClick: () => props.history.push('/') },
                _react2.default.createElement('i', { className: 'fa fa-times-circle fa-2x' })
              ),
              _react2.default.createElement(
                'h2',
                null,
                'Login'
              ),
              _react2.default.createElement('input', { required: 'required', type: 'email', placeholder: 'Email', className: '', onChange: e => this.setState({
                  email: e.target.value
                }) }),
              _react2.default.createElement('input', { required: true, type: 'password', placeholder: 'Password', className: '', onChange: e => this.setState({
                  password: e.target.value
                }) }),
              _react2.default.createElement(
                'div',
                { className: 'd-flex' },
                _react2.default.createElement(
                  'div',
                  { className: 'mr-auto p-2' },
                  _react2.default.createElement('input', { type: 'checkbox', id: 'remember' }),
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'remember' },
                    'Remember'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'p-2' },
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '#' },
                    'Forget'
                  )
                )
              ),
              _react2.default.createElement('input', { type: 'submit', className: 'btn btn-info', defaultValue: 'Login' }),
              _react2.default.createElement(
                'div',
                { className: 'd-flex createAccountBtn' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/register' },
                    'Create an Account'
                  )
                )
              ),
              _react2.default.createElement('br', null),
              this.state.err && _react2.default.createElement(
                'div',
                { className: 'alert alert-warning' },
                _react2.default.createElement(
                  'p',
                  null,
                  this.state.err
                )
              )
            )
          )
        )
      )
    );
  }
}
const mapDispatchToProps = dispatch => ({
  startLogin: body => dispatch((0, _auth.startLogin)(body))
});

exports.default = (0, _reactRedux.connect)(undefined, mapDispatchToProps)(Login);

/***/ })

})
//# sourceMappingURL=main.ec50371966f3422ab011.hot-update.js.map