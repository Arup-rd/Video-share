webpackHotUpdate("main",{

/***/ "./src/client/Views/Homepage.js":
/*!**************************************!*\
  !*** ./src/client/Views/Homepage.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _Grid = __webpack_require__(/*! ../Components/Grids/Grid */ "./src/client/Components/Grids/Grid.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _Sidebar = __webpack_require__(/*! ../Components/Sidebar */ "./src/client/Components/Sidebar.js");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _content = __webpack_require__(/*! ../Actions/content */ "./src/client/Actions/content.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Homepage extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      content: false,
      data: ''
    }, _temp;
  }

  componentDidMount() {
    _axios2.default.get('http://vshare.codends.net/api/content/').then(res => {
      this.props.setContent(res.data);
      this.setState({
        content: true
      });
    }).catch(e => {
      console.log('error found in .http://vshare.codends.net/api/content/', e);
    });
  }

  render() {
    return _react2.default.createElement(
      'div',
      { className: 'content' },
      _react2.default.createElement(
        'div',
        { className: 'left-content' },
        _react2.default.createElement(
          'div',
          { className: 'searchbar' },
          _react2.default.createElement(
            'div',
            { className: 'search-left' },
            _react2.default.createElement(
              'p',
              null,
              'Latest Video Form VideosTube'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'clear' },
            ' '
          )
        ),
        this.state.content ? _react2.default.createElement(
          'div',
          { className: 'box' },
          _react2.default.createElement(
            'div',
            { className: 'grids' },
            this.props.allContent.map((content, key) => {
              return _react2.default.createElement(_Grid2.default, { content: content, key: content._id });
            })
          )
        ) : 'Loading...',
        _react2.default.createElement(
          'div',
          { className: 'clear' },
          ' '
        )
      ),
      _react2.default.createElement(_Sidebar2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'clear' },
        ' '
      )
    );
  }
}
const mapStateToProps = state => ({
  allContent: state.content.all
});

const mapDispatchToProps = dispatch => ({
  setContent: body => dispatch((0, _content.setContent)(body))
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Homepage);

/***/ })

})
//# sourceMappingURL=main.c73bbb3b895fce03bfb9.hot-update.js.map