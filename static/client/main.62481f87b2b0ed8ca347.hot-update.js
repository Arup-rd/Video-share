webpackHotUpdate("main",{

/***/ "./src/client/Views/Category.js":
/*!**************************************!*\
  !*** ./src/client/Views/Category.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Grid = __webpack_require__(/*! ../Components/Grids/Grid */ "./src/client/Components/Grids/Grid.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _CategoryList = __webpack_require__(/*! ../Components/Categories/CategoryList */ "./src/client/Components/Categories/CategoryList.js");

var _CategoryList2 = _interopRequireDefault(_CategoryList);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _content = __webpack_require__(/*! ../Actions/content */ "./src/client/Actions/content.js");

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class Category extends _react2.default.Component {
  constructor(...args) {
    var _temp, _this;

    return _temp = _this = super(...args), this.state = {
      content: false,
      category: false,
      filter: ''
    }, this.filterComponent = _asyncToGenerator(function* () {
      // console.log(this.state.filter)
      _axios2.default.get(`http://vshare.codends.net/api/content/category/${_this.state.filter}`).then((() => {
        var _ref2 = _asyncToGenerator(function* (res) {
          yield _this.props.setCatContent(res.data);
          console.log('after', res.data);
          _this.setState({
            content: true
          });
        });

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      })()).catch(function (e) {
        _this.setState({
          content: undefined
        });
        console.log('error found in http://vshare.codends.net/api/content/', e);
      });
    }), this.filterCategory = (() => {
      var _ref3 = _asyncToGenerator(function* (filter) {
        yield _this.setState({
          filter: filter
        });
        _this.filterComponent();
      });

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    })(), _temp;
  }

  componentDidMount() {
    _axios2.default.get(`http://vshare.codends.net/api/category`).then(res => {
      // console.log(res.data)
      this.props.setCategory(res.data);
      this.setState({
        category: true,
        filter: res.data[0]._id
      });
      this.filterComponent();
    }).catch(e => {
      this.setState({
        category: false
      });
      console.log('error found in .http://vshare.codends.net/api/content/', e);
    });
  }

  render() {
    const props = this.props;
    console.log('cont', this.state.content, props.con);
    return _react2.default.createElement(
      'div',
      { className: 'content' },
      _react2.default.createElement(
        'div',
        { className: 'categories' },
        this.state.category ? _react2.default.createElement(_CategoryList2.default, { category: this.props.category, filter: this.filterCategory }) : 'Loading',
        _react2.default.createElement(
          'div',
          { className: 'categories-types' },
          _react2.default.createElement(
            'div',
            { className: 'recent-videos' },
            _react2.default.createElement(
              'h5',
              null,
              _react2.default.createElement('img', { src: '/images/recent.png', alt: '' }),
              'Recent-videos'
            ),
            _react2.default.createElement(
              'div',
              { className: 'grids grids2' },
              this.state.content && props.cat_content.map((content, key) => {
                return _react2.default.createElement(_Grid2.default, { content: content, key: content._id });
              }),
              this.state.content === undefined && 'Nothing Found'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'recent-videos' },
            _react2.default.createElement(
              'h5',
              null,
              _react2.default.createElement('img', { src: '/images/recent.png', alt: '' }),
              'Most-View-videos'
            )
          )
        )
      ),
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
  category: state.content.category, // Getting all Category
  cat_content: state.content.cat_content // Filtered Category Content
});

const mapDispatchToProps = dispatch => ({
  setCategory: data => dispatch((0, _content.setCategory)(data)),
  setCatContent: data => dispatch((0, _content.setCatContent)(data))
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Category);

/***/ })

})
//# sourceMappingURL=main.62481f87b2b0ed8ca347.hot-update.js.map