webpackJsonp([1],{

/***/ "+YxI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_firebase__ = __webpack_require__("o4cO");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
	data() {
		return {
			database: ''
		};
	},
	created() {
		var vm = this;
		__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].on('value', snap => {
			vm.database = snap.val();
		});
	}
});

/***/ }),

/***/ "+b5L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('br'),_vm._v(" "),_c('h4',{staticClass:"primary--text"},[_vm._v("Reserve The Table")])])],1),_vm._v(" "),(_vm.user)?_c('div',[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('div',[_c('br'),_vm._v(" "),_c('h6',[_vm._v(_vm._s(_vm.user))]),_vm._v(" "),_c('h6',[_vm._v("Name: "+_vm._s(_vm.firstName)+" "+_vm._s(_vm.lastName))])]),_vm._v(" "),_c('v-select',{ref:"branch",attrs:{"items":_vm.branches,"label":"Branch","required":""},model:{value:(_vm.branch),callback:function ($$v) {_vm.branch=$$v},expression:"branch"}}),_vm._v(" "),_c('v-text-field',{attrs:{"name":"table","label":"Number of seats","type":"number","required":""},model:{value:(_vm.seats),callback:function ($$v) {_vm.seats=$$v},expression:"seats"}})],1)],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm1":"","offset-md3":""}},[_c('v-date-picker',{attrs:{"landscape":""},model:{value:(_vm.date),callback:function ($$v) {_vm.date=$$v},expression:"date"}})],1)],1),_vm._v(" "),_c('h4',[_vm._v(_vm._s(_vm.date))]),_vm._v(" "),_c('br'),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","md12":"","offset-sm1":"","offset-md3":""}},[_c('v-time-picker',{attrs:{"landscape":""},model:{value:(_vm.time),callback:function ($$v) {_vm.time=$$v},expression:"time"}})],1)],1),_vm._v(" "),_c('h4',[_vm._v(_vm._s(_vm.time))]),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('v-btn',{staticClass:"white--text",attrs:{"block":"","primary":"","light":""},nativeOn:{"click":function($event){$event.preventDefault();_vm.submitReserve($event)}}},[_vm._v("Submit")])],1)],1)],1):_c('div',[_c('v-layout',[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":""}},[_c('v-flex',{staticClass:"text-xs-center"},[_c('h3',[_vm._v("No data")])])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "/qYV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_StoreItem_vue__ = __webpack_require__("NT/D");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_92c411e8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_StoreItem_vue__ = __webpack_require__("Wxr+");
function injectStyle (ssrContext) {
  __webpack_require__("PTIo")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-92c411e8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_StoreItem_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_92c411e8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_StoreItem_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "0JDE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "0VTN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LogOut_vue__ = __webpack_require__("Qby5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a5ff4fbc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LogOut_vue__ = __webpack_require__("zIkI");
function injectStyle (ssrContext) {
  __webpack_require__("ea5h")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LogOut_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a5ff4fbc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LogOut_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "1DFG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "1UWS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "2Rig":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs4":"","offset-sm2":""}},[_c('img',{attrs:{"src":_vm.item.imgSrc,"alt":"","height":"150px"}})]),_vm._v("\n\t\t"+_vm._s(_vm.item.name)+"\n\t\t"+_vm._s(_vm.item.price)+"\n\t\t"),_c('v-flex',{attrs:{"xs3":"","offset-sm2":""}},[_c('v-text-field',{attrs:{"name":"quantity","label":"Quantity","type":"number"},model:{value:(_vm.item.quantity),callback:function ($$v) {_vm.$set(_vm.item, "quantity", $$v)},expression:"item.quantity"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":"","offset-sm1":""}},[_c('p',[_vm._v("Subtotal: "+_vm._s(_vm.subTotal(_vm.item.quantity, _vm.item.price))+" baht")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs2":"","offset-sm2":""}},[_c('v-btn',{on:{"click":function($event){$event.preventDefault();_vm.deleteItem(_vm.eachKey)}}},[_vm._v("Delete")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "3URI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-layout',[_c('v-flex',[_c('br'),_vm._v(" "),_c('h3',[_vm._v("JSON STRUCTURE INSIDE FIREBASE")]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('br'),_vm._v(" "),_c('pre',[_vm._v(_vm._s(_vm.database))])])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "4b+M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Bill_vue__ = __webpack_require__("x7pp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d1cddf82_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Bill_vue__ = __webpack_require__("LztQ");
function injectStyle (ssrContext) {
  __webpack_require__("Wmiy")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Bill_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d1cddf82_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Bill_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "4cYq":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "4f+2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Branch_vue__ = __webpack_require__("pdNy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8fadf74c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Branch_vue__ = __webpack_require__("zJ0o");
function injectStyle (ssrContext) {
  __webpack_require__("0JDE")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Branch_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8fadf74c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Branch_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "6QxH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8JjG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fieldset',{class:[("starability-" + _vm.kind), 'rating']},[(_vm.legend)?_c('legend',[_vm._v(_vm._s(_vm.legend))]):_vm._e(),_vm._v(" "),_vm._l((_vm.items),function(item,index){return [_c('input',{attrs:{"type":"radio","id":_vm.uuid(index),"name":"rating"},domProps:{"value":item.value,"checked":_vm.hasChecked(index)},on:{"change":function($event){_vm.change($event)}}}),_vm._v(" "),_c('label',{staticClass:"touchable",attrs:{"for":_vm.uuid(index),"title":item.title || ''}},[_vm._v(_vm._s(item.label || ''))])]})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "8aDi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_firebase__ = __webpack_require__("o4cO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_bulma_rating__ = __webpack_require__("sawH");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	data() {
		return {
			branches: [],
			branch: '',
			uid: '',
			comment: '',
			foodQuality: '',
			service: '',
			firstName: '',
			lastName: '',
			isOrdered: false,
			stars: [{
				title: '5 Stars',
				value: 5
			}, {
				title: '4 Stars',
				value: 4
			}, {
				title: '3 Stars',
				value: 3
			}, {
				title: '2 Stars',
				value: 2
			}, {
				title: '1 Star',
				value: 1
			}],
			value: 1
		};
	},
	created() {
		var self = this;
		__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('branches').on('value', snapshot => {
			var snap = snapshot.val();
			var key = Object.keys(snap);
			self.branches = key;
		});

		// auth.onAuthStateChanged(function(user) {
		// 	if (user) {
		// 		self.uid = user.uid;

		// 		var vm = self;
		// 		ref.child('users').child(user.uid).once('value', snapshot => {
		// 			var snap = snapshot.val()
		// 			vm.firstName = snap["firstName"]
		// 			vm.lastName = snap["lastName"]
		// 			vm.isOrdered = snap.isOrdered
		// 		})
		// 	} else {
		// 		vm.$router.push({
		// 			name: 'Register'
		// 		});
		// 	}
		// });

		if (this.user !== null) {
			var vm = this;
			__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('users').child(this.user).on('value', snapshot => {
				var snap = snapshot.val();
				vm.firstName = snap["firstName"];
				vm.lastName = snap["lastName"];
				vm.isOrdered = snap["isOrdered"];
				console.log('order' + vm.isOrdered);
			});
		} else {
			alert('Please sign in');
			this.$router.push({
				name: 'SignIn'
			});
		}
	},
	methods: {
		submitFeedback() {
			if (this.isOrdered) {
				var vm = this;
				__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Feedback').child(this.branch).child(this.user).set({
					branch: vm.branch,
					comment: vm.comment,
					foodQuality: vm.foodQuality,
					service: vm.service
				}).then(() => {
					alert('Successfully submitted feedback');
					this.$router.push({
						name: 'View'
					});
				});
			} else {
				alert('No purchased found, cannot submit the feedback');
			}
		},
		update(val) {
			this.value = val;
		}
	},
	components: {
		Rating: __WEBPACK_IMPORTED_MODULE_1_vue_bulma_rating__["a" /* default */]
	},
	computed: {
		user() {
			return this.$store.getters.user;
		}
	}
});

/***/ }),

/***/ "Adyx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_firebase__ = __webpack_require__("o4cO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_bulma_rating__ = __webpack_require__("sawH");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	components: {
		Rating: __WEBPACK_IMPORTED_MODULE_1_vue_bulma_rating__["a" /* default */]
	},
	data() {
		return {
			name: '',
			description: '',
			price: '',
			imgSrc: '',
			uid: '',
			isMember: false,
			quantity: 1,
			stars: [{
				title: '5 Stars',
				value: 5
			}, {
				title: '4 Stars',
				value: 4
			}, {
				title: '3 Stars',
				value: 3
			}, {
				title: '2 Stars',
				value: 2
			}, {
				title: '1 Star',
				value: 1
			}],
			value: 0
		};
	},
	//		firebase: {
	//			selectedMenu: ref.child('Menu').child(this.paramId)
	//		},
	computed: {
		user() {
			return this.$store.getters.user;
		}
	},
	created() {
		let id = this.$route.params.id;
		var vm = this;
		__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Menu').child(id).once('value', snapshot => {
			let snap = snapshot.val();
			vm.name = snap.menuName, vm.description = snap.description, vm.price = snap.price, vm.imgSrc = snap.imgSrc;
		});

		// auth.onAuthStateChanged(function(user) {
		// 	if (user) {
		// 		self.uid = user.uid
		// 	}
		// })
	},
	methods: {
		addCart() {
			if (this.user !== null) {
				var vm = this;
				// console.log(this.quantity)
				__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Carts').child(this.user).child(this.name).set({
					name: vm.name,
					description: vm.description,
					price: vm.price,
					imgSrc: vm.imgSrc,
					quantity: vm.quantity
				}).then(() => {
					alert(this.name + ' has been added to your cart');
				}).catch(err => {
					alert(err);
				});
			} else {
				alert('Please Sign in');
			}
		},
		update(val) {
			this.value = value;
		}
	}

});

/***/ }),

/***/ "B2ay":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    legend: String,
    items: {
      type: Array,
      default: () => []
    },
    value: {
      type: Number,
      default: -1
    },
    kind: {
      type: String,
      default: 'basic',
      validator: val => ['basic', 'slot', 'grow', 'growRotate', 'fade', 'checkmark'].indexOf(val) > -1
    }
  },

  data() {
    return {
      selected: this.value
    };
  },

  methods: {
    uuid(index) {
      return `rating-${this._uid}-item-${index}`;
    },

    hasChecked(index) {
      return this.count - index === this.selected;
    },

    change(e) {
      this.selected = e.target.value >>> 0;
      this.$emit('change', this.selected);
    }
  },

  computed: {
    count() {
      return this.items.length;
    }
  }
});

/***/ }),

/***/ "BI03":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Bm4b":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "D9bN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('br'),_vm._v(" "),_c('v-card',[_c('v-card-title',[_c('v-flex',{attrs:{"xs6":""}},[_c('h4',[_vm._v(_vm._s(_vm.name))])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-chip',{attrs:{"color":"green","outline":"","label":""}},[_vm._v("฿"+_vm._s(_vm.price))])],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"fluid":"","xs12":"","md6":"","offset-xs2":"","offset-md3":""}},[_c('img',{attrs:{"src":_vm.imgSrc,"alt":""}})]),_vm._v(" "),_c('v-card-title',[_c('p',[_vm._v("Description: "+_vm._s(_vm.description))])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","offset-xs1":""}},[_c('rating',{staticClass:"starability-grow",attrs:{"items":_vm.stars,"legend":"Rating:","value":_vm.value},on:{"change":_vm.update}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","offset-md8":""}},[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"white--text",attrs:{"primary":"","light":""},on:{"click":function($event){$event.preventDefault();_vm.addCart($event)}}},[_vm._v("Add to cart")])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "E8rp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_View_vue__ = __webpack_require__("+YxI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ad4cb046_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_View_vue__ = __webpack_require__("3URI");
function injectStyle (ssrContext) {
  __webpack_require__("1DFG")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_View_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ad4cb046_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_View_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Fs8J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_firebase__ = __webpack_require__("o4cO");
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	data() {
		return {
			items: []
		};
	},
	created() {
		var vm = this;
		__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Menu').on('value', snapshot => {
			vm.items = snapshot.val();
		});
	}
});

/***/ }),

/***/ "GsTd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_firebase__ = __webpack_require__("o4cO");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
	props: ['item', 'eachKey', 'uid'],
	// mounted() {
	// 	console.log(this.eachKey)
	// 	ref.child('Carts').child(this.uid).child(this.eachKey).update({quantity: this.item.quantity})
	// },
	updated() {
		__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Carts').child(this.uid).child(this.eachKey).update({ quantity: this.item.quantity });
	},
	methods: {
		deleteItem(key) {
			__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Carts').child(this.uid).child(key).remove();
		},
		subTotal(quantity, price) {
			return quantity * price;
		}
	}
});

/***/ }),

/***/ "Hfoc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_StoreDetail_vue__ = __webpack_require__("Adyx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_10f2910a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_StoreDetail_vue__ = __webpack_require__("D9bN");
function injectStyle (ssrContext) {
  __webpack_require__("bRDR")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_StoreDetail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_10f2910a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_StoreDetail_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "HnBO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_firebase__ = __webpack_require__("o4cO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__StoreItem_vue__ = __webpack_require__("/qYV");
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	components: {
		appMenuItem: __WEBPACK_IMPORTED_MODULE_1__StoreItem_vue__["a" /* default */]
	},
	data() {
		return {
			displayList: true,
			uid: ''
		};
	},
	firebase: {
		menuList: __WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Menu')
	},
	computed: {
		user() {
			return this.$store.getters.user;
		}
	},
	created() {}
	// var self = this
	// auth.onAuthStateChanged(function(user) {
	// 	if (user) {
	// 		self.uid = user.uid;
	// 	}
	// });

	//		},
	//		created(){
	//			var vm = this;
	//			ref.child('Menu').once('value', snapshot => {
	//				vm.products = snapshot.val()
	//				var key = Object.keys(snapshot.val())
	//				console.log(key)
	//			})
	//			console.log(this.products)
	//		}
});

/***/ }),

/***/ "JJT7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_firebase__ = __webpack_require__("o4cO");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
	data() {
		return {
			email: '',
			password: '',
			firstName: '',
			lastName: '',
			phone: '',
			isMember: false,
			isOrdered: false
		};
	},
	computed: {
		user() {
			return this.$store.getters.user;
		}
	},
	methods: {
		loginWithEmailLocal() {
			// if (this.firstName && this.lastName && this.phone != '') {
			// 	var self = this;
			// 	 auth.createUserWithEmailAndPassword(this.email, this.password)
			// 	.then(function(value) {
			// 		console.log('Success')
			// 		var vm = self;
			// 		auth.onAuthStateChanged(function(user) {
			// 			if (user) {
			// 				console.log('uid: ' + user.uid)
			// 				ref.child('users').child(user.uid).set({
			// 					firstName: vm.firstName,
			// 					lastName: vm.lastName,
			// 					phone: vm.phone,
			// 					isMember: vm.isMember,
			// 					isOrdered: vm.isOrdered
			// 				})
			// 				vm.$router.push({
			// 					name: 'View'
			// 				});
			// 			} else {
			// 				console.log('no user')
			// 			}
			// 		});
			// 	})
			// 	.catch(function(error) {
			// 		var errorCode = error.code;
			// 		var errorMessage = error.message;
			// 		console.log(errorCode)
			// 		console.log(errorMessage)
			// 		alert(errorCode)
			// 	})
			// } else {
			// 	alert('Please fullfil the fields')
			// }
			var vm = this;
			if (this.firstName && this.lastName && this.phone !== '') {
				this.$store.dispatch('signUp', {
					email: this.email,
					password: this.email
				}).then(() => {
					__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('users').child(this.user).set({
						firstName: vm.firstName,
						lastName: vm.lastName,
						phone: vm.phone,
						isMember: vm.isMember,
						isOrdered: vm.isOrdered
					});
					alert('Successfuly register');
					vm.$router.push({
						name: 'HomePage'
					});
				}).catch(error => {
					alert(error);
				});
			} else {
				alert('Please fulfil');
			}
		}
	}
});

/***/ }),

/***/ "Jb8R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_firebase__ = __webpack_require__("o4cO");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	data() {
		return {
			email: '',
			password: ''
		};
	},
	// created(){
	// 	var vm = this
	// 	auth.onAuthStateChanged(function(user) {
	// 		if(user){
	// 			vm.isLogin = true;
	// 			console.log('login')
	// 		}else{
	// 			vm.isLogin = false;
	// 			console.log('logout')
	// 		}
	// 	})
	// },
	computed: {
		user() {
			return this.$store.getters.user;
		}
	},
	methods: {
		loginWithEmailLocal() {
			var vm = this;
			if (this.user === null) {
				console.log('user: null');
				this.$store.dispatch('signIn', { email: this.email, password: this.password }).then(() => {
					alert('Successfully sign in');
					vm.$router.push({
						name: 'HomePage'
					});
				}).catch(err => {
					alert(err);
				});
			} else {
				alert('You already sign in');
			}
			// if(!this.isLogin){
			// 	auth.signInWithEmailAndPassword(this.email, this.password)
			// 	.then(function(value) {
			// 		alert('Successfully sign in')
			// 		vm.$router.push({
			// 			name: 'HomePage'
			// 		})
			// 	})
			// 	.catch(function(error) {
			// 		// Handle Errors here.
			// 		console.log(error)
			// 		var errorCode = error.code;
			// 		var errorMessage = error.message;
			// 		alert(errorMessage)
			// 	})
			// }else{
			// 	alert('Already login')
			// }
		},
		logOut() {
			// auth.signOut().then(function() {
			// 	alert('Signed Out');
			// }, function(error) {
			// 	alert('Sign Out Error', error);
			// });
			this.$store.dispatch('signOut').then(() => {
				alert('Signed Out');
			}).catch(err => {
				alert(err);
			});
		},
		registerRoute() {
			this.$router.push({
				name: 'Register'
			});
		}
	}
});

/***/ }),

/***/ "LztQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-card',{staticStyle:{"overflow":"hidden"}},[_c('v-navigation-drawer',{staticStyle:{"z-index":"1"},attrs:{"permanent":"","absolute":""}},[_c('v-list',_vm._l((_vm.snap.slice().reverse()),function(i,index){return _c('v-list-tile',{attrs:{"ripple":""},on:{"click":function($event){$event.preventDefault();_vm.listTransaction(i)}}},[_c('v-list-tile-action',[_c('v-icon',{attrs:{"left":"","color":"green"}},[_vm._v("check_circle")])],1),_vm._v(" "),_c('v-list-tile-title',[_vm._v(_vm._s(i.info["date"])+", "+_vm._s(i.info["time"]))])],1)}))],1),_vm._v(" "),_c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm4":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[(_vm.clickedSnap.length !== 0)?_c('div',[_c('v-card',{attrs:{"offset-sm3":""}},[_c('v-card-title',[_c('div',[_c('h3',{staticClass:"primary--text"},[_vm._v("Bills")]),_vm._v(" "),_c('p',[_vm._v("Date: "+_vm._s(_vm.clickedSnap.info["date"]))]),_vm._v(" "),_c('p',[_vm._v("Time: "+_vm._s(_vm.clickedSnap.info["time"]))]),_vm._v(" "),_c('p',[_vm._v("Total: "+_vm._s(_vm.clickedSnap.info["totalPrice"])+" Baht")]),_vm._v(" "),_c('p',[_vm._v("Use Coupon: "+_vm._s(_vm.clickedSnap.info["discount"]))])])]),_vm._v(" "),_c('app-bill-item',{attrs:{"item":_vm.clickedSnap.list}})],1)],1):_c('div',[_c('v-card',[_c('v-card-title',[_c('div',[_c('h3',{staticClass:"primary--text"},[_vm._v("Bills")]),_vm._v(" "),_c('p',[_vm._v("Date: "+_vm._s(_vm.latestTransaction.info["date"]))]),_vm._v(" "),_c('p',[_vm._v("Time: "+_vm._s(_vm.latestTransaction.info["time"]))]),_vm._v(" "),_c('p',[_vm._v("Total: "+_vm._s(_vm.latestTransaction.info["totalPrice"])+" Baht")]),_vm._v(" "),_c('p',[_vm._v("Use Coupon: "+_vm._s(_vm.latestTransaction.info["discount"]))])])]),_vm._v(" "),_c('app-bill-item',{attrs:{"item":_vm.latestTransaction.list}})],1)],1)])],1)],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_424fc8c0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("N4qV");
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_424fc8c0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "N4qV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('v-navigation-drawer',{attrs:{"persistent":"","mini-variant":_vm.miniVariant,"clipped":_vm.clipped,"enable-resize-watcher":"","app":""},model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v},expression:"drawer"}},[_c('v-list',_vm._l((_vm.menuItem),function(item,i){return _c('v-list-tile',{key:i,attrs:{"router":"","to":item.link}},[_c('v-list-tile-action',[_c('v-icon',[_vm._v(" "+_vm._s(item.icon))])],1),_vm._v(" "),_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v(" "+_vm._s(item.title))])],1)],1)}))],1),_vm._v(" "),_c('v-toolbar',{attrs:{"fixed":"","app":"","clipped-left":_vm.clipped}},[_c('v-toolbar-side-icon',{on:{"click":function($event){$event.stopPropagation();_vm.drawer = !_vm.drawer}}}),_vm._v(" "),_c('v-toolbar-title',[_c('router-link',{staticStyle:{"cursor":"pointer"},attrs:{"to":"/","tag":"span"}},[_vm._v("Restaurant")])],1),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_vm._l((_vm.menuItem),function(item,i){return _c('v-btn',{key:i,attrs:{"flat":"","router":"","to":item.link}},[_c('v-icon',[_vm._v(_vm._s(item.icon))]),_vm._v("\n\t\t\t"+_vm._s(item.title)+"\n\t\t")],1)}),_vm._v(" "),_c('v-toolbar-title')],2),_vm._v(" "),_c('main',[_c('v-content',[_c('router-view')],1)],1),_vm._v(" "),_c('v-footer',{attrs:{"fixed":_vm.fixed,"app":""}},[_c('span',[_vm._v("© 2017")])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("Sazm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuefire__ = __webpack_require__("1mcD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuefire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuefire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuetify__ = __webpack_require__("3EgV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_firebase__ = __webpack_require__("o4cO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stylus_main_styl__ = __webpack_require__("tLfa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stylus_main_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__stylus_main_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router_index__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__("PJh5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_state_index__ = __webpack_require__("jyqu");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.













__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4_vuetify___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vuefire___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

const router = new __WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]({
  mode: 'history',
  routes: __WEBPACK_IMPORTED_MODULE_8__router_index__["a" /* routes */]
});

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router,
  store: __WEBPACK_IMPORTED_MODULE_10__components_state_index__["a" /* store */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_7__App__["a" /* default */] },
  created() {
    __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('App login');
        this.$store.dispatch('autoSign', user);
      } else {
        console.log('App logout');
      }
    });
  }
});

/***/ }),

/***/ "NT/D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_firebase__ = __webpack_require__("o4cO");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['item', 'uid', 'name'],
  data() {
    return {
      quantity: 1
    };
  },
  methods: {
    addCart(menuName) {
      if (this.uid !== null) {
        var vm = this;

        __WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Carts').child(this.uid).child(this.name).set({
          name: vm.item.menuName,
          description: vm.item.description,
          price: vm.item.price,
          imgSrc: vm.item.imgSrc,
          quantity: vm.quantity
        });
        alert(this.name + ' has been added to your cart');
      } else {
        alert('Please Sigin in');
      }
    }

  },
  computed: {
    shortDescription() {
      // strip HTML tags first
      let desc = this.item.description.replace(/<(?:.|\n)*?>/gm, ' ');
      if (desc && desc.length > 100) {
        return `${desc.substring(0, 100)}...`;
      }
      return desc;
    }
  }
});

/***/ }),

/***/ "NnV6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menuForm_vue__ = __webpack_require__("V5oG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b7fdce4a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menuForm_vue__ = __webpack_require__("PkP+");
function injectStyle (ssrContext) {
  __webpack_require__("qmQP")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menuForm_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b7fdce4a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menuForm_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "OYBl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['item'],
  methods: {
    subTotal(quantity, price) {
      return quantity * price;
    }
  }
});

/***/ }),

/***/ "OZEi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Feedback_vue__ = __webpack_require__("8aDi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_672558bd_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Feedback_vue__ = __webpack_require__("wFB/");
function injectStyle (ssrContext) {
  __webpack_require__("ow9q")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Feedback_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_672558bd_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Feedback_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "PTIo":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "PkP+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-card',[_c('v-card-title',[_c('h3',[_vm._v("Menu Form")])]),_vm._v(" "),_c('v-card-text',[_c('v-text-field',{attrs:{"name":"menuName","label":"Menu Name","type":"text","required":""},model:{value:(_vm.menuName),callback:function ($$v) {_vm.menuName=$$v},expression:"menuName"}}),_vm._v(" "),_c('v-text-field',{attrs:{"name":"imgSrc","label":"Image Source","type":"text","required":""},model:{value:(_vm.imgSrc),callback:function ($$v) {_vm.imgSrc=$$v},expression:"imgSrc"}}),_vm._v(" "),_c('v-text-field',{attrs:{"name":"description","label":"Description","type":"text","multi-line":"","required":""},model:{value:(_vm.descript),callback:function ($$v) {_vm.descript=$$v},expression:"descript"}}),_vm._v(" "),_c('v-text-field',{attrs:{"name":"price","label":"Price","type":"text","required":""},model:{value:(_vm.price),callback:function ($$v) {_vm.price=$$v},expression:"price"}})],1),_vm._v(" "),_c('v-btn',{attrs:{"block":"","primary":"","light":""},nativeOn:{"click":function($event){$event.preventDefault();_vm.submitMenu($event)}}},[_vm._v("Submit")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Qby5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_firebase__ = __webpack_require__("o4cO");
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {};
    },
    computed: {
        user() {
            return this.$store.getters.user;
        }
    },
    created() {
        // self = this;
        // auth.onAuthStateChanged(function(user) {
        //     if (user) {
        //         auth.signOut()
        //         alert('Signed')
        //     } else {
        //         alert('Please login first')
        //         self.$router.push({
        //             name: 'HomePage'
        //         })
        //     }
        // })

        if (this.user !== null) {
            var vm = this;
            // auth.signOut().then( () => {
            //     alert('Sign Out')
            // }).catch(err => {
            //     alert(err)
            // })
            this.$store.dispatch('signOut').then(() => {
                alert('Sign Out');
                vm.$router.push({
                    name: 'HomePage'
                });
            }).catch(err => {
                alert(err);
            });
        } else {
            this.$router.push({
                name: 'SignIn'
            });
        }
    }
});

/***/ }),

/***/ "Rkkl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BillItem_vue__ = __webpack_require__("OYBl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9093fb1c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BillItem_vue__ = __webpack_require__("ipkc");
function injectStyle (ssrContext) {
  __webpack_require__("l+iz")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BillItem_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9093fb1c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BillItem_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "TFTN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ShoppingCart_vue__ = __webpack_require__("dxHS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1d3d8060_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ShoppingCart_vue__ = __webpack_require__("z/EN");
function injectStyle (ssrContext) {
  __webpack_require__("Bm4b")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ShoppingCart_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1d3d8060_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ShoppingCart_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "UjiQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Store_vue__ = __webpack_require__("HnBO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_471761d9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Store_vue__ = __webpack_require__("nKO2");
function injectStyle (ssrContext) {
  __webpack_require__("zK68")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-471761d9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Store_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_471761d9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Store_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "V5oG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_firebase__ = __webpack_require__("o4cO");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
	data() {
		return {
			menuName: '',
			imgSrc: '',
			descript: '',
			price: ''
		};
	},
	methods: {
		submitMenu() {
			var vm = this;
			if (this.menuName && this.imgSrc && this.descript && this.price !== '') {
				__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Menu').child(this.menuName).set({
					menuName: vm.menuName,
					imgSrc: vm.imgSrc,
					description: vm.descript,
					price: vm.price
				});
				alert('Successfully submitted');
			} else {
				alert('Please fulfil the form');
			}
		}
	}
});

/***/ }),

/***/ "W0N5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('br'),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('v-card',[_c('v-card-title',[_c('h4',{staticClass:"primary--text"},[_vm._v("Sign In")])]),_vm._v(" "),_c('v-card-text',[_c('v-text-field',{attrs:{"name":"email","label":"Email","type":"email","required":""},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}}),_vm._v(" "),_c('v-text-field',{attrs:{"name":"password","label":"Password","type":"password","required":""},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}}),_vm._v(" "),_c('v-btn',{staticClass:"white--text",attrs:{"block":"","primary":"","light":""},nativeOn:{"click":function($event){$event.preventDefault();_vm.loginWithEmailLocal($event)}}},[_vm._v("Log In")]),_vm._v(" "),_c('v-btn',{staticClass:"white--text",attrs:{"block":"","primary":"","light":""},nativeOn:{"click":function($event){$event.preventDefault();_vm.logOut($event)}}},[_vm._v("Sign Out")]),_vm._v(" "),_c('br'),_c('hr'),_c('br'),_vm._v(" "),_c('br'),_c('h4',{staticClass:"primary--text"},[_vm._v("Have no account?")]),_c('br'),_vm._v(" "),_c('v-btn',{staticClass:"white--text",attrs:{"block":"","primary":"","light":""},nativeOn:{"click":function($event){$event.preventDefault();_vm.registerRoute($event)}}},[_vm._v("Register")])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Wmiy":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Wxr+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"grid"},[_c('router-link',{attrs:{"to":'/store/' + _vm.item.menuName,"tag":"a"}},[_c('v-card-media',{attrs:{"src":_vm.item.imgSrc,"height":"250px"}})],1),_vm._v(" "),_c('v-card-title',{attrs:{"primary-title":""}},[_c('div',{staticClass:"headline"},[_vm._v(_vm._s(_vm.item.menuName))])]),_vm._v(" "),_c('v-card-text',[_c('div',[_vm._v(_vm._s(_vm.shortDescription))]),_c('br'),_vm._v(" "),_c('div',[_c('p',[_vm._v("Price: "+_vm._s(_vm.item.price))])])]),_vm._v(" "),_c('v-card-actions',{staticClass:"blue darken-1 mt-0"},[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"flat":"","color":"yellow"},on:{"click":function($event){$event.preventDefault();_vm.addCart(_vm.name)}}},[_c('v-icon',[_vm._v("add_shopping_cart")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "XN6U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_firebase__ = __webpack_require__("o4cO");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
	data() {
		return {
			uid: '',
			reserveList: [],
			exist: false
		};
	},
	computed: {
		user() {
			return this.$store.getters.user;
		}
	},
	created() {
		var vm = this;
		// auth.onAuthStateChanged(function(user) {
		// 	if (user) {
		// 		vm.uid = user.uid
		// 		ref.child('Reserves').child(user.uid).on('value', snapshot => {
		// 			if (snapshot.exists()) {
		// 				vm.reserveList = snapshot.val()
		// 				vm.exist = true
		// 			} else {
		// 				vm.exist = false
		// 			}
		// 		})
		// 	}
		// })
		console.log('user: ' + this.user);
		if (this.user !== null) {
			__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Reserves').child(this.user).on('value', snapshot => {
				if (snapshot.exists()) {
					var snap = snapshot.val();
					vm.reserveList = snap;
					vm.exist = true;
				} else {
					vm.exist = false;
				}
			});
			console.log(this.reserveList);
		} else {
			vm.exist = false;
		}
	},
	methods: {
		cancelReserve(key) {
			__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Reserves').child(this.user).child(key).remove();
		}
	}
});

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Register_vue__ = __webpack_require__("dIqY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Feedback_vue__ = __webpack_require__("OZEi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_View_vue__ = __webpack_require__("E8rp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Branch_vue__ = __webpack_require__("4f+2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Home_vue__ = __webpack_require__("lO7g");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Reserve_vue__ = __webpack_require__("zjz1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_menuForm_vue__ = __webpack_require__("NnV6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Store_vue__ = __webpack_require__("UjiQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_StoreDetail_vue__ = __webpack_require__("Hfoc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_ShoppingCart_vue__ = __webpack_require__("TFTN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_SignIn_vue__ = __webpack_require__("ezBX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Bill_vue__ = __webpack_require__("4b+M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_TableForm_vue__ = __webpack_require__("eChP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_ReserveList_vue__ = __webpack_require__("zwPt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_LogOut_vue__ = __webpack_require__("0VTN");


















__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

const routes = [{
	path: '/Home',
	name: 'HomePage',
	component: __WEBPACK_IMPORTED_MODULE_6__components_Home_vue__["a" /* default */]
}, {
	path: '/register',
	name: 'Register',
	component: __WEBPACK_IMPORTED_MODULE_2__components_Register_vue__["a" /* default */]
}, {
	path: '/view',
	name: 'View',
	component: __WEBPACK_IMPORTED_MODULE_4__components_View_vue__["a" /* default */]
}, {
	path: '/feedback',
	name: 'Feedback',
	component: __WEBPACK_IMPORTED_MODULE_3__components_Feedback_vue__["a" /* default */]
}, {
	path: '/branch',
	name: 'Branch',
	component: __WEBPACK_IMPORTED_MODULE_5__components_Branch_vue__["a" /* default */]
}, {
	path: '/reserve',
	name: 'Reserve',
	component: __WEBPACK_IMPORTED_MODULE_7__components_Reserve_vue__["a" /* default */]
}, {
	path: '/menuForm',
	name: 'MenuForm',
	component: __WEBPACK_IMPORTED_MODULE_8__components_menuForm_vue__["a" /* default */]
}, {
	path: '/store',
	name: 'Store',
	component: __WEBPACK_IMPORTED_MODULE_9__components_Store_vue__["a" /* default */]
}, {
	path: '/store/:id',
	name: 'StoreDetail',
	component: __WEBPACK_IMPORTED_MODULE_10__components_StoreDetail_vue__["a" /* default */]
}, {
	path: '/shoppingCart',
	name: 'ShoppingCart',
	component: __WEBPACK_IMPORTED_MODULE_11__components_ShoppingCart_vue__["a" /* default */]
}, {
	path: '/login',
	name: 'SignIn',
	component: __WEBPACK_IMPORTED_MODULE_12__components_SignIn_vue__["a" /* default */]
}, {
	path: '/bill',
	name: 'Bill',
	component: __WEBPACK_IMPORTED_MODULE_13__components_Bill_vue__["a" /* default */]
}, {
	path: '/tableForm',
	name: 'TableForm',
	component: __WEBPACK_IMPORTED_MODULE_14__components_TableForm_vue__["a" /* default */]
}, {
	path: '/reserveList',
	name: 'ReserveList',
	component: __WEBPACK_IMPORTED_MODULE_15__components_ReserveList_vue__["a" /* default */]
}, {
	path: '/logOut',
	name: 'LogOut',
	component: __WEBPACK_IMPORTED_MODULE_16__components_LogOut_vue__["a" /* default */]
}, {
	path: '*',
	redirect: '/Home'
}];
/* harmony export (immutable) */ __webpack_exports__["a"] = routes;


/***/ }),

/***/ "bRDR":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "bUb+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CartItem_vue__ = __webpack_require__("GsTd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_741e308b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CartItem_vue__ = __webpack_require__("2Rig");
function injectStyle (ssrContext) {
  __webpack_require__("4cYq")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CartItem_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_741e308b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CartItem_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "bo2U":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dIqY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Register_vue__ = __webpack_require__("JJT7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6838dcdb_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Register_vue__ = __webpack_require__("lF1S");
function injectStyle (ssrContext) {
  __webpack_require__("6QxH")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Register_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6838dcdb_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Register_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "dxHS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_firebase__ = __webpack_require__("o4cO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CartItem_vue__ = __webpack_require__("bUb+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("PJh5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
	data() {
		return {
			uid: '',
			list: [],
			discount: '',
			coupon: [],
			isDiscount: false,
			isMember: false
		};
	},
	components: {
		appCartItem: __WEBPACK_IMPORTED_MODULE_1__CartItem_vue__["a" /* default */]
	},
	created() {
		var vm = this;
		// auth.onAuthStateChanged(function(user) {
		// 	if (user) {
		// 		var vm = self;
		// 		self.uid = user.uid

		// 		ref.child('users').child(user.uid).on('value', snapshot => {
		// 			var snap = snapshot.val()

		// 			console.log(snap);
		// 			vm.isMember = snap.isMember
		// 		})

		// 		ref.child('Carts').child(user.uid).on('value', snapshot => {
		// 			vm.list = snapshot.val()
		// 		})
		// 	}else{
		// 		alert('Please Sign in')
		// 		self.$router.push({
		// 			name: 'SignIn'
		// 		})
		// 	}
		// })
		if (this.user !== null) {
			__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('users').child(this.user).on('value', snapshot => {
				var snap = snapshot.val();
				vm.isMember = snap.isMember;
			});

			__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Carts').child(this.user).on('value', snapshot => {
				var snap = snapshot.val();
				vm.list = snap;
			});
		} else {
			alert('Please Sign in');
			this.$router.push({
				name: 'SignIn'
			});
		}

		__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Discounts').once('value', snapshot => {
			var snap = snapshot.val();
			vm.coupon = snap;
		});
	},
	computed: {

		totalPrice() {
			let total = 0;
			for (var key in this.list) {
				total = parseFloat(this.list[key].price) * this.list[key].quantity + total;
			}

			for (var key in this.coupon) {
				if (this.discount === key) {
					total = total - this.coupon[key].discount;
					this.isDiscount = true;
				} else {
					this.isDiscount = false;
				}
			}

			if (total < 0) {
				total = 0;
			}

			return total;
		},
		discountValue() {
			var discount = 0;
			for (var key in this.coupon) {
				discount = this.coupon[key].discount;
				console.log(discount);
			}
			return discount;
		},
		user() {
			return this.$store.getters.user;
		}
	},
	methods: {
		deleteItem(key) {
			__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Carts').child(this.user).child(key).remove();
		},
		submitCart() {
			if (this.isMember) {
				__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Carts').child(this.user).once('value', snap => {
					var newKey = __WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Transactions').child(this.user).push().key;
					//					var updates = {}
					//					updates['/Transactions/' + this.uid + newKey] = snap.val()
					__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Transactions').child(this.user).child(newKey).child('list').set(snap.val(), error => {
						if (!error) {
							__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Transactions').child(this.user).child(newKey).child('info').update({
								date: __WEBPACK_IMPORTED_MODULE_2_moment___default()().format('L'),
								time: __WEBPACK_IMPORTED_MODULE_2_moment___default()().format('LTS'),
								totalPrice: this.totalPrice,
								discount: this.isDiscount
							});
							__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Carts').child(this.user).remove();
						} else {
							alert(error);
						}
					});
				});
				__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('users').child(this.user).update({
					isOrdered: true
				});
			} else {
				alert('You must be a member, in order to make an order');
			}
		}
	}

	//					ref.child('Transactions').child(this.uid).push(snap.val(), error => {
	//						if(!error) {
	//							var date = new Date()
	//							ref.child('Transactions').child(this.uid).update({date: date.toLocaleDateString(), time: date.toLocaleTimeString(), totalPrice: this.totalPrice, discount: this.isDiscount})
	//							ref.child('Carts').child(this.uid).remove()
	//						}else {
	//							alert(error)
	//						}
	//					})

});

/***/ }),

/***/ "eChP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TableForm_vue__ = __webpack_require__("wguF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c0af63ac_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TableForm_vue__ = __webpack_require__("t2s4");
function injectStyle (ssrContext) {
  __webpack_require__("1UWS")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TableForm_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c0af63ac_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TableForm_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "ea5h":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ezBX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignIn_vue__ = __webpack_require__("Jb8R");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04418b0c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SignIn_vue__ = __webpack_require__("W0N5");
function injectStyle (ssrContext) {
  __webpack_require__("bo2U")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SignIn_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04418b0c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SignIn_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "iJlW":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ipkc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},_vm._l((_vm.item),function(i,key){return _c('div',{staticClass:"ma-3"},[_c('v-card',{staticClass:"white--text",attrs:{"color":"blue base"}},[_c('v-container',[_c('v-layout',{attrs:{"xs7":""}},[_c('div',[_c('div',{staticClass:"headline"},[_vm._v(_vm._s(key))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(i.description))])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs5":""}},[_c('v-card-media',{attrs:{"src":i.imgSrc,"height":"100px","contain":""}}),_vm._v(" "),_c('div',[_c('p',[_vm._v("Price: "+_vm._s(i.price))]),_vm._v(" "),_c('p',[_vm._v("Quantity: "+_vm._s(i.quantity))]),_vm._v(" "),_c('p',[_vm._v("subTotal: "+_vm._s(_vm.subTotal(i.quantity, i.price)))])])],1)],1)],1)],1)}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "jyqu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("NYxO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_firebase__ = __webpack_require__("o4cO");




__WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* default */]);

const store = new __WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* default */].Store({
    state: {
        user: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        signUp({ commit }, payload) {
            return new Promise((resolve, reject) => {
                __WEBPACK_IMPORTED_MODULE_2__config_firebase__["a" /* auth */].createUserWithEmailAndPassword(payload.email, payload.password).then(user => {
                    const uid = user.uid;
                    commit('setUser', uid);
                    resolve();
                }).catch(err => {
                    reject(err);
                });
            });
        },
        signIn({ commit }, payload) {
            return new Promise((resolve, reject) => {
                __WEBPACK_IMPORTED_MODULE_2__config_firebase__["a" /* auth */].signInWithEmailAndPassword(payload.email, payload.password).then(user => {
                    const uid = user.uid;
                    commit('setUser', uid);
                    resolve();
                }).catch(err => {
                    reject(err);
                });
            });
        },
        signOut({ commit }) {
            return new Promise((resolve, reject) => {
                __WEBPACK_IMPORTED_MODULE_2__config_firebase__["a" /* auth */].signOut().then(() => {
                    commit('setUser', null);
                    resolve();
                }).catch(err => {
                    reject(err);
                });
            });
        },
        autoSign({ commit }, payload) {
            commit('setUser', payload.uid);
        }
    },
    getters: {
        user(state) {
            return state.user;
        }
    }
});
/* harmony export (immutable) */ __webpack_exports__["a"] = store;


/***/ }),

/***/ "kdAv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "l+iz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lD2Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('br'),_vm._v(" "),_c('h3',{staticClass:"primary--text text-xs-center"},[_vm._v("Home Page")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('v-carousel',_vm._l((_vm.items),function(item,i){return _c('v-carousel-item',{key:i,attrs:{"src":item.imgSrc}})}))],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "lF1S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('br'),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('v-card',[_c('v-card-title',[_c('h4',{staticClass:"text-center"},[_vm._v("Registration")])]),_vm._v(" "),_c('v-card-text',[_c('v-text-field',{attrs:{"name":"email","label":"Email","type":"email","required":""},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}}),_vm._v(" "),_c('v-text-field',{attrs:{"name":"password","label":"Password","type":"password","required":""},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}}),_vm._v(" "),_c('v-text-field',{attrs:{"name":"firstName","label":"firstName:","type":"text","required":""},model:{value:(_vm.firstName),callback:function ($$v) {_vm.firstName=$$v},expression:"firstName"}}),_vm._v(" "),_c('v-text-field',{attrs:{"name":"lastName","label":"lastName:","type":"text","required":""},model:{value:(_vm.lastName),callback:function ($$v) {_vm.lastName=$$v},expression:"lastName"}}),_vm._v(" "),_c('v-text-field',{attrs:{"name":"phone","label":"Phone","type":"number"},model:{value:(_vm.phone),callback:function ($$v) {_vm.phone=$$v},expression:"phone"}}),_vm._v(" "),_c('v-btn',{staticClass:"white--text",attrs:{"block":"","primary":"","light":""},nativeOn:{"click":function($event){$event.preventDefault();_vm.loginWithEmailLocal($event)}}},[_vm._v("Sign Up")])],1)],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('div',{staticClass:"bind"},[_c('br'),_vm._v(" "),_c('h4',[_vm._v("Binding")]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('p',[_vm._v("Email: "+_vm._s(_vm.email))]),_vm._v(" "),_c('p',[_vm._v("Password: "+_vm._s(_vm.password))]),_vm._v(" "),_c('p',[_vm._v("FirstName: "+_vm._s(_vm.firstName)+" ")]),_vm._v(" "),_c('p',[_vm._v("LastName: "+_vm._s(_vm.lastName))]),_vm._v(" "),_c('p',[_vm._v("Phone: "+_vm._s(_vm.phone))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.user))])])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "lO7g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__("Fs8J");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4517b517_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__("lD2Y");
function injectStyle (ssrContext) {
  __webpack_require__("BI03")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4517b517_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "nKO2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":"","grid-list-xl":""}},[_c('br'),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":"","justify-center":""}},_vm._l((_vm.menuList),function(prod,idx){return _c('v-flex',{key:prod.id,attrs:{"sm6":"","md3":"","lg3":""}},[_c('app-menu-item',{key:prod.id,attrs:{"item":prod,"uid":_vm.user,"name":prod.menuName}})],1)}))],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "o4cO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("Sazm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);


// Initialize Firebase
var config = {
	apiKey: "AIzaSyDQS5Qzyz_leENK1C26QOyif6tWmMS3Hjs",
	authDomain: "restaurant-901d0.firebaseapp.com",
	databaseURL: "https://restaurant-901d0.firebaseio.com",
	projectId: "restaurant-901d0",
	storageBucket: "restaurant-901d0.appspot.com",
	messagingSenderId: "335039259620"
};

__WEBPACK_IMPORTED_MODULE_0_firebase___default.a.initializeApp(config);

const ref = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.database().ref();
/* harmony export (immutable) */ __webpack_exports__["b"] = ref;

const auth = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth();
/* harmony export (immutable) */ __webpack_exports__["a"] = auth;


/***/ }),

/***/ "ow9q":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "pdNy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_firebase__ = __webpack_require__("o4cO");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
	data() {
		return {
			branchName: '',
			location: '',
			descript: ''
		};
	},
	methods: {
		submitBranch() {
			if (this.branchName && this.location && this.descript != '') {
				var vm = this;
				__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('branches').child(this.branchName).set({
					location: vm.location,
					descript: vm.descript
				});
				alert('Success');
				this.$router.push({ name: 'View' });
			} else {
				alert('Please fulfil the fields');
			}
		}
	}
});

/***/ }),

/***/ "qmQP":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "sawH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_Rating_vue__ = __webpack_require__("B2ay");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_9ee88b18_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_Rating_vue__ = __webpack_require__("8JjG");
function injectStyle (ssrContext) {
  __webpack_require__("uOtp")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_Rating_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_9ee88b18_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_Rating_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "t2s4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-card',[_c('h3',[_vm._v("Realtime Table")]),_vm._v(" "),_c('hr'),_vm._v(" "),_vm._l((_vm.table),function(type,keys){return _c('div',[_c('p',[_vm._v("Table Type: "+_vm._s(keys))]),_vm._v(" "),_vm._l((type),function(tab,key){return _c('div',[_c('p',[_vm._v(_vm._s(key))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(tab.tableNo)+" : "+_vm._s(tab.status)+" "),_c('v-btn',{on:{"click":function($event){$event.preventDefault();_vm.revert(tab.status, key, keys)}}},[_vm._v("Reserve")])],1)])})],2)})],2),_vm._v(" "),_c('v-card',[_c('v-card-title',[_c('h3',[_vm._v("Discount Code")])]),_vm._v(" "),_c('v-card-text',[_c('v-text-field',{attrs:{"name":"Coupon","label":"Coupon Code","type":"text","required":""},model:{value:(_vm.coupon),callback:function ($$v) {_vm.coupon=$$v},expression:"coupon"}}),_vm._v(" "),_c('v-text-field',{attrs:{"name":"Discount","label":"Discount Price","type":"number","required":""},model:{value:(_vm.discount),callback:function ($$v) {_vm.discount=$$v},expression:"discount"}}),_vm._v(" "),_c('v-btn',{on:{"click":function($event){$event.preventDefault();_vm.submitDiscount($event)}}},[_vm._v("Submit")])],1)],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('v-card',[_c('v-card-title',[_c('h3',[_vm._v("Table Form")])]),_vm._v(" "),_c('v-card-text',[_c('v-text-field',{attrs:{"name":"type","label":"Table Types","type":"number","required":""},model:{value:(_vm.type),callback:function ($$v) {_vm.type=$$v},expression:"type"}}),_vm._v(" "),_c('v-text-field',{attrs:{"name":"tableNo","label":"Table Number","type":"text","required":""},model:{value:(_vm.tableNo),callback:function ($$v) {_vm.tableNo=$$v},expression:"tableNo"}}),_vm._v(" "),_c('v-text-field',{attrs:{"name":"status","label":"Status","type":"text","required":""},model:{value:(_vm.status),callback:function ($$v) {_vm.status=$$v},expression:"status"}})],1),_vm._v(" "),_c('v-btn',{attrs:{"block":"","primary":"","light":""},nativeOn:{"click":function($event){$event.preventDefault();_vm.submitTable($event)}}},[_vm._v("Submit")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "tLfa":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "uOtp":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "urZT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_firebase__ = __webpack_require__("o4cO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_bulma_rating__ = __webpack_require__("sawH");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	data() {
		return {
			date: null,
			time: null,
			branches: [],
			branch: '',
			firstName: '',
			lastName: '',
			uid: '',
			seats: 0,
			type: 4,
			phone: '',
			exist: false
		};
	},
	created() {
		var vm = this;

		// auth.onAuthStateChanged(function(user) {
		// 	if (user) {
		// 		self.uid = user.uid;
		// 		console.log(user.uid)
		// 		var vm = self;
		// 		ref.child('users').child(user.uid).once('value', snapshot => {
		// 			var snap = snapshot.val()
		// 			console.log(snap)
		// 			vm.firstName = snap["firstName"]
		// 			vm.lastName = snap["lastName"]
		// 			vm.phone = snap["phone"]
		// 			vm.exist = true
		// 		})
		// 	} else {
		// 		// alert('Please sign in')
		// 		self.$router.push({
		// 			name: 'SignIn'
		// 		});
		// 	}
		// });
		if (this.user !== null) {
			__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('users').child(this.user).once('value', snapshot => {
				var snap = snapshot.val();
				vm.firstName = snap["firstName"];
				vm.lastName = snap["lastName"];
				vm.phone = snap["phone"];
			});

			__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('branches').once('value', snapshot => {
				var snap = snapshot.val();
				var key = Object.keys(snap);
				console.log(key);
				vm.branches = key;
			});
		}
	},
	methods: {
		submitReserve() {
			var vm = this;

			__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Reserves').child(this.user).push({
				date: vm.date,
				time: vm.time,
				branch: vm.branch,
				seats: vm.seats,
				firstName: vm.firstName,
				lastName: vm.lastName,
				phone: vm.phone
			}).then(() => {
				alert('Successfully submitted Reserved');
			});
		}
	},
	computed: {
		user() {
			return this.$store.getters.user;
		}
	}
});

/***/ }),

/***/ "uslO":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "3CJN",
	"./af.js": "3CJN",
	"./ar": "3MVc",
	"./ar-dz": "tkWw",
	"./ar-dz.js": "tkWw",
	"./ar-kw": "j8cJ",
	"./ar-kw.js": "j8cJ",
	"./ar-ly": "wPpW",
	"./ar-ly.js": "wPpW",
	"./ar-ma": "dURR",
	"./ar-ma.js": "dURR",
	"./ar-sa": "7OnE",
	"./ar-sa.js": "7OnE",
	"./ar-tn": "BEem",
	"./ar-tn.js": "BEem",
	"./ar.js": "3MVc",
	"./az": "eHwN",
	"./az.js": "eHwN",
	"./be": "3hfc",
	"./be.js": "3hfc",
	"./bg": "lOED",
	"./bg.js": "lOED",
	"./bm": "hng5",
	"./bm.js": "hng5",
	"./bn": "aM0x",
	"./bn.js": "aM0x",
	"./bo": "w2Hs",
	"./bo.js": "w2Hs",
	"./br": "OSsP",
	"./br.js": "OSsP",
	"./bs": "aqvp",
	"./bs.js": "aqvp",
	"./ca": "wIgY",
	"./ca.js": "wIgY",
	"./cs": "ssxj",
	"./cs.js": "ssxj",
	"./cv": "N3vo",
	"./cv.js": "N3vo",
	"./cy": "ZFGz",
	"./cy.js": "ZFGz",
	"./da": "YBA/",
	"./da.js": "YBA/",
	"./de": "DOkx",
	"./de-at": "8v14",
	"./de-at.js": "8v14",
	"./de-ch": "Frex",
	"./de-ch.js": "Frex",
	"./de.js": "DOkx",
	"./dv": "rIuo",
	"./dv.js": "rIuo",
	"./el": "CFqe",
	"./el.js": "CFqe",
	"./en-au": "Sjoy",
	"./en-au.js": "Sjoy",
	"./en-ca": "Tqun",
	"./en-ca.js": "Tqun",
	"./en-gb": "hPuz",
	"./en-gb.js": "hPuz",
	"./en-ie": "ALEw",
	"./en-ie.js": "ALEw",
	"./en-nz": "dyB6",
	"./en-nz.js": "dyB6",
	"./eo": "Nd3h",
	"./eo.js": "Nd3h",
	"./es": "LT9G",
	"./es-do": "7MHZ",
	"./es-do.js": "7MHZ",
	"./es-us": "INcR",
	"./es-us.js": "INcR",
	"./es.js": "LT9G",
	"./et": "XlWM",
	"./et.js": "XlWM",
	"./eu": "sqLM",
	"./eu.js": "sqLM",
	"./fa": "2pmY",
	"./fa.js": "2pmY",
	"./fi": "nS2h",
	"./fi.js": "nS2h",
	"./fo": "OVPi",
	"./fo.js": "OVPi",
	"./fr": "tzHd",
	"./fr-ca": "bXQP",
	"./fr-ca.js": "bXQP",
	"./fr-ch": "VK9h",
	"./fr-ch.js": "VK9h",
	"./fr.js": "tzHd",
	"./fy": "g7KF",
	"./fy.js": "g7KF",
	"./gd": "nLOz",
	"./gd.js": "nLOz",
	"./gl": "FuaP",
	"./gl.js": "FuaP",
	"./gom-latn": "+27R",
	"./gom-latn.js": "+27R",
	"./gu": "rtsW",
	"./gu.js": "rtsW",
	"./he": "Nzt2",
	"./he.js": "Nzt2",
	"./hi": "ETHv",
	"./hi.js": "ETHv",
	"./hr": "V4qH",
	"./hr.js": "V4qH",
	"./hu": "xne+",
	"./hu.js": "xne+",
	"./hy-am": "GrS7",
	"./hy-am.js": "GrS7",
	"./id": "yRTJ",
	"./id.js": "yRTJ",
	"./is": "upln",
	"./is.js": "upln",
	"./it": "FKXc",
	"./it.js": "FKXc",
	"./ja": "ORgI",
	"./ja.js": "ORgI",
	"./jv": "JwiF",
	"./jv.js": "JwiF",
	"./ka": "RnJI",
	"./ka.js": "RnJI",
	"./kk": "j+vx",
	"./kk.js": "j+vx",
	"./km": "5j66",
	"./km.js": "5j66",
	"./kn": "gEQe",
	"./kn.js": "gEQe",
	"./ko": "eBB/",
	"./ko.js": "eBB/",
	"./ky": "6cf8",
	"./ky.js": "6cf8",
	"./lb": "z3hR",
	"./lb.js": "z3hR",
	"./lo": "nE8X",
	"./lo.js": "nE8X",
	"./lt": "/6P1",
	"./lt.js": "/6P1",
	"./lv": "jxEH",
	"./lv.js": "jxEH",
	"./me": "svD2",
	"./me.js": "svD2",
	"./mi": "gEU3",
	"./mi.js": "gEU3",
	"./mk": "Ab7C",
	"./mk.js": "Ab7C",
	"./ml": "oo1B",
	"./ml.js": "oo1B",
	"./mr": "5vPg",
	"./mr.js": "5vPg",
	"./ms": "ooba",
	"./ms-my": "G++c",
	"./ms-my.js": "G++c",
	"./ms.js": "ooba",
	"./my": "F+2e",
	"./my.js": "F+2e",
	"./nb": "FlzV",
	"./nb.js": "FlzV",
	"./ne": "/mhn",
	"./ne.js": "/mhn",
	"./nl": "3K28",
	"./nl-be": "Bp2f",
	"./nl-be.js": "Bp2f",
	"./nl.js": "3K28",
	"./nn": "C7av",
	"./nn.js": "C7av",
	"./pa-in": "pfs9",
	"./pa-in.js": "pfs9",
	"./pl": "7LV+",
	"./pl.js": "7LV+",
	"./pt": "ZoSI",
	"./pt-br": "AoDM",
	"./pt-br.js": "AoDM",
	"./pt.js": "ZoSI",
	"./ro": "wT5f",
	"./ro.js": "wT5f",
	"./ru": "ulq9",
	"./ru.js": "ulq9",
	"./sd": "fW1y",
	"./sd.js": "fW1y",
	"./se": "5Omq",
	"./se.js": "5Omq",
	"./si": "Lgqo",
	"./si.js": "Lgqo",
	"./sk": "OUMt",
	"./sk.js": "OUMt",
	"./sl": "2s1U",
	"./sl.js": "2s1U",
	"./sq": "V0td",
	"./sq.js": "V0td",
	"./sr": "f4W3",
	"./sr-cyrl": "c1x4",
	"./sr-cyrl.js": "c1x4",
	"./sr.js": "f4W3",
	"./ss": "7Q8x",
	"./ss.js": "7Q8x",
	"./sv": "Fpqq",
	"./sv.js": "Fpqq",
	"./sw": "DSXN",
	"./sw.js": "DSXN",
	"./ta": "+7/x",
	"./ta.js": "+7/x",
	"./te": "Nlnz",
	"./te.js": "Nlnz",
	"./tet": "gUgh",
	"./tet.js": "gUgh",
	"./th": "XzD+",
	"./th.js": "XzD+",
	"./tl-ph": "3LKG",
	"./tl-ph.js": "3LKG",
	"./tlh": "m7yE",
	"./tlh.js": "m7yE",
	"./tr": "k+5o",
	"./tr.js": "k+5o",
	"./tzl": "iNtv",
	"./tzl.js": "iNtv",
	"./tzm": "FRPF",
	"./tzm-latn": "krPU",
	"./tzm-latn.js": "krPU",
	"./tzm.js": "FRPF",
	"./uk": "ntHu",
	"./uk.js": "ntHu",
	"./ur": "uSe8",
	"./ur.js": "uSe8",
	"./uz": "XU1s",
	"./uz-latn": "/bsm",
	"./uz-latn.js": "/bsm",
	"./uz.js": "XU1s",
	"./vi": "0X8Q",
	"./vi.js": "0X8Q",
	"./x-pseudo": "e/KL",
	"./x-pseudo.js": "e/KL",
	"./yo": "YXlc",
	"./yo.js": "YXlc",
	"./zh-cn": "Vz2w",
	"./zh-cn.js": "Vz2w",
	"./zh-hk": "ZUyn",
	"./zh-hk.js": "ZUyn",
	"./zh-tw": "BbgG",
	"./zh-tw.js": "BbgG"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "uslO";

/***/ }),

/***/ "vjE1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('br'),_vm._v(" "),_c('h4',{staticClass:"primary--text text-xs-center"},[_vm._v("Reserve List")]),_vm._v(" "),(_vm.exist)?_c('div',_vm._l((_vm.reserveList),function(item,key){return _c('div',{staticClass:"ma-3"},[_c('v-card',{staticClass:"white--text",attrs:{"color":"cyan darken-1"}},[_c('v-container',[_c('p',[_vm._v("Name: "+_vm._s(item.firstName)+" "+_vm._s(item.lastName))]),_vm._v(" "),_c('p',[_vm._v("Phone: "+_vm._s(item.phone))]),_vm._v(" "),_c('p',[_vm._v("Date: "+_vm._s(item.date))]),_vm._v(" "),_c('p',[_vm._v("Time: "+_vm._s(item.time))]),_vm._v(" "),_c('p',[_vm._v("Branch: "+_vm._s(item.branch))]),_vm._v(" "),_c('p',[_vm._v("Seats: "+_vm._s(item.seats))])]),_vm._v(" "),_c('div',[_c('v-btn',{on:{"click":function($event){$event.preventDefault();_vm.cancelReserve(key)}}},[_vm._v("Cancel")])],1)],1)],1)})):_c('div',[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":""}},[_c('v-flex',{staticClass:"text-xs-center"},[_c('v-icon',{attrs:{"large":"","color":"blue darken-2"}},[_vm._v("error outline")]),_vm._v(" "),_c('h4',[_vm._v("No reservation")])],1)],1)],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "wFB/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('v-flex',{attrs:{"xs12":"","sm12":""}},[_c('v-card',[_c('v-card-title',[_c('h3',{staticClass:"primary--text"},[_vm._v("Feedback")])]),_vm._v(" "),_c('v-card-text',[_c('p',[_vm._v(_vm._s(_vm.user))]),_vm._v(" "),_c('p',[_vm._v("Name: "+_vm._s(_vm.firstName)+" "+_vm._s(_vm.lastName))]),_vm._v(" "),_c('v-select',{ref:"branch",attrs:{"items":_vm.branches,"label":"Branch","required":""},model:{value:(_vm.branch),callback:function ($$v) {_vm.branch=$$v},expression:"branch"}}),_vm._v(" "),_c('v-text-field',{attrs:{"name":"comment","label":"Comment","type":"text","multi-line":""},model:{value:(_vm.comment),callback:function ($$v) {_vm.comment=$$v},expression:"comment"}}),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-subheader',[_vm._v("Food Quality:")]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('br'),_vm._v(" "),_c('v-radio-group',{attrs:{"row":""},model:{value:(_vm.foodQuality),callback:function ($$v) {_vm.foodQuality=$$v},expression:"foodQuality"}},[_c('v-radio',{attrs:{"label":"Excellent","value":"4"}}),_vm._v(" "),_c('v-radio',{attrs:{"label":"Good","value":"3","color":"success"}}),_vm._v(" "),_c('v-radio',{attrs:{"label":"Fair","value":"2","color":"warning"}}),_vm._v(" "),_c('v-radio',{attrs:{"label":"Poor","value":"1","color":"error"}})],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('div',[_c('v-subheader',[_vm._v("Service:")]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('br'),_vm._v(" "),_c('v-radio-group',{attrs:{"row":""},model:{value:(_vm.service),callback:function ($$v) {_vm.service=$$v},expression:"service"}},[_c('v-radio',{attrs:{"label":"Excellent","value":"4"}}),_vm._v(" "),_c('v-radio',{attrs:{"label":"Good","value":"3","color":"success"}}),_vm._v(" "),_c('v-radio',{attrs:{"label":"Fair","value":"2","color":"warning"}}),_vm._v(" "),_c('v-radio',{attrs:{"label":"Poor","value":"1","color":"error"}})],1)],1)],1)])],1),_vm._v(" "),_c('rating',{staticClass:"starability-grow",attrs:{"items":_vm.stars,"legend":"Star rating:","value":_vm.value},on:{"change":_vm.update}})],1),_vm._v(" "),_c('v-btn',{staticClass:"white--text",attrs:{"block":"","primary":"","light":""},nativeOn:{"click":function($event){$event.preventDefault();_vm.submitFeedback($event)}}},[_vm._v("Submit")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "wguF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_firebase__ = __webpack_require__("o4cO");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
	data() {
		return {
			type: 0,
			status: true,
			tableNo: 0,
			table: '',
			coupon: '',
			discount: 0
		};
	},
	methods: {
		submitTable() {
			var vm = this;
			__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Tables').child(this.type).push({
				tableNo: vm.tableNo,
				status: vm.status
			});
		},
		revert(status, key, keys) {
			if (status === true) {
				__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Tables').child(keys).child(key).update({ status: false });
			} else {
				__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Tables').child(keys).child(key).update({ status: true });
			}
		},
		submitDiscount() {
			var vm = this;
			__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Discounts').child(this.coupon).set({
				discount: vm.discount
			});
		}
	},
	created() {
		var vm = this;
		__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Tables').on('value', snapshot => {
			var snap = snapshot.val();
			vm.table = snap;
		});
	}
});

/***/ }),

/***/ "x7pp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_firebase__ = __webpack_require__("o4cO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BillItem_vue__ = __webpack_require__("Rkkl");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
	data() {
		return {
			uid: '',
			snap: [],
			pushKey: '',
			clickedSnap: [],
			info: []
		};
	},
	components: {
		appBillItem: __WEBPACK_IMPORTED_MODULE_1__BillItem_vue__["a" /* default */]
	},
	created() {
		var vm = this;
		// auth.onAuthStateChanged(function(user) {
		// 	if (user) {
		// 		ref.child('Transactions').child(user.uid).child('list').on('child_added', snapshot => {
		// 			var snapValue = snapshot.val()
		// 			vm.snap.push(snapValue)
		// 		})
		// 	}
		// })
		// console.log(this.clickedSnap)

		if (this.user !== null) {
			__WEBPACK_IMPORTED_MODULE_0__config_firebase__["b" /* ref */].child('Transactions').child(this.user).on('child_added', snapshot => {
				var snapValue = snapshot.val();
				vm.snap.push(snapValue);
			});
		}
	},
	computed: {
		latestTransaction() {
			return this.snap[this.snap.length - 1];
		},
		user() {
			return this.$store.getters.user;
		},
		test() {

			return this.snap;
		}
	},
	methods: {
		listTransaction(list) {
			this.clickedSnap = list;
		}
	}
});

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_firebase__ = __webpack_require__("o4cO");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	data() {
		return {
			clipped: false,
			drawer: true,
			fixed: false,
			items: [{
				icon: 'bubble_chart',
				title: 'Inspire'
			}, {
				icon: '',
				title: 'Log in'
			}],
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: 'Vuetify.js',
			isLogin: false,
			menuItems: [{
				icon: 'face',
				title: 'Sign up',
				link: '/register'
			}, {
				icon: 'lock_open',
				title: 'Sign in',
				link: '/login'
			}, {
				icon: 'schedule',
				title: 'Reservation',
				link: '/reserve'
			}, {
				icon: 'restaurant_menu',
				title: 'Store',
				link: '/store'
			}, {
				icon: 'shopping_cart',
				title: 'Cart',
				link: '/shoppingCart'
			}, {
				icon: 'list',
				title: 'Schedule',
				link: '/reserveList'
			}, {
				icon: 'check_circle',
				title: 'Bill',
				link: '/bill'
			}],
			itemCart: 0
		};
	},
	created() {
		var self = this;
		// auth.onAuthStateChanged(user => {
		// 	var vm = self
		// 	if (user) {
		// 		vm.isLogin = true;
		// 		console.log('Login wow')
		// 	} else {
		// 		vm.isLogin = false;
		// 		console.log('Not Login oi')
		// 	}
		// });
	},
	computed: {
		user() {
			return this.$store.getters.user;
		},
		menuItem() {
			let menuItems = [{
				icon: 'face',
				title: 'Sign up',
				link: '/register'
			}, {
				icon: 'lock_open',
				title: 'Sign in',
				link: '/login'
			}, {
				icon: 'schedule',
				title: 'Reservation',
				link: '/reserve'
			}, {
				icon: 'restaurant_menu',
				title: 'Store',
				link: '/store'
			}, {
				icon: 'shopping_cart',
				title: 'Cart',
				link: '/shoppingCart'
			}];

			if (this.user) {
				menuItems = [{
					icon: 'schedule',
					title: 'Reservation',
					link: '/reserve'
				}, {
					icon: 'restaurant_menu',
					title: 'Store',
					link: '/store'
				}, {
					icon: 'shopping_cart',
					title: 'Cart',
					link: '/shoppingCart'
				}, {
					icon: 'list',
					title: 'Schedule',
					link: '/reserveList'
				}, {
					icon: 'lock_open',
					title: 'Sign in',
					link: '/login'
				}, {
					icon: 'check_circle',
					title: 'Bill',
					link: '/bill'
				}, {
					icon: 'lock',
					title: 'Feed Back',
					link: '/feedBack'
				}, {
					icon: 'lock',
					title: 'Log Out',
					link: '/logOut'
				}];
			}

			return menuItems;
		}
	}
});

/***/ }),

/***/ "z/EN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('table',{staticClass:"table table-hover table-condensed",attrs:{"id":"cart"}},[_c('thead',[_c('tr',[_c('th',{staticStyle:{"width":"65%"}},[_vm._v("Product")]),_vm._v(" "),_c('th',{staticStyle:{"width":"10%"}},[_vm._v("Price")]),_vm._v(" "),_c('th',{staticStyle:{"width":"10%"}},[_c('span',{staticClass:"hidden-sm-and-down"},[_vm._v("Quantity")]),_vm._v(" "),_c('span',{staticClass:"hidden-md-and-up"},[_vm._v("Quan.")])]),_vm._v(" "),_c('th',{staticStyle:{"width":"10%"}},[_c('span',{staticClass:"hidden-sm-and-down"},[_vm._v("Subtotal")]),_vm._v(" "),_c('span',{staticClass:"hidden-md-and-up"},[_vm._v("Sub.")])]),_vm._v(" "),_c('th',{staticStyle:{"width":"5%"}})])]),_vm._v(" "),_vm._l((_vm.list),function(item,key){return _c('div',{attrs:{"tag":"tbody"}},[_c('v-layout',{attrs:{"row":""}},[_c('app-cart-item',{attrs:{"item":item,"eachKey":key,"uid":_vm.user}})],1)],1)}),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs6":"","offset-sm6":""}},[_c('v-text-field',{attrs:{"name":"discount","label":"Coupon","type":"text"},model:{value:(_vm.discount),callback:function ($$v) {_vm.discount=$$v},expression:"discount"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","offset-sm6":""}},[_c('p',[_vm._v("Total: "+_vm._s(_vm.totalPrice))])]),_vm._v(" "),(_vm.isDiscount)?_c('v-flex',{attrs:{"xs6":"","offset-sm6":""}},[_c('v-chip',{attrs:{"label":"","outline":"","color":"green"}},[_c('v-icon',{attrs:{"left":""}},[_vm._v("monetization_on")]),_vm._v("\n\t\t\t\t\tDiscount: "+_vm._s(_vm.discountValue)+"\n\t\t\t\t")],1)],1):_vm._e(),_vm._v(" "),_c('v-btn',{on:{"click":function($event){$event.preventDefault();_vm.submitCart($event)}}},[_vm._v("Submit")])],1)],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "zIkI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fill-height":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":""}},[_c('v-flex',{staticClass:"text-xs-center"},[_c('v-progress-circular',{attrs:{"indeterminate":"","size":50,"color":"primary"}})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "zJ0o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-card',[_c('v-card-title',[_c('h3',[_vm._v("Branch")])]),_vm._v(" "),_c('v-card-text',[_c('v-text-field',{attrs:{"name":"Name","label":"Name","type":"text","required":""},model:{value:(_vm.branchName),callback:function ($$v) {_vm.branchName=$$v},expression:"branchName"}}),_vm._v(" "),_c('v-text-field',{attrs:{"name":"location","label":"Location","type":"text","multi-line":"","required":""},model:{value:(_vm.location),callback:function ($$v) {_vm.location=$$v},expression:"location"}}),_vm._v(" "),_c('v-text-field',{attrs:{"name":"description","label":"Description","type":"text","multi-line":"","required":""},model:{value:(_vm.descript),callback:function ($$v) {_vm.descript=$$v},expression:"descript"}})],1),_vm._v(" "),_c('v-btn',{attrs:{"block":"","primary":"","light":""},nativeOn:{"click":function($event){$event.preventDefault();_vm.submitBranch($event)}}},[_vm._v("Submit")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "zK68":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "zjz1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Reserve_vue__ = __webpack_require__("urZT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2db4d834_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Reserve_vue__ = __webpack_require__("+b5L");
function injectStyle (ssrContext) {
  __webpack_require__("iJlW")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Reserve_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2db4d834_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Reserve_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "zwPt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ReserveList_vue__ = __webpack_require__("XN6U");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d6cf801c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ReserveList_vue__ = __webpack_require__("vjE1");
function injectStyle (ssrContext) {
  __webpack_require__("kdAv")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ReserveList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d6cf801c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ReserveList_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},["NHnr"]);
//# sourceMappingURL=app.ecf4ec47d101d205e1dc.js.map