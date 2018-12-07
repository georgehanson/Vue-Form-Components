/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue-class-component");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(14);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_box_ts__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select_list_ts__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text_area_ts__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toggle_switch_ts__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__file_browser_ts__ = __webpack_require__(12);





exports.InputBox = __WEBPACK_IMPORTED_MODULE_0__input_box_ts__["a" /* default */];
exports.SelectList = __WEBPACK_IMPORTED_MODULE_1__select_list_ts__["a" /* default */];
exports.InputBlock = __WEBPACK_IMPORTED_MODULE_2__text_area_ts__["a" /* default */];
exports.ToggleSwitch = __WEBPACK_IMPORTED_MODULE_3__toggle_switch_ts__["a" /* default */];
exports.FileBrowser = __WEBPACK_IMPORTED_MODULE_4__file_browser_ts__["a" /* default */];


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_class_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_class_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_class_component__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let TextArea = class TextArea extends __WEBPACK_IMPORTED_MODULE_0_vue___default.a {
    get inputClasses() {
        let initialArray = ['form-control'];
        if (this.$props.large && !this.usingAddons) {
            initialArray.push('form-control-lg');
        }
        if (this.$props.small && !this.usingAddons) {
            initialArray.push('form-control-sm');
        }
        if (this.$props.plainText) {
            initialArray[0] += '-plaintext';
        }
        if (this.$props.invalid) {
            initialArray.push('is-invalid');
        }
        return initialArray;
    }
    get usingAddons() {
        return !(Object.keys(this.$slots).length === 0 && this.$slots.constructor === Object);
    }
    slotExists(name) {
        return (name in this.$slots);
    }
    enterKeyPressed() {
        this.$emit('enter');
    }
    updateValue(value) {
        this.$emit('input', value);
    }
};
TextArea = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_vue_class_component___default()({
        template: __webpack_require__(5),
        props: {
            name: {
                type: String,
                required: true
            },
            label: {
                type: String,
                required: false
            },
            placeholder: {
                type: String,
                required: false
            },
            type: {
                type: String,
                default: 'text',
                required: false
            },
            helper: {
                type: String,
                required: false
            },
            required: {
                type: Boolean,
                default: false,
                required: false
            },
            readonly: {
                type: Boolean,
                default: false,
                required: false
            },
            small: {
                type: Boolean,
                default: false,
                required: false
            },
            large: {
                type: Boolean,
                default: false,
                required: false
            },
            plainText: {
                type: Boolean,
                default: false,
                required: false
            },
            inline: {
                type: Boolean,
                default: false,
                required: false
            },
            invalid: {
                type: Boolean,
                default: false,
                required: false
            },
            errorMessage: {
                type: String,
                required: false,
                default: null
            },
            metaUnderLabel: {
                type: Boolean,
                default: false,
                required: false
            },
            value: {
                type: String,
                default: null,
                required: false
            },
            maxLength: {
                type: Number,
                default() {
                    return 524288;
                },
                required: false
            },
            autoComplete: {
                type: Boolean,
                default: true,
                required: false
            }
        }
    })
], TextArea);
/* harmony default export */ __webpack_exports__["a"] = (TextArea);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\" :class=\"{'has-helper': helper, 'row': inline}\">\r\n    <div :class=\"{'col-sm-4': inline}\">\r\n        <label v-if=\"label\" :class=\"{'col-form-label': inline }\">{{ label }}<span class=\"required\" v-if=\"required\">*</span></label>\r\n        <small class=\"form-text text-muted\" v-if=\"helper && inline && metaUnderLabel\" v-text=\"helper\"></small>\r\n        <div class=\"invalid-feedback d-block\" v-text=\"errorMessage\" v-if=\"invalid && inline && metaUnderLabel\"></div>\r\n    </div>\r\n    <div :class=\"{'col-sm-8': inline, 'input-group': usingAddons, 'input-group-lg': usingAddons && large, 'input-group-sm': usingAddons && small}\">\r\n        <span v-if=\"slotExists('leftAddon')\" class=\"input-group-addon\">\r\n            <slot name=\"leftAddon\"></slot>\r\n        </span>\r\n        <span v-if=\"slotExists('leftButton')\" class=\"input-group-btn\">\r\n            <slot name=\"leftButton\"></slot>\r\n        </span>\r\n        <input v-on:input=\"updateValue($event.target.value)\" :autocomplete=\"autoComplete ? 'on' : 'off'\" :maxlength=\"maxLength\" :value=\"value\" v-on:keyup.enter=\"enterKeyPressed\" :class=\"inputClasses\" :name=\"name\" :type=\"type\" :placeholder=\"placeholder\" :readonly=\"readonly\" :required=\"required\">\r\n        <span v-if=\"slotExists('rightAddon')\" class=\"input-group-addon\">\r\n            <slot name=\"rightAddon\"></slot>\r\n        </span>\r\n        <span v-if=\"slotExists('rightButton')\" class=\"input-group-btn\">\r\n            <slot name=\"rightButton\"></slot>\r\n        </span>\r\n        <small class=\"form-text text-muted\" v-if=\"helper && ! usingAddons && ! metaUnderLabel\" v-text=\"helper\"></small>\r\n        <div class=\"invalid-feedback\" v-text=\"errorMessage\" v-if=\"invalid && ! usingAddons && ! metaUnderLabel\"></div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_class_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_class_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_class_component__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let SelectList = class SelectList extends __WEBPACK_IMPORTED_MODULE_0_vue___default.a {
    get inputClasses() {
        let initialArray = ['form-control'];
        if (this.$props.large && !this.usingAddons) {
            initialArray.push('form-control-lg');
        }
        if (this.$props.small && !this.usingAddons) {
            initialArray.push('form-control-sm');
        }
        if (this.$props.plainText) {
            initialArray[0] += '-plaintext';
        }
        if (this.$props.invalid) {
            initialArray.push('is-invalid');
        }
        return initialArray;
    }
    get usingAddons() {
        return !(Object.keys(this.$slots).length === 0 && this.$slots.constructor === Object);
    }
    slotExists(name) {
        return (name in this.$slots);
    }
    updateValue(value) {
        this.$emit('input', value);
    }
};
SelectList = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_vue_class_component___default()({
        template: __webpack_require__(7),
        props: {
            label: {
                type: String,
                required: false
            },
            placeholder: {
                type: String,
                required: false
            },
            name: {
                type: String,
                required: true
            },
            type: {
                type: String,
                default: 'text',
                required: false
            },
            helper: {
                type: String,
                required: false
            },
            required: {
                type: Boolean,
                default: false,
                required: false
            },
            disabled: {
                type: Boolean,
                default: false,
                required: false
            },
            small: {
                type: Boolean,
                default: false,
                required: false
            },
            large: {
                type: Boolean,
                default: false,
                required: false
            },
            inline: {
                type: Boolean,
                default: false,
                required: false
            },
            invalid: {
                type: Boolean,
                default: false,
                required: false
            },
            errorMessage: {
                type: String,
                required: false,
                default: null
            },
            metaUnderLabel: {
                type: Boolean,
                default: false,
                required: false
            },
            value: {
                type: [String, Number],
                required: false
            },
            options: {
                type: Array,
                default: () => { return []; },
                required: false
            },
            keyName: {
                type: String,
                default: 'id'
            },
            labelName: {
                type: String,
                default: 'label'
            }
        }
    })
], SelectList);
/* harmony default export */ __webpack_exports__["a"] = (SelectList);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\" :class=\"{'has-helper': helper, 'row': inline}\">\r\n    <div :class=\"{'col-sm-4': inline}\">\r\n        <label v-if=\"label\" :class=\"{'col-form-label': inline }\">{{ label }}<span class=\"required\" v-if=\"required\">*</span></label>\r\n        <small class=\"form-text text-muted\" v-if=\"helper && inline && metaUnderLabel\" v-text=\"helper\"></small>\r\n        <div class=\"invalid-feedback d-block\" v-text=\"errorMessage\" v-if=\"invalid && inline && metaUnderLabel\"></div>\r\n    </div>\r\n    <div :class=\"{'col-sm-8': inline, 'input-group': usingAddons, 'input-group-lg': usingAddons && large, 'input-group-sm': usingAddons && small}\">\r\n        <span v-if=\"slotExists('leftAddon')\" class=\"input-group-addon\">\r\n            <slot name=\"leftAddon\"></slot>\r\n        </span>\r\n        <span v-if=\"slotExists('leftButton')\" class=\"input-group-btn\">\r\n            <slot name=\"leftButton\"></slot>\r\n        </span>\r\n        <select :name=\"name\" :required=\"required\" :disabled=\"disabled\" :class=\"inputClasses\" v-on:change=\"updateValue($event.target.value)\" :value=\"value\">\r\n            <option v-if=\"placeholder\" v-text=\"placeholder\" value=\"\" disabled selected></option>\r\n            <option v-for=\"option in options\" :value=\"option[keyName]\">{{ option[labelName] }}</option>\r\n        </select>\r\n        <span v-if=\"slotExists('rightAddon')\" class=\"input-group-addon\">\r\n            <slot name=\"rightAddon\"></slot>\r\n        </span>\r\n        <span v-if=\"slotExists('rightButton')\" class=\"input-group-btn\">\r\n            <slot name=\"rightButton\"></slot>\r\n        </span>\r\n        <small class=\"form-text text-muted\" v-if=\"helper && ! usingAddons && ! metaUnderLabel\" v-text=\"helper\"></small>\r\n        <div class=\"invalid-feedback\" v-text=\"errorMessage\" v-if=\"invalid && ! usingAddons && ! metaUnderLabel\"></div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_class_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_class_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_class_component__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let TextArea = class TextArea extends __WEBPACK_IMPORTED_MODULE_0_vue___default.a {
    get inputClasses() {
        let initialArray = ['form-control'];
        if (this.$props.large) {
            initialArray.push('form-control-lg');
        }
        if (this.$props.small) {
            initialArray.push('form-control-sm');
        }
        if (this.$props.plainText) {
            initialArray[0] += '-plaintext';
        }
        if (this.$props.invalid) {
            initialArray.push('is-invalid');
        }
        return initialArray;
    }
    enterKeyPressed() {
        this.$emit('enter');
    }
    updateValue(value) {
        this.$emit('input', value);
    }
};
TextArea = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_vue_class_component___default()({
        template: __webpack_require__(9),
        props: {
            label: {
                type: String,
                required: false
            },
            placeholder: {
                type: String,
                required: false
            },
            name: {
                type: String,
                required: true
            },
            helper: {
                type: String,
                required: false
            },
            required: {
                type: Boolean,
                default: false,
                required: false
            },
            readonly: {
                type: Boolean,
                default: false,
                required: false
            },
            small: {
                type: Boolean,
                default: false,
                required: false
            },
            large: {
                type: Boolean,
                default: false,
                required: false
            },
            inline: {
                type: Boolean,
                default: false,
                required: false
            },
            invalid: {
                type: Boolean,
                default: false,
                required: false
            },
            errorMessage: {
                type: String,
                required: false,
                default: null
            },
            metaUnderLabel: {
                type: Boolean,
                default: false,
                required: false
            },
            value: {
                type: String,
                default: null,
                required: false
            }
        }
    })
], TextArea);
/* harmony default export */ __webpack_exports__["a"] = (TextArea);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\" :class=\"{'has-helper': helper, 'row': inline}\">\r\n    <div :class=\"{'col-sm-4': inline}\">\r\n        <label v-if=\"label\" :class=\"{'col-form-label': inline }\">{{ label }}<span class=\"required\" v-if=\"required\">*</span></label>\r\n        <small class=\"form-text text-muted\" v-if=\"helper && inline && metaUnderLabel\" v-text=\"helper\"></small>\r\n        <div class=\"invalid-feedback d-block\" v-text=\"errorMessage\" v-if=\"invalid && inline && metaUnderLabel\"></div>\r\n    </div>\r\n    <div :class=\"{'col-sm-8': inline}\">\r\n        <textarea :name=\"name\" :placeholder=\"placeholder\" :required=\"required\" :readonly=\"readonly\" :class=\"inputClasses\" v-on:input=\"updateValue($event.target.value)\" v-on:keyup.enter=\"enterKeyPressed\" :value=\"value\"></textarea>\r\n        <small class=\"form-text text-muted\" v-if=\"helper && ! metaUnderLabel\" v-text=\"helper\"></small>\r\n        <div class=\"invalid-feedback\" v-text=\"errorMessage\" v-if=\"invalid && ! metaUnderLabel\"></div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_class_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_class_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_class_component__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let ToggleSwitch = class ToggleSwitch extends __WEBPACK_IMPORTED_MODULE_0_vue___default.a {
    updateValue(value) {
        this.$emit('change', value);
    }
};
ToggleSwitch = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_vue_class_component___default()({
        template: __webpack_require__(11),
        model: {
            prop: 'checked',
            event: 'change'
        },
        props: {
            label: {
                type: String,
                required: false
            },
            labels: {
                type: Boolean,
                default: false
            },
            name: {
                type: String,
                required: true
            },
            helper: {
                type: String,
                required: false
            },
            required: {
                type: Boolean,
                default: false,
                required: false
            },
            inline: {
                type: Boolean,
                default: false,
                required: false
            },
            invalid: {
                type: Boolean,
                default: false,
                required: false
            },
            errorMessage: {
                type: String,
                required: false,
                default: null
            },
            metaUnderLabel: {
                type: Boolean,
                default: false,
                required: false
            },
            checked: {
                type: Boolean,
                default: false
            }
        }
    })
], ToggleSwitch);
/* harmony default export */ __webpack_exports__["a"] = (ToggleSwitch);


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\" :class=\"{'has-helper': helper, 'row': inline}\">\r\n    <div :class=\"{'col-sm-4': inline}\">\r\n        <label v-if=\"label\" :class=\"{'col-form-label': inline }\">{{ label }}<span class=\"required\" v-if=\"required\">*</span></label>\r\n        <small class=\"form-text text-muted\" v-if=\"helper && inline && metaUnderLabel\" v-text=\"helper\"></small>\r\n        <div class=\"invalid-feedback d-block\" v-text=\"errorMessage\" v-if=\"invalid && inline && metaUnderLabel\"></div>\r\n    </div>\r\n    <div :class=\"{'col-sm-8': inline}\">\r\n        <label class=\"switch-component\">\r\n            <input type=\"checkbox\" :name=\"name\" :checked=\"checked\" v-on:change=\"updateValue($event.target.checked)\">\r\n            <div class=\"slider round\">\r\n                <span class=\"yes-label\" v-if=\"labels\">Yes</span>\r\n                <span class=\"no-label\" v-if=\"labels\">No</span>\r\n            </div>\r\n        </label>\r\n        <small class=\"form-text text-muted\" v-if=\"helper && ! metaUnderLabel\" v-text=\"helper\"></small>\r\n        <div class=\"invalid-feedback\" v-text=\"errorMessage\" v-if=\"invalid && ! metaUnderLabel\"></div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_class_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_class_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_class_component__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let FileBrowser = class FileBrowser extends __WEBPACK_IMPORTED_MODULE_0_vue___default.a {
    fileSelected(event) {
        let fileList = event.target.files;
        this.$emit('file-selected', fileList[0]);
    }
};
FileBrowser = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_vue_class_component___default()({
        template: __webpack_require__(13),
        props: {
            label: {
                type: String,
                required: false
            },
            name: {
                type: String,
                required: true
            },
            helper: {
                type: String,
                required: false
            },
            required: {
                type: Boolean,
                default: false,
                required: false
            },
            inline: {
                type: Boolean,
                default: false,
                required: false
            },
            invalid: {
                type: Boolean,
                default: false,
                required: false
            },
            errorMessage: {
                type: String,
                required: false,
                default: null
            },
            metaUnderLabel: {
                type: Boolean,
                default: false,
                required: false
            }
        }
    })
], FileBrowser);
/* harmony default export */ __webpack_exports__["a"] = (FileBrowser);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\" :class=\"{'has-helper': helper, 'row': inline}\">\r\n    <div :class=\"{'col-sm-4': inline}\">\r\n        <label v-if=\"label\" :class=\"{'col-form-label': inline }\">{{ label }}<span class=\"required\" v-if=\"required\">*</span></label>\r\n        <small class=\"form-text text-muted\" v-if=\"helper && inline && metaUnderLabel\" v-text=\"helper\"></small>\r\n        <div class=\"invalid-feedback d-block\" v-text=\"errorMessage\" v-if=\"invalid && inline && metaUnderLabel\"></div>\r\n    </div>\r\n    <div :class=\"{'col-sm-8': inline}\">\r\n        <label class=\"custom-file\">\r\n            <input type=\"file\" :name=\"name\" class=\"custom-file-input\" v-on:change.prevent=\"fileSelected\">\r\n            <span class=\"custom-file-control\"></span>\r\n        </label>\r\n        <small class=\"form-text text-muted\" v-if=\"helper && ! metaUnderLabel\" v-text=\"helper\"></small>\r\n        <div class=\"invalid-feedback\" v-text=\"errorMessage\" v-if=\"invalid && ! metaUnderLabel\"></div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);