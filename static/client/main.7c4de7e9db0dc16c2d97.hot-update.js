webpackHotUpdate("main",{

/***/ "./src/client/Views/Single.js":
/*!************************************!*\
  !*** ./src/client/Views/Single.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Sidebar = __webpack_require__(/*! ../Components/Sidebar */ "./src/client/Components/Sidebar.js");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Grid = __webpack_require__(/*! ../Components/Grids/Grid */ "./src/client/Components/Grids/Grid.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _SearchBar = __webpack_require__(/*! ../Components/SearchBar */ "./src/client/Components/SearchBar.js");

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _content = __webpack_require__(/*! ../Actions/content */ "./src/client/Actions/content.js");

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Single = __webpack_require__(/*! ../Components/Content/Single.Content */ "./src/client/Components/Content/Single.Content.js");

var _Single2 = _interopRequireDefault(_Single);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Single extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      single: false
    }, _temp;
  }

  componentDidMount() {
    console.log('post');
    _axios2.default.get(`http://vshare.codends.net/api/content/${this.props.match.params.id}`).then(res => {
      // console.log(res);
      this.props.setOneContent(res.data);
      this.setState({
        single: true
      });
    }).catch(e => {
      this.setState({
        single: false
      });
      console.log('Error getting message', e);
      throw e;
    });
  }

  render() {
    console.log(this.props.single);
    return _react2.default.createElement(
      'div',
      { className: 'content' },
      _react2.default.createElement(
        'div',
        { className: 'inner-page' },
        _react2.default.createElement(_SearchBar2.default, null),
        this.state.single ? _react2.default.createElement(_Single2.default, { single: this.props.single }) : 'Loading...',
        _react2.default.createElement(
          'div',
          { className: 'clear' },
          ' '
        ),
        _react2.default.createElement(
          'div',
          { className: 'related-videos' },
          _react2.default.createElement(
            'h6',
            null,
            'Related-Videos'
          ),
          _react2.default.createElement('div', { className: 'grids' })
        ),
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
  allContent: state.content.all,
  single: state.content.single
});

const mapDispatchToProps = (dispatch, props, getState) => ({
  setOneContent: data => dispatch((0, _content.setSingleContent)(data)),
  setSingleRedux: () => dispatch((0, _content.getSingle)(props.match.params.id))
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Single);

/***/ })

})
//# sourceMappingURL=main.7c4de7e9db0dc16c2d97.hot-update.js.map