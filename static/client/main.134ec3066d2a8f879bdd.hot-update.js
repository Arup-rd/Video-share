webpackHotUpdate("main",{

/***/ "./src/client/Views/Register.js":
/*!**************************************!*\
  !*** ./src/client/Views/Register.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _Container = __webpack_require__(/*! ../Components/Container */ "./src/client/Components/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _Row = __webpack_require__(/*! ../Components/Row */ "./src/client/Components/Row.js");

var _Row2 = _interopRequireDefault(_Row);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _auth = __webpack_require__(/*! ../Actions/auth */ "./src/client/Actions/auth.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Register extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      username: '',
      err: null
    }, this.registerHandler = e => {
      e.preventDefault();
      const {
        firstname = '',
        lastname = '',
        email = '',
        password = '',
        username = ''
      } = this.state;

      _axios2.default.post('http://vshare.codends.net/api/user/create', {
        firstname,
        lastname,
        email,
        password,
        username
      }).then(res => {
        localStorage.setItem('auth', res.data.token);
        localStorage.setItem('acc_type', res.data.acc_type);
        this.props.createUser(res.data);
        this.props.history.push('/');
        this.setState({
          err: null
        });
      }).catch(e => {
        this.setState({
          err: 'Registration Failed...!'
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
              { className: 'form-group', onSubmit: this.registerHandler },
              _react2.default.createElement(
                'div',
                { className: 'closeBtnLogin', onClick: () => props.history.push('/') },
                _react2.default.createElement('i', { className: 'fa fa-times-circle fa-2x' })
              ),
              _react2.default.createElement(
                'h2',
                null,
                'Sign Up'
              ),
              _react2.default.createElement('input', { type: 'text', placeholder: 'First Name', className: '',
                onChange: e => this.setState({
                  firstname: e.target.value
                }) }),
              _react2.default.createElement('input', { type: 'text', placeholder: 'Last Name', className: '',
                onChange: e => this.setState({
                  lastname: e.target.value
                }) }),
              _react2.default.createElement('input', { type: 'text', placeholder: 'Username', className: '',
                onChange: e => this.setState({
                  username: e.target.value
                }) }),
              _react2.default.createElement('input', { type: 'text', placeholder: 'Email', className: '',
                onChange: e => this.setState({
                  email: e.target.value
                }) }),
              _react2.default.createElement('input', { type: 'password', placeholder: 'Password', className: '',
                onChange: e => this.setState({
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
              _react2.default.createElement(
                'button',
                { className: 'btn btn-info' },
                'Register'
              ),
              _react2.default.createElement(
                'div',
                { className: 'd-flex createAccountBtn' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Already have an account ',
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/login' },
                    'Login'
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
  createUser: body => dispatch((0, _auth.createUser)(body))
});

exports.default = (0, _reactRedux.connect)(undefined, mapDispatchToProps)(Register);

/***/ })

})
//# sourceMappingURL=main.134ec3066d2a8f879bdd.hot-update.js.map