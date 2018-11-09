'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _router = require('./router/router');

var _router2 = _interopRequireDefault(_router);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _ajax = require('./config/ajax');

var _ajax2 = _interopRequireDefault(_ajax);

require('./style/common');

require('./config/rem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);
var router = new _vueRouter2.default({
  routes: _router2.default
});

new _vue2.default({
  router: router,
  store: _store2.default
}).$mount('#app');

//# sourceMappingURL=main-compiled.js.map