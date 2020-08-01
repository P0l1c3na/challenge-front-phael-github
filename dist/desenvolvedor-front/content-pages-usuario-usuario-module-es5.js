function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-pages-usuario-usuario-module"], {
  /***/
  "./node_modules/@angular/cdk/esm2015/accordion.js":
  /*!********************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/accordion.js ***!
    \********************************************************/

  /*! exports provided: CdkAccordionItem, CdkAccordion, CdkAccordionModule */

  /***/
  function node_modulesAngularCdkEsm2015AccordionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkAccordionItem", function () {
      return CdkAccordionItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkAccordion", function () {
      return CdkAccordion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkAccordionModule", function () {
      return CdkAccordionModule;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used to generate unique ID for each accordion.
     * @type {?}
     */


    var nextId = 0;
    /**
     * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
     */

    var CdkAccordion = /*#__PURE__*/function () {
      function CdkAccordion() {
        _classCallCheck(this, CdkAccordion);

        /**
         * Emits when the state of the accordion changes
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Stream that emits true/false when openAll/closeAll is triggered.
         */

        this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * A readonly id value to use for unique selection coordination.
         */

        this.id = "cdk-accordion-".concat(nextId++);
        this._multi = false;
      }
      /**
       * Whether the accordion should allow multiple expanded accordion items simultaneously.
       * @return {?}
       */


      _createClass(CdkAccordion, [{
        key: "openAll",

        /**
         * Opens all enabled accordion items in an accordion where multi is enabled.
         * @return {?}
         */
        value: function openAll() {
          this._openCloseAll(true);
        }
        /**
         * Closes all enabled accordion items in an accordion where multi is enabled.
         * @return {?}
         */

      }, {
        key: "closeAll",
        value: function closeAll() {
          this._openCloseAll(false);
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._stateChanges.next(changes);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
        /**
         * @private
         * @param {?} expanded
         * @return {?}
         */

      }, {
        key: "_openCloseAll",
        value: function _openCloseAll(expanded) {
          if (this.multi) {
            this._openCloseAllActions.next(expanded);
          }
        }
      }, {
        key: "multi",
        get: function get() {
          return this._multi;
        }
        /**
         * @param {?} multi
         * @return {?}
         */
        ,
        set: function set(multi) {
          this._multi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(multi);
        }
      }]);

      return CdkAccordion;
    }();

    CdkAccordion.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: 'cdk-accordion, [cdkAccordion]',
        exportAs: 'cdkAccordion'
      }]
    }];
    CdkAccordion.propDecorators = {
      multi: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used to generate unique ID for each accordion item.
     * @type {?}
     */

    var nextId$1 = 0;
    var ɵ0 = undefined;
    /**
     * An basic directive expected to be extended and decorated as a component.  Sets up all
     * events and attributes needed to be managed by a CdkAccordion parent.
     */

    var CdkAccordionItem = /*#__PURE__*/function () {
      /**
       * @param {?} accordion
       * @param {?} _changeDetectorRef
       * @param {?} _expansionDispatcher
       */
      function CdkAccordionItem(accordion, _changeDetectorRef, _expansionDispatcher) {
        var _this = this;

        _classCallCheck(this, CdkAccordionItem);

        this.accordion = accordion;
        this._changeDetectorRef = _changeDetectorRef;
        this._expansionDispatcher = _expansionDispatcher;
        /**
         * Subscription to openAll/closeAll events.
         */

        this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Event emitted every time the AccordionItem is closed.
         */

        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitted every time the AccordionItem is opened.
         */

        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitted when the AccordionItem is destroyed.
         */

        this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits whenever the expanded state of the accordion changes.
         * Primarily used to facilitate two-way binding.
         * \@docs-private
         */

        this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The unique AccordionItem id.
         */

        this.id = "cdk-accordion-child-".concat(nextId$1++);
        this._expanded = false;
        this._disabled = false;
        /**
         * Unregister function for _expansionDispatcher.
         */

        this._removeUniqueSelectionListener =
        /**
        * @return {?}
        */
        function () {};

        this._removeUniqueSelectionListener = _expansionDispatcher.listen(
        /**
        * @param {?} id
        * @param {?} accordionId
        * @return {?}
        */
        function (id, accordionId) {
          if (_this.accordion && !_this.accordion.multi && _this.accordion.id === accordionId && _this.id !== id) {
            _this.expanded = false;
          }
        }); // When an accordion item is hosted in an accordion, subscribe to open/close events.

        if (this.accordion) {
          this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
        }
      }
      /**
       * Whether the AccordionItem is expanded.
       * @return {?}
       */


      _createClass(CdkAccordionItem, [{
        key: "ngOnDestroy",

        /**
         * Emits an event for the accordion item being destroyed.
         * @return {?}
         */
        value: function ngOnDestroy() {
          this.opened.complete();
          this.closed.complete();
          this.destroyed.emit();
          this.destroyed.complete();

          this._removeUniqueSelectionListener();

          this._openCloseAllSubscription.unsubscribe();
        }
        /**
         * Toggles the expanded state of the accordion item.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          if (!this.disabled) {
            this.expanded = !this.expanded;
          }
        }
        /**
         * Sets the expanded state of the accordion item to false.
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          if (!this.disabled) {
            this.expanded = false;
          }
        }
        /**
         * Sets the expanded state of the accordion item to true.
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          if (!this.disabled) {
            this.expanded = true;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribeToOpenCloseAllActions",
        value: function _subscribeToOpenCloseAllActions() {
          var _this2 = this;

          return this.accordion._openCloseAllActions.subscribe(
          /**
          * @param {?} expanded
          * @return {?}
          */
          function (expanded) {
            // Only change expanded state if item is enabled
            if (!_this2.disabled) {
              _this2.expanded = expanded;
            }
          });
        }
      }, {
        key: "expanded",
        get: function get() {
          return this._expanded;
        }
        /**
         * @param {?} expanded
         * @return {?}
         */
        ,
        set: function set(expanded) {
          expanded = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(expanded); // Only emit events and update the internal value if the value changes.

          if (this._expanded !== expanded) {
            this._expanded = expanded;
            this.expandedChange.emit(expanded);

            if (expanded) {
              this.opened.emit();
              /**
               * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
               * the name value is the id of the accordion.
               * @type {?}
               */

              var accordionId = this.accordion ? this.accordion.id : this.id;

              this._expansionDispatcher.notify(this.id, accordionId);
            } else {
              this.closed.emit();
            } // Ensures that the animation will run when the value is set outside of an `@Input`.
            // This includes cases like the open, close and toggle methods.


            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Whether the AccordionItem is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} disabled
         * @return {?}
         */
        ,
        set: function set(disabled) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(disabled);
        }
      }]);

      return CdkAccordionItem;
    }();

    CdkAccordionItem.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: 'cdk-accordion-item, [cdkAccordionItem]',
        exportAs: 'cdkAccordionItem',
        providers: [// Provide CdkAccordion as undefined to prevent nested accordion items from registering
        // to the same accordion.
        {
          provide: CdkAccordion,
          useValue: ɵ0
        }]
      }]
    }];
    /** @nocollapse */

    CdkAccordionItem.ctorParameters = function () {
      return [{
        type: CdkAccordion,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"]
      }];
    };

    CdkAccordionItem.propDecorators = {
      closed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      opened: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      destroyed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      expandedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      expanded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var CdkAccordionModule = function CdkAccordionModule() {
      _classCallCheck(this, CdkAccordionModule);
    };

    CdkAccordionModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        exports: [CdkAccordion, CdkAccordionItem],
        declarations: [CdkAccordion, CdkAccordionItem]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=accordion.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/cdk/esm2015/table.js":
  /*!****************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/table.js ***!
    \****************************************************/

  /*! exports provided: DataSource, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CDK_TABLE_TEMPLATE, CdkTable, CdkCellDef, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, BaseCdkCell, CdkHeaderCell, CdkFooterCell, CdkCell, CDK_ROW_TEMPLATE, BaseRowDef, CdkHeaderRowDef, CdkFooterRowDef, CdkRowDef, CdkCellOutlet, CdkHeaderRow, CdkFooterRow, CdkRow, CdkTableModule, STICKY_DIRECTIONS, StickyStyler, mixinHasStickyInput, TEXT_COLUMN_OPTIONS, CdkTextColumn */

  /***/
  function node_modulesAngularCdkEsm2015TableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataRowOutlet", function () {
      return DataRowOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderRowOutlet", function () {
      return HeaderRowOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterRowOutlet", function () {
      return FooterRowOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_TABLE_TEMPLATE", function () {
      return CDK_TABLE_TEMPLATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTable", function () {
      return CdkTable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkCellDef", function () {
      return CdkCellDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkHeaderCellDef", function () {
      return CdkHeaderCellDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFooterCellDef", function () {
      return CdkFooterCellDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkColumnDef", function () {
      return CdkColumnDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseCdkCell", function () {
      return BaseCdkCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkHeaderCell", function () {
      return CdkHeaderCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFooterCell", function () {
      return CdkFooterCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkCell", function () {
      return CdkCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_ROW_TEMPLATE", function () {
      return CDK_ROW_TEMPLATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseRowDef", function () {
      return BaseRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkHeaderRowDef", function () {
      return CdkHeaderRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFooterRowDef", function () {
      return CdkFooterRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkRowDef", function () {
      return CdkRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkCellOutlet", function () {
      return CdkCellOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkHeaderRow", function () {
      return CdkHeaderRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFooterRow", function () {
      return CdkFooterRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkRow", function () {
      return CdkRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTableModule", function () {
      return CdkTableModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STICKY_DIRECTIONS", function () {
      return STICKY_DIRECTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StickyStyler", function () {
      return StickyStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinHasStickyInput", function () {
      return mixinHasStickyInput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TEXT_COLUMN_OPTIONS", function () {
      return TEXT_COLUMN_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTextColumn", function () {
      return CdkTextColumn;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataSource", function () {
      return _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["DataSource"];
    });
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Mixin to provide a directive with a function that checks if the sticky input has been
     * changed since the last time the function was called. Essentially adds a dirty-check to the
     * sticky value.
     * \@docs-private
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinHasStickyInput(base) {
      return /*#__PURE__*/function (_base) {
        _inherits(_class, _base);

        var _super = _createSuper(_class);

        /**
         * @param {...?} args
         */
        function _class() {
          var _this3;

          _classCallCheck(this, _class);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this3 = _super.call.apply(_super, [this].concat(args));
          _this3._sticky = false;
          /**
           * Whether the sticky input has changed since it was last checked.
           */

          _this3._hasStickyChanged = false;
          return _this3;
        }
        /**
         * Whether sticky positioning should be applied.
         * @return {?}
         */


        _createClass(_class, [{
          key: "hasStickyChanged",

          /**
           * Whether the sticky value has changed since this was last called.
           * @return {?}
           */
          value: function hasStickyChanged() {
            /** @type {?} */
            var hasStickyChanged = this._hasStickyChanged;
            this._hasStickyChanged = false;
            return hasStickyChanged;
          }
          /**
           * Resets the dirty check for cases where the sticky state has been used without checking.
           * @return {?}
           */

        }, {
          key: "resetStickyChanged",
          value: function resetStickyChanged() {
            this._hasStickyChanged = false;
          }
        }, {
          key: "sticky",
          get: function get() {
            return this._sticky;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            /** @type {?} */
            var prevValue = this._sticky;
            this._sticky = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(v);
            this._hasStickyChanged = prevValue !== this._sticky;
          }
        }]);

        return _class;
      }(base);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Cell definition for a CDK table.
     * Captures the template of a column's data row cell as well as cell-specific properties.
     */


    var CdkCellDef =
    /**
     * @param {?} template
     */
    function CdkCellDef(
    /** @docs-private */
    template) {
      _classCallCheck(this, CdkCellDef);

      this.template = template;
    };

    CdkCellDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[cdkCellDef]'
      }]
    }];
    /** @nocollapse */

    CdkCellDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }];
    };
    /**
     * Header cell definition for a CDK table.
     * Captures the template of a column's header cell and as well as cell-specific properties.
     */


    var CdkHeaderCellDef =
    /**
     * @param {?} template
     */
    function CdkHeaderCellDef(
    /** @docs-private */
    template) {
      _classCallCheck(this, CdkHeaderCellDef);

      this.template = template;
    };

    CdkHeaderCellDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[cdkHeaderCellDef]'
      }]
    }];
    /** @nocollapse */

    CdkHeaderCellDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }];
    };
    /**
     * Footer cell definition for a CDK table.
     * Captures the template of a column's footer cell and as well as cell-specific properties.
     */


    var CdkFooterCellDef =
    /**
     * @param {?} template
     */
    function CdkFooterCellDef(
    /** @docs-private */
    template) {
      _classCallCheck(this, CdkFooterCellDef);

      this.template = template;
    };

    CdkFooterCellDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[cdkFooterCellDef]'
      }]
    }];
    /** @nocollapse */

    CdkFooterCellDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }];
    }; // Boilerplate for applying mixins to CdkColumnDef.

    /**
     * \@docs-private
     */


    var CdkColumnDefBase = function CdkColumnDefBase() {
      _classCallCheck(this, CdkColumnDefBase);
    };
    /** @type {?} */


    var _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
    /**
     * Column definition for the CDK table.
     * Defines a set of cells available for a table column.
     */


    var CdkColumnDef = /*#__PURE__*/function (_CdkColumnDefBase2) {
      _inherits(CdkColumnDef, _CdkColumnDefBase2);

      var _super2 = _createSuper(CdkColumnDef);

      function CdkColumnDef() {
        var _this4;

        _classCallCheck(this, CdkColumnDef);

        _this4 = _super2.apply(this, arguments);
        _this4._stickyEnd = false;
        return _this4;
      }
      /**
       * Unique name for this column.
       * @return {?}
       */


      _createClass(CdkColumnDef, [{
        key: "name",
        get: function get() {
          return this._name;
        }
        /**
         * @param {?} name
         * @return {?}
         */
        ,
        set: function set(name) {
          // If the directive is set without a name (updated programatically), then this setter will
          // trigger with an empty string and should not overwrite the programatically set value.
          if (!name) {
            return;
          }

          this._name = name;
          this.cssClassFriendlyName = name.replace(/[^a-z0-9_-]/ig, '-');
        }
        /**
         * Whether this column should be sticky positioned on the end of the row. Should make sure
         * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
         * has been changed.
         * @return {?}
         */

      }, {
        key: "stickyEnd",
        get: function get() {
          return this._stickyEnd;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          /** @type {?} */
          var prevValue = this._stickyEnd;
          this._stickyEnd = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(v);
          this._hasStickyChanged = prevValue !== this._stickyEnd;
        }
      }]);

      return CdkColumnDef;
    }(_CdkColumnDefBase);

    CdkColumnDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[cdkColumnDef]',
        inputs: ['sticky'],
        providers: [{
          provide: 'MAT_SORT_HEADER_COLUMN_DEF',
          useExisting: CdkColumnDef
        }]
      }]
    }];
    CdkColumnDef.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkColumnDef']
      }],
      stickyEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['stickyEnd']
      }],
      cell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [CdkCellDef, {
          "static": false
        }]
      }],
      headerCell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [CdkHeaderCellDef, {
          "static": false
        }]
      }],
      footerCell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [CdkFooterCellDef, {
          "static": false
        }]
      }]
    };
    /**
     * Base class for the cells. Adds a CSS classname that identifies the column it renders in.
     */

    var BaseCdkCell =
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    function BaseCdkCell(columnDef, elementRef) {
      _classCallCheck(this, BaseCdkCell);

      /** @type {?} */
      var columnClassName = "cdk-column-".concat(columnDef.cssClassFriendlyName);
      elementRef.nativeElement.classList.add(columnClassName);
    };
    /**
     * Header cell template container that adds the right classes and role.
     */


    var CdkHeaderCell = /*#__PURE__*/function (_BaseCdkCell) {
      _inherits(CdkHeaderCell, _BaseCdkCell);

      var _super3 = _createSuper(CdkHeaderCell);

      /**
       * @param {?} columnDef
       * @param {?} elementRef
       */
      function CdkHeaderCell(columnDef, elementRef) {
        _classCallCheck(this, CdkHeaderCell);

        return _super3.call(this, columnDef, elementRef);
      }

      return CdkHeaderCell;
    }(BaseCdkCell);

    CdkHeaderCell.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: 'cdk-header-cell, th[cdk-header-cell]',
        host: {
          'class': 'cdk-header-cell',
          'role': 'columnheader'
        }
      }]
    }];
    /** @nocollapse */

    CdkHeaderCell.ctorParameters = function () {
      return [{
        type: CdkColumnDef
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    /**
     * Footer cell template container that adds the right classes and role.
     */


    var CdkFooterCell = /*#__PURE__*/function (_BaseCdkCell2) {
      _inherits(CdkFooterCell, _BaseCdkCell2);

      var _super4 = _createSuper(CdkFooterCell);

      /**
       * @param {?} columnDef
       * @param {?} elementRef
       */
      function CdkFooterCell(columnDef, elementRef) {
        _classCallCheck(this, CdkFooterCell);

        return _super4.call(this, columnDef, elementRef);
      }

      return CdkFooterCell;
    }(BaseCdkCell);

    CdkFooterCell.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: 'cdk-footer-cell, td[cdk-footer-cell]',
        host: {
          'class': 'cdk-footer-cell',
          'role': 'gridcell'
        }
      }]
    }];
    /** @nocollapse */

    CdkFooterCell.ctorParameters = function () {
      return [{
        type: CdkColumnDef
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    /**
     * Cell template container that adds the right classes and role.
     */


    var CdkCell = /*#__PURE__*/function (_BaseCdkCell3) {
      _inherits(CdkCell, _BaseCdkCell3);

      var _super5 = _createSuper(CdkCell);

      /**
       * @param {?} columnDef
       * @param {?} elementRef
       */
      function CdkCell(columnDef, elementRef) {
        _classCallCheck(this, CdkCell);

        return _super5.call(this, columnDef, elementRef);
      }

      return CdkCell;
    }(BaseCdkCell);

    CdkCell.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: 'cdk-cell, td[cdk-cell]',
        host: {
          'class': 'cdk-cell',
          'role': 'gridcell'
        }
      }]
    }];
    /** @nocollapse */

    CdkCell.ctorParameters = function () {
      return [{
        type: CdkColumnDef
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The row template that can be used by the mat-table. Should not be used outside of the
     * material library.
     * @type {?}
     */


    var CDK_ROW_TEMPLATE = "<ng-container cdkCellOutlet></ng-container>";
    /**
     * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
     * for changes and notifying the table.
     * @abstract
     */

    var BaseRowDef = /*#__PURE__*/function () {
      /**
       * @param {?} template
       * @param {?} _differs
       */
      function BaseRowDef(template, _differs) {
        _classCallCheck(this, BaseRowDef);

        this.template = template;
        this._differs = _differs;
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(BaseRowDef, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // Create a new columns differ if one does not yet exist. Initialize it based on initial value
          // of the columns property or an empty array if none is provided.
          if (!this._columnsDiffer) {
            /** @type {?} */
            var columns = changes['columns'] && changes['columns'].currentValue || [];
            this._columnsDiffer = this._differs.find(columns).create();

            this._columnsDiffer.diff(columns);
          }
        }
        /**
         * Returns the difference between the current columns and the columns from the last diff, or null
         * if there is no difference.
         * @return {?}
         */

      }, {
        key: "getColumnsDiff",
        value: function getColumnsDiff() {
          return this._columnsDiffer.diff(this.columns);
        }
        /**
         * Gets this row def's relevant cell template from the provided column def.
         * @param {?} column
         * @return {?}
         */

      }, {
        key: "extractCellTemplate",
        value: function extractCellTemplate(column) {
          if (this instanceof CdkHeaderRowDef) {
            return column.headerCell.template;
          }

          if (this instanceof CdkFooterRowDef) {
            return column.footerCell.template;
          } else {
            return column.cell.template;
          }
        }
      }]);

      return BaseRowDef;
    }(); // Boilerplate for applying mixins to CdkHeaderRowDef.

    /**
     * \@docs-private
     */


    var CdkHeaderRowDefBase = /*#__PURE__*/function (_BaseRowDef) {
      _inherits(CdkHeaderRowDefBase, _BaseRowDef);

      var _super6 = _createSuper(CdkHeaderRowDefBase);

      function CdkHeaderRowDefBase() {
        _classCallCheck(this, CdkHeaderRowDefBase);

        return _super6.apply(this, arguments);
      }

      return CdkHeaderRowDefBase;
    }(BaseRowDef);
    /** @type {?} */


    var _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
    /**
     * Header row definition for the CDK table.
     * Captures the header row's template and other header properties such as the columns to display.
     */


    var CdkHeaderRowDef = /*#__PURE__*/function (_CdkHeaderRowDefBase2) {
      _inherits(CdkHeaderRowDef, _CdkHeaderRowDefBase2);

      var _super7 = _createSuper(CdkHeaderRowDef);

      /**
       * @param {?} template
       * @param {?} _differs
       */
      function CdkHeaderRowDef(template, _differs) {
        _classCallCheck(this, CdkHeaderRowDef);

        return _super7.call(this, template, _differs);
      } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
      // Explicitly define it so that the method is called as part of the Angular lifecycle.

      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(CdkHeaderRowDef, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          _get(_getPrototypeOf(CdkHeaderRowDef.prototype), "ngOnChanges", this).call(this, changes);
        }
      }]);

      return CdkHeaderRowDef;
    }(_CdkHeaderRowDefBase);

    CdkHeaderRowDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[cdkHeaderRowDef]',
        inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky']
      }]
    }];
    /** @nocollapse */

    CdkHeaderRowDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
      }];
    }; // Boilerplate for applying mixins to CdkFooterRowDef.

    /**
     * \@docs-private
     */


    var CdkFooterRowDefBase = /*#__PURE__*/function (_BaseRowDef2) {
      _inherits(CdkFooterRowDefBase, _BaseRowDef2);

      var _super8 = _createSuper(CdkFooterRowDefBase);

      function CdkFooterRowDefBase() {
        _classCallCheck(this, CdkFooterRowDefBase);

        return _super8.apply(this, arguments);
      }

      return CdkFooterRowDefBase;
    }(BaseRowDef);
    /** @type {?} */


    var _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
    /**
     * Footer row definition for the CDK table.
     * Captures the footer row's template and other footer properties such as the columns to display.
     */


    var CdkFooterRowDef = /*#__PURE__*/function (_CdkFooterRowDefBase2) {
      _inherits(CdkFooterRowDef, _CdkFooterRowDefBase2);

      var _super9 = _createSuper(CdkFooterRowDef);

      /**
       * @param {?} template
       * @param {?} _differs
       */
      function CdkFooterRowDef(template, _differs) {
        _classCallCheck(this, CdkFooterRowDef);

        return _super9.call(this, template, _differs);
      } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
      // Explicitly define it so that the method is called as part of the Angular lifecycle.

      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(CdkFooterRowDef, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          _get(_getPrototypeOf(CdkFooterRowDef.prototype), "ngOnChanges", this).call(this, changes);
        }
      }]);

      return CdkFooterRowDef;
    }(_CdkFooterRowDefBase);

    CdkFooterRowDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[cdkFooterRowDef]',
        inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky']
      }]
    }];
    /** @nocollapse */

    CdkFooterRowDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
      }];
    };
    /**
     * Data row definition for the CDK table.
     * Captures the header row's template and other row properties such as the columns to display and
     * a when predicate that describes when this row should be used.
     * @template T
     */


    var CdkRowDef = /*#__PURE__*/function (_BaseRowDef3) {
      _inherits(CdkRowDef, _BaseRowDef3);

      var _super10 = _createSuper(CdkRowDef);

      // TODO(andrewseguin): Add an input for providing a switch function to determine
      //   if this template should be used.

      /**
       * @param {?} template
       * @param {?} _differs
       */
      function CdkRowDef(template, _differs) {
        _classCallCheck(this, CdkRowDef);

        return _super10.call(this, template, _differs);
      }

      return CdkRowDef;
    }(BaseRowDef);

    CdkRowDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[cdkRowDef]',
        inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen']
      }]
    }];
    /** @nocollapse */

    CdkRowDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
      }];
    };
    /**
     * Outlet for rendering cells inside of a row or header row.
     * \@docs-private
     */


    var CdkCellOutlet = /*#__PURE__*/function () {
      /**
       * @param {?} _viewContainer
       */
      function CdkCellOutlet(_viewContainer) {
        _classCallCheck(this, CdkCellOutlet);

        this._viewContainer = _viewContainer;
        CdkCellOutlet.mostRecentCellOutlet = this;
      }
      /**
       * @return {?}
       */


      _createClass(CdkCellOutlet, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // If this was the last outlet being rendered in the view, remove the reference
          // from the static property after it has been destroyed to avoid leaking memory.
          if (CdkCellOutlet.mostRecentCellOutlet === this) {
            CdkCellOutlet.mostRecentCellOutlet = null;
          }
        }
      }]);

      return CdkCellOutlet;
    }();
    /**
     * Static property containing the latest constructed instance of this class.
     * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
     * createEmbeddedView. After one of these components are created, this property will provide
     * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
     * construct the cells with the provided context.
     */


    CdkCellOutlet.mostRecentCellOutlet = null;
    CdkCellOutlet.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[cdkCellOutlet]'
      }]
    }];
    /** @nocollapse */

    CdkCellOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }];
    };
    /**
     * Header template container that contains the cell outlet. Adds the right class and role.
     */


    var CdkHeaderRow = function CdkHeaderRow() {
      _classCallCheck(this, CdkHeaderRow);
    };

    CdkHeaderRow.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'cdk-header-row, tr[cdk-header-row]',
        template: CDK_ROW_TEMPLATE,
        host: {
          'class': 'cdk-header-row',
          'role': 'row'
        },
        // See note on CdkTable for explanation on why this uses the default change detection strategy.
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
      }]
    }];
    /**
     * Footer template container that contains the cell outlet. Adds the right class and role.
     */

    var CdkFooterRow = function CdkFooterRow() {
      _classCallCheck(this, CdkFooterRow);
    };

    CdkFooterRow.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'cdk-footer-row, tr[cdk-footer-row]',
        template: CDK_ROW_TEMPLATE,
        host: {
          'class': 'cdk-footer-row',
          'role': 'row'
        },
        // See note on CdkTable for explanation on why this uses the default change detection strategy.
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
      }]
    }];
    /**
     * Data row template container that contains the cell outlet. Adds the right class and role.
     */

    var CdkRow = function CdkRow() {
      _classCallCheck(this, CdkRow);
    };

    CdkRow.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'cdk-row, tr[cdk-row]',
        template: CDK_ROW_TEMPLATE,
        host: {
          'class': 'cdk-row',
          'role': 'row'
        },
        // See note on CdkTable for explanation on why this uses the default change detection strategy.
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * List of all possible directions that can be used for sticky positioning.
     * \@docs-private
     * @type {?}
     */

    var STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
    /**
     * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
     * \@docs-private
     */

    var StickyStyler = /*#__PURE__*/function () {
      /**
       * @param {?} _isNativeHtmlTable Whether the sticky logic should be based on a table
       *     that uses the native `<table>` element.
       * @param {?} _stickCellCss The CSS class that will be applied to every row/cell that has
       *     sticky positioning applied.
       * @param {?} direction The directionality context of the table (ltr/rtl); affects column positioning
       *     by reversing left/right positions.
       * @param {?=} _isBrowser Whether the table is currently being rendered on the server or the client.
       */
      function StickyStyler(_isNativeHtmlTable, _stickCellCss, direction) {
        var _isBrowser = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

        _classCallCheck(this, StickyStyler);

        this._isNativeHtmlTable = _isNativeHtmlTable;
        this._stickCellCss = _stickCellCss;
        this.direction = direction;
        this._isBrowser = _isBrowser;
      }
      /**
       * Clears the sticky positioning styles from the row and its cells by resetting the `position`
       * style, setting the zIndex to 0, and unsetting each provided sticky direction.
       * @param {?} rows The list of rows that should be cleared from sticking in the provided directions
       * @param {?} stickyDirections The directions that should no longer be set as sticky on the rows.
       * @return {?}
       */


      _createClass(StickyStyler, [{
        key: "clearStickyPositioning",
        value: function clearStickyPositioning(rows, stickyDirections) {
          var _iterator = _createForOfIteratorHelper(rows),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var row = _step.value;

              // If the row isn't an element (e.g. if it's an `ng-container`),
              // it won't have inline styles or `children` so we skip it.
              if (row.nodeType !== row.ELEMENT_NODE) {
                continue;
              }

              this._removeStickyStyle(row, stickyDirections);

              for (var i = 0; i < row.children.length; i++) {
                /** @type {?} */
                var cell =
                /** @type {?} */
                row.children[i];

                this._removeStickyStyle(cell, stickyDirections);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        /**
         * Applies sticky left and right positions to the cells of each row according to the sticky
         * states of the rendered column definitions.
         * @param {?} rows The rows that should have its set of cells stuck according to the sticky states.
         * @param {?} stickyStartStates A list of boolean states where each state represents whether the cell
         *     in this index position should be stuck to the start of the row.
         * @param {?} stickyEndStates A list of boolean states where each state represents whether the cell
         *     in this index position should be stuck to the end of the row.
         * @return {?}
         */

      }, {
        key: "updateStickyColumns",
        value: function updateStickyColumns(rows, stickyStartStates, stickyEndStates) {
          /** @type {?} */
          var hasStickyColumns = stickyStartStates.some(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state;
          }) || stickyEndStates.some(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state;
          });

          if (!rows.length || !hasStickyColumns || !this._isBrowser) {
            return;
          }
          /** @type {?} */


          var firstRow = rows[0];
          /** @type {?} */

          var numCells = firstRow.children.length;
          /** @type {?} */

          var cellWidths = this._getCellWidths(firstRow);
          /** @type {?} */


          var startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
          /** @type {?} */


          var endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
          /** @type {?} */


          var isRtl = this.direction === 'rtl';

          var _iterator2 = _createForOfIteratorHelper(rows),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var row = _step2.value;

              for (var i = 0; i < numCells; i++) {
                /** @type {?} */
                var cell =
                /** @type {?} */
                row.children[i];

                if (stickyStartStates[i]) {
                  this._addStickyStyle(cell, isRtl ? 'right' : 'left', startPositions[i]);
                }

                if (stickyEndStates[i]) {
                  this._addStickyStyle(cell, isRtl ? 'left' : 'right', endPositions[i]);
                }
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        /**
         * Applies sticky positioning to the row's cells if using the native table layout, and to the
         * row itself otherwise.
         * @param {?} rowsToStick The list of rows that should be stuck according to their corresponding
         *     sticky state and to the provided top or bottom position.
         * @param {?} stickyStates A list of boolean states where each state represents whether the row
         *     should be stuck in the particular top or bottom position.
         * @param {?} position The position direction in which the row should be stuck if that row should be
         *     sticky.
         *
         * @return {?}
         */

      }, {
        key: "stickRows",
        value: function stickRows(rowsToStick, stickyStates, position) {
          // Since we can't measure the rows on the server, we can't stick the rows properly.
          if (!this._isBrowser) {
            return;
          } // If positioning the rows to the bottom, reverse their order when evaluating the sticky
          // position such that the last row stuck will be "bottom: 0px" and so on.

          /** @type {?} */


          var rows = position === 'bottom' ? rowsToStick.reverse() : rowsToStick;
          /** @type {?} */

          var stickyHeight = 0;

          for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
            if (!stickyStates[rowIndex]) {
              continue;
            }
            /** @type {?} */


            var row = rows[rowIndex];

            if (this._isNativeHtmlTable) {
              for (var j = 0; j < row.children.length; j++) {
                /** @type {?} */
                var cell =
                /** @type {?} */
                row.children[j];

                this._addStickyStyle(cell, position, stickyHeight);
              }
            } else {
              // Flex does not respect the stick positioning on the cells, needs to be applied to the row.
              // If this is applied on a native table, Safari causes the header to fly in wrong direction.
              this._addStickyStyle(row, position, stickyHeight);
            }

            if (rowIndex === rows.length - 1) {
              // prevent unnecessary reflow from getBoundingClientRect()
              return;
            }

            stickyHeight += row.getBoundingClientRect().height;
          }
        }
        /**
         * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
         * footer rows is to apply sticky styling to the tfoot container. This should only be done if
         * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
         * the tfoot element.
         * @param {?} tableElement
         * @param {?} stickyStates
         * @return {?}
         */

      }, {
        key: "updateStickyFooterContainer",
        value: function updateStickyFooterContainer(tableElement, stickyStates) {
          if (!this._isNativeHtmlTable) {
            return;
          }
          /** @type {?} */


          var tfoot =
          /** @type {?} */
          tableElement.querySelector('tfoot');

          if (stickyStates.some(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return !state;
          })) {
            this._removeStickyStyle(tfoot, ['bottom']);
          } else {
            this._addStickyStyle(tfoot, 'bottom', 0);
          }
        }
        /**
         * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
         * the zIndex, removing each of the provided sticky directions, and removing the
         * sticky position if there are no more directions.
         * @param {?} element
         * @param {?} stickyDirections
         * @return {?}
         */

      }, {
        key: "_removeStickyStyle",
        value: function _removeStickyStyle(element, stickyDirections) {
          var _iterator3 = _createForOfIteratorHelper(stickyDirections),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var dir = _step3.value;
              element.style[dir] = '';
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          element.style.zIndex = this._getCalculatedZIndex(element); // If the element no longer has any more sticky directions, remove sticky positioning and
          // the sticky CSS class.

          /** @type {?} */

          var hasDirection = STICKY_DIRECTIONS.some(
          /**
          * @param {?} dir
          * @return {?}
          */
          function (dir) {
            return !!element.style[dir];
          });

          if (!hasDirection) {
            element.style.position = '';
            element.classList.remove(this._stickCellCss);
          }
        }
        /**
         * Adds the sticky styling to the element by adding the sticky style class, changing position
         * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
         * direction and value.
         * @param {?} element
         * @param {?} dir
         * @param {?} dirValue
         * @return {?}
         */

      }, {
        key: "_addStickyStyle",
        value: function _addStickyStyle(element, dir, dirValue) {
          element.classList.add(this._stickCellCss);
          element.style[dir] = "".concat(dirValue, "px");
          element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
          element.style.zIndex = this._getCalculatedZIndex(element);
        }
        /**
         * Calculate what the z-index should be for the element, depending on what directions (top,
         * bottom, left, right) have been set. It should be true that elements with a top direction
         * should have the highest index since these are elements like a table header. If any of those
         * elements are also sticky in another direction, then they should appear above other elements
         * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
         * (e.g. footer rows) should then be next in the ordering such that they are below the header
         * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
         * should minimally increment so that they are above non-sticky elements but below top and bottom
         * elements.
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_getCalculatedZIndex",
        value: function _getCalculatedZIndex(element) {
          /** @type {?} */
          var zIndexIncrements = {
            top: 100,
            bottom: 10,
            left: 1,
            right: 1
          };
          /** @type {?} */

          var zIndex = 0;

          var _iterator4 = _createForOfIteratorHelper(STICKY_DIRECTIONS),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var dir = _step4.value;

              if (element.style[dir]) {
                zIndex += zIndexIncrements[dir];
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          return zIndex ? "".concat(zIndex) : '';
        }
        /**
         * Gets the widths for each cell in the provided row.
         * @param {?} row
         * @return {?}
         */

      }, {
        key: "_getCellWidths",
        value: function _getCellWidths(row) {
          /** @type {?} */
          var cellWidths = [];
          /** @type {?} */

          var firstRowCells = row.children;

          for (var i = 0; i < firstRowCells.length; i++) {
            /** @type {?} */
            var cell =
            /** @type {?} */
            firstRowCells[i];
            cellWidths.push(cell.getBoundingClientRect().width);
          }

          return cellWidths;
        }
        /**
         * Determines the left and right positions of each sticky column cell, which will be the
         * accumulation of all sticky column cell widths to the left and right, respectively.
         * Non-sticky cells do not need to have a value set since their positions will not be applied.
         * @param {?} widths
         * @param {?} stickyStates
         * @return {?}
         */

      }, {
        key: "_getStickyStartColumnPositions",
        value: function _getStickyStartColumnPositions(widths, stickyStates) {
          /** @type {?} */
          var positions = [];
          /** @type {?} */

          var nextPosition = 0;

          for (var i = 0; i < widths.length; i++) {
            if (stickyStates[i]) {
              positions[i] = nextPosition;
              nextPosition += widths[i];
            }
          }

          return positions;
        }
        /**
         * Determines the left and right positions of each sticky column cell, which will be the
         * accumulation of all sticky column cell widths to the left and right, respectively.
         * Non-sticky cells do not need to have a value set since their positions will not be applied.
         * @param {?} widths
         * @param {?} stickyStates
         * @return {?}
         */

      }, {
        key: "_getStickyEndColumnPositions",
        value: function _getStickyEndColumnPositions(widths, stickyStates) {
          /** @type {?} */
          var positions = [];
          /** @type {?} */

          var nextPosition = 0;

          for (var i = widths.length; i > 0; i--) {
            if (stickyStates[i]) {
              positions[i] = nextPosition;
              nextPosition += widths[i];
            }
          }

          return positions;
        }
      }]);

      return StickyStyler;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Returns an error to be thrown when attempting to find an unexisting column.
     * \@docs-private
     * @param {?} id Id whose lookup failed.
     * @return {?}
     */


    function getTableUnknownColumnError(id) {
      return Error("Could not find column with id \"".concat(id, "\"."));
    }
    /**
     * Returns an error to be thrown when two column definitions have the same name.
     * \@docs-private
     * @param {?} name
     * @return {?}
     */


    function getTableDuplicateColumnNameError(name) {
      return Error("Duplicate column definition name provided: \"".concat(name, "\"."));
    }
    /**
     * Returns an error to be thrown when there are multiple rows that are missing a when function.
     * \@docs-private
     * @return {?}
     */


    function getTableMultipleDefaultRowDefsError() {
      return Error("There can only be one default row without a when predicate function.");
    }
    /**
     * Returns an error to be thrown when there are no matching row defs for a particular set of data.
     * \@docs-private
     * @param {?} data
     * @return {?}
     */


    function getTableMissingMatchingRowDefError(data) {
      return Error("Could not find a matching row definition for the" + "provided row data: ".concat(JSON.stringify(data)));
    }
    /**
     * Returns an error to be thrown when there is no row definitions present in the content.
     * \@docs-private
     * @return {?}
     */


    function getTableMissingRowDefsError() {
      return Error('Missing definitions for header, footer, and row; ' + 'cannot determine which columns should be rendered.');
    }
    /**
     * Returns an error to be thrown when the data source does not match the compatible types.
     * \@docs-private
     * @return {?}
     */


    function getTableUnknownDataSourceError() {
      return Error("Provided data source did not match an array, Observable, or DataSource");
    }
    /**
     * Returns an error to be thrown when the text column cannot find a parent table to inject.
     * \@docs-private
     * @return {?}
     */


    function getTableTextColumnMissingParentTableError() {
      return Error("Text column could not find a parent table for registration.");
    }
    /**
     * Returns an error to be thrown when a table text column doesn't have a name.
     * \@docs-private
     * @return {?}
     */


    function getTableTextColumnMissingNameError() {
      return Error("Table text column must have a name.");
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Provides a handle for the table to grab the view container's ng-container to insert data rows.
     * \@docs-private
     */


    var DataRowOutlet =
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    function DataRowOutlet(viewContainer, elementRef) {
      _classCallCheck(this, DataRowOutlet);

      this.viewContainer = viewContainer;
      this.elementRef = elementRef;
    };

    DataRowOutlet.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[rowOutlet]'
      }]
    }];
    /** @nocollapse */

    DataRowOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    /**
     * Provides a handle for the table to grab the view container's ng-container to insert the header.
     * \@docs-private
     */


    var HeaderRowOutlet =
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    function HeaderRowOutlet(viewContainer, elementRef) {
      _classCallCheck(this, HeaderRowOutlet);

      this.viewContainer = viewContainer;
      this.elementRef = elementRef;
    };

    HeaderRowOutlet.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[headerRowOutlet]'
      }]
    }];
    /** @nocollapse */

    HeaderRowOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    /**
     * Provides a handle for the table to grab the view container's ng-container to insert the footer.
     * \@docs-private
     */


    var FooterRowOutlet =
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    function FooterRowOutlet(viewContainer, elementRef) {
      _classCallCheck(this, FooterRowOutlet);

      this.viewContainer = viewContainer;
      this.elementRef = elementRef;
    };

    FooterRowOutlet.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[footerRowOutlet]'
      }]
    }];
    /** @nocollapse */

    FooterRowOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    /**
     * The table template that can be used by the mat-table. Should not be used outside of the
     * material library.
     * \@docs-private
     * @type {?}
     */


    var CDK_TABLE_TEMPLATE = // Note that according to MDN, the `caption` element has to be projected as the **first**
    // element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
    "\n  <ng-content select=\"caption\"></ng-content>\n  <ng-container headerRowOutlet></ng-container>\n  <ng-container rowOutlet></ng-container>\n  <ng-container footerRowOutlet></ng-container>\n";
    /**
     * A data table that can render a header row, data rows, and a footer row.
     * Uses the dataSource input to determine the data to be rendered. The data can be provided either
     * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
     * connect function that will return an Observable stream that emits the data array to render.
     * @template T
     */

    var CdkTable = /*#__PURE__*/function () {
      /**
       * @param {?} _differs
       * @param {?} _changeDetectorRef
       * @param {?} _elementRef
       * @param {?} role
       * @param {?} _dir
       * @param {?} _document
       * @param {?} _platform
       */
      function CdkTable(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform) {
        _classCallCheck(this, CdkTable);

        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._dir = _dir;
        this._platform = _platform;
        /**
         * Subject that emits when the component has been destroyed.
         */

        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Map of all the user's defined columns (header, data, and footer cell template) identified by
         * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
         * any custom column definitions added to `_customColumnDefs`.
         */

        this._columnDefsByName = new Map();
        /**
         * Column definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * column definitions as *its* content child.
         */

        this._customColumnDefs = new Set();
        /**
         * Data row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in data rows as *its* content child.
         */

        this._customRowDefs = new Set();
        /**
         * Header row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in header rows as *its* content child.
         */

        this._customHeaderRowDefs = new Set();
        /**
         * Footer row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
         * built-in footer row as *its* content child.
         */

        this._customFooterRowDefs = new Set();
        /**
         * Whether the header row definition has been changed. Triggers an update to the header row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */

        this._headerRowDefChanged = true;
        /**
         * Whether the footer row definition has been changed. Triggers an update to the footer row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */

        this._footerRowDefChanged = true;
        /**
         * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
         * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
         * the cached `RenderRow` objects when possible, the row identity is preserved when the data
         * and row template matches, which allows the `IterableDiffer` to check rows by reference
         * and understand which rows are added/moved/removed.
         *
         * Implemented as a map of maps where the first key is the `data: T` object and the second is the
         * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
         * contains an array of created pairs. The array is necessary to handle cases where the data
         * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
         * stored.
         */

        this._cachedRenderRowsMap = new Map();
        /**
         * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
         * table subclasses.
         */

        this.stickyCssClass = 'cdk-table-sticky';
        this._multiTemplateDataRows = false; // TODO(andrewseguin): Remove max value as the end index
        //   and instead calculate the view on init and scroll.

        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         *
         * \@docs-private
         */

        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]({
          start: 0,
          end: Number.MAX_VALUE
        });

        if (!role) {
          this._elementRef.nativeElement.setAttribute('role', 'grid');
        }

        this._document = _document;
        this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
      }
      /**
       * Tracking function that will be used to check the differences in data changes. Used similarly
       * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
       * relative to the function to know if a row should be added/removed/moved.
       * Accepts a function that takes two parameters, `index` and `item`.
       * @return {?}
       */


      _createClass(CdkTable, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this5 = this;

          this._setupStickyStyler();

          if (this._isNativeHtmlTable) {
            this._applyNativeTableSections();
          } // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
          // the user has provided a custom trackBy, return the result of that function as evaluated
          // with the values of the `RenderRow`'s data and index.


          this._dataDiffer = this._differs.find([]).create(
          /**
          * @param {?} _i
          * @param {?} dataRow
          * @return {?}
          */
          function (_i, dataRow) {
            return _this5.trackBy ? _this5.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
          this._cacheRowDefs();

          this._cacheColumnDefs(); // Make sure that the user has at least added header, footer, or data row def.


          if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length) {
            throw getTableMissingRowDefsError();
          } // Render updates if the list of columns have been changed for the header, row, or footer defs.


          this._renderUpdatedColumns(); // If the header row definition has been changed, trigger a render to the header row.


          if (this._headerRowDefChanged) {
            this._forceRenderHeaderRows();

            this._headerRowDefChanged = false;
          } // If the footer row definition has been changed, trigger a render to the footer row.


          if (this._footerRowDefChanged) {
            this._forceRenderFooterRows();

            this._footerRowDefChanged = false;
          } // If there is a data source and row definitions, connect to the data source unless a
          // connection has already been made.


          if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
            this._observeRenderChanges();
          }

          this._checkStickyStates();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._rowOutlet.viewContainer.clear();

          this._headerRowOutlet.viewContainer.clear();

          this._footerRowOutlet.viewContainer.clear();

          this._cachedRenderRowsMap.clear();

          this._onDestroy.next();

          this._onDestroy.complete();

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["isDataSource"])(this.dataSource)) {
            this.dataSource.disconnect(this);
          }
        }
        /**
         * Renders rows based on the table's latest set of data, which was either provided directly as an
         * input or retrieved through an Observable stream (directly or from a DataSource).
         * Checks for differences in the data since the last diff to perform only the necessary
         * changes (add/remove/move rows).
         *
         * If the table's data source is a DataSource or Observable, this will be invoked automatically
         * each time the provided Observable stream emits a new data array. Otherwise if your data is
         * an array, this function will need to be called to render any changes.
         * @return {?}
         */

      }, {
        key: "renderRows",
        value: function renderRows() {
          var _this6 = this;

          this._renderRows = this._getAllRenderRows();
          /** @type {?} */

          var changes = this._dataDiffer.diff(this._renderRows);

          if (!changes) {
            return;
          }
          /** @type {?} */


          var viewContainer = this._rowOutlet.viewContainer;
          changes.forEachOperation(
          /**
          * @param {?} record
          * @param {?} prevIndex
          * @param {?} currentIndex
          * @return {?}
          */
          function (record, prevIndex, currentIndex) {
            if (record.previousIndex == null) {
              _this6._insertRow(record.item,
              /** @type {?} */
              currentIndex);
            } else if (currentIndex == null) {
              viewContainer.remove(
              /** @type {?} */
              prevIndex);
            } else {
              /** @type {?} */
              var view =
              /** @type {?} */
              viewContainer.get(
              /** @type {?} */
              prevIndex);
              viewContainer.move(
              /** @type {?} */
              view, currentIndex);
            }
          }); // Update the meta context of a row's context data (index, count, first, last, ...)

          this._updateRowIndexContext(); // Update rows that did not get added/removed/moved but may have had their identity changed,
          // e.g. if trackBy matched data on some property but the actual data reference changed.


          changes.forEachIdentityChange(
          /**
          * @param {?} record
          * @return {?}
          */
          function (record) {
            /** @type {?} */
            var rowView =
            /** @type {?} */
            viewContainer.get(
            /** @type {?} */
            record.currentIndex);
            rowView.context.$implicit = record.item.data;
          });
          this.updateStickyColumnStyles();
        }
        /**
         * Sets the header row definition to be used. Overrides the header row definition gathered by
         * using `ContentChild`, if one exists. Sets a flag that will re-render the header row after the
         * table's content is checked.
         * \@docs-private
         * @deprecated Use `addHeaderRowDef` and `removeHeaderRowDef` instead
         * \@breaking-change 8.0.0
         * @param {?} headerRowDef
         * @return {?}
         */

      }, {
        key: "setHeaderRowDef",
        value: function setHeaderRowDef(headerRowDef) {
          this._customHeaderRowDefs = new Set([headerRowDef]);
          this._headerRowDefChanged = true;
        }
        /**
         * Sets the footer row definition to be used. Overrides the footer row definition gathered by
         * using `ContentChild`, if one exists. Sets a flag that will re-render the footer row after the
         * table's content is checked.
         * \@docs-private
         * @deprecated Use `addFooterRowDef` and `removeFooterRowDef` instead
         * \@breaking-change 8.0.0
         * @param {?} footerRowDef
         * @return {?}
         */

      }, {
        key: "setFooterRowDef",
        value: function setFooterRowDef(footerRowDef) {
          this._customFooterRowDefs = new Set([footerRowDef]);
          this._footerRowDefChanged = true;
        }
        /**
         * Adds a column definition that was not included as part of the content children.
         * @param {?} columnDef
         * @return {?}
         */

      }, {
        key: "addColumnDef",
        value: function addColumnDef(columnDef) {
          this._customColumnDefs.add(columnDef);
        }
        /**
         * Removes a column definition that was not included as part of the content children.
         * @param {?} columnDef
         * @return {?}
         */

      }, {
        key: "removeColumnDef",
        value: function removeColumnDef(columnDef) {
          this._customColumnDefs["delete"](columnDef);
        }
        /**
         * Adds a row definition that was not included as part of the content children.
         * @param {?} rowDef
         * @return {?}
         */

      }, {
        key: "addRowDef",
        value: function addRowDef(rowDef) {
          this._customRowDefs.add(rowDef);
        }
        /**
         * Removes a row definition that was not included as part of the content children.
         * @param {?} rowDef
         * @return {?}
         */

      }, {
        key: "removeRowDef",
        value: function removeRowDef(rowDef) {
          this._customRowDefs["delete"](rowDef);
        }
        /**
         * Adds a header row definition that was not included as part of the content children.
         * @param {?} headerRowDef
         * @return {?}
         */

      }, {
        key: "addHeaderRowDef",
        value: function addHeaderRowDef(headerRowDef) {
          this._customHeaderRowDefs.add(headerRowDef);

          this._headerRowDefChanged = true;
        }
        /**
         * Removes a header row definition that was not included as part of the content children.
         * @param {?} headerRowDef
         * @return {?}
         */

      }, {
        key: "removeHeaderRowDef",
        value: function removeHeaderRowDef(headerRowDef) {
          this._customHeaderRowDefs["delete"](headerRowDef);

          this._headerRowDefChanged = true;
        }
        /**
         * Adds a footer row definition that was not included as part of the content children.
         * @param {?} footerRowDef
         * @return {?}
         */

      }, {
        key: "addFooterRowDef",
        value: function addFooterRowDef(footerRowDef) {
          this._customFooterRowDefs.add(footerRowDef);

          this._footerRowDefChanged = true;
        }
        /**
         * Removes a footer row definition that was not included as part of the content children.
         * @param {?} footerRowDef
         * @return {?}
         */

      }, {
        key: "removeFooterRowDef",
        value: function removeFooterRowDef(footerRowDef) {
          this._customFooterRowDefs["delete"](footerRowDef);

          this._footerRowDefChanged = true;
        }
        /**
         * Updates the header sticky styles. First resets all applied styles with respect to the cells
         * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
         * automatically called when the header row changes its displayed set of columns, or if its
         * sticky input changes. May be called manually for cases where the cell content changes outside
         * of these events.
         * @return {?}
         */

      }, {
        key: "updateStickyHeaderRowStyles",
        value: function updateStickyHeaderRowStyles() {
          /** @type {?} */
          var headerRows = this._getRenderedRows(this._headerRowOutlet);
          /** @type {?} */


          var tableElement =
          /** @type {?} */
          this._elementRef.nativeElement; // Hide the thead element if there are no header rows. This is necessary to satisfy
          // overzealous a11y checkers that fail because the `rowgroup` element does not contain
          // required child `row`.

          /** @type {?} */

          var thead = tableElement.querySelector('thead');

          if (thead) {
            thead.style.display = headerRows.length ? '' : 'none';
          }
          /** @type {?} */


          var stickyStates = this._headerRowDefs.map(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.sticky;
          });

          this._stickyStyler.clearStickyPositioning(headerRows, ['top']);

          this._stickyStyler.stickRows(headerRows, stickyStates, 'top'); // Reset the dirty state of the sticky input change since it has been used.


          this._headerRowDefs.forEach(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.resetStickyChanged();
          });
        }
        /**
         * Updates the footer sticky styles. First resets all applied styles with respect to the cells
         * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
         * automatically called when the footer row changes its displayed set of columns, or if its
         * sticky input changes. May be called manually for cases where the cell content changes outside
         * of these events.
         * @return {?}
         */

      }, {
        key: "updateStickyFooterRowStyles",
        value: function updateStickyFooterRowStyles() {
          /** @type {?} */
          var footerRows = this._getRenderedRows(this._footerRowOutlet);
          /** @type {?} */


          var tableElement =
          /** @type {?} */
          this._elementRef.nativeElement; // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
          // overzealous a11y checkers that fail because the `rowgroup` element does not contain
          // required child `row`.

          /** @type {?} */

          var tfoot = tableElement.querySelector('tfoot');

          if (tfoot) {
            tfoot.style.display = footerRows.length ? '' : 'none';
          }
          /** @type {?} */


          var stickyStates = this._footerRowDefs.map(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.sticky;
          });

          this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);

          this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');

          this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates); // Reset the dirty state of the sticky input change since it has been used.


          this._footerRowDefs.forEach(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.resetStickyChanged();
          });
        }
        /**
         * Updates the column sticky styles. First resets all applied styles with respect to the cells
         * sticking to the left and right. Then sticky styles are added for the left and right according
         * to the column definitions for each cell in each row. This is automatically called when
         * the data source provides a new set of data or when a column definition changes its sticky
         * input. May be called manually for cases where the cell content changes outside of these events.
         * @return {?}
         */

      }, {
        key: "updateStickyColumnStyles",
        value: function updateStickyColumnStyles() {
          var _this7 = this;

          /** @type {?} */
          var headerRows = this._getRenderedRows(this._headerRowOutlet);
          /** @type {?} */


          var dataRows = this._getRenderedRows(this._rowOutlet);
          /** @type {?} */


          var footerRows = this._getRenderedRows(this._footerRowOutlet); // Clear the left and right positioning from all columns in the table across all rows since
          // sticky columns span across all table sections (header, data, footer)


          this._stickyStyler.clearStickyPositioning([].concat(_toConsumableArray(headerRows), _toConsumableArray(dataRows), _toConsumableArray(footerRows)), ['left', 'right']); // Update the sticky styles for each header row depending on the def's sticky state


          headerRows.forEach(
          /**
          * @param {?} headerRow
          * @param {?} i
          * @return {?}
          */
          function (headerRow, i) {
            _this7._addStickyColumnStyles([headerRow], _this7._headerRowDefs[i]);
          }); // Update the sticky styles for each data row depending on its def's sticky state

          this._rowDefs.forEach(
          /**
          * @param {?} rowDef
          * @return {?}
          */
          function (rowDef) {
            // Collect all the rows rendered with this row definition.

            /** @type {?} */
            var rows = [];

            for (var i = 0; i < dataRows.length; i++) {
              if (_this7._renderRows[i].rowDef === rowDef) {
                rows.push(dataRows[i]);
              }
            }

            _this7._addStickyColumnStyles(rows, rowDef);
          }); // Update the sticky styles for each footer row depending on the def's sticky state


          footerRows.forEach(
          /**
          * @param {?} footerRow
          * @param {?} i
          * @return {?}
          */
          function (footerRow, i) {
            _this7._addStickyColumnStyles([footerRow], _this7._footerRowDefs[i]);
          }); // Reset the dirty state of the sticky input change since it has been used.

          Array.from(this._columnDefsByName.values()).forEach(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.resetStickyChanged();
          });
        }
        /**
         * Get the list of RenderRow objects to render according to the current list of data and defined
         * row definitions. If the previous list already contained a particular pair, it should be reused
         * so that the differ equates their references.
         * @private
         * @return {?}
         */

      }, {
        key: "_getAllRenderRows",
        value: function _getAllRenderRows() {
          /** @type {?} */
          var renderRows = []; // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
          // new cache while unused ones can be picked up by garbage collection.

          /** @type {?} */

          var prevCachedRenderRows = this._cachedRenderRowsMap;
          this._cachedRenderRowsMap = new Map(); // For each data object, get the list of rows that should be rendered, represented by the
          // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.

          for (var i = 0; i < this._data.length; i++) {
            /** @type {?} */
            var data = this._data[i];
            /** @type {?} */

            var renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));

            if (!this._cachedRenderRowsMap.has(data)) {
              this._cachedRenderRowsMap.set(data, new WeakMap());
            }

            for (var j = 0; j < renderRowsForData.length; j++) {
              /** @type {?} */
              var renderRow = renderRowsForData[j];
              /** @type {?} */

              var cache =
              /** @type {?} */
              this._cachedRenderRowsMap.get(renderRow.data);

              if (cache.has(renderRow.rowDef)) {
                /** @type {?} */
                cache.get(renderRow.rowDef).push(renderRow);
              } else {
                cache.set(renderRow.rowDef, [renderRow]);
              }

              renderRows.push(renderRow);
            }
          }

          return renderRows;
        }
        /**
         * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
         * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
         * `(T, CdkRowDef)` pair.
         * @private
         * @param {?} data
         * @param {?} dataIndex
         * @param {?=} cache
         * @return {?}
         */

      }, {
        key: "_getRenderRowsForData",
        value: function _getRenderRowsForData(data, dataIndex, cache) {
          /** @type {?} */
          var rowDefs = this._getRowDefs(data, dataIndex);

          return rowDefs.map(
          /**
          * @param {?} rowDef
          * @return {?}
          */
          function (rowDef) {
            /** @type {?} */
            var cachedRenderRows = cache && cache.has(rowDef) ?
            /** @type {?} */
            cache.get(rowDef) : [];

            if (cachedRenderRows.length) {
              /** @type {?} */
              var dataRow =
              /** @type {?} */
              cachedRenderRows.shift();
              dataRow.dataIndex = dataIndex;
              return dataRow;
            } else {
              return {
                data: data,
                rowDef: rowDef,
                dataIndex: dataIndex
              };
            }
          });
        }
        /**
         * Update the map containing the content's column definitions.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheColumnDefs",
        value: function _cacheColumnDefs() {
          var _this8 = this;

          this._columnDefsByName.clear();
          /** @type {?} */


          var columnDefs = mergeQueryListAndSet(this._contentColumnDefs, this._customColumnDefs);
          columnDefs.forEach(
          /**
          * @param {?} columnDef
          * @return {?}
          */
          function (columnDef) {
            if (_this8._columnDefsByName.has(columnDef.name)) {
              throw getTableDuplicateColumnNameError(columnDef.name);
            }

            _this8._columnDefsByName.set(columnDef.name, columnDef);
          });
        }
        /**
         * Update the list of all available row definitions that can be used.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheRowDefs",
        value: function _cacheRowDefs() {
          this._headerRowDefs = mergeQueryListAndSet(this._contentHeaderRowDefs, this._customHeaderRowDefs);
          this._footerRowDefs = mergeQueryListAndSet(this._contentFooterRowDefs, this._customFooterRowDefs);
          this._rowDefs = mergeQueryListAndSet(this._contentRowDefs, this._customRowDefs); // After all row definitions are determined, find the row definition to be considered default.

          /** @type {?} */

          var defaultRowDefs = this._rowDefs.filter(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return !def.when;
          });

          if (!this.multiTemplateDataRows && defaultRowDefs.length > 1) {
            throw getTableMultipleDefaultRowDefsError();
          }

          this._defaultRowDef = defaultRowDefs[0];
        }
        /**
         * Check if the header, data, or footer rows have changed what columns they want to display or
         * whether the sticky states have changed for the header or footer. If there is a diff, then
         * re-render that section.
         * @private
         * @return {?}
         */

      }, {
        key: "_renderUpdatedColumns",
        value: function _renderUpdatedColumns() {
          /** @type {?} */
          var columnsDiffReducer =
          /**
          * @param {?} acc
          * @param {?} def
          * @return {?}
          */
          function columnsDiffReducer(acc, def) {
            return acc || !!def.getColumnsDiff();
          }; // Force re-render data rows if the list of column definitions have changed.


          if (this._rowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderDataRows();
          } // Force re-render header/footer rows if the list of column definitions have changed..


          if (this._headerRowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderHeaderRows();
          }

          if (this._footerRowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderFooterRows();
          }
        }
        /**
         * Switch to the provided data source by resetting the data and unsubscribing from the current
         * render change subscription if one exists. If the data source is null, interpret this by
         * clearing the row outlet. Otherwise start listening for new data.
         * @private
         * @param {?} dataSource
         * @return {?}
         */

      }, {
        key: "_switchDataSource",
        value: function _switchDataSource(dataSource) {
          this._data = [];

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["isDataSource"])(this.dataSource)) {
            this.dataSource.disconnect(this);
          } // Stop listening for data from the previous data source.


          if (this._renderChangeSubscription) {
            this._renderChangeSubscription.unsubscribe();

            this._renderChangeSubscription = null;
          }

          if (!dataSource) {
            if (this._dataDiffer) {
              this._dataDiffer.diff([]);
            }

            this._rowOutlet.viewContainer.clear();
          }

          this._dataSource = dataSource;
        }
        /**
         * Set up a subscription for the data provided by the data source.
         * @private
         * @return {?}
         */

      }, {
        key: "_observeRenderChanges",
        value: function _observeRenderChanges() {
          var _this9 = this;

          // If no data source has been set, there is nothing to observe for changes.
          if (!this.dataSource) {
            return;
          }
          /** @type {?} */


          var dataStream;

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["isDataSource"])(this.dataSource)) {
            dataStream = this.dataSource.connect(this);
          } else if (this.dataSource instanceof rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"]) {
            dataStream = this.dataSource;
          } else if (Array.isArray(this.dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.dataSource);
          }

          if (dataStream === undefined) {
            throw getTableUnknownDataSourceError();
          }

          this._renderChangeSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy)).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this9._data = data || [];

            _this9.renderRows();
          });
        }
        /**
         * Clears any existing content in the header row outlet and creates a new embedded view
         * in the outlet using the header row definition.
         * @private
         * @return {?}
         */

      }, {
        key: "_forceRenderHeaderRows",
        value: function _forceRenderHeaderRows() {
          var _this10 = this;

          // Clear the header row outlet if any content exists.
          if (this._headerRowOutlet.viewContainer.length > 0) {
            this._headerRowOutlet.viewContainer.clear();
          }

          this._headerRowDefs.forEach(
          /**
          * @param {?} def
          * @param {?} i
          * @return {?}
          */
          function (def, i) {
            return _this10._renderRow(_this10._headerRowOutlet, def, i);
          });

          this.updateStickyHeaderRowStyles();
          this.updateStickyColumnStyles();
        }
        /**
         * Clears any existing content in the footer row outlet and creates a new embedded view
         * in the outlet using the footer row definition.
         * @private
         * @return {?}
         */

      }, {
        key: "_forceRenderFooterRows",
        value: function _forceRenderFooterRows() {
          var _this11 = this;

          // Clear the footer row outlet if any content exists.
          if (this._footerRowOutlet.viewContainer.length > 0) {
            this._footerRowOutlet.viewContainer.clear();
          }

          this._footerRowDefs.forEach(
          /**
          * @param {?} def
          * @param {?} i
          * @return {?}
          */
          function (def, i) {
            return _this11._renderRow(_this11._footerRowOutlet, def, i);
          });

          this.updateStickyFooterRowStyles();
          this.updateStickyColumnStyles();
        }
        /**
         * Adds the sticky column styles for the rows according to the columns' stick states.
         * @private
         * @param {?} rows
         * @param {?} rowDef
         * @return {?}
         */

      }, {
        key: "_addStickyColumnStyles",
        value: function _addStickyColumnStyles(rows, rowDef) {
          var _this12 = this;

          /** @type {?} */
          var columnDefs = Array.from(rowDef.columns || []).map(
          /**
          * @param {?} columnName
          * @return {?}
          */
          function (columnName) {
            /** @type {?} */
            var columnDef = _this12._columnDefsByName.get(columnName);

            if (!columnDef) {
              throw getTableUnknownColumnError(columnName);
            }

            return (
              /** @type {?} */
              columnDef
            );
          });
          /** @type {?} */

          var stickyStartStates = columnDefs.map(
          /**
          * @param {?} columnDef
          * @return {?}
          */
          function (columnDef) {
            return columnDef.sticky;
          });
          /** @type {?} */

          var stickyEndStates = columnDefs.map(
          /**
          * @param {?} columnDef
          * @return {?}
          */
          function (columnDef) {
            return columnDef.stickyEnd;
          });

          this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates);
        }
        /**
         * Gets the list of rows that have been rendered in the row outlet.
         * @param {?} rowOutlet
         * @return {?}
         */

      }, {
        key: "_getRenderedRows",
        value: function _getRenderedRows(rowOutlet) {
          /** @type {?} */
          var renderedRows = [];

          for (var i = 0; i < rowOutlet.viewContainer.length; i++) {
            /** @type {?} */
            var viewRef =
            /** @type {?} */

            /** @type {?} */
            rowOutlet.viewContainer.get(i);
            renderedRows.push(viewRef.rootNodes[0]);
          }

          return renderedRows;
        }
        /**
         * Get the matching row definitions that should be used for this row data. If there is only
         * one row definition, it is returned. Otherwise, find the row definitions that has a when
         * predicate that returns true with the data. If none return true, return the default row
         * definition.
         * @param {?} data
         * @param {?} dataIndex
         * @return {?}
         */

      }, {
        key: "_getRowDefs",
        value: function _getRowDefs(data, dataIndex) {
          if (this._rowDefs.length == 1) {
            return [this._rowDefs[0]];
          }
          /** @type {?} */


          var rowDefs = [];

          if (this.multiTemplateDataRows) {
            rowDefs = this._rowDefs.filter(
            /**
            * @param {?} def
            * @return {?}
            */
            function (def) {
              return !def.when || def.when(dataIndex, data);
            });
          } else {
            /** @type {?} */
            var rowDef = this._rowDefs.find(
            /**
            * @param {?} def
            * @return {?}
            */
            function (def) {
              return def.when && def.when(dataIndex, data);
            }) || this._defaultRowDef;

            if (rowDef) {
              rowDefs.push(rowDef);
            }
          }

          if (!rowDefs.length) {
            throw getTableMissingMatchingRowDefError(data);
          }

          return rowDefs;
        }
        /**
         * Create the embedded view for the data row template and place it in the correct index location
         * within the data row view container.
         * @private
         * @param {?} renderRow
         * @param {?} renderIndex
         * @return {?}
         */

      }, {
        key: "_insertRow",
        value: function _insertRow(renderRow, renderIndex) {
          /** @type {?} */
          var rowDef = renderRow.rowDef;
          /** @type {?} */

          var context = {
            $implicit: renderRow.data
          };

          this._renderRow(this._rowOutlet, rowDef, renderIndex, context);
        }
        /**
         * Creates a new row template in the outlet and fills it with the set of cell templates.
         * Optionally takes a context to provide to the row and cells, as well as an optional index
         * of where to place the new row template in the outlet.
         * @private
         * @param {?} outlet
         * @param {?} rowDef
         * @param {?} index
         * @param {?=} context
         * @return {?}
         */

      }, {
        key: "_renderRow",
        value: function _renderRow(outlet, rowDef, index) {
          var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
          outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);

          var _iterator5 = _createForOfIteratorHelper(this._getCellTemplates(rowDef)),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var cellTemplate = _step5.value;

              if (CdkCellOutlet.mostRecentCellOutlet) {
                CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Updates the index-related context for each row to reflect any changes in the index of the rows,
         * e.g. first/last/even/odd.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateRowIndexContext",
        value: function _updateRowIndexContext() {
          /** @type {?} */
          var viewContainer = this._rowOutlet.viewContainer;

          for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            /** @type {?} */
            var viewRef =
            /** @type {?} */
            viewContainer.get(renderIndex);
            /** @type {?} */

            var context =
            /** @type {?} */
            viewRef.context;
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;

            if (this.multiTemplateDataRows) {
              context.dataIndex = this._renderRows[renderIndex].dataIndex;
              context.renderIndex = renderIndex;
            } else {
              context.index = this._renderRows[renderIndex].dataIndex;
            }
          }
        }
        /**
         * Gets the column definitions for the provided row def.
         * @private
         * @param {?} rowDef
         * @return {?}
         */

      }, {
        key: "_getCellTemplates",
        value: function _getCellTemplates(rowDef) {
          var _this13 = this;

          if (!rowDef || !rowDef.columns) {
            return [];
          }

          return Array.from(rowDef.columns,
          /**
          * @param {?} columnId
          * @return {?}
          */
          function (columnId) {
            /** @type {?} */
            var column = _this13._columnDefsByName.get(columnId);

            if (!column) {
              throw getTableUnknownColumnError(columnId);
            }

            return rowDef.extractCellTemplate(column);
          });
        }
        /**
         * Adds native table sections (e.g. tbody) and moves the row outlets into them.
         * @private
         * @return {?}
         */

      }, {
        key: "_applyNativeTableSections",
        value: function _applyNativeTableSections() {
          /** @type {?} */
          var documentFragment = this._document.createDocumentFragment();
          /** @type {?} */


          var sections = [{
            tag: 'thead',
            outlet: this._headerRowOutlet
          }, {
            tag: 'tbody',
            outlet: this._rowOutlet
          }, {
            tag: 'tfoot',
            outlet: this._footerRowOutlet
          }];

          for (var _i2 = 0, _sections = sections; _i2 < _sections.length; _i2++) {
            var section = _sections[_i2];

            /** @type {?} */
            var element = this._document.createElement(section.tag);

            element.setAttribute('role', 'rowgroup');
            element.appendChild(section.outlet.elementRef.nativeElement);
            documentFragment.appendChild(element);
          } // Use a DocumentFragment so we don't hit the DOM on each iteration.


          this._elementRef.nativeElement.appendChild(documentFragment);
        }
        /**
         * Forces a re-render of the data rows. Should be called in cases where there has been an input
         * change that affects the evaluation of which rows should be rendered, e.g. toggling
         * `multiTemplateDataRows` or adding/removing row definitions.
         * @private
         * @return {?}
         */

      }, {
        key: "_forceRenderDataRows",
        value: function _forceRenderDataRows() {
          this._dataDiffer.diff([]);

          this._rowOutlet.viewContainer.clear();

          this.renderRows();
          this.updateStickyColumnStyles();
        }
        /**
         * Checks if there has been a change in sticky states since last check and applies the correct
         * sticky styles. Since checking resets the "dirty" state, this should only be performed once
         * during a change detection and after the inputs are settled (after content check).
         * @private
         * @return {?}
         */

      }, {
        key: "_checkStickyStates",
        value: function _checkStickyStates() {
          /** @type {?} */
          var stickyCheckReducer =
          /**
          * @param {?} acc
          * @param {?} d
          * @return {?}
          */
          function stickyCheckReducer(acc, d) {
            return acc || d.hasStickyChanged();
          }; // Note that the check needs to occur for every definition since it notifies the definition
          // that it can reset its dirty state. Using another operator like `some` may short-circuit
          // remaining definitions and leave them in an unchecked state.


          if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyHeaderRowStyles();
          }

          if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyFooterRowStyles();
          }

          if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
            this.updateStickyColumnStyles();
          }
        }
        /**
         * Creates the sticky styler that will be used for sticky rows and columns. Listens
         * for directionality changes and provides the latest direction to the styler. Re-applies column
         * stickiness when directionality changes.
         * @private
         * @return {?}
         */

      }, {
        key: "_setupStickyStyler",
        value: function _setupStickyStyler() {
          var _this14 = this;

          /** @type {?} */
          var direction = this._dir ? this._dir.value : 'ltr';
          this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._platform.isBrowser);
          (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy)).subscribe(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            _this14._stickyStyler.direction = value;

            _this14.updateStickyColumnStyles();
          });
        }
      }, {
        key: "trackBy",
        get: function get() {
          return this._trackByFn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        ,
        set: function set(fn) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && fn != null && typeof fn !== 'function' &&
          /** @type {?} */
          console &&
          /** @type {?} */
          console.warn) {
            console.warn("trackBy must be a function, but received ".concat(JSON.stringify(fn), "."));
          }

          this._trackByFn = fn;
        }
        /**
         * The table's source of data, which can be provided in three ways (in order of complexity):
         *   - Simple data array (each object represents one table row)
         *   - Stream that emits a data array each time the array changes
         *   - `DataSource` object that implements the connect/disconnect interface.
         *
         * If a data array is provided, the table must be notified when the array's objects are
         * added, removed, or moved. This can be done by calling the `renderRows()` function which will
         * render the diff since the last table render. If the data array reference is changed, the table
         * will automatically trigger an update to the rows.
         *
         * When providing an Observable stream, the table will trigger an update automatically when the
         * stream emits a new array of data.
         *
         * Finally, when providing a `DataSource` object, the table will use the Observable stream
         * provided by the connect function and trigger updates when that stream emits new data array
         * values. During the table's ngOnDestroy or when the data source is removed from the table, the
         * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
         * subscriptions registered during the connect process).
         * @return {?}
         */

      }, {
        key: "dataSource",
        get: function get() {
          return this._dataSource;
        }
        /**
         * @param {?} dataSource
         * @return {?}
         */
        ,
        set: function set(dataSource) {
          if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
          }
        }
        /**
         * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
         * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
         * dataobject will render the first row that evaluates its when predicate to true, in the order
         * defined in the table, or otherwise the default row which does not have a when predicate.
         * @return {?}
         */

      }, {
        key: "multiTemplateDataRows",
        get: function get() {
          return this._multiTemplateDataRows;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._multiTemplateDataRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(v); // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
          // this setter will be invoked before the row outlet has been defined hence the null check.

          if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
            this._forceRenderDataRows();
          }
        }
      }]);

      return CdkTable;
    }();

    CdkTable.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'cdk-table, table[cdk-table]',
        exportAs: 'cdkTable',
        template: CDK_TABLE_TEMPLATE,
        host: {
          'class': 'cdk-table'
        },
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        // The "OnPush" status for the `MatTable` component is effectively a noop, so we are removing it.
        // The view for `MatTable` consists entirely of templates declared in other views. As they are
        // declared elsewhere, they are checked when their declaration points are checked.
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
      }]
    }];
    /** @nocollapse */

    CdkTable.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['role']
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }];
    };

    CdkTable.propDecorators = {
      trackBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      dataSource: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      multiTemplateDataRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      _rowOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: [DataRowOutlet, {
          "static": true
        }]
      }],
      _headerRowOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: [HeaderRowOutlet, {
          "static": true
        }]
      }],
      _footerRowOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: [FooterRowOutlet, {
          "static": true
        }]
      }],
      _contentColumnDefs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [CdkColumnDef]
      }],
      _contentRowDefs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [CdkRowDef]
      }],
      _contentHeaderRowDefs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [CdkHeaderRowDef]
      }],
      _contentFooterRowDefs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
        args: [CdkFooterRowDef]
      }]
    };
    /**
     * Utility function that gets a merged list of the entries in a QueryList and values of a Set.
     * @template T
     * @param {?} queryList
     * @param {?} set
     * @return {?}
     */

    function mergeQueryListAndSet(queryList, set) {
      return queryList.toArray().concat(Array.from(set));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to specify the text column options.
     * @type {?}
     */


    var TEXT_COLUMN_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('text-column-options');
    /**
     * Column that simply shows text content for the header and row cells. Assumes that the table
     * is using the native table implementation (`<table>`).
     *
     * By default, the name of this column will be the header text and data property accessor.
     * The header text can be overridden with the `headerText` input. Cell values can be overridden with
     * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
     * input.
     * @template T
     */

    var CdkTextColumn = /*#__PURE__*/function () {
      /**
       * @param {?} _table
       * @param {?} _options
       */
      function CdkTextColumn(_table, _options) {
        _classCallCheck(this, CdkTextColumn);

        this._table = _table;
        this._options = _options;
        /**
         * Alignment of the cell values.
         */

        this.justify = 'start';
        this._options = _options || {};
      }
      /**
       * Column name that should be used to reference this column.
       * @return {?}
       */


      _createClass(CdkTextColumn, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._syncColumnDefName();

          if (this.headerText === undefined) {
            this.headerText = this._createDefaultHeaderText();
          }

          if (!this.dataAccessor) {
            this.dataAccessor = this._options.defaultDataAccessor ||
            /**
            * @param {?} data
            * @param {?} name
            * @return {?}
            */
            function (data, name) {
              return (
                /** @type {?} */
                data[name]
              );
            };
          }

          if (this._table) {
            // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
            // since the columnDef will not pick up its content by the time the table finishes checking
            // its content and initializing the rows.
            this.columnDef.cell = this.cell;
            this.columnDef.headerCell = this.headerCell;

            this._table.addColumnDef(this.columnDef);
          } else {
            throw getTableTextColumnMissingParentTableError();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._table) {
            this._table.removeColumnDef(this.columnDef);
          }
        }
        /**
         * Creates a default header text. Use the options' header text transformation function if one
         * has been provided. Otherwise simply capitalize the column name.
         * @return {?}
         */

      }, {
        key: "_createDefaultHeaderText",
        value: function _createDefaultHeaderText() {
          /** @type {?} */
          var name = this.name;

          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && !name) {
            throw getTableTextColumnMissingNameError();
          }

          if (this._options && this._options.defaultHeaderTextTransform) {
            return this._options.defaultHeaderTextTransform(name);
          }

          return name[0].toUpperCase() + name.slice(1);
        }
        /**
         * Synchronizes the column definition name with the text column name.
         * @private
         * @return {?}
         */

      }, {
        key: "_syncColumnDefName",
        value: function _syncColumnDefName() {
          if (this.columnDef) {
            this.columnDef.name = this.name;
          }
        }
      }, {
        key: "name",
        get: function get() {
          return this._name;
        }
        /**
         * @param {?} name
         * @return {?}
         */
        ,
        set: function set(name) {
          this._name = name; // With Ivy, inputs can be initialized before static query results are
          // available. In that case, we defer the synchronization until "ngOnInit" fires.

          this._syncColumnDefName();
        }
      }]);

      return CdkTextColumn;
    }();

    CdkTextColumn.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'cdk-text-column',
        template: "\n    <ng-container cdkColumnDef>\n      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td cdk-cell *cdkCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        // Change detection is intentionally not set to OnPush. This component's template will be provided
        // to the table to be inserted into its view. This is problematic when change detection runs since
        // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
        // mean's the template in the table's view will not have the updated value (and in fact will cause
        // an ExpressionChangedAfterItHasBeenCheckedError).
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
      }]
    }];
    /** @nocollapse */

    CdkTextColumn.ctorParameters = function () {
      return [{
        type: CdkTable,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [TEXT_COLUMN_OPTIONS]
        }]
      }];
    };

    CdkTextColumn.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      headerText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      dataAccessor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      justify: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      columnDef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: [CdkColumnDef, {
          "static": true
        }]
      }],
      cell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: [CdkCellDef, {
          "static": true
        }]
      }],
      headerCell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: [CdkHeaderCellDef, {
          "static": true
        }]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn];

    var CdkTableModule = function CdkTableModule() {
      _classCallCheck(this, CdkTableModule);
    };

    CdkTableModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
        exports: EXPORTED_DECLARATIONS,
        declarations: EXPORTED_DECLARATIONS
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=table.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/checkbox.js":
  /*!************************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/checkbox.js ***!
    \************************************************************/

  /*! exports provided: MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, TransitionCheckState, MatCheckboxChange, MatCheckbox, MAT_CHECKBOX_CLICK_ACTION, _MatCheckboxRequiredValidatorModule, MatCheckboxModule, MAT_CHECKBOX_REQUIRED_VALIDATOR, MatCheckboxRequiredValidator */

  /***/
  function node_modulesAngularMaterialEsm2015CheckboxJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR", function () {
      return MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransitionCheckState", function () {
      return TransitionCheckState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCheckboxChange", function () {
      return MatCheckboxChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCheckbox", function () {
      return MatCheckbox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_CLICK_ACTION", function () {
      return MAT_CHECKBOX_CLICK_ACTION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatCheckboxRequiredValidatorModule", function () {
      return _MatCheckboxRequiredValidatorModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCheckboxModule", function () {
      return MatCheckboxModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_REQUIRED_VALIDATOR", function () {
      return MAT_CHECKBOX_REQUIRED_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCheckboxRequiredValidator", function () {
      return MatCheckboxRequiredValidator;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/esm2015/observers.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to specify the checkbox click behavior.
     * @type {?}
     */


    var MAT_CHECKBOX_CLICK_ACTION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-checkbox-click-action');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Increasing integer for generating unique ids for checkbox components.

    /** @type {?} */

    var nextUniqueId = 0;
    /**
     * Provider Expression that allows mat-checkbox to register as a ControlValueAccessor.
     * This allows it to support [(ngModel)].
     * \@docs-private
     * @type {?}
     */

    var MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatCheckbox;
      }),
      multi: true
    };
    /** @enum {number} */

    var TransitionCheckState = {
      /** The initial state of the component before any user interaction. */
      Init: 0,

      /** The state representing the component when it's becoming checked. */
      Checked: 1,

      /** The state representing the component when it's becoming unchecked. */
      Unchecked: 2,

      /** The state representing the component when it's becoming indeterminate. */
      Indeterminate: 3
    };
    TransitionCheckState[TransitionCheckState.Init] = 'Init';
    TransitionCheckState[TransitionCheckState.Checked] = 'Checked';
    TransitionCheckState[TransitionCheckState.Unchecked] = 'Unchecked';
    TransitionCheckState[TransitionCheckState.Indeterminate] = 'Indeterminate';
    /**
     * Change event object emitted by MatCheckbox.
     */

    var MatCheckboxChange = function MatCheckboxChange() {
      _classCallCheck(this, MatCheckboxChange);
    }; // Boilerplate for applying mixins to MatCheckbox.

    /**
     * \@docs-private
     */


    var MatCheckboxBase =
    /**
     * @param {?} _elementRef
     */
    function MatCheckboxBase(_elementRef) {
      _classCallCheck(this, MatCheckboxBase);

      this._elementRef = _elementRef;
    };
    /** @type {?} */


    var _MatCheckboxMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisabled"])(MatCheckboxBase)), 'accent'));
    /**
     * A material design checkbox component. Supports all of the functionality of an HTML5 checkbox,
     * and exposes a similar API. A MatCheckbox can be either checked, unchecked, indeterminate, or
     * disabled. Note that all additional accessibility attributes are taken care of by the component,
     * so there is no need to provide them yourself. However, if you want to omit a label and still
     * have the checkbox be accessible, you may supply an [aria-label] input.
     * See: https://material.io/design/components/selection-controls.html
     */


    var MatCheckbox = /*#__PURE__*/function (_MatCheckboxMixinBase2) {
      _inherits(MatCheckbox, _MatCheckboxMixinBase2);

      var _super11 = _createSuper(MatCheckbox);

      /**
       * @param {?} elementRef
       * @param {?} _changeDetectorRef
       * @param {?} _focusMonitor
       * @param {?} _ngZone
       * @param {?} tabIndex
       * @param {?} _clickAction
       * @param {?=} _animationMode
       */
      function MatCheckbox(elementRef, _changeDetectorRef, _focusMonitor, _ngZone, tabIndex, _clickAction, _animationMode) {
        var _this15;

        _classCallCheck(this, MatCheckbox);

        _this15 = _super11.call(this, elementRef);
        _this15._changeDetectorRef = _changeDetectorRef;
        _this15._focusMonitor = _focusMonitor;
        _this15._ngZone = _ngZone;
        _this15._clickAction = _clickAction;
        _this15._animationMode = _animationMode;
        /**
         * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
         * take precedence so this may be omitted.
         */

        _this15.ariaLabel = '';
        /**
         * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
         */

        _this15.ariaLabelledby = null;
        _this15._uniqueId = "mat-checkbox-".concat(++nextUniqueId);
        /**
         * A unique id for the checkbox input. If none is supplied, it will be auto-generated.
         */

        _this15.id = _this15._uniqueId;
        /**
         * Whether the label should appear after or before the checkbox. Defaults to 'after'
         */

        _this15.labelPosition = 'after';
        /**
         * Name value will be applied to the input element if present
         */

        _this15.name = null;
        /**
         * Event emitted when the checkbox's `checked` value changes.
         */

        _this15.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the checkbox's `indeterminate` value changes.
         */

        _this15.indeterminateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
         * \@docs-private
         */

        _this15._onTouched =
        /**
        * @return {?}
        */
        function () {};

        _this15._currentAnimationClass = '';
        _this15._currentCheckState = TransitionCheckState.Init;

        _this15._controlValueAccessorChangeFn =
        /**
        * @return {?}
        */
        function () {};

        _this15._checked = false;
        _this15._disabled = false;
        _this15._indeterminate = false;
        _this15.tabIndex = parseInt(tabIndex) || 0;

        _this15._focusMonitor.monitor(elementRef, true).subscribe(
        /**
        * @param {?} focusOrigin
        * @return {?}
        */
        function (focusOrigin) {
          if (!focusOrigin) {
            // When a focused element becomes disabled, the browser *immediately* fires a blur event.
            // Angular does not expect events to be raised during change detection, so any state change
            // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
            // See https://github.com/angular/angular/issues/17793. To work around this, we defer
            // telling the form control it has been touched until the next tick.
            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              _this15._onTouched();

              _changeDetectorRef.markForCheck();
            });
          }
        });

        return _this15;
      }
      /**
       * Returns the unique id for the visual hidden input.
       * @return {?}
       */


      _createClass(MatCheckbox, [{
        key: "ngAfterViewChecked",
        // TODO: Delete next major revision.

        /**
         * @return {?}
         */
        value: function ngAfterViewChecked() {}
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this._elementRef);
        }
        /**
         * Whether the checkbox is checked.
         * @return {?}
         */

      }, {
        key: "_isRippleDisabled",

        /**
         * @return {?}
         */
        value: function _isRippleDisabled() {
          return this.disableRipple || this.disabled;
        }
        /**
         * Method being called whenever the label text changes.
         * @return {?}
         */

      }, {
        key: "_onLabelTextChange",
        value: function _onLabelTextChange() {
          // Since the event of the `cdkObserveContent` directive runs outside of the zone, the checkbox
          // component will be only marked for check, but no actual change detection runs automatically.
          // Instead of going back into the zone in order to trigger a change detection which causes
          // *all* components to be checked (if explicitly marked or not using OnPush), we only trigger
          // an explicit change detection for the checkbox view and its children.
          this._changeDetectorRef.detectChanges();
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.checked = !!value;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._controlValueAccessorChangeFn = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_getAriaChecked",
        value: function _getAriaChecked() {
          return this.checked ? 'true' : this.indeterminate ? 'mixed' : 'false';
        }
        /**
         * @private
         * @param {?} newState
         * @return {?}
         */

      }, {
        key: "_transitionCheckState",
        value: function _transitionCheckState(newState) {
          /** @type {?} */
          var oldState = this._currentCheckState;
          /** @type {?} */

          var element = this._elementRef.nativeElement;

          if (oldState === newState) {
            return;
          }

          if (this._currentAnimationClass.length > 0) {
            element.classList.remove(this._currentAnimationClass);
          }

          this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
          this._currentCheckState = newState;

          if (this._currentAnimationClass.length > 0) {
            element.classList.add(this._currentAnimationClass); // Remove the animation class to avoid animation when the checkbox is moved between containers

            /** @type {?} */

            var animationClass = this._currentAnimationClass;

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                element.classList.remove(animationClass);
              }, 1000);
            });
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          /** @type {?} */
          var event = new MatCheckboxChange();
          event.source = this;
          event.checked = this.checked;

          this._controlValueAccessorChangeFn(this.checked);

          this.change.emit(event);
        }
        /**
         * Toggles the `checked` state of the checkbox.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          this.checked = !this.checked;
        }
        /**
         * Event handler for checkbox input element.
         * Toggles checked state if element is not disabled.
         * Do not toggle on (change) event since IE doesn't fire change event when
         *   indeterminate checkbox is clicked.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onInputClick",
        value: function _onInputClick(event) {
          var _this16 = this;

          // We have to stop propagation for click events on the visual hidden input element.
          // By default, when a user clicks on a label element, a generated click event will be
          // dispatched on the associated input element. Since we are using a label element as our
          // root container, the click event on the `checkbox` will be executed twice.
          // The real click event will bubble up, and the generated click event also tries to bubble up.
          // This will lead to multiple click events.
          // Preventing bubbling for the second event will solve that issue.
          event.stopPropagation(); // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click

          if (!this.disabled && this._clickAction !== 'noop') {
            // When user manually click on the checkbox, `indeterminate` is set to false.
            if (this.indeterminate && this._clickAction !== 'check') {
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                _this16._indeterminate = false;

                _this16.indeterminateChange.emit(_this16._indeterminate);
              });
            }

            this.toggle();

            this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked); // Emit our custom change event if the native input emitted one.
            // It is important to only emit it, if the native input triggered one, because
            // we don't want to trigger a change event, when the `checked` variable changes for example.


            this._emitChangeEvent();
          } else if (!this.disabled && this._clickAction === 'noop') {
            // Reset native input when clicked with noop. The native checkbox becomes checked after
            // click, reset it to be align with `checked` value of `mat-checkbox`.
            this._inputElement.nativeElement.checked = this.checked;
            this._inputElement.nativeElement.indeterminate = this.indeterminate;
          }
        }
        /**
         * Focuses the checkbox.
         * @param {?=} origin
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'keyboard';
          var options = arguments.length > 1 ? arguments[1] : undefined;

          this._focusMonitor.focusVia(this._inputElement, origin, options);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onInteractionEvent",
        value: function _onInteractionEvent(event) {
          // We always have to stop propagation on the change event.
          // Otherwise the change event, from the input element, will bubble up and
          // emit its event object to the `change` output.
          event.stopPropagation();
        }
        /**
         * @private
         * @param {?} oldState
         * @param {?} newState
         * @return {?}
         */

      }, {
        key: "_getAnimationClassForCheckStateTransition",
        value: function _getAnimationClassForCheckStateTransition(oldState, newState) {
          // Don't transition if animations are disabled.
          if (this._animationMode === 'NoopAnimations') {
            return '';
          }
          /** @type {?} */


          var animSuffix = '';

          switch (oldState) {
            case TransitionCheckState.Init:
              // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
              // [checked] bound to it.
              if (newState === TransitionCheckState.Checked) {
                animSuffix = 'unchecked-checked';
              } else if (newState == TransitionCheckState.Indeterminate) {
                animSuffix = 'unchecked-indeterminate';
              } else {
                return '';
              }

              break;

            case TransitionCheckState.Unchecked:
              animSuffix = newState === TransitionCheckState.Checked ? 'unchecked-checked' : 'unchecked-indeterminate';
              break;

            case TransitionCheckState.Checked:
              animSuffix = newState === TransitionCheckState.Unchecked ? 'checked-unchecked' : 'checked-indeterminate';
              break;

            case TransitionCheckState.Indeterminate:
              animSuffix = newState === TransitionCheckState.Checked ? 'indeterminate-checked' : 'indeterminate-unchecked';
              break;
          }

          return "mat-checkbox-anim-".concat(animSuffix);
        }
      }, {
        key: "inputId",
        get: function get() {
          return "".concat(this.id || this._uniqueId, "-input");
        }
        /**
         * Whether the checkbox is required.
         * @return {?}
         */

      }, {
        key: "required",
        get: function get() {
          return this._required;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
      }, {
        key: "checked",
        get: function get() {
          return this._checked;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value != this.checked) {
            this._checked = value;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Whether the checkbox is disabled. This fully overrides the implementation provided by
         * mixinDisabled, but the mixin is still required because mixinTabIndex requires it.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);

          if (newValue !== this.disabled) {
            this._disabled = newValue;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
         * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
         * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
         * set to false.
         * @return {?}
         */

      }, {
        key: "indeterminate",
        get: function get() {
          return this._indeterminate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var changed = value != this._indeterminate;
          this._indeterminate = value;

          if (changed) {
            if (this._indeterminate) {
              this._transitionCheckState(TransitionCheckState.Indeterminate);
            } else {
              this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
            }

            this.indeterminateChange.emit(this._indeterminate);
          }
        }
      }]);

      return MatCheckbox;
    }(_MatCheckboxMixinBase);

    MatCheckbox.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-checkbox',
        template: "<label [attr.for]=\"inputId\" class=\"mat-checkbox-layout\" #label><div class=\"mat-checkbox-inner-container\" [class.mat-checkbox-inner-container-no-side-margin]=\"!checkboxLabel.textContent || !checkboxLabel.textContent.trim()\"><input #input class=\"mat-checkbox-input cdk-visually-hidden\" type=\"checkbox\" [id]=\"inputId\" [required]=\"required\" [checked]=\"checked\" [attr.value]=\"value\" [disabled]=\"disabled\" [attr.name]=\"name\" [tabIndex]=\"tabIndex\" [indeterminate]=\"indeterminate\" [attr.aria-label]=\"ariaLabel || null\" [attr.aria-labelledby]=\"ariaLabelledby\" [attr.aria-checked]=\"_getAriaChecked()\" (change)=\"_onInteractionEvent($event)\" (click)=\"_onInputClick($event)\"><div matRipple class=\"mat-checkbox-ripple\" [matRippleTrigger]=\"label\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleRadius]=\"20\" [matRippleCentered]=\"true\" [matRippleAnimation]=\"{enterDuration: 150}\"><div class=\"mat-ripple-element mat-checkbox-persistent-ripple\"></div></div><div class=\"mat-checkbox-frame\"></div><div class=\"mat-checkbox-background\"><svg version=\"1.1\" focusable=\"false\" class=\"mat-checkbox-checkmark\" viewBox=\"0 0 24 24\" xml:space=\"preserve\"><path class=\"mat-checkbox-checkmark-path\" fill=\"none\" stroke=\"white\" d=\"M4.1,12.7 9,17.6 20.3,6.3\"/></svg><div class=\"mat-checkbox-mixedmark\"></div></div></div><span class=\"mat-checkbox-label\" #checkboxLabel (cdkObserveContent)=\"_onLabelTextChange()\"><span style=\"display:none\">&nbsp;</span><ng-content></ng-content></span></label>",
        styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.91026}50%{animation-timing-function:cubic-bezier(0,0,.2,.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0,0,0,1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(.4,0,1,1);stroke-dashoffset:0}to{stroke-dashoffset:-22.91026}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}100%,32.8%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0,0,.2,.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}@media (-ms-high-contrast:active){.mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0,0,.2,.1),opacity 90ms cubic-bezier(0,0,.2,.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media (hover:none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.91026;stroke-dasharray:22.91026;stroke-width:2.13333px}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0);border-radius:2px}@media (-ms-high-contrast:active){.mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0s mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0s mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:.3s linear 0s mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}"],
        exportAs: 'matCheckbox',
        host: {
          'class': 'mat-checkbox',
          '[id]': 'id',
          '[attr.tabindex]': 'null',
          '[class.mat-checkbox-indeterminate]': 'indeterminate',
          '[class.mat-checkbox-checked]': 'checked',
          '[class.mat-checkbox-disabled]': 'disabled',
          '[class.mat-checkbox-label-before]': 'labelPosition == "before"',
          '[class._mat-animation-noopable]': "_animationMode === 'NoopAnimations'"
        },
        providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR],
        inputs: ['disableRipple', 'color', 'tabIndex'],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatCheckbox.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_CHECKBOX_CLICK_ACTION]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatCheckbox.propDecorators = {
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['aria-labelledby']
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      labelPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      indeterminateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      _inputElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['input', {
          "static": false
        }]
      }],
      ripple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], {
          "static": false
        }]
      }],
      checked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      indeterminate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var MAT_CHECKBOX_REQUIRED_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatCheckboxRequiredValidator;
      }),
      multi: true
    };
    /**
     * Validator for Material checkbox's required attribute in template-driven checkbox.
     * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
     * work with `mat-checkbox`.
     */

    var MatCheckboxRequiredValidator = /*#__PURE__*/function (_angular_forms__WEBPA) {
      _inherits(MatCheckboxRequiredValidator, _angular_forms__WEBPA);

      var _super12 = _createSuper(MatCheckboxRequiredValidator);

      function MatCheckboxRequiredValidator() {
        _classCallCheck(this, MatCheckboxRequiredValidator);

        return _super12.apply(this, arguments);
      }

      return MatCheckboxRequiredValidator;
    }(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxRequiredValidator"]);

    MatCheckboxRequiredValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: "mat-checkbox[required][formControlName],\n             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]",
        providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This module is used by both original and MDC-based checkbox implementations.
     */
    // tslint:disable-next-line:class-name

    var _MatCheckboxRequiredValidatorModule = function _MatCheckboxRequiredValidatorModule() {
      _classCallCheck(this, _MatCheckboxRequiredValidatorModule);
    };

    _MatCheckboxRequiredValidatorModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        exports: [MatCheckboxRequiredValidator],
        declarations: [MatCheckboxRequiredValidator]
      }]
    }];

    var MatCheckboxModule = function MatCheckboxModule() {
      _classCallCheck(this, MatCheckboxModule);
    };

    MatCheckboxModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"], _MatCheckboxRequiredValidatorModule],
        exports: [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _MatCheckboxRequiredValidatorModule],
        declarations: [MatCheckbox]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=checkbox.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/expansion.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/expansion.js ***!
    \*************************************************************/

  /*! exports provided: MatExpansionModule, MatAccordion, MAT_ACCORDION, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelDescription, MatExpansionPanelTitle, MatExpansionPanelContent, EXPANSION_PANEL_ANIMATION_TIMING, matExpansionAnimations */

  /***/
  function node_modulesAngularMaterialEsm2015ExpansionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionModule", function () {
      return MatExpansionModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAccordion", function () {
      return MatAccordion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_ACCORDION", function () {
      return MAT_ACCORDION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_EXPANSION_PANEL_DEFAULT_OPTIONS", function () {
      return MAT_EXPANSION_PANEL_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanel", function () {
      return MatExpansionPanel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanelActionRow", function () {
      return MatExpansionPanelActionRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanelHeader", function () {
      return MatExpansionPanelHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanelDescription", function () {
      return MatExpansionPanelDescription;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanelTitle", function () {
      return MatExpansionPanelTitle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanelContent", function () {
      return MatExpansionPanelContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EXPANSION_PANEL_ANIMATION_TIMING", function () {
      return EXPANSION_PANEL_ANIMATION_TIMING;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matExpansionAnimations", function () {
      return matExpansionAnimations;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/accordion */
    "./node_modules/@angular/cdk/esm2015/accordion.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Token used to provide a `MatAccordion` to `MatExpansionPanel`.
     * Used primarily to avoid circular imports between `MatAccordion` and `MatExpansionPanel`.
     * @type {?}
     */


    var MAT_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_ACCORDION');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Time and timing curve for expansion panel animations.
     * @type {?}
     */

    var EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
    /**
     * Animations used by the Material expansion panel.
     *
     * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
     * causes the animation state of moved components to become `void` upon exit, and not update again
     * upon reentry into the DOM.  This can lead a to situation for the expansion panel where the state
     * of the panel is `expanded` or `collapsed` but the animation state is `void`.
     *
     * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
     * are defined to have the same styles. Since angular animates from the current styles to the
     * destination state's style definition, in situations where we are moving from `void`'s styles to
     * `collapsed` this acts a noop since no style values change.
     *
     * In the case where angular's animation state is out of sync with the expansion panel's state, the
     * expansion panel being `expanded` and angular animations being `void`, the animation from the
     * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
     * occur as expected.
     *
     * Angular Bug: https://github.com/angular/angular/issues/18847
     *
     * \@docs-private
     * @type {?}
     */

    var matExpansionAnimations = {
      /**
       * Animation that rotates the indicator arrow.
       */
      indicatorRotate: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('indicatorRotate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'rotate(0deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'rotate(180deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING))]),

      /**
       * Animation that expands and collapses the panel header height.
       */
      expansionHeaderHeight: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('expansionHeight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        height: '{{collapsedHeight}}'
      }), {
        params: {
          collapsedHeight: '48px'
        }
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        height: '{{expandedHeight}}'
      }), {
        params: {
          expandedHeight: '64px'
        }
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@indicatorRotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])(), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING)]))]),

      /**
       * Animation that expands and collapses the panel content.
       */
      bodyExpansion: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('bodyExpansion', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        height: '0px',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        height: '*',
        visibility: 'visible'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING))])
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Expansion panel content that will be rendered lazily
     * after the panel is opened for the first time.
     */

    var MatExpansionPanelContent =
    /**
     * @param {?} _template
     */
    function MatExpansionPanelContent(_template) {
      _classCallCheck(this, MatExpansionPanelContent);

      this._template = _template;
    };

    MatExpansionPanelContent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ng-template[matExpansionPanelContent]'
      }]
    }];
    /** @nocollapse */

    MatExpansionPanelContent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Counter for generating unique element ids.
     * @type {?}
     */


    var uniqueId = 0;
    /**
     * Injection token that can be used to configure the defalt
     * options for the expansion panel component.
     * @type {?}
     */

    var MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');
    var ɵ0 = undefined;
    /**
     * `<mat-expansion-panel>`
     *
     * This component can be used as a single element to show expandable content, or as one of
     * multiple children of an element with the MatAccordion directive attached.
     */

    var MatExpansionPanel = /*#__PURE__*/function (_angular_cdk_accordio) {
      _inherits(MatExpansionPanel, _angular_cdk_accordio);

      var _super13 = _createSuper(MatExpansionPanel);

      /**
       * @param {?} accordion
       * @param {?} _changeDetectorRef
       * @param {?} _uniqueSelectionDispatcher
       * @param {?} _viewContainerRef
       * @param {?} _document
       * @param {?} _animationMode
       * @param {?=} defaultOptions
       */
      function MatExpansionPanel(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
        var _this17;

        _classCallCheck(this, MatExpansionPanel);

        _this17 = _super13.call(this, accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
        _this17._viewContainerRef = _viewContainerRef;
        _this17._animationMode = _animationMode;
        _this17._hideToggle = false;
        /**
         * An event emitted after the body's expansion animation happens.
         */

        _this17.afterExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An event emitted after the body's collapse animation happens.
         */

        _this17.afterCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Stream that emits for changes in `\@Input` properties.
         */

        _this17._inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        /**
         * ID for the associated header element. Used for a11y labelling.
         */

        _this17._headerId = "mat-expansion-panel-header-".concat(uniqueId++);
        /**
         * Stream of body animation done events.
         */

        _this17._bodyAnimationDone = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        _this17.accordion = accordion;
        _this17._document = _document; // We need a Subject with distinctUntilChanged, because the `done` event
        // fires twice on some browsers. See https://github.com/angular/angular/issues/24084

        _this17._bodyAnimationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])(
        /**
        * @param {?} x
        * @param {?} y
        * @return {?}
        */
        function (x, y) {
          return x.fromState === y.fromState && x.toState === y.toState;
        })).subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (event.fromState !== 'void') {
            if (event.toState === 'expanded') {
              _this17.afterExpand.emit();
            } else if (event.toState === 'collapsed') {
              _this17.afterCollapse.emit();
            }
          }
        });

        if (defaultOptions) {
          _this17.hideToggle = defaultOptions.hideToggle;
        }

        return _this17;
      }
      /**
       * Whether the toggle indicator should be hidden.
       * @return {?}
       */


      _createClass(MatExpansionPanel, [{
        key: "_hasSpacing",

        /**
         * Determines whether the expansion panel should have spacing between it and its siblings.
         * @return {?}
         */
        value: function _hasSpacing() {
          if (this.accordion) {
            // We don't need to subscribe to the `stateChanges` of the parent accordion because each time
            // the [displayMode] input changes, the change detection will also cover the host bindings
            // of this expansion panel.
            return (this.expanded ? this.accordion.displayMode : this._getExpandedState()) === 'default';
          }

          return false;
        }
        /**
         * Gets the expanded state string.
         * @return {?}
         */

      }, {
        key: "_getExpandedState",
        value: function _getExpandedState() {
          return this.expanded ? 'expanded' : 'collapsed';
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this18 = this;

          if (this._lazyContent) {
            // Render the content as soon as the panel becomes open.
            this.opened.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(
            /** @type {?} */
            null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(
            /**
            * @return {?}
            */
            function () {
              return _this18.expanded && !_this18._portal;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this18._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["TemplatePortal"](_this18._lazyContent._template, _this18._viewContainerRef);
            });
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._inputChanges.next(changes);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(MatExpansionPanel.prototype), "ngOnDestroy", this).call(this);

          this._bodyAnimationDone.complete();

          this._inputChanges.complete();
        }
        /**
         * Checks whether the expansion panel's content contains the currently-focused element.
         * @return {?}
         */

      }, {
        key: "_containsFocus",
        value: function _containsFocus() {
          if (this._body) {
            /** @type {?} */
            var focusedElement = this._document.activeElement;
            /** @type {?} */

            var bodyElement = this._body.nativeElement;
            return focusedElement === bodyElement || bodyElement.contains(focusedElement);
          }

          return false;
        }
      }, {
        key: "hideToggle",
        get: function get() {
          return this._hideToggle || this.accordion && this.accordion.hideToggle;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
        /**
         * The position of the expansion indicator.
         * @return {?}
         */

      }, {
        key: "togglePosition",
        get: function get() {
          return this._togglePosition || this.accordion && this.accordion.togglePosition;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._togglePosition = value;
        }
      }]);

      return MatExpansionPanel;
    }(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__["CdkAccordionItem"]);

    MatExpansionPanel.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(.4,0,.2,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}@media (-ms-high-contrast:active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel._mat-animation-noopable,.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base{margin-left:0;margin-right:8px}"],
        selector: 'mat-expansion-panel',
        exportAs: 'matExpansionPanel',
        template: "<ng-content select=\"mat-expansion-panel-header\"></ng-content><div class=\"mat-expansion-panel-content\" role=\"region\" [@bodyExpansion]=\"_getExpandedState()\" (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\" [attr.aria-labelledby]=\"_headerId\" [id]=\"id\" #body><div class=\"mat-expansion-panel-body\"><ng-content></ng-content><ng-template [cdkPortalOutlet]=\"_portal\"></ng-template></div><ng-content select=\"mat-action-row\"></ng-content></div>",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        inputs: ['disabled', 'expanded'],
        outputs: ['opened', 'closed', 'expandedChange'],
        animations: [matExpansionAnimations.bodyExpansion],
        providers: [// Provide MatAccordion as undefined to prevent nested expansion panels from registering
        // to the same accordion.
        {
          provide: MAT_ACCORDION,
          useValue: ɵ0
        }],
        host: {
          'class': 'mat-expansion-panel',
          '[class.mat-expanded]': 'expanded',
          '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
          '[class.mat-expansion-panel-spacing]': '_hasSpacing()'
        }
      }]
    }];
    /** @nocollapse */

    MatExpansionPanel.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_ACCORDION]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["UniqueSelectionDispatcher"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    MatExpansionPanel.propDecorators = {
      hideToggle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      togglePosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      afterExpand: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      afterCollapse: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      _lazyContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [MatExpansionPanelContent, {
          "static": false
        }]
      }],
      _body: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['body', {
          "static": false
        }]
      }]
    };

    var MatExpansionPanelActionRow = function MatExpansionPanelActionRow() {
      _classCallCheck(this, MatExpansionPanelActionRow);
    };

    MatExpansionPanelActionRow.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'mat-action-row',
        host: {
          "class": 'mat-action-row'
        }
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * `<mat-expansion-panel-header>`
     *
     * This component corresponds to the header element of an `<mat-expansion-panel>`.
     */

    var MatExpansionPanelHeader = /*#__PURE__*/function () {
      /**
       * @param {?} panel
       * @param {?} _element
       * @param {?} _focusMonitor
       * @param {?} _changeDetectorRef
       * @param {?=} defaultOptions
       */
      function MatExpansionPanelHeader(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions) {
        var _this19 = this;

        _classCallCheck(this, MatExpansionPanelHeader);

        this.panel = panel;
        this._element = _element;
        this._focusMonitor = _focusMonitor;
        this._changeDetectorRef = _changeDetectorRef;
        this._parentChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
        /**
         * Whether Angular animations in the panel header should be disabled.
         */

        this._animationsDisabled = true;
        /** @type {?} */

        var accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(
        /**
        * @param {?} changes
        * @return {?}
        */
        function (changes) {
          return !!(changes['hideToggle'] || changes['togglePosition']);
        })) : rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"]; // Since the toggle state depends on an @Input on the panel, we
        // need to subscribe and trigger change detection manually.

        this._parentChangeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(
        /**
        * @param {?} changes
        * @return {?}
        */
        function (changes) {
          return !!(changes['hideToggle'] || changes['disabled'] || changes['togglePosition']);
        }))).subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this19._changeDetectorRef.markForCheck();
        }); // Avoids focus being lost if the panel contained the focused element and was closed.

        panel.closed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(
        /**
        * @return {?}
        */
        function () {
          return panel._containsFocus();
        })).subscribe(
        /**
        * @return {?}
        */
        function () {
          return _focusMonitor.focusVia(_element, 'program');
        });

        _focusMonitor.monitor(_element).subscribe(
        /**
        * @param {?} origin
        * @return {?}
        */
        function (origin) {
          if (origin && panel.accordion) {
            panel.accordion._handleHeaderFocus(_this19);
          }
        });

        if (defaultOptions) {
          this.expandedHeight = defaultOptions.expandedHeight;
          this.collapsedHeight = defaultOptions.collapsedHeight;
        }
      }
      /**
       * @return {?}
       */


      _createClass(MatExpansionPanelHeader, [{
        key: "_animationStarted",
        value: function _animationStarted() {
          // Currently the `expansionHeight` animation has a `void => collapsed` transition which is
          // there to work around a bug in Angular (see #13088), however this introduces a different
          // issue. The new transition will cause the header to animate in on init (see #16067), if the
          // consumer has set a header height that is different from the default one. We work around it
          // by disabling animations on the header and re-enabling them after the first animation has run.
          // Note that Angular dispatches animation events even if animations are disabled. Ideally this
          // wouldn't be necessary if we remove the `void => collapsed` transition, but we have to wait
          // for https://github.com/angular/angular/issues/18847 to be resolved.
          this._animationsDisabled = false;
        }
        /**
         * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "_toggle",

        /**
         * Toggles the expanded state of the panel.
         * @return {?}
         */
        value: function _toggle() {
          this.panel.toggle();
        }
        /**
         * Gets whether the panel is expanded.
         * @return {?}
         */

      }, {
        key: "_isExpanded",
        value: function _isExpanded() {
          return this.panel.expanded;
        }
        /**
         * Gets the expanded state string of the panel.
         * @return {?}
         */

      }, {
        key: "_getExpandedState",
        value: function _getExpandedState() {
          return this.panel._getExpandedState();
        }
        /**
         * Gets the panel id.
         * @return {?}
         */

      }, {
        key: "_getPanelId",
        value: function _getPanelId() {
          return this.panel.id;
        }
        /**
         * Gets the toggle position for the header.
         * @return {?}
         */

      }, {
        key: "_getTogglePosition",
        value: function _getTogglePosition() {
          return this.panel.togglePosition;
        }
        /**
         * Gets whether the expand indicator should be shown.
         * @return {?}
         */

      }, {
        key: "_showToggle",
        value: function _showToggle() {
          return !this.panel.hideToggle && !this.panel.disabled;
        }
        /**
         * Handle keydown event calling to toggle() if appropriate.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_keydown",
        value: function _keydown(event) {
          switch (event.keyCode) {
            // Toggle for space and enter keys.
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SPACE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"]:
              if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["hasModifierKey"])(event)) {
                event.preventDefault();

                this._toggle();
              }

              break;

            default:
              if (this.panel.accordion) {
                this.panel.accordion._handleHeaderKeydown(event);
              }

              return;
          }
        }
        /**
         * Focuses the panel header. Implemented as a part of `FocusableOption`.
         * \@docs-private
         * @param {?=} origin Origin of the action that triggered the focus.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
          var options = arguments.length > 1 ? arguments[1] : undefined;

          this._focusMonitor.focusVia(this._element, origin, options);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._parentChangeSubscription.unsubscribe();

          this._focusMonitor.stopMonitoring(this._element);
        }
      }, {
        key: "disabled",
        get: function get() {
          return this.panel.disabled;
        }
      }]);

      return MatExpansionPanelHeader;
    }();

    MatExpansionPanelHeader.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-expansion-panel-header',
        styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:0}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-description,.mat-expansion-panel-header-title{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-description,[dir=rtl] .mat-expansion-panel-header-title{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:'';display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}"],
        template: "<span class=\"mat-content\"><ng-content select=\"mat-panel-title\"></ng-content><ng-content select=\"mat-panel-description\"></ng-content><ng-content></ng-content></span><span [@indicatorRotate]=\"_getExpandedState()\" *ngIf=\"_showToggle()\" class=\"mat-expansion-indicator\"></span>",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        animations: [matExpansionAnimations.indicatorRotate, matExpansionAnimations.expansionHeaderHeight],
        host: {
          'class': 'mat-expansion-panel-header',
          'role': 'button',
          '[attr.id]': 'panel._headerId',
          '[attr.tabindex]': 'disabled ? -1 : 0',
          '[attr.aria-controls]': '_getPanelId()',
          '[attr.aria-expanded]': '_isExpanded()',
          '[attr.aria-disabled]': 'panel.disabled',
          '[class.mat-expanded]': '_isExpanded()',
          '[class.mat-expansion-toggle-indicator-after]': "_getTogglePosition() === 'after'",
          '[class.mat-expansion-toggle-indicator-before]': "_getTogglePosition() === 'before'",
          '(click)': '_toggle()',
          '(keydown)': '_keydown($event)',
          '[@.disabled]': '_animationsDisabled',
          '(@expansionHeight.start)': '_animationStarted()',
          '[@expansionHeight]': "{\n        value: _getExpandedState(),\n        params: {\n          collapsedHeight: collapsedHeight,\n          expandedHeight: expandedHeight\n        }\n    }"
        }
      }]
    }];
    /** @nocollapse */

    MatExpansionPanelHeader.ctorParameters = function () {
      return [{
        type: MatExpansionPanel,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    MatExpansionPanelHeader.propDecorators = {
      expandedHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      collapsedHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * `<mat-panel-description>`
     *
     * This directive is to be used inside of the MatExpansionPanelHeader component.
     */

    var MatExpansionPanelDescription = function MatExpansionPanelDescription() {
      _classCallCheck(this, MatExpansionPanelDescription);
    };

    MatExpansionPanelDescription.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'mat-panel-description',
        host: {
          "class": 'mat-expansion-panel-header-description'
        }
      }]
    }];
    /**
     * `<mat-panel-title>`
     *
     * This directive is to be used inside of the MatExpansionPanelHeader component.
     */

    var MatExpansionPanelTitle = function MatExpansionPanelTitle() {
      _classCallCheck(this, MatExpansionPanelTitle);
    };

    MatExpansionPanelTitle.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'mat-panel-title',
        host: {
          "class": 'mat-expansion-panel-header-title'
        }
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive for a Material Design Accordion.
     */

    var MatAccordion = /*#__PURE__*/function (_angular_cdk_accordio2) {
      _inherits(MatAccordion, _angular_cdk_accordio2);

      var _super14 = _createSuper(MatAccordion);

      function MatAccordion() {
        var _this20;

        _classCallCheck(this, MatAccordion);

        _this20 = _super14.apply(this, arguments);
        _this20._hideToggle = false;
        /**
         * Display mode used for all expansion panels in the accordion. Currently two display
         * modes exist:
         *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
         *     panel at a different elevation from the rest of the accordion.
         *  flat - no spacing is placed around expanded panels, showing all panels at the same
         *     elevation.
         */

        _this20.displayMode = 'default';
        /**
         * The position of the expansion indicator.
         */

        _this20.togglePosition = 'after';
        return _this20;
      }
      /**
       * Whether the expansion indicator should be hidden.
       * @return {?}
       */


      _createClass(MatAccordion, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusKeyManager"](this._headers).withWrap();
        }
        /**
         * Handles keyboard events coming in from the panel headers.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleHeaderKeydown",
        value: function _handleHeaderKeydown(event) {
          var keyCode = event.keyCode;
          /** @type {?} */

          var manager = this._keyManager;

          if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"]) {
            if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["hasModifierKey"])(event)) {
              manager.setFirstItemActive();
              event.preventDefault();
            }
          } else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"]) {
            if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["hasModifierKey"])(event)) {
              manager.setLastItemActive();
              event.preventDefault();
            }
          } else {
            this._keyManager.onKeydown(event);
          }
        }
        /**
         * @param {?} header
         * @return {?}
         */

      }, {
        key: "_handleHeaderFocus",
        value: function _handleHeaderFocus(header) {
          this._keyManager.updateActiveItem(header);
        }
      }, {
        key: "hideToggle",
        get: function get() {
          return this._hideToggle;
        }
        /**
         * @param {?} show
         * @return {?}
         */
        ,
        set: function set(show) {
          this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(show);
        }
      }]);

      return MatAccordion;
    }(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__["CdkAccordion"]);

    MatAccordion.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'mat-accordion',
        exportAs: 'matAccordion',
        inputs: ['multi'],
        providers: [{
          provide: MAT_ACCORDION,
          useExisting: MatAccordion
        }],
        host: {
          "class": 'mat-accordion'
        }
      }]
    }];
    MatAccordion.propDecorators = {
      _headers: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatExpansionPanelHeader, {
          descendants: true
        }]
      }],
      hideToggle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      displayMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      togglePosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatExpansionModule = function MatExpansionModule() {
      _classCallCheck(this, MatExpansionModule);
    };

    MatExpansionModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"]],
        exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
        declarations: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=expansion.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/paginator.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/paginator.js ***!
    \*************************************************************/

  /*! exports provided: MatPaginatorModule, PageEvent, MatPaginator, MAT_PAGINATOR_INTL_PROVIDER_FACTORY, MatPaginatorIntl, MAT_PAGINATOR_INTL_PROVIDER */

  /***/
  function node_modulesAngularMaterialEsm2015PaginatorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPaginatorModule", function () {
      return MatPaginatorModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageEvent", function () {
      return PageEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPaginator", function () {
      return MatPaginator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY", function () {
      return MAT_PAGINATOR_INTL_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl", function () {
      return MatPaginatorIntl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER", function () {
      return MAT_PAGINATOR_INTL_PROVIDER;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
     * include it in a custom provider
     */


    var MatPaginatorIntl = function MatPaginatorIntl() {
      _classCallCheck(this, MatPaginatorIntl);

      /**
       * Stream to emit from when labels are changed. Use this to notify components when the labels have
       * changed after initialization.
       */
      this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      /**
       * A label for the page size selector.
       */

      this.itemsPerPageLabel = 'Items per page:';
      /**
       * A label for the button that increments the current page.
       */

      this.nextPageLabel = 'Next page';
      /**
       * A label for the button that decrements the current page.
       */

      this.previousPageLabel = 'Previous page';
      /**
       * A label for the button that moves to the first page.
       */

      this.firstPageLabel = 'First page';
      /**
       * A label for the button that moves to the last page.
       */

      this.lastPageLabel = 'Last page';
      /**
       * A label for the range of items within the current page and the length of the whole list.
       */

      this.getRangeLabel =
      /**
      * @param {?} page
      * @param {?} pageSize
      * @param {?} length
      * @return {?}
      */
      function (page, pageSize, length) {
        if (length == 0 || pageSize == 0) {
          return "0 of ".concat(length);
        }

        length = Math.max(length, 0);
        /** @type {?} */

        var startIndex = page * pageSize; // If the start index exceeds the list length, do not try and fix the end index to the end.

        /** @type {?} */

        var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return "".concat(startIndex + 1, " \u2013 ").concat(endIndex, " of ").concat(length);
      };
    };

    MatPaginatorIntl.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    MatPaginatorIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function MatPaginatorIntl_Factory() {
        return new MatPaginatorIntl();
      },
      token: MatPaginatorIntl,
      providedIn: "root"
    });
    /**
     * \@docs-private
     * @param {?} parentIntl
     * @return {?}
     */

    function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
      return parentIntl || new MatPaginatorIntl();
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_PAGINATOR_INTL_PROVIDER = {
      // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
      provide: MatPaginatorIntl,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatPaginatorIntl]],
      useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The default page size if there is no page size and there are no provided page size options.
     * @type {?}
     */

    var DEFAULT_PAGE_SIZE = 50;
    /**
     * Change event object that is emitted when the user selects a
     * different page size or navigates to another page.
     */

    var PageEvent = function PageEvent() {
      _classCallCheck(this, PageEvent);
    }; // Boilerplate for applying mixins to MatPaginator.

    /**
     * \@docs-private
     */


    var MatPaginatorBase = function MatPaginatorBase() {
      _classCallCheck(this, MatPaginatorBase);
    };
    /** @type {?} */


    var _MatPaginatorBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinInitialized"])(MatPaginatorBase));
    /**
     * Component to provide navigation between paged information. Displays the size of the current
     * page, user-selectable options to change that size, what items are being shown, and
     * navigational button to go to the previous or next page.
     */


    var MatPaginator = /*#__PURE__*/function (_MatPaginatorBase2) {
      _inherits(MatPaginator, _MatPaginatorBase2);

      var _super15 = _createSuper(MatPaginator);

      /**
       * @param {?} _intl
       * @param {?} _changeDetectorRef
       */
      function MatPaginator(_intl, _changeDetectorRef) {
        var _this21;

        _classCallCheck(this, MatPaginator);

        _this21 = _super15.call(this);
        _this21._intl = _intl;
        _this21._changeDetectorRef = _changeDetectorRef;
        _this21._pageIndex = 0;
        _this21._length = 0;
        _this21._pageSizeOptions = [];
        _this21._hidePageSize = false;
        _this21._showFirstLastButtons = false;
        /**
         * Event emitted when the paginator changes the page size or page index.
         */

        _this21.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this21._intlChanges = _intl.changes.subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this21._changeDetectorRef.markForCheck();
        });
        return _this21;
      }
      /**
       * The zero-based page index of the displayed list of items. Defaulted to 0.
       * @return {?}
       */


      _createClass(MatPaginator, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._initialized = true;

          this._updateDisplayedPageSizeOptions();

          this._markInitialized();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._intlChanges.unsubscribe();
        }
        /**
         * Advances to the next page if it exists.
         * @return {?}
         */

      }, {
        key: "nextPage",
        value: function nextPage() {
          if (!this.hasNextPage()) {
            return;
          }
          /** @type {?} */


          var previousPageIndex = this.pageIndex;
          this.pageIndex++;

          this._emitPageEvent(previousPageIndex);
        }
        /**
         * Move back to the previous page if it exists.
         * @return {?}
         */

      }, {
        key: "previousPage",
        value: function previousPage() {
          if (!this.hasPreviousPage()) {
            return;
          }
          /** @type {?} */


          var previousPageIndex = this.pageIndex;
          this.pageIndex--;

          this._emitPageEvent(previousPageIndex);
        }
        /**
         * Move to the first page if not already there.
         * @return {?}
         */

      }, {
        key: "firstPage",
        value: function firstPage() {
          // hasPreviousPage being false implies at the start
          if (!this.hasPreviousPage()) {
            return;
          }
          /** @type {?} */


          var previousPageIndex = this.pageIndex;
          this.pageIndex = 0;

          this._emitPageEvent(previousPageIndex);
        }
        /**
         * Move to the last page if not already there.
         * @return {?}
         */

      }, {
        key: "lastPage",
        value: function lastPage() {
          // hasNextPage being false implies at the end
          if (!this.hasNextPage()) {
            return;
          }
          /** @type {?} */


          var previousPageIndex = this.pageIndex;
          this.pageIndex = this.getNumberOfPages() - 1;

          this._emitPageEvent(previousPageIndex);
        }
        /**
         * Whether there is a previous page.
         * @return {?}
         */

      }, {
        key: "hasPreviousPage",
        value: function hasPreviousPage() {
          return this.pageIndex >= 1 && this.pageSize != 0;
        }
        /**
         * Whether there is a next page.
         * @return {?}
         */

      }, {
        key: "hasNextPage",
        value: function hasNextPage() {
          /** @type {?} */
          var maxPageIndex = this.getNumberOfPages() - 1;
          return this.pageIndex < maxPageIndex && this.pageSize != 0;
        }
        /**
         * Calculate the number of pages
         * @return {?}
         */

      }, {
        key: "getNumberOfPages",
        value: function getNumberOfPages() {
          if (!this.pageSize) {
            return 0;
          }

          return Math.ceil(this.length / this.pageSize);
        }
        /**
         * Changes the page size so that the first item displayed on the page will still be
         * displayed using the new page size.
         *
         * For example, if the page size is 10 and on the second page (items indexed 10-19) then
         * switching so that the page size is 5 will set the third page as the current page so
         * that the 10th item will still be displayed.
         * @param {?} pageSize
         * @return {?}
         */

      }, {
        key: "_changePageSize",
        value: function _changePageSize(pageSize) {
          // Current page needs to be updated to reflect the new page size. Navigate to the page
          // containing the previous page's first item.

          /** @type {?} */
          var startIndex = this.pageIndex * this.pageSize;
          /** @type {?} */

          var previousPageIndex = this.pageIndex;
          this.pageIndex = Math.floor(startIndex / pageSize) || 0;
          this.pageSize = pageSize;

          this._emitPageEvent(previousPageIndex);
        }
        /**
         * Checks whether the buttons for going forwards should be disabled.
         * @return {?}
         */

      }, {
        key: "_nextButtonsDisabled",
        value: function _nextButtonsDisabled() {
          return this.disabled || !this.hasNextPage();
        }
        /**
         * Checks whether the buttons for going backwards should be disabled.
         * @return {?}
         */

      }, {
        key: "_previousButtonsDisabled",
        value: function _previousButtonsDisabled() {
          return this.disabled || !this.hasPreviousPage();
        }
        /**
         * Updates the list of page size options to display to the user. Includes making sure that
         * the page size is an option and that the list is sorted.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateDisplayedPageSizeOptions",
        value: function _updateDisplayedPageSizeOptions() {
          if (!this._initialized) {
            return;
          } // If no page size is provided, use the first page size option or the default page size.


          if (!this.pageSize) {
            this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
          }

          this._displayedPageSizeOptions = this.pageSizeOptions.slice();

          if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
            this._displayedPageSizeOptions.push(this.pageSize);
          } // Sort the numbers using a number-specific sort function.


          this._displayedPageSizeOptions.sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            return a - b;
          });

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Emits an event notifying that a change of the paginator's properties has been triggered.
         * @private
         * @param {?} previousPageIndex
         * @return {?}
         */

      }, {
        key: "_emitPageEvent",
        value: function _emitPageEvent(previousPageIndex) {
          this.page.emit({
            previousPageIndex: previousPageIndex,
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
            length: this.length
          });
        }
      }, {
        key: "pageIndex",
        get: function get() {
          return this._pageIndex;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._pageIndex = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value), 0);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * The length of the total number of items that are being paginated. Defaulted to 0.
         * @return {?}
         */

      }, {
        key: "length",
        get: function get() {
          return this._length;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._length = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Number of items to display on a page. By default set to 50.
         * @return {?}
         */

      }, {
        key: "pageSize",
        get: function get() {
          return this._pageSize;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._pageSize = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value), 0);

          this._updateDisplayedPageSizeOptions();
        }
        /**
         * The set of provided page size options to display to the user.
         * @return {?}
         */

      }, {
        key: "pageSizeOptions",
        get: function get() {
          return this._pageSizeOptions;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._pageSizeOptions = (value || []).map(
          /**
          * @param {?} p
          * @return {?}
          */
          function (p) {
            return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(p);
          });

          this._updateDisplayedPageSizeOptions();
        }
        /**
         * Whether to hide the page size selection UI from the user.
         * @return {?}
         */

      }, {
        key: "hidePageSize",
        get: function get() {
          return this._hidePageSize;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hidePageSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether to show the first/last buttons UI to the user.
         * @return {?}
         */

      }, {
        key: "showFirstLastButtons",
        get: function get() {
          return this._showFirstLastButtons;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._showFirstLastButtons = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
      }]);

      return MatPaginator;
    }(_MatPaginatorBase);

    MatPaginator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-paginator',
        exportAs: 'matPaginator',
        template: "<div class=\"mat-paginator-outer-container\"><div class=\"mat-paginator-container\"><div class=\"mat-paginator-page-size\" *ngIf=\"!hidePageSize\"><div class=\"mat-paginator-page-size-label\">{{_intl.itemsPerPageLabel}}</div><mat-form-field *ngIf=\"_displayedPageSizeOptions.length > 1\" [color]=\"color\" class=\"mat-paginator-page-size-select\"><mat-select [value]=\"pageSize\" [disabled]=\"disabled\" [aria-label]=\"_intl.itemsPerPageLabel\" (selectionChange)=\"_changePageSize($event.value)\"><mat-option *ngFor=\"let pageSizeOption of _displayedPageSizeOptions\" [value]=\"pageSizeOption\">{{pageSizeOption}}</mat-option></mat-select></mat-form-field><div *ngIf=\"_displayedPageSizeOptions.length <= 1\">{{pageSize}}</div></div><div class=\"mat-paginator-range-actions\"><div class=\"mat-paginator-range-label\">{{_intl.getRangeLabel(pageIndex, pageSize, length)}}</div><button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-first\" (click)=\"firstPage()\" [attr.aria-label]=\"_intl.firstPageLabel\" [matTooltip]=\"_intl.firstPageLabel\" [matTooltipDisabled]=\"_previousButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_previousButtonsDisabled()\" *ngIf=\"showFirstLastButtons\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"/></svg></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-previous\" (click)=\"previousPage()\" [attr.aria-label]=\"_intl.previousPageLabel\" [matTooltip]=\"_intl.previousPageLabel\" [matTooltipDisabled]=\"_previousButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_previousButtonsDisabled()\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-next\" (click)=\"nextPage()\" [attr.aria-label]=\"_intl.nextPageLabel\" [matTooltip]=\"_intl.nextPageLabel\" [matTooltipDisabled]=\"_nextButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_nextButtonsDisabled()\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg></button> <button mat-icon-button type=\"button\" class=\"mat-paginator-navigation-last\" (click)=\"lastPage()\" [attr.aria-label]=\"_intl.lastPageLabel\" [matTooltip]=\"_intl.lastPageLabel\" [matTooltipDisabled]=\"_nextButtonsDisabled()\" [matTooltipPosition]=\"'above'\" [disabled]=\"_nextButtonsDisabled()\" *ngIf=\"showFirstLastButtons\"><svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\"><path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"/></svg></button></div></div></div>",
        styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;min-height:56px;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}"],
        inputs: ['disabled'],
        host: {
          'class': 'mat-paginator'
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
      }]
    }];
    /** @nocollapse */

    MatPaginator.ctorParameters = function () {
      return [{
        type: MatPaginatorIntl
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    MatPaginator.propDecorators = {
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pageIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      length: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pageSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pageSizeOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hidePageSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showFirstLastButtons: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      page: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatPaginatorModule = function MatPaginatorModule() {
      _classCallCheck(this, MatPaginatorModule);
    };

    MatPaginatorModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"]],
        exports: [MatPaginator],
        declarations: [MatPaginator],
        providers: [MAT_PAGINATOR_INTL_PROVIDER]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=paginator.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/progress-bar.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/progress-bar.js ***!
    \****************************************************************/

  /*! exports provided: MatProgressBarModule, MAT_PROGRESS_BAR_LOCATION_FACTORY, MAT_PROGRESS_BAR_LOCATION, MatProgressBar */

  /***/
  function node_modulesAngularMaterialEsm2015ProgressBarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatProgressBarModule", function () {
      return MatProgressBarModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION_FACTORY", function () {
      return MAT_PROGRESS_BAR_LOCATION_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION", function () {
      return MAT_PROGRESS_BAR_LOCATION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatProgressBar", function () {
      return MatProgressBar;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatProgressBar.

    /**
     * \@docs-private
     */


    var MatProgressBarBase =
    /**
     * @param {?} _elementRef
     */
    function MatProgressBarBase(_elementRef) {
      _classCallCheck(this, MatProgressBarBase);

      this._elementRef = _elementRef;
    };
    /** @type {?} */


    var _MatProgressBarMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(MatProgressBarBase, 'primary');
    /**
     * Injection token used to provide the current location to `MatProgressBar`.
     * Used to handle server-side rendering and to stub out during unit tests.
     * \@docs-private
     * @type {?}
     */


    var MAT_PROGRESS_BAR_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-progress-bar-location', {
      providedIn: 'root',
      factory: MAT_PROGRESS_BAR_LOCATION_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
      /** @type {?} */
      var _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]);
      /** @type {?} */


      var _location = _document ? _document.location : null;

      return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        getPathname:
        /**
        * @return {?}
        */
        function getPathname() {
          return _location ? _location.pathname + _location.search : '';
        }
      };
    }
    /**
     * Counter used to generate unique IDs for progress bars.
     * @type {?}
     */


    var progressbarId = 0;
    /**
     * `<mat-progress-bar>` component.
     */

    var MatProgressBar = /*#__PURE__*/function (_MatProgressBarMixinB) {
      _inherits(MatProgressBar, _MatProgressBarMixinB);

      var _super16 = _createSuper(MatProgressBar);

      /**
       * @param {?} _elementRef
       * @param {?} _ngZone
       * @param {?=} _animationMode
       * @param {?=} location
       */
      function MatProgressBar(_elementRef, _ngZone, _animationMode,
      /**
       * @deprecated `location` parameter to be made required.
       * @breaking-change 8.0.0
       */
      location) {
        var _this22;

        _classCallCheck(this, MatProgressBar);

        _this22 = _super16.call(this, _elementRef);
        _this22._elementRef = _elementRef;
        _this22._ngZone = _ngZone;
        _this22._animationMode = _animationMode;
        /**
         * Flag that indicates whether NoopAnimations mode is set to true.
         */

        _this22._isNoopAnimation = false;
        _this22._value = 0;
        _this22._bufferValue = 0;
        /**
         * Event emitted when animation of the primary progress bar completes. This event will not
         * be emitted when animations are disabled, nor will it be emitted for modes with continuous
         * animations (indeterminate and query).
         */

        _this22.animationEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Reference to animation end subscription to be unsubscribed on destroy.
         */

        _this22._animationEndSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        /**
         * Mode of the progress bar.
         *
         * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
         * 'determinate'.
         * Mirrored to mode attribute.
         */

        _this22.mode = 'determinate';
        /**
         * ID of the progress bar.
         */

        _this22.progressbarId = "mat-progress-bar-".concat(progressbarId++); // We need to prefix the SVG reference with the current path, otherwise they won't work
        // in Safari if the page has a `<base>` tag. Note that we need quotes inside the `url()`,
        // because named route URLs can contain parentheses (see #12338). Also we don't use since
        // we can't tell the difference between whether
        // the consumer is using the hash location strategy or not, because `Location` normalizes
        // both `/#/foo/bar` and `/foo/bar` to the same thing.

        /** @type {?} */

        var path = location ? location.getPathname().split('#')[0] : '';
        _this22._rectangleFillValue = "url('".concat(path, "#").concat(_this22.progressbarId, "')");
        _this22._isNoopAnimation = _animationMode === 'NoopAnimations';
        return _this22;
      }
      /**
       * Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow.
       * @return {?}
       */


      _createClass(MatProgressBar, [{
        key: "_primaryTransform",

        /**
         * Gets the current transform value for the progress bar's primary indicator.
         * @return {?}
         */
        value: function _primaryTransform() {
          /** @type {?} */
          var scale = this.value / 100;
          return {
            transform: "scaleX(".concat(scale, ")")
          };
        }
        /**
         * Gets the current transform value for the progress bar's buffer indicator. Only used if the
         * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
         * @return {?}
         */

      }, {
        key: "_bufferTransform",
        value: function _bufferTransform() {
          if (this.mode === 'buffer') {
            /** @type {?} */
            var scale = this.bufferValue / 100;
            return {
              transform: "scaleX(".concat(scale, ")")
            };
          }

          return undefined;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this23 = this;

          if (!this._isNoopAnimation) {
            // Run outside angular so change detection didn't get triggered on every transition end
            // instead only on the animation that we care about (primary value bar's transitionend)
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var element = _this23._primaryValueBar.nativeElement;
              _this23._animationEndSubscription =
              /** @type {?} */
              Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
              /**
              * @param {?} e
              * @return {?}
              */
              function (e) {
                return e.target === element;
              })).subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this23._ngZone.run(
                /**
                * @return {?}
                */
                function () {
                  return _this23._emitAnimationEnd();
                });
              });
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._animationEndSubscription.unsubscribe();
        }
        /**
         * Emit an animationEnd event if in determinate or buffer mode.
         * @private
         * @return {?}
         */

      }, {
        key: "_emitAnimationEnd",
        value: function _emitAnimationEnd() {
          if (this.mode === 'determinate' || this.mode === 'buffer') {
            this.animationEnd.next({
              value: this.value
            });
          }
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._value = clamp(v || 0); // When noop animation is set to true, trigger animationEnd directly.

          if (this._isNoopAnimation) {
            this._emitAnimationEnd();
          }
        }
        /**
         * Buffer value of the progress bar. Defaults to zero.
         * @return {?}
         */

      }, {
        key: "bufferValue",
        get: function get() {
          return this._bufferValue;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._bufferValue = clamp(v || 0);
        }
      }]);

      return MatProgressBar;
    }(_MatProgressBarMixinBase);

    MatProgressBar.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-progress-bar',
        exportAs: 'matProgressBar',
        host: {
          'role': 'progressbar',
          'aria-valuemin': '0',
          'aria-valuemax': '100',
          '[attr.aria-valuenow]': '(mode === "indeterminate" || mode === "query") ? null : value',
          '[attr.mode]': 'mode',
          'class': 'mat-progress-bar',
          '[class._mat-animation-noopable]': '_isNoopAnimation'
        },
        inputs: ['color'],
        template: "<svg width=\"100%\" height=\"4\" focusable=\"false\" class=\"mat-progress-bar-background mat-progress-bar-element\"><defs><pattern [id]=\"progressbarId\" x=\"4\" y=\"0\" width=\"8\" height=\"4\" patternUnits=\"userSpaceOnUse\"><circle cx=\"2\" cy=\"2\" r=\"2\"/></pattern></defs><rect [attr.fill]=\"_rectangleFillValue\" width=\"100%\" height=\"100%\"/></svg><div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div><div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\" #primaryValueBar></div><div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>",
        styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-background{display:none}}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:'';display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2s infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2s infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2s infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2s infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after{animation:none;transition:none}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(83.67142%)}100%{transform:translateX(200.61106%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.66148)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:translateX(37.65191%)}48.35%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:translateX(84.38617%)}100%{transform:translateX(160.27778%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:scaleX(.4571)}44.15%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
      }]
    }];
    /** @nocollapse */

    MatProgressBar.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_PROGRESS_BAR_LOCATION]
        }]
      }];
    };

    MatProgressBar.propDecorators = {
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bufferValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      _primaryValueBar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['primaryValueBar', {
          "static": false
        }]
      }],
      animationEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      mode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * Clamps a value to be between two numbers, by default 0 and 100.
     * @param {?} v
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */

    function clamp(v) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
      return Math.max(min, Math.min(max, v));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatProgressBarModule = function MatProgressBarModule() {
      _classCallCheck(this, MatProgressBarModule);
    };

    MatProgressBarModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]],
        exports: [MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]],
        declarations: [MatProgressBar]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=progress-bar.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/select.js":
  /*!**********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/select.js ***!
    \**********************************************************/

  /*! exports provided: MatSelectModule, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MatSelectChange, MatSelectTrigger, MatSelect, matSelectAnimations, transformPanel, fadeInContent */

  /***/
  function node_modulesAngularMaterialEsm2015SelectJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelectModule", function () {
      return MatSelectModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY", function () {
      return MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function () {
      return SELECT_PANEL_MAX_HEIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function () {
      return SELECT_PANEL_PADDING_X;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function () {
      return SELECT_PANEL_INDENT_PADDING_X;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function () {
      return SELECT_ITEM_HEIGHT_EM;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function () {
      return SELECT_MULTIPLE_PANEL_PADDING_X;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function () {
      return SELECT_PANEL_VIEWPORT_PADDING;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY", function () {
      return MAT_SELECT_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER", function () {
      return MAT_SELECT_SCROLL_STRATEGY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelectChange", function () {
      return MatSelectChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelectTrigger", function () {
      return MatSelectTrigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelect", function () {
      return MatSelect;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matSelectAnimations", function () {
      return matSelectAnimations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transformPanel", function () {
      return transformPanel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInContent", function () {
      return fadeInContent;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The following are all the animations for the mat-select component, with each
     * const containing the metadata for one animation.
     *
     * The values below match the implementation of the AngularJS Material mat-select animation.
     * \@docs-private
     * @type {?}
     */


    var matSelectAnimations = {
      /**
       * This animation ensures the select's overlay panel animation (transformPanel) is called when
       * closing the select.
       * This is needed due to https://github.com/angular/angular/issues/23302
       */
      transformPanelWrap: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('transformPanelWrap', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()], {
        optional: true
      }))]),

      /**
       * This animation transforms the select's overlay panel on and off the page.
       *
       * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
       * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
       * side to ensure the option text correctly overlaps the trigger text.
       *
       * When the panel is removed from the DOM, it simply fades out linearly.
       */
      transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scaleY(0.8)',
        minWidth: '100%',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        minWidth: 'calc(100% + 32px)',
        // 32px = 2 * 16px padding
        transform: 'scaleY(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing-multiple', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        minWidth: 'calc(100% + 64px)',
        // 64px = 48px padding on the left + 16px padding on the right
        transform: 'scaleY(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      })))]),

      /**
       * This animation fades in the background color and text content of the
       * select's options. It is time delayed to occur 100ms after the overlay
       * panel has transformed in.
       * @deprecated Not used anymore. To be removed.
       * \@breaking-change 8.0.0
       */
      fadeInContent: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInContent', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => showing', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
    };
    /**
     * @deprecated
     * \@breaking-change 8.0.0
     * \@docs-private
     * @type {?}
     */

    var transformPanel = matSelectAnimations.transformPanel;
    /**
     * @deprecated
     * \@breaking-change 8.0.0
     * \@docs-private
     * @type {?}
     */

    var fadeInContent = matSelectAnimations.fadeInContent;
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Returns an exception to be thrown when attempting to change a select's `multiple` option
     * after initialization.
     * \@docs-private
     * @return {?}
     */

    function getMatSelectDynamicMultipleError() {
      return Error('Cannot change `multiple` mode of select after initialization.');
    }
    /**
     * Returns an exception to be thrown when attempting to assign a non-array value to a select
     * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
     * resetting the value.
     * \@docs-private
     * @return {?}
     */


    function getMatSelectNonArrayValueError() {
      return Error('Value must be an array in multiple-selection mode.');
    }
    /**
     * Returns an exception to be thrown when assigning a non-function value to the comparator
     * used to determine if a value corresponds to an option. Note that whether the function
     * actually takes two values and returns a boolean is not checked.
     * @return {?}
     */


    function getMatSelectNonFunctionValueError() {
      return Error('`compareWith` must be a function.');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var nextUniqueId = 0;
    /**
     * The max height of the select's overlay panel
     * @type {?}
     */

    var SELECT_PANEL_MAX_HEIGHT = 256;
    /**
     * The panel's padding on the x-axis
     * @type {?}
     */

    var SELECT_PANEL_PADDING_X = 16;
    /**
     * The panel's x axis padding if it is indented (e.g. there is an option group).
     * @type {?}
     */

    var SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
    /**
     * The height of the select items in `em` units.
     * @type {?}
     */

    var SELECT_ITEM_HEIGHT_EM = 3; // TODO(josephperrott): Revert to a constant after 2018 spec updates are fully merged.

    /**
     * Distance between the panel edge and the option text in
     * multi-selection mode.
     *
     * Calculated as:
     * (SELECT_PANEL_PADDING_X * 1.5) + 16 = 40
     * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
     * The checkbox width is 16px.
     * @type {?}
     */

    var SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + 16;
    /**
     * The select panel will only "fit" inside the viewport if it is positioned at
     * this value or more away from the viewport boundary.
     * @type {?}
     */

    var SELECT_PANEL_VIEWPORT_PADDING = 8;
    /**
     * Injection token that determines the scroll handling while a select is open.
     * @type {?}
     */

    var MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["InjectionToken"]('mat-select-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition();
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
      provide: MAT_SELECT_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]],
      useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    /**
     * Change event object that is emitted when the select value has changed.
     */

    var MatSelectChange =
    /**
     * @param {?} source
     * @param {?} value
     */
    function MatSelectChange(source, value) {
      _classCallCheck(this, MatSelectChange);

      this.source = source;
      this.value = value;
    }; // Boilerplate for applying mixins to MatSelect.

    /**
     * \@docs-private
     */


    var MatSelectBase =
    /**
     * @param {?} _elementRef
     * @param {?} _defaultErrorStateMatcher
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} ngControl
     */
    function MatSelectBase(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
      _classCallCheck(this, MatSelectBase);

      this._elementRef = _elementRef;
      this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
      this._parentForm = _parentForm;
      this._parentFormGroup = _parentFormGroup;
      this.ngControl = ngControl;
    };
    /** @type {?} */


    var _MatSelectMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinErrorState"])(MatSelectBase))));
    /**
     * Allows the user to customize the trigger that is displayed when the select has a value.
     */


    var MatSelectTrigger = function MatSelectTrigger() {
      _classCallCheck(this, MatSelectTrigger);
    };

    MatSelectTrigger.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
      args: [{
        selector: 'mat-select-trigger'
      }]
    }];

    var MatSelect = /*#__PURE__*/function (_MatSelectMixinBase2) {
      _inherits(MatSelect, _MatSelectMixinBase2);

      var _super17 = _createSuper(MatSelect);

      /**
       * @param {?} _viewportRuler
       * @param {?} _changeDetectorRef
       * @param {?} _ngZone
       * @param {?} _defaultErrorStateMatcher
       * @param {?} elementRef
       * @param {?} _dir
       * @param {?} _parentForm
       * @param {?} _parentFormGroup
       * @param {?} _parentFormField
       * @param {?} ngControl
       * @param {?} tabIndex
       * @param {?} scrollStrategyFactory
       * @param {?=} _liveAnnouncer
       */
      function MatSelect(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer) {
        var _this24;

        _classCallCheck(this, MatSelect);

        _this24 = _super17.call(this, elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        _this24._viewportRuler = _viewportRuler;
        _this24._changeDetectorRef = _changeDetectorRef;
        _this24._ngZone = _ngZone;
        _this24._dir = _dir;
        _this24._parentFormField = _parentFormField;
        _this24.ngControl = ngControl;
        _this24._liveAnnouncer = _liveAnnouncer;
        /**
         * Whether or not the overlay panel is open.
         */

        _this24._panelOpen = false;
        /**
         * Whether filling out the select is required in the form.
         */

        _this24._required = false;
        /**
         * The scroll position of the overlay panel, calculated to center the selected option.
         */

        _this24._scrollTop = 0;
        /**
         * Whether the component is in multiple selection mode.
         */

        _this24._multiple = false;
        /**
         * Comparison function to specify which option is displayed. Defaults to object equality.
         */

        _this24._compareWith =
        /**
        * @param {?} o1
        * @param {?} o2
        * @return {?}
        */
        function (o1, o2) {
          return o1 === o2;
        };
        /**
         * Unique id for this input.
         */


        _this24._uid = "mat-select-".concat(nextUniqueId++);
        /**
         * Emits whenever the component is destroyed.
         */

        _this24._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * The cached font-size of the trigger element.
         */

        _this24._triggerFontSize = 0;
        /**
         * `View -> model callback called when value changes`
         */

        _this24._onChange =
        /**
        * @return {?}
        */
        function () {};
        /**
         * `View -> model callback called when select has been touched`
         */


        _this24._onTouched =
        /**
        * @return {?}
        */
        function () {};
        /**
         * The IDs of child options to be passed to the aria-owns attribute.
         */


        _this24._optionIds = '';
        /**
         * The value of the select panel's transform-origin property.
         */

        _this24._transformOrigin = 'top';
        /**
         * Emits when the panel element is finished transforming in.
         */

        _this24._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * The y-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text.
         * when the panel opens. Will change based on the y-position of the selected option.
         */

        _this24._offsetY = 0;
        /**
         * This position config ensures that the top "start" corner of the overlay
         * is aligned with with the top "start" of the origin by default (overlapping
         * the trigger completely). If the panel cannot fit below the trigger, it
         * will fall back to a position above the trigger.
         */

        _this24._positions = [{
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'top'
        }, {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'bottom'
        }];
        /**
         * Whether the component is disabling centering of the active option over the trigger.
         */

        _this24._disableOptionCentering = false;
        _this24._focused = false;
        /**
         * A name for this control that can be used by `mat-form-field`.
         */

        _this24.controlType = 'mat-select';
        /**
         * Aria label of the select. If not specified, the placeholder will be used as label.
         */

        _this24.ariaLabel = '';
        /**
         * Combined stream of all of the child options' change events.
         */

        _this24.optionSelectionChanges =
        /** @type {?} */
        Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["defer"])(
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          var options = _this24.options;

          if (options) {
            return options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(options), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(
            /**
            * @return {?}
            */
            function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"]).apply(void 0, _toConsumableArray(options.map(
              /**
              * @param {?} option
              * @return {?}
              */
              function (option) {
                return option.onSelectionChange;
              })));
            }));
          }

          return _this24._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(
          /**
          * @return {?}
          */
          function () {
            return _this24.optionSelectionChanges;
          }));
        });
        /**
         * Event emitted when the select panel has been toggled.
         */

        _this24.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
        /**
         * Event emitted when the select has been opened.
         */

        _this24._openedStream = _this24.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(
        /**
        * @param {?} o
        * @return {?}
        */
        function (o) {
          return o;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(
        /**
        * @return {?}
        */
        function () {}));
        /**
         * Event emitted when the select has been closed.
         */

        _this24._closedStream = _this24.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(
        /**
        * @param {?} o
        * @return {?}
        */
        function (o) {
          return !o;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(
        /**
        * @return {?}
        */
        function () {}));
        /**
         * Event emitted when the selected value has been changed by the user.
         */

        _this24.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
        /**
         * Event that emits whenever the raw value of the select changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */

        _this24.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();

        if (_this24.ngControl) {
          // Note: we provide the value accessor through here, instead of
          // the `providers` to avoid running into a circular import.
          _this24.ngControl.valueAccessor = _assertThisInitialized(_this24);
        }

        _this24._scrollStrategyFactory = scrollStrategyFactory;
        _this24._scrollStrategy = _this24._scrollStrategyFactory();
        _this24.tabIndex = parseInt(tabIndex) || 0; // Force setter to be called in case id was not specified.

        _this24.id = _this24.id;
        return _this24;
      }
      /**
       * Whether the select is focused.
       * @return {?}
       */


      _createClass(MatSelect, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this25 = this;

          this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](this.multiple);
          this.stateChanges.next(); // We need `distinctUntilChanged` here, because some browsers will
          // fire the animation end event twice for the same animation. See:
          // https://github.com/angular/angular/issues/24084

          this._panelDoneAnimatingStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this25.panelOpen) {
              _this25._scrollTop = 0;

              _this25.openedChange.emit(true);
            } else {
              _this25.openedChange.emit(false);

              _this25.overlayDir.offsetX = 0;

              _this25._changeDetectorRef.markForCheck();
            }
          });

          this._viewportRuler.change().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this25._panelOpen) {
              _this25._triggerRect = _this25.trigger.nativeElement.getBoundingClientRect();

              _this25._changeDetectorRef.markForCheck();
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this26 = this;

          this._initKeyManager();

          this._selectionModel.onChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            event.added.forEach(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option.select();
            });
            event.removed.forEach(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option.deselect();
            });
          });

          this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this26._resetOptions();

            _this26._initializeSelection();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.ngControl) {
            this.updateErrorState();
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
          // the parent form field know to run change detection when the disabled state changes.
          if (changes['disabled']) {
            this.stateChanges.next();
          }

          if (changes['typeaheadDebounceInterval'] && this._keyManager) {
            this._keyManager.withTypeAhead(this.typeaheadDebounceInterval);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroy.next();

          this._destroy.complete();

          this.stateChanges.complete();
        }
        /**
         * Toggles the overlay panel open or closed.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          this.panelOpen ? this.close() : this.open();
        }
        /**
         * Opens the overlay panel.
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          var _this27 = this;

          if (this.disabled || !this.options || !this.options.length || this._panelOpen) {
            return;
          }

          this._triggerRect = this.trigger.nativeElement.getBoundingClientRect(); // Note: The computed font-size will be a string pixel value (e.g. "16px").
          // `parseInt` ignores the trailing 'px' and converts this to a number.

          this._triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || '0');
          this._panelOpen = true;

          this._keyManager.withHorizontalOrientation(null);

          this._calculateOverlayPosition();

          this._highlightCorrectOption();

          this._changeDetectorRef.markForCheck(); // Set the font size on the panel element once it exists.


          this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this27._triggerFontSize && _this27.overlayDir.overlayRef && _this27.overlayDir.overlayRef.overlayElement) {
              _this27.overlayDir.overlayRef.overlayElement.style.fontSize = "".concat(_this27._triggerFontSize, "px");
            }
          });
        }
        /**
         * Closes the overlay panel and focuses the host element.
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          if (this._panelOpen) {
            this._panelOpen = false;

            this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');

            this._changeDetectorRef.markForCheck();

            this._onTouched();
          }
        }
        /**
         * Sets the select's value. Part of the ControlValueAccessor interface
         * required to integrate with Angular's core forms API.
         *
         * @param {?} value New value to be written to the model.
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (this.options) {
            this._setSelectionByValue(value);
          }
        }
        /**
         * Saves a callback function to be invoked when the select's value
         * changes from user input. Part of the ControlValueAccessor interface
         * required to integrate with Angular's core forms API.
         *
         * @param {?} fn Callback to be triggered when the value changes.
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        }
        /**
         * Saves a callback function to be invoked when the select is blurred
         * by the user. Part of the ControlValueAccessor interface required
         * to integrate with Angular's core forms API.
         *
         * @param {?} fn Callback to be triggered when the component has been touched.
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        }
        /**
         * Disables the select. Part of the ControlValueAccessor interface required
         * to integrate with Angular's core forms API.
         *
         * @param {?} isDisabled Sets whether the component is disabled.
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;

          this._changeDetectorRef.markForCheck();

          this.stateChanges.next();
        }
        /**
         * Whether or not the overlay panel is open.
         * @return {?}
         */

      }, {
        key: "_isRtl",

        /**
         * Whether the element is in RTL mode.
         * @return {?}
         */
        value: function _isRtl() {
          return this._dir ? this._dir.value === 'rtl' : false;
        }
        /**
         * Handles all keydown events on the select.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          if (!this.disabled) {
            this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
          }
        }
        /**
         * Handles keyboard events while the select is closed.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleClosedKeydown",
        value: function _handleClosedKeydown(event) {
          /** @type {?} */
          var keyCode = event.keyCode;
          /** @type {?} */

          var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["LEFT_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["RIGHT_ARROW"];
          /** @type {?} */

          var isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["SPACE"];
          /** @type {?} */

          var manager = this._keyManager; // Open the select on ALT + arrow key to match the native <select>

          if (isOpenKey && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["hasModifierKey"])(event) || (this.multiple || event.altKey) && isArrowKey) {
            event.preventDefault(); // prevents the page from scrolling down when pressing space

            this.open();
          } else if (!this.multiple) {
            /** @type {?} */
            var previouslySelectedOption = this.selected;

            if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["END"]) {
              keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
              event.preventDefault();
            } else {
              manager.onKeydown(event);
            }
            /** @type {?} */


            var selectedOption = this.selected; // Since the value has changed, we need to announce it ourselves.
            // @breaking-change 8.0.0 remove null check for _liveAnnouncer.

            if (this._liveAnnouncer && selectedOption && previouslySelectedOption !== selectedOption) {
              // We set a duration on the live announcement, because we want the live element to be
              // cleared after a while so that users can't navigate to it using the arrow keys.
              this._liveAnnouncer.announce(
              /** @type {?} */
              selectedOption.viewValue, 10000);
            }
          }
        }
        /**
         * Handles keyboard events when the selected is open.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleOpenKeydown",
        value: function _handleOpenKeydown(event) {
          /** @type {?} */
          var keyCode = event.keyCode;
          /** @type {?} */

          var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["UP_ARROW"];
          /** @type {?} */

          var manager = this._keyManager;

          if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["END"]) {
            event.preventDefault();
            keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
          } else if (isArrowKey && event.altKey) {
            // Close the select on ALT + arrow key to match the native <select>
            event.preventDefault();
            this.close();
          } else if ((keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["SPACE"]) && manager.activeItem && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["hasModifierKey"])(event)) {
            event.preventDefault();

            manager.activeItem._selectViaInteraction();
          } else if (this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["A"] && event.ctrlKey) {
            event.preventDefault();
            /** @type {?} */

            var hasDeselectedOptions = this.options.some(
            /**
            * @param {?} opt
            * @return {?}
            */
            function (opt) {
              return !opt.disabled && !opt.selected;
            });
            this.options.forEach(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              if (!option.disabled) {
                hasDeselectedOptions ? option.select() : option.deselect();
              }
            });
          } else {
            /** @type {?} */
            var previouslyFocusedIndex = manager.activeItemIndex;
            manager.onKeydown(event);

            if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
              manager.activeItem._selectViaInteraction();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onFocus",
        value: function _onFocus() {
          if (!this.disabled) {
            this._focused = true;
            this.stateChanges.next();
          }
        }
        /**
         * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
         * "blur" to the panel when it opens, causing a false positive.
         * @return {?}
         */

      }, {
        key: "_onBlur",
        value: function _onBlur() {
          this._focused = false;

          if (!this.disabled && !this.panelOpen) {
            this._onTouched();

            this._changeDetectorRef.markForCheck();

            this.stateChanges.next();
          }
        }
        /**
         * Callback that is invoked when the overlay panel has been attached.
         * @return {?}
         */

      }, {
        key: "_onAttached",
        value: function _onAttached() {
          var _this28 = this;

          this.overlayDir.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this28._changeDetectorRef.detectChanges();

            _this28._calculateOverlayOffsetX();

            _this28.panel.nativeElement.scrollTop = _this28._scrollTop;
          });
        }
        /**
         * Returns the theme to be used on the panel.
         * @return {?}
         */

      }, {
        key: "_getPanelTheme",
        value: function _getPanelTheme() {
          return this._parentFormField ? "mat-".concat(this._parentFormField.color) : '';
        }
        /**
         * Whether the select has a value.
         * @return {?}
         */

      }, {
        key: "_initializeSelection",

        /**
         * @private
         * @return {?}
         */
        value: function _initializeSelection() {
          var _this29 = this;

          // Defer setting the value in order to avoid the "Expression
          // has changed after it was checked" errors from Angular.
          Promise.resolve().then(
          /**
          * @return {?}
          */
          function () {
            _this29._setSelectionByValue(_this29.ngControl ? _this29.ngControl.value : _this29._value);

            _this29.stateChanges.next();
          });
        }
        /**
         * Sets the selected option based on a value. If no option can be
         * found with the designated value, the select trigger is cleared.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_setSelectionByValue",
        value: function _setSelectionByValue(value) {
          var _this30 = this;

          if (this.multiple && value) {
            if (!Array.isArray(value)) {
              throw getMatSelectNonArrayValueError();
            }

            this._selectionModel.clear();

            value.forEach(
            /**
            * @param {?} currentValue
            * @return {?}
            */
            function (currentValue) {
              return _this30._selectValue(currentValue);
            });

            this._sortValues();
          } else {
            this._selectionModel.clear();
            /** @type {?} */


            var correspondingOption = this._selectValue(value); // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what option the user interacted with last.


            if (correspondingOption) {
              this._keyManager.setActiveItem(correspondingOption);
            } else if (!this.panelOpen) {
              // Otherwise reset the highlighted option. Note that we only want to do this while
              // closed, because doing it while open can shift the user's focus unnecessarily.
              this._keyManager.setActiveItem(-1);
            }
          }

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Finds and selects and option based on its value.
         * @private
         * @param {?} value
         * @return {?} Option that has the corresponding value.
         */

      }, {
        key: "_selectValue",
        value: function _selectValue(value) {
          var _this31 = this;

          /** @type {?} */
          var correspondingOption = this.options.find(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            try {
              // Treat null as a special reset value.
              return option.value != null && _this31._compareWith(option.value, value);
            } catch (error) {
              if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["isDevMode"])()) {
                // Notify developers of errors in their comparator.
                console.warn(error);
              }

              return false;
            }
          });

          if (correspondingOption) {
            this._selectionModel.select(correspondingOption);
          }

          return correspondingOption;
        }
        /**
         * Sets up a key manager to listen to keyboard events on the overlay panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_initKeyManager",
        value: function _initKeyManager() {
          var _this32 = this;

          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["ActiveDescendantKeyManager"](this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr').withAllowedModifierKeys(['shiftKey']);

          this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
          /**
          * @return {?}
          */
          function () {
            // Restore focus to the trigger before closing. Ensures that the focus
            // position won't be lost if the user got focus into the overlay.
            _this32.focus();

            _this32.close();
          });

          this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this32._panelOpen && _this32.panel) {
              _this32._scrollActiveOptionIntoView();
            } else if (!_this32._panelOpen && !_this32.multiple && _this32._keyManager.activeItem) {
              _this32._keyManager.activeItem._selectViaInteraction();
            }
          });
        }
        /**
         * Drops current option subscriptions and IDs and resets from scratch.
         * @private
         * @return {?}
         */

      }, {
        key: "_resetOptions",
        value: function _resetOptions() {
          var _this33 = this;

          /** @type {?} */
          var changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(this.options.changes, this._destroy);
          this.optionSelectionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this33._onSelect(event.source, event.isUserInput);

            if (event.isUserInput && !_this33.multiple && _this33._panelOpen) {
              _this33.close();

              _this33.focus();
            }
          }); // Listen to changes in the internal state of the options and react accordingly.
          // Handles cases like the labels of the selected options changing.

          Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"]).apply(void 0, _toConsumableArray(this.options.map(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            return option._stateChanges;
          }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this33._changeDetectorRef.markForCheck();

            _this33.stateChanges.next();
          });

          this._setOptionIds();
        }
        /**
         * Invoked when an option is clicked.
         * @private
         * @param {?} option
         * @param {?} isUserInput
         * @return {?}
         */

      }, {
        key: "_onSelect",
        value: function _onSelect(option, isUserInput) {
          /** @type {?} */
          var wasSelected = this._selectionModel.isSelected(option);

          if (option.value == null && !this._multiple) {
            option.deselect();

            this._selectionModel.clear();

            this._propagateChanges(option.value);
          } else {
            if (wasSelected !== option.selected) {
              option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
            }

            if (isUserInput) {
              this._keyManager.setActiveItem(option);
            }

            if (this.multiple) {
              this._sortValues();

              if (isUserInput) {
                // In case the user selected the option with their mouse, we
                // want to restore focus back to the trigger, in order to
                // prevent the select keyboard controls from clashing with
                // the ones from `mat-option`.
                this.focus();
              }
            }
          }

          if (wasSelected !== this._selectionModel.isSelected(option)) {
            this._propagateChanges();
          }

          this.stateChanges.next();
        }
        /**
         * Sorts the selected values in the selected based on their order in the panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_sortValues",
        value: function _sortValues() {
          var _this34 = this;

          if (this.multiple) {
            /** @type {?} */
            var options = this.options.toArray();

            this._selectionModel.sort(
            /**
            * @param {?} a
            * @param {?} b
            * @return {?}
            */
            function (a, b) {
              return _this34.sortComparator ? _this34.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
            });

            this.stateChanges.next();
          }
        }
        /**
         * Emits change event to set the model value.
         * @private
         * @param {?=} fallbackValue
         * @return {?}
         */

      }, {
        key: "_propagateChanges",
        value: function _propagateChanges(fallbackValue) {
          /** @type {?} */
          var valueToEmit = null;

          if (this.multiple) {
            valueToEmit =
            /** @type {?} */
            this.selected.map(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option.value;
            });
          } else {
            valueToEmit = this.selected ?
            /** @type {?} */
            this.selected.value : fallbackValue;
          }

          this._value = valueToEmit;
          this.valueChange.emit(valueToEmit);

          this._onChange(valueToEmit);

          this.selectionChange.emit(new MatSelectChange(this, valueToEmit));

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Records option IDs to pass to the aria-owns property.
         * @private
         * @return {?}
         */

      }, {
        key: "_setOptionIds",
        value: function _setOptionIds() {
          this._optionIds = this.options.map(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            return option.id;
          }).join(' ');
        }
        /**
         * Highlights the selected item. If no option is selected, it will highlight
         * the first item instead.
         * @private
         * @return {?}
         */

      }, {
        key: "_highlightCorrectOption",
        value: function _highlightCorrectOption() {
          if (this._keyManager) {
            if (this.empty) {
              this._keyManager.setFirstItemActive();
            } else {
              this._keyManager.setActiveItem(this._selectionModel.selected[0]);
            }
          }
        }
        /**
         * Scrolls the active option into view.
         * @private
         * @return {?}
         */

      }, {
        key: "_scrollActiveOptionIntoView",
        value: function _scrollActiveOptionIntoView() {
          /** @type {?} */
          var activeOptionIndex = this._keyManager.activeItemIndex || 0;
          /** @type {?} */

          var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["_countGroupLabelsBeforeOption"])(activeOptionIndex, this.options, this.optionGroups);
          this.panel.nativeElement.scrollTop = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["_getOptionScrollPosition"])(activeOptionIndex + labelCount, this._getItemHeight(), this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
        }
        /**
         * Focuses the select element.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          this._elementRef.nativeElement.focus(options);
        }
        /**
         * Gets the index of the provided option in the option list.
         * @private
         * @param {?} option
         * @return {?}
         */

      }, {
        key: "_getOptionIndex",
        value: function _getOptionIndex(option) {
          return this.options.reduce(
          /**
          * @param {?} result
          * @param {?} current
          * @param {?} index
          * @return {?}
          */
          function (result, current, index) {
            return result === undefined ? option === current ? index : undefined : result;
          }, undefined);
        }
        /**
         * Calculates the scroll position and x- and y-offsets of the overlay panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_calculateOverlayPosition",
        value: function _calculateOverlayPosition() {
          /** @type {?} */
          var itemHeight = this._getItemHeight();
          /** @type {?} */


          var items = this._getItemCount();
          /** @type {?} */


          var panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
          /** @type {?} */

          var scrollContainerHeight = items * itemHeight; // The farthest the panel can be scrolled before it hits the bottom

          /** @type {?} */

          var maxScroll = scrollContainerHeight - panelHeight; // If no value is selected we open the popup to the first item.

          /** @type {?} */

          var selectedOptionOffset = this.empty ? 0 :
          /** @type {?} */
          this._getOptionIndex(this._selectionModel.selected[0]);
          selectedOptionOffset += Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["_countGroupLabelsBeforeOption"])(selectedOptionOffset, this.options, this.optionGroups); // We must maintain a scroll buffer so the selected option will be scrolled to the
          // center of the overlay panel rather than the top.

          /** @type {?} */

          var scrollBuffer = panelHeight / 2;
          this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
          this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);

          this._checkOverlayWithinViewport(maxScroll);
        }
        /**
         * Calculates the scroll position of the select's overlay panel.
         *
         * Attempts to center the selected option in the panel. If the option is
         * too high or too low in the panel to be scrolled to the center, it clamps the
         * scroll position to the min or max scroll positions respectively.
         * @param {?} selectedIndex
         * @param {?} scrollBuffer
         * @param {?} maxScroll
         * @return {?}
         */

      }, {
        key: "_calculateOverlayScroll",
        value: function _calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll) {
          /** @type {?} */
          var itemHeight = this._getItemHeight();
          /** @type {?} */


          var optionOffsetFromScrollTop = itemHeight * selectedIndex;
          /** @type {?} */

          var halfOptionHeight = itemHeight / 2; // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
          // scroll container, then subtracts the scroll buffer to scroll the option down to
          // the center of the overlay panel. Half the option height must be re-added to the
          // scrollTop so the option is centered based on its middle, not its top edge.

          /** @type {?} */

          var optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
          return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
        }
        /**
         * Returns the aria-label of the select component.
         * @return {?}
         */

      }, {
        key: "_getAriaLabel",
        value: function _getAriaLabel() {
          // If an ariaLabelledby value has been set by the consumer, the select should not overwrite the
          // `aria-labelledby` value by setting the ariaLabel to the placeholder.
          return this.ariaLabelledby ? null : this.ariaLabel || this.placeholder;
        }
        /**
         * Returns the aria-labelledby of the select component.
         * @return {?}
         */

      }, {
        key: "_getAriaLabelledby",
        value: function _getAriaLabelledby() {
          if (this.ariaLabelledby) {
            return this.ariaLabelledby;
          } // Note: we use `_getAriaLabel` here, because we want to check whether there's a
          // computed label. `this.ariaLabel` is only the user-specified label.


          if (!this._parentFormField || !this._parentFormField._hasFloatingLabel() || this._getAriaLabel()) {
            return null;
          }

          return this._parentFormField._labelId || null;
        }
        /**
         * Determines the `aria-activedescendant` to be set on the host.
         * @return {?}
         */

      }, {
        key: "_getAriaActiveDescendant",
        value: function _getAriaActiveDescendant() {
          if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
            return this._keyManager.activeItem.id;
          }

          return null;
        }
        /**
         * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text when
         * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
         * can't be calculated until the panel has been attached, because we need to know the
         * content width in order to constrain the panel within the viewport.
         * @private
         * @return {?}
         */

      }, {
        key: "_calculateOverlayOffsetX",
        value: function _calculateOverlayOffsetX() {
          /** @type {?} */
          var overlayRect = this.overlayDir.overlayRef.overlayElement.getBoundingClientRect();
          /** @type {?} */

          var viewportSize = this._viewportRuler.getViewportSize();
          /** @type {?} */


          var isRtl = this._isRtl();
          /** @type {?} */


          var paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X : SELECT_PANEL_PADDING_X * 2;
          /** @type {?} */

          var offsetX; // Adjust the offset, depending on the option padding.

          if (this.multiple) {
            offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
          } else {
            /** @type {?} */
            var selected = this._selectionModel.selected[0] || this.options.first;
            offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
          } // Invert the offset in LTR.


          if (!isRtl) {
            offsetX *= -1;
          } // Determine how much the select overflows on each side.

          /** @type {?} */


          var leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
          /** @type {?} */

          var rightOverflow = overlayRect.right + offsetX - viewportSize.width + (isRtl ? 0 : paddingWidth); // If the element overflows on either side, reduce the offset to allow it to fit.

          if (leftOverflow > 0) {
            offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
          } else if (rightOverflow > 0) {
            offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
          } // Set the offset directly in order to avoid having to go through change detection and
          // potentially triggering "changed after it was checked" errors. Round the value to avoid
          // blurry content in some browsers.


          this.overlayDir.offsetX = Math.round(offsetX);
          this.overlayDir.overlayRef.updatePosition();
        }
        /**
         * Calculates the y-offset of the select's overlay panel in relation to the
         * top start corner of the trigger. It has to be adjusted in order for the
         * selected option to be aligned over the trigger when the panel opens.
         * @private
         * @param {?} selectedIndex
         * @param {?} scrollBuffer
         * @param {?} maxScroll
         * @return {?}
         */

      }, {
        key: "_calculateOverlayOffsetY",
        value: function _calculateOverlayOffsetY(selectedIndex, scrollBuffer, maxScroll) {
          /** @type {?} */
          var itemHeight = this._getItemHeight();
          /** @type {?} */


          var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
          /** @type {?} */

          var maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
          /** @type {?} */

          var optionOffsetFromPanelTop; // Disable offset if requested by user by returning 0 as value to offset

          if (this._disableOptionCentering) {
            return 0;
          }

          if (this._scrollTop === 0) {
            optionOffsetFromPanelTop = selectedIndex * itemHeight;
          } else if (this._scrollTop === maxScroll) {
            /** @type {?} */
            var firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
            /** @type {?} */

            var selectedDisplayIndex = selectedIndex - firstDisplayedIndex; // The first item is partially out of the viewport. Therefore we need to calculate what
            // portion of it is shown in the viewport and account for it in our offset.

            /** @type {?} */

            var partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight; // Because the panel height is longer than the height of the options alone,
            // there is always extra padding at the top or bottom of the panel. When
            // scrolled to the very bottom, this padding is at the top of the panel and
            // must be added to the offset.

            optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
          } else {
            // If the option was scrolled to the middle of the panel using a scroll buffer,
            // its offset will be the scroll buffer minus the half height that was added to
            // center it.
            optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
          } // The final offset is the option's offset from the top, adjusted for the height difference,
          // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
          // The value is rounded to prevent some browsers from blurring the content.


          return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
        }
        /**
         * Checks that the attempted overlay position will fit within the viewport.
         * If it will not fit, tries to adjust the scroll position and the associated
         * y-offset so the panel can open fully on-screen. If it still won't fit,
         * sets the offset back to 0 to allow the fallback position to take over.
         * @private
         * @param {?} maxScroll
         * @return {?}
         */

      }, {
        key: "_checkOverlayWithinViewport",
        value: function _checkOverlayWithinViewport(maxScroll) {
          /** @type {?} */
          var itemHeight = this._getItemHeight();
          /** @type {?} */


          var viewportSize = this._viewportRuler.getViewportSize();
          /** @type {?} */


          var topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
          /** @type {?} */

          var bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
          /** @type {?} */

          var panelHeightTop = Math.abs(this._offsetY);
          /** @type {?} */

          var totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
          /** @type {?} */

          var panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;

          if (panelHeightBottom > bottomSpaceAvailable) {
            this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
          } else if (panelHeightTop > topSpaceAvailable) {
            this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
          } else {
            this._transformOrigin = this._getOriginBasedOnOption();
          }
        }
        /**
         * Adjusts the overlay panel up to fit in the viewport.
         * @private
         * @param {?} panelHeightBottom
         * @param {?} bottomSpaceAvailable
         * @return {?}
         */

      }, {
        key: "_adjustPanelUp",
        value: function _adjustPanelUp(panelHeightBottom, bottomSpaceAvailable) {
          // Browsers ignore fractional scroll offsets, so we need to round.

          /** @type {?} */
          var distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable); // Scrolls the panel up by the distance it was extending past the boundary, then
          // adjusts the offset by that amount to move the panel up into the viewport.

          this._scrollTop -= distanceBelowViewport;
          this._offsetY -= distanceBelowViewport;
          this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very top, it won't be able to fit the panel
          // by scrolling, so set the offset to 0 to allow the fallback position to take
          // effect.

          if (this._scrollTop <= 0) {
            this._scrollTop = 0;
            this._offsetY = 0;
            this._transformOrigin = "50% bottom 0px";
          }
        }
        /**
         * Adjusts the overlay panel down to fit in the viewport.
         * @private
         * @param {?} panelHeightTop
         * @param {?} topSpaceAvailable
         * @param {?} maxScroll
         * @return {?}
         */

      }, {
        key: "_adjustPanelDown",
        value: function _adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll) {
          // Browsers ignore fractional scroll offsets, so we need to round.

          /** @type {?} */
          var distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable); // Scrolls the panel down by the distance it was extending past the boundary, then
          // adjusts the offset by that amount to move the panel down into the viewport.

          this._scrollTop += distanceAboveViewport;
          this._offsetY += distanceAboveViewport;
          this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very bottom, it won't be able to fit the
          // panel by scrolling, so set the offset to 0 to allow the fallback position
          // to take effect.

          if (this._scrollTop >= maxScroll) {
            this._scrollTop = maxScroll;
            this._offsetY = 0;
            this._transformOrigin = "50% top 0px";
            return;
          }
        }
        /**
         * Sets the transform origin point based on the selected option.
         * @private
         * @return {?}
         */

      }, {
        key: "_getOriginBasedOnOption",
        value: function _getOriginBasedOnOption() {
          /** @type {?} */
          var itemHeight = this._getItemHeight();
          /** @type {?} */


          var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
          /** @type {?} */

          var originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
          return "50% ".concat(originY, "px 0px");
        }
        /**
         * Calculates the amount of items in the select. This includes options and group labels.
         * @private
         * @return {?}
         */

      }, {
        key: "_getItemCount",
        value: function _getItemCount() {
          return this.options.length + this.optionGroups.length;
        }
        /**
         * Calculates the height of the select's options.
         * @private
         * @return {?}
         */

      }, {
        key: "_getItemHeight",
        value: function _getItemHeight() {
          return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @param {?} ids
         * @return {?}
         */

      }, {
        key: "setDescribedByIds",
        value: function setDescribedByIds(ids) {
          this._ariaDescribedby = ids.join(' ');
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "onContainerClick",
        value: function onContainerClick() {
          this.focus();
          this.open();
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "focused",
        get: function get() {
          return this._focused || this._panelOpen;
        }
        /**
         * @deprecated Setter to be removed as this property is intended to be readonly.
         * \@breaking-change 8.0.0
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._focused = value;
        }
        /**
         * Placeholder to be shown if no value has been selected.
         * @return {?}
         */

      }, {
        key: "placeholder",
        get: function get() {
          return this._placeholder;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._placeholder = value;
          this.stateChanges.next();
        }
        /**
         * Whether the component is required.
         * @return {?}
         */

      }, {
        key: "required",
        get: function get() {
          return this._required;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
          this.stateChanges.next();
        }
        /**
         * Whether the user should be allowed to select multiple options.
         * @return {?}
         */

      }, {
        key: "multiple",
        get: function get() {
          return this._multiple;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (this._selectionModel) {
            throw getMatSelectDynamicMultipleError();
          }

          this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether to center the active option over the trigger.
         * @return {?}
         */

      }, {
        key: "disableOptionCentering",
        get: function get() {
          return this._disableOptionCentering;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disableOptionCentering = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        }
        /**
         * Function to compare the option values with the selected values. The first argument
         * is a value from an option. The second is a value from the selection. A boolean
         * should be returned.
         * @return {?}
         */

      }, {
        key: "compareWith",
        get: function get() {
          return this._compareWith;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        ,
        set: function set(fn) {
          if (typeof fn !== 'function') {
            throw getMatSelectNonFunctionValueError();
          }

          this._compareWith = fn;

          if (this._selectionModel) {
            // A different comparator means the selection could change.
            this._initializeSelection();
          }
        }
        /**
         * Value of the select control.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this._value;
        }
        /**
         * @param {?} newValue
         * @return {?}
         */
        ,
        set: function set(newValue) {
          if (newValue !== this._value) {
            this.writeValue(newValue);
            this._value = newValue;
          }
        }
        /**
         * Unique id of the element.
         * @return {?}
         */

      }, {
        key: "id",
        get: function get() {
          return this._id;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._id = value || this._uid;
          this.stateChanges.next();
        }
      }, {
        key: "panelOpen",
        get: function get() {
          return this._panelOpen;
        }
        /**
         * The currently selected option.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
        }
        /**
         * The value displayed in the trigger.
         * @return {?}
         */

      }, {
        key: "triggerValue",
        get: function get() {
          if (this.empty) {
            return '';
          }

          if (this._multiple) {
            /** @type {?} */
            var selectedOptions = this._selectionModel.selected.map(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option.viewValue;
            });

            if (this._isRtl()) {
              selectedOptions.reverse();
            } // TODO(crisbeto): delimiter should be configurable for proper localization.


            return selectedOptions.join(', ');
          }

          return this._selectionModel.selected[0].viewValue;
        }
      }, {
        key: "empty",
        get: function get() {
          return !this._selectionModel || this._selectionModel.isEmpty();
        }
      }, {
        key: "shouldLabelFloat",
        get: function get() {
          return this._panelOpen || !this.empty;
        }
      }]);

      return MatSelect;
    }(_MatSelectMixinBase);

    MatSelect.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"],
      args: [{
        selector: 'mat-select',
        exportAs: 'matSelect',
        template: "<div cdk-overlay-origin class=\"mat-select-trigger\" aria-hidden=\"true\" (click)=\"toggle()\" #origin=\"cdkOverlayOrigin\" #trigger><div class=\"mat-select-value\" [ngSwitch]=\"empty\"><span class=\"mat-select-placeholder\" *ngSwitchCase=\"true\">{{placeholder || '\xA0'}}</span> <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\"><span *ngSwitchDefault>{{triggerValue || '\xA0'}}</span><ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content></span></div><div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div></div><ng-template cdk-connected-overlay cdkConnectedOverlayLockPosition cdkConnectedOverlayHasBackdrop cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\" [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\" [cdkConnectedOverlayOrigin]=\"origin\" [cdkConnectedOverlayOpen]=\"panelOpen\" [cdkConnectedOverlayPositions]=\"_positions\" [cdkConnectedOverlayMinWidth]=\"_triggerRect?.width\" [cdkConnectedOverlayOffsetY]=\"_offsetY\" (backdropClick)=\"close()\" (attach)=\"_onAttached()\" (detach)=\"close()\"><div class=\"mat-select-panel-wrap\" [@transformPanelWrap]><div #panel class=\"mat-select-panel {{ _getPanelTheme() }}\" [ngClass]=\"panelClass\" [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\" (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\" [style.transformOrigin]=\"_transformOrigin\" [style.font-size.px]=\"_triggerFontSize\" (keydown)=\"_handleKeydown($event)\"><ng-content></ng-content></div></div></ng-template>",
        styles: [".mat-select{display:inline-block;width:100%;outline:0}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform .4s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}@media (-ms-high-contrast:active){.mat-select-panel{outline:solid 1px}}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}"],
        inputs: ['disabled', 'disableRipple', 'tabIndex'],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectionStrategy"].OnPush,
        host: {
          'role': 'listbox',
          '[attr.id]': 'id',
          '[attr.tabindex]': 'tabIndex',
          '[attr.aria-label]': '_getAriaLabel()',
          '[attr.aria-labelledby]': '_getAriaLabelledby()',
          '[attr.aria-required]': 'required.toString()',
          '[attr.aria-disabled]': 'disabled.toString()',
          '[attr.aria-invalid]': 'errorState',
          '[attr.aria-owns]': 'panelOpen ? _optionIds : null',
          '[attr.aria-multiselectable]': 'multiple',
          '[attr.aria-describedby]': '_ariaDescribedby || null',
          '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
          '[class.mat-select-disabled]': 'disabled',
          '[class.mat-select-invalid]': 'errorState',
          '[class.mat-select-required]': 'required',
          '[class.mat-select-empty]': 'empty',
          'class': 'mat-select',
          '(keydown)': '_handleKeydown($event)',
          '(focus)': '_onFocus()',
          '(blur)': '_onBlur()'
        },
        animations: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel],
        providers: [{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldControl"],
          useExisting: MatSelect
        }, {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_OPTION_PARENT_COMPONENT"],
          useExisting: MatSelect
        }]
      }]
    }];
    /** @nocollapse */

    MatSelect.ctorParameters = function () {
      return [{
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
        }]
      }, {
        type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
          args: [MAT_SELECT_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["LiveAnnouncer"]
      }];
    };

    MatSelect.propDecorators = {
      trigger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
        args: ['trigger', {
          "static": false
        }]
      }],
      panel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
        args: ['panel', {
          "static": false
        }]
      }],
      overlayDir: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
        args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["CdkConnectedOverlay"], {
          "static": false
        }]
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], {
          descendants: true
        }]
      }],
      optionGroups: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptgroup"]]
      }],
      panelClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      customTrigger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChild"],
        args: [MatSelectTrigger, {
          "static": false
        }]
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      multiple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      disableOptionCentering: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
        args: ['aria-labelledby']
      }],
      errorStateMatcher: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      typeaheadDebounceInterval: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      sortComparator: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      openedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
      }],
      _openedStream: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"],
        args: ['opened']
      }],
      _closedStream: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"],
        args: ['closed']
      }],
      selectionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
      }],
      valueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatSelectModule = function MatSelectModule() {
      _classCallCheck(this, MatSelectModule);
    };

    MatSelectModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]],
        exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]],
        declarations: [MatSelect, MatSelectTrigger],
        providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=select.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/sort.js":
  /*!********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/sort.js ***!
    \********************************************************/

  /*! exports provided: MatSortModule, MatSortHeader, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MatSortHeaderIntl, MAT_SORT_HEADER_INTL_PROVIDER, MatSort, matSortAnimations */

  /***/
  function node_modulesAngularMaterialEsm2015SortJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSortModule", function () {
      return MatSortModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSortHeader", function () {
      return MatSortHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY", function () {
      return MAT_SORT_HEADER_INTL_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl", function () {
      return MatSortHeaderIntl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER", function () {
      return MAT_SORT_HEADER_INTL_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSort", function () {
      return MatSort;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matSortAnimations", function () {
      return matSortAnimations;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     * @param {?} id
     * @return {?}
     */


    function getSortDuplicateSortableIdError(id) {
      return Error("Cannot have two MatSortables with the same id (".concat(id, ")."));
    }
    /**
     * \@docs-private
     * @return {?}
     */


    function getSortHeaderNotContainedWithinSortError() {
      return Error("MatSortHeader must be placed within a parent element with the MatSort directive.");
    }
    /**
     * \@docs-private
     * @return {?}
     */


    function getSortHeaderMissingIdError() {
      return Error("MatSortHeader must be provided with a unique id.");
    }
    /**
     * \@docs-private
     * @param {?} direction
     * @return {?}
     */


    function getSortInvalidDirectionError(direction) {
      return Error("".concat(direction, " is not a valid sort direction ('asc' or 'desc')."));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatSort.

    /**
     * \@docs-private
     */


    var MatSortBase = function MatSortBase() {
      _classCallCheck(this, MatSortBase);
    };
    /** @type {?} */


    var _MatSortMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinInitialized"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortBase));
    /**
     * Container for MatSortables to manage the sort state and provide default sort parameters.
     */


    var MatSort = /*#__PURE__*/function (_MatSortMixinBase2) {
      _inherits(MatSort, _MatSortMixinBase2);

      var _super18 = _createSuper(MatSort);

      function MatSort() {
        var _this35;

        _classCallCheck(this, MatSort);

        _this35 = _super18.apply(this, arguments);
        /**
         * Collection of all registered sortables that this directive manages.
         */

        _this35.sortables = new Map();
        /**
         * Used to notify any child components listening to state changes.
         */

        _this35._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * The direction to set when an MatSortable is initially sorted.
         * May be overriden by the MatSortable's sort start.
         */

        _this35.start = 'asc';
        _this35._direction = '';
        /**
         * Event emitted when the user changes either the active sort or sort direction.
         */

        _this35.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this35;
      }
      /**
       * The sort direction of the currently active MatSortable.
       * @return {?}
       */


      _createClass(MatSort, [{
        key: "register",

        /**
         * Register function to be used by the contained MatSortables. Adds the MatSortable to the
         * collection of MatSortables.
         * @param {?} sortable
         * @return {?}
         */
        value: function register(sortable) {
          if (!sortable.id) {
            throw getSortHeaderMissingIdError();
          }

          if (this.sortables.has(sortable.id)) {
            throw getSortDuplicateSortableIdError(sortable.id);
          }

          this.sortables.set(sortable.id, sortable);
        }
        /**
         * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
         * collection of contained MatSortables.
         * @param {?} sortable
         * @return {?}
         */

      }, {
        key: "deregister",
        value: function deregister(sortable) {
          this.sortables["delete"](sortable.id);
        }
        /**
         * Sets the active sort id and determines the new sort direction.
         * @param {?} sortable
         * @return {?}
         */

      }, {
        key: "sort",
        value: function sort(sortable) {
          if (this.active != sortable.id) {
            this.active = sortable.id;
            this.direction = sortable.start ? sortable.start : this.start;
          } else {
            this.direction = this.getNextSortDirection(sortable);
          }

          this.sortChange.emit({
            active: this.active,
            direction: this.direction
          });
        }
        /**
         * Returns the next sort direction of the active sortable, checking for potential overrides.
         * @param {?} sortable
         * @return {?}
         */

      }, {
        key: "getNextSortDirection",
        value: function getNextSortDirection(sortable) {
          if (!sortable) {
            return '';
          } // Get the sort direction cycle with the potential sortable overrides.

          /** @type {?} */


          var disableClear = sortable.disableClear != null ? sortable.disableClear : this.disableClear;
          /** @type {?} */

          var sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear); // Get and return the next direction in the cycle

          /** @type {?} */

          var nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;

          if (nextDirectionIndex >= sortDirectionCycle.length) {
            nextDirectionIndex = 0;
          }

          return sortDirectionCycle[nextDirectionIndex];
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._markInitialized();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this._stateChanges.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
      }, {
        key: "direction",
        get: function get() {
          return this._direction;
        }
        /**
         * @param {?} direction
         * @return {?}
         */
        ,
        set: function set(direction) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && direction && direction !== 'asc' && direction !== 'desc') {
            throw getSortInvalidDirectionError(direction);
          }

          this._direction = direction;
        }
        /**
         * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
         * May be overriden by the MatSortable's disable clear input.
         * @return {?}
         */

      }, {
        key: "disableClear",
        get: function get() {
          return this._disableClear;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(v);
        }
      }]);

      return MatSort;
    }(_MatSortMixinBase);

    MatSort.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[matSort]',
        exportAs: 'matSort',
        inputs: ['disabled: matSortDisabled']
      }]
    }];
    MatSort.propDecorators = {
      active: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matSortActive']
      }],
      start: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matSortStart']
      }],
      direction: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matSortDirection']
      }],
      disableClear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matSortDisableClear']
      }],
      sortChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
        args: ['matSortChange']
      }]
    };
    /**
     * Returns the sort direction cycle to use given the provided parameters of order and clear.
     * @param {?} start
     * @param {?} disableClear
     * @return {?}
     */

    function getSortDirectionCycle(start, disableClear) {
      /** @type {?} */
      var sortOrder = ['asc', 'desc'];

      if (start == 'desc') {
        sortOrder.reverse();
      }

      if (!disableClear) {
        sortOrder.push('');
      }

      return sortOrder;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationDurations"].ENTERING + ' ' + _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["AnimationCurves"].STANDARD_CURVE;
    /**
     * Animations used by MatSort.
     * \@docs-private
     * @type {?}
     */

    var matSortAnimations = {
      /**
       * Animation that moves the sort indicator.
       */
      indicator: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('indicator', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0px)'
      })), // 10px is the height of the sort indicator, minus the width of the pointers
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(10px)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation that rotates the left pointer of the indicator based on the sorting direction.
       */
      leftPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('leftPointer', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'rotate(-45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'rotate(45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation that rotates the right pointer of the indicator based on the sorting direction.
       */
      rightPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('rightPointer', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'rotate(45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'rotate(-45deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation that controls the arrow opacity.
       */
      arrowOpacity: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('arrowOpacity', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('desc-to-hint, asc-to-hint, hint', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: .54
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: 0
      })), // Transition between all states except for immediate transitions
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => asc, * => desc, * => active, * => hint, * => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0ms')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION))]),

      /**
       * Animation for the translation of the arrow as a whole. States are separated into two
       * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
       * peek, and active. The other states define a specific animation (source-to-destination)
       * and are determined as a function of their prev user-perceived state and what the next state
       * should be.
       */
      arrowPosition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('arrowPosition', [// Hidden Above => Hint Center
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => desc-to-hint, * => desc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(-25%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0)'
      })]))), // Hint Center => Hidden Below
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => hint-to-desc, * => active-to-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(25%)'
      })]))), // Hidden Below => Hint Center
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => asc-to-hint, * => asc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(25%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0)'
      })]))), // Hint Center => Hidden Above
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => hint-to-asc, * => active-to-asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(-25%)'
      })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hint-to-desc, active-to-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(-25%)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hint-to-asc, active-to-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        transform: 'translateY(25%)'
      }))]),

      /**
       * Necessary trigger that calls animate on children animations.
       */
      allowChildren: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('allowChildren', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animateChild"])(), {
        optional: true
      })])])
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
     * include it in a custom provider.
     */

    var MatSortHeaderIntl = function MatSortHeaderIntl() {
      _classCallCheck(this, MatSortHeaderIntl);

      /**
       * Stream that emits whenever the labels here are changed. Use this to notify
       * components if the labels have changed after initialization.
       */
      this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      /**
       * ARIA label for the sorting button.
       */

      this.sortButtonLabel =
      /**
      * @param {?} id
      * @return {?}
      */
      function (id) {
        return "Change sorting for ".concat(id);
      };
    };

    MatSortHeaderIntl.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    MatSortHeaderIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function MatSortHeaderIntl_Factory() {
        return new MatSortHeaderIntl();
      },
      token: MatSortHeaderIntl,
      providedIn: "root"
    });
    /**
     * \@docs-private
     * @param {?} parentIntl
     * @return {?}
     */

    function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
      return parentIntl || new MatSortHeaderIntl();
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_SORT_HEADER_INTL_PROVIDER = {
      // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
      provide: MatSortHeaderIntl,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), MatSortHeaderIntl]],
      useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to the sort header.

    /**
     * \@docs-private
     */

    var MatSortHeaderBase = function MatSortHeaderBase() {
      _classCallCheck(this, MatSortHeaderBase);
    };
    /** @type {?} */


    var _MatSortHeaderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSortHeaderBase);
    /**
     * Applies sorting behavior (click to change sort) and styles to an element, including an
     * arrow to display the current sort direction.
     *
     * Must be provided with an id and contained within a parent MatSort directive.
     *
     * If used on header cells in a CdkTable, it will automatically default its id from its containing
     * column definition.
     */


    var MatSortHeader = /*#__PURE__*/function (_MatSortHeaderMixinBa) {
      _inherits(MatSortHeader, _MatSortHeaderMixinBa);

      var _super19 = _createSuper(MatSortHeader);

      /**
       * @param {?} _intl
       * @param {?} changeDetectorRef
       * @param {?} _sort
       * @param {?} _columnDef
       */
      function MatSortHeader(_intl, changeDetectorRef, _sort, _columnDef) {
        var _this36;

        _classCallCheck(this, MatSortHeader);

        // Note that we use a string token for the `_columnDef`, because the value is provided both by
        // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
        // and we want to avoid having the sort header depending on the CDK table because
        // of this single reference.
        _this36 = _super19.call(this);
        _this36._intl = _intl;
        _this36._sort = _sort;
        _this36._columnDef = _columnDef;
        /**
         * Flag set to true when the indicator should be displayed while the sort is not active. Used to
         * provide an affordance that the header is sortable by showing on focus and hover.
         */

        _this36._showIndicatorHint = false;
        /**
         * The direction the arrow should be facing according to the current state.
         */

        _this36._arrowDirection = '';
        /**
         * Whether the view state animation should show the transition between the `from` and `to` states.
         */

        _this36._disableViewStateAnimation = false;
        /**
         * Sets the position of the arrow that displays when sorted.
         */

        _this36.arrowPosition = 'after';

        if (!_sort) {
          throw getSortHeaderNotContainedWithinSortError();
        }

        _this36._rerenderSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(_sort.sortChange, _sort._stateChanges, _intl.changes).subscribe(
        /**
        * @return {?}
        */
        function () {
          if (_this36._isSorted()) {
            _this36._updateArrowDirection();
          } // If this header was recently active and now no longer sorted, animate away the arrow.


          if (!_this36._isSorted() && _this36._viewState && _this36._viewState.toState === 'active') {
            _this36._disableViewStateAnimation = false;

            _this36._setAnimationTransitionState({
              fromState: 'active',
              toState: _this36._arrowDirection
            });
          }

          changeDetectorRef.markForCheck();
        });
        return _this36;
      }
      /**
       * Overrides the disable clear value of the containing MatSort for this MatSortable.
       * @return {?}
       */


      _createClass(MatSortHeader, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          if (!this.id && this._columnDef) {
            this.id = this._columnDef.name;
          } // Initialize the direction of the arrow and set the view state to be immediately that state.


          this._updateArrowDirection();

          this._setAnimationTransitionState({
            toState: this._isSorted() ? 'active' : this._arrowDirection
          });

          this._sort.register(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._sort.deregister(this);

          this._rerenderSubscription.unsubscribe();
        }
        /**
         * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
         * user showing what the active sort will become. If set to false, the arrow will fade away.
         * @param {?} visible
         * @return {?}
         */

      }, {
        key: "_setIndicatorHintVisible",
        value: function _setIndicatorHintVisible(visible) {
          // No-op if the sort header is disabled - should not make the hint visible.
          if (this._isDisabled() && visible) {
            return;
          }

          this._showIndicatorHint = visible;

          if (!this._isSorted()) {
            this._updateArrowDirection();

            if (this._showIndicatorHint) {
              this._setAnimationTransitionState({
                fromState: this._arrowDirection,
                toState: 'hint'
              });
            } else {
              this._setAnimationTransitionState({
                fromState: 'hint',
                toState: this._arrowDirection
              });
            }
          }
        }
        /**
         * Sets the animation transition view state for the arrow's position and opacity. If the
         * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
         * no animation appears.
         * @param {?} viewState
         * @return {?}
         */

      }, {
        key: "_setAnimationTransitionState",
        value: function _setAnimationTransitionState(viewState) {
          this._viewState = viewState; // If the animation for arrow position state (opacity/translation) should be disabled,
          // remove the fromState so that it jumps right to the toState.

          if (this._disableViewStateAnimation) {
            this._viewState = {
              toState: viewState.toState
            };
          }
        }
        /**
         * Triggers the sort on this sort header and removes the indicator hint.
         * @return {?}
         */

      }, {
        key: "_handleClick",
        value: function _handleClick() {
          if (this._isDisabled()) {
            return;
          }

          this._sort.sort(this); // Do not show the animation if the header was already shown in the right position.


          if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
            this._disableViewStateAnimation = true;
          } // If the arrow is now sorted, animate the arrow into place. Otherwise, animate it away into
          // the direction it is facing.

          /** @type {?} */


          var viewState = this._isSorted() ? {
            fromState: this._arrowDirection,
            toState: 'active'
          } : {
            fromState: 'active',
            toState: this._arrowDirection
          };

          this._setAnimationTransitionState(viewState);

          this._showIndicatorHint = false;
        }
        /**
         * Whether this MatSortHeader is currently sorted in either ascending or descending order.
         * @return {?}
         */

      }, {
        key: "_isSorted",
        value: function _isSorted() {
          return this._sort.active == this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
        }
        /**
         * Returns the animation state for the arrow direction (indicator and pointers).
         * @return {?}
         */

      }, {
        key: "_getArrowDirectionState",
        value: function _getArrowDirectionState() {
          return "".concat(this._isSorted() ? 'active-' : '').concat(this._arrowDirection);
        }
        /**
         * Returns the arrow position state (opacity, translation).
         * @return {?}
         */

      }, {
        key: "_getArrowViewState",
        value: function _getArrowViewState() {
          /** @type {?} */
          var fromState = this._viewState.fromState;
          return (fromState ? "".concat(fromState, "-to-") : '') + this._viewState.toState;
        }
        /**
         * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
         * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
         * active sorted direction. The reason this is updated through a function is because the direction
         * should only be changed at specific times - when deactivated but the hint is displayed and when
         * the sort is active and the direction changes. Otherwise the arrow's direction should linger
         * in cases such as the sort becoming deactivated but we want to animate the arrow away while
         * preserving its direction, even though the next sort direction is actually different and should
         * only be changed once the arrow displays again (hint or activation).
         * @return {?}
         */

      }, {
        key: "_updateArrowDirection",
        value: function _updateArrowDirection() {
          this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_isDisabled",
        value: function _isDisabled() {
          return this._sort.disabled || this.disabled;
        }
        /**
         * Gets the aria-sort attribute that should be applied to this sort header. If this header
         * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
         * says that the aria-sort property should only be present on one header at a time, so removing
         * ensures this is true.
         * @return {?}
         */

      }, {
        key: "_getAriaSortAttribute",
        value: function _getAriaSortAttribute() {
          if (!this._isSorted()) {
            return null;
          }

          return this._sort.direction == 'asc' ? 'ascending' : 'descending';
        }
        /**
         * Whether the arrow inside the sort header should be rendered.
         * @return {?}
         */

      }, {
        key: "_renderArrow",
        value: function _renderArrow() {
          return !this._isDisabled() || this._isSorted();
        }
      }, {
        key: "disableClear",
        get: function get() {
          return this._disableClear;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(v);
        }
      }]);

      return MatSortHeader;
    }(_MatSortHeaderMixinBase);

    MatSortHeader.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: '[mat-sort-header]',
        exportAs: 'matSortHeader',
        template: "<div class=\"mat-sort-header-container\" [class.mat-sort-header-sorted]=\"_isSorted()\" [class.mat-sort-header-position-before]=\"arrowPosition == 'before'\"><button class=\"mat-sort-header-button\" type=\"button\" [attr.disabled]=\"_isDisabled() || null\" [attr.aria-label]=\"_intl.sortButtonLabel(id)\" (focus)=\"_setIndicatorHintVisible(true)\" (blur)=\"_setIndicatorHintVisible(false)\"><ng-content></ng-content></button><div class=\"mat-sort-header-arrow\" *ngIf=\"_renderArrow()\" [@arrowOpacity]=\"_getArrowViewState()\" [@arrowPosition]=\"_getArrowViewState()\" [@allowChildren]=\"_getArrowDirectionState()\" (@arrowPosition.start)=\"_disableViewStateAnimation = true\" (@arrowPosition.done)=\"_disableViewStateAnimation = false\"><div class=\"mat-sort-header-stem\"></div><div class=\"mat-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\"><div class=\"mat-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div><div class=\"mat-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div><div class=\"mat-sort-header-pointer-middle\"></div></div></div></div>",
        styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-button{border:none;background:0 0;display:flex;align-items:center;padding:0;cursor:inherit;outline:0;font:inherit;color:currentColor}.mat-sort-header-button::-moz-focus-inner{border:0}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}@media (-ms-high-contrast:active){.mat-sort-header-stem{width:0;border-left:solid 2px}}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}@media (-ms-high-contrast:active){.mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}@media (-ms-high-contrast:active){.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],
        host: {
          '(click)': '_handleClick()',
          '(mouseenter)': '_setIndicatorHintVisible(true)',
          '(mouseleave)': '_setIndicatorHintVisible(false)',
          '[attr.aria-sort]': '_getAriaSortAttribute()',
          '[class.mat-sort-header-disabled]': '_isDisabled()'
        },
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        inputs: ['disabled'],
        animations: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren]
      }]
    }];
    /** @nocollapse */

    MatSortHeader.ctorParameters = function () {
      return [{
        type: MatSortHeaderIntl
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: MatSort,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: ['MAT_SORT_HEADER_COLUMN_DEF']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    MatSortHeader.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['mat-sort-header']
      }],
      arrowPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      start: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      disableClear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatSortModule = function MatSortModule() {
      _classCallCheck(this, MatSortModule);
    };

    MatSortModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
        exports: [MatSort, MatSortHeader],
        declarations: [MatSort, MatSortHeader],
        providers: [MAT_SORT_HEADER_INTL_PROVIDER]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=sort.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/table.js":
  /*!*********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/table.js ***!
    \*********************************************************/

  /*! exports provided: MatTableModule, MatCellDef, MatHeaderCellDef, MatFooterCellDef, MatColumnDef, MatHeaderCell, MatFooterCell, MatCell, MatTable, MatHeaderRowDef, MatFooterRowDef, MatRowDef, MatHeaderRow, MatFooterRow, MatRow, MatTableDataSource, MatTextColumn */

  /***/
  function node_modulesAngularMaterialEsm2015TableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTableModule", function () {
      return MatTableModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCellDef", function () {
      return MatCellDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHeaderCellDef", function () {
      return MatHeaderCellDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFooterCellDef", function () {
      return MatFooterCellDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatColumnDef", function () {
      return MatColumnDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHeaderCell", function () {
      return MatHeaderCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFooterCell", function () {
      return MatFooterCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCell", function () {
      return MatCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTable", function () {
      return MatTable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHeaderRowDef", function () {
      return MatHeaderRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFooterRowDef", function () {
      return MatFooterRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatRowDef", function () {
      return MatRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHeaderRow", function () {
      return MatHeaderRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFooterRow", function () {
      return MatFooterRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatRow", function () {
      return MatRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTableDataSource", function () {
      return MatTableDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTextColumn", function () {
      return MatTextColumn;
    });
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wrapper for the CdkTable with Material design styles.
     * @template T
     */


    var MatTable = /*#__PURE__*/function (_angular_cdk_table__W) {
      _inherits(MatTable, _angular_cdk_table__W);

      var _super20 = _createSuper(MatTable);

      function MatTable() {
        var _this37;

        _classCallCheck(this, MatTable);

        _this37 = _super20.apply(this, arguments);
        /**
         * Overrides the sticky CSS class set by the `CdkTable`.
         */

        _this37.stickyCssClass = 'mat-table-sticky';
        return _this37;
      }

      return MatTable;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkTable"]);

    MatTable.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'mat-table, table[mat-table]',
        exportAs: 'matTable',
        template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CDK_TABLE_TEMPLATE"],
        styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-footer-row,mat-row{min-height:48px}mat-footer-row,mat-header-row,mat-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-footer-row::after,mat-header-row::after,mat-row::after{display:inline-block;min-height:inherit;content:''}mat-cell:first-of-type,mat-footer-cell:first-of-type,mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-footer-cell:last-of-type,mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-footer-cell,mat-header-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-footer-row,tr.mat-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}td.mat-cell,td.mat-footer-cell,th.mat-header-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type,th.mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type,[dir=rtl] th.mat-header-cell:first-of-type{padding-left:0;padding-right:24px}td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type,th.mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type,[dir=rtl] th.mat-header-cell:last-of-type{padding-right:0;padding-left:24px}"],
        host: {
          'class': 'mat-table'
        },
        providers: [{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkTable"],
          useExisting: MatTable
        }],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        // See note on CdkTable for explanation on why this uses the default change detection strategy.
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Cell definition for the mat-table.
     * Captures the template of a column's data row cell as well as cell-specific properties.
     */

    var MatCellDef = /*#__PURE__*/function (_angular_cdk_table__W2) {
      _inherits(MatCellDef, _angular_cdk_table__W2);

      var _super21 = _createSuper(MatCellDef);

      function MatCellDef() {
        _classCallCheck(this, MatCellDef);

        return _super21.apply(this, arguments);
      }

      return MatCellDef;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkCellDef"]);

    MatCellDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[matCellDef]',
        providers: [{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkCellDef"],
          useExisting: MatCellDef
        }]
      }]
    }];
    /**
     * Header cell definition for the mat-table.
     * Captures the template of a column's header cell and as well as cell-specific properties.
     */

    var MatHeaderCellDef = /*#__PURE__*/function (_angular_cdk_table__W3) {
      _inherits(MatHeaderCellDef, _angular_cdk_table__W3);

      var _super22 = _createSuper(MatHeaderCellDef);

      function MatHeaderCellDef() {
        _classCallCheck(this, MatHeaderCellDef);

        return _super22.apply(this, arguments);
      }

      return MatHeaderCellDef;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkHeaderCellDef"]);

    MatHeaderCellDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[matHeaderCellDef]',
        providers: [{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkHeaderCellDef"],
          useExisting: MatHeaderCellDef
        }]
      }]
    }];
    /**
     * Footer cell definition for the mat-table.
     * Captures the template of a column's footer cell and as well as cell-specific properties.
     */

    var MatFooterCellDef = /*#__PURE__*/function (_angular_cdk_table__W4) {
      _inherits(MatFooterCellDef, _angular_cdk_table__W4);

      var _super23 = _createSuper(MatFooterCellDef);

      function MatFooterCellDef() {
        _classCallCheck(this, MatFooterCellDef);

        return _super23.apply(this, arguments);
      }

      return MatFooterCellDef;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkFooterCellDef"]);

    MatFooterCellDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[matFooterCellDef]',
        providers: [{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkFooterCellDef"],
          useExisting: MatFooterCellDef
        }]
      }]
    }];
    /**
     * Column definition for the mat-table.
     * Defines a set of cells available for a table column.
     */

    var MatColumnDef = /*#__PURE__*/function (_angular_cdk_table__W5) {
      _inherits(MatColumnDef, _angular_cdk_table__W5);

      var _super24 = _createSuper(MatColumnDef);

      function MatColumnDef() {
        _classCallCheck(this, MatColumnDef);

        return _super24.apply(this, arguments);
      }

      return MatColumnDef;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkColumnDef"]);

    MatColumnDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[matColumnDef]',
        providers: [{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkColumnDef"],
          useExisting: MatColumnDef
        }, {
          provide: 'MAT_SORT_HEADER_COLUMN_DEF',
          useExisting: MatColumnDef
        }]
      }]
    }];
    MatColumnDef.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['matColumnDef']
      }],
      sticky: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      stickyEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /**
     * Header cell template container that adds the right classes and role.
     */

    var MatHeaderCell = /*#__PURE__*/function (_angular_cdk_table__W6) {
      _inherits(MatHeaderCell, _angular_cdk_table__W6);

      var _super25 = _createSuper(MatHeaderCell);

      /**
       * @param {?} columnDef
       * @param {?} elementRef
       */
      function MatHeaderCell(columnDef, elementRef) {
        var _this38;

        _classCallCheck(this, MatHeaderCell);

        _this38 = _super25.call(this, columnDef, elementRef);
        elementRef.nativeElement.classList.add("mat-column-".concat(columnDef.cssClassFriendlyName));
        return _this38;
      }

      return MatHeaderCell;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkHeaderCell"]);

    MatHeaderCell.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: 'mat-header-cell, th[mat-header-cell]',
        host: {
          'class': 'mat-header-cell',
          'role': 'columnheader'
        }
      }]
    }];
    /** @nocollapse */

    MatHeaderCell.ctorParameters = function () {
      return [{
        type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkColumnDef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    /**
     * Footer cell template container that adds the right classes and role.
     */


    var MatFooterCell = /*#__PURE__*/function (_angular_cdk_table__W7) {
      _inherits(MatFooterCell, _angular_cdk_table__W7);

      var _super26 = _createSuper(MatFooterCell);

      /**
       * @param {?} columnDef
       * @param {?} elementRef
       */
      function MatFooterCell(columnDef, elementRef) {
        var _this39;

        _classCallCheck(this, MatFooterCell);

        _this39 = _super26.call(this, columnDef, elementRef);
        elementRef.nativeElement.classList.add("mat-column-".concat(columnDef.cssClassFriendlyName));
        return _this39;
      }

      return MatFooterCell;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkFooterCell"]);

    MatFooterCell.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: 'mat-footer-cell, td[mat-footer-cell]',
        host: {
          'class': 'mat-footer-cell',
          'role': 'gridcell'
        }
      }]
    }];
    /** @nocollapse */

    MatFooterCell.ctorParameters = function () {
      return [{
        type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkColumnDef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    /**
     * Cell template container that adds the right classes and role.
     */


    var MatCell = /*#__PURE__*/function (_angular_cdk_table__W8) {
      _inherits(MatCell, _angular_cdk_table__W8);

      var _super27 = _createSuper(MatCell);

      /**
       * @param {?} columnDef
       * @param {?} elementRef
       */
      function MatCell(columnDef, elementRef) {
        var _this40;

        _classCallCheck(this, MatCell);

        _this40 = _super27.call(this, columnDef, elementRef);
        elementRef.nativeElement.classList.add("mat-column-".concat(columnDef.cssClassFriendlyName));
        return _this40;
      }

      return MatCell;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkCell"]);

    MatCell.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: 'mat-cell, td[mat-cell]',
        host: {
          'class': 'mat-cell',
          'role': 'gridcell'
        }
      }]
    }];
    /** @nocollapse */

    MatCell.ctorParameters = function () {
      return [{
        type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkColumnDef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Header row definition for the mat-table.
     * Captures the header row's template and other header properties such as the columns to display.
     */


    var MatHeaderRowDef = /*#__PURE__*/function (_angular_cdk_table__W9) {
      _inherits(MatHeaderRowDef, _angular_cdk_table__W9);

      var _super28 = _createSuper(MatHeaderRowDef);

      function MatHeaderRowDef() {
        _classCallCheck(this, MatHeaderRowDef);

        return _super28.apply(this, arguments);
      }

      return MatHeaderRowDef;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkHeaderRowDef"]);

    MatHeaderRowDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[matHeaderRowDef]',
        providers: [{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkHeaderRowDef"],
          useExisting: MatHeaderRowDef
        }],
        inputs: ['columns: matHeaderRowDef', 'sticky: matHeaderRowDefSticky']
      }]
    }];
    /**
     * Footer row definition for the mat-table.
     * Captures the footer row's template and other footer properties such as the columns to display.
     */

    var MatFooterRowDef = /*#__PURE__*/function (_angular_cdk_table__W10) {
      _inherits(MatFooterRowDef, _angular_cdk_table__W10);

      var _super29 = _createSuper(MatFooterRowDef);

      function MatFooterRowDef() {
        _classCallCheck(this, MatFooterRowDef);

        return _super29.apply(this, arguments);
      }

      return MatFooterRowDef;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkFooterRowDef"]);

    MatFooterRowDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[matFooterRowDef]',
        providers: [{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkFooterRowDef"],
          useExisting: MatFooterRowDef
        }],
        inputs: ['columns: matFooterRowDef', 'sticky: matFooterRowDefSticky']
      }]
    }];
    /**
     * Data row definition for the mat-table.
     * Captures the data row's template and other properties such as the columns to display and
     * a when predicate that describes when this row should be used.
     * @template T
     */

    var MatRowDef = /*#__PURE__*/function (_angular_cdk_table__W11) {
      _inherits(MatRowDef, _angular_cdk_table__W11);

      var _super30 = _createSuper(MatRowDef);

      function MatRowDef() {
        _classCallCheck(this, MatRowDef);

        return _super30.apply(this, arguments);
      }

      return MatRowDef;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkRowDef"]);

    MatRowDef.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[matRowDef]',
        providers: [{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkRowDef"],
          useExisting: MatRowDef
        }],
        inputs: ['columns: matRowDefColumns', 'when: matRowDefWhen']
      }]
    }];
    /**
     * Footer template container that contains the cell outlet. Adds the right class and role.
     */

    var MatHeaderRow = /*#__PURE__*/function (_angular_cdk_table__W12) {
      _inherits(MatHeaderRow, _angular_cdk_table__W12);

      var _super31 = _createSuper(MatHeaderRow);

      function MatHeaderRow() {
        _classCallCheck(this, MatHeaderRow);

        return _super31.apply(this, arguments);
      }

      return MatHeaderRow;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkHeaderRow"]);

    MatHeaderRow.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'mat-header-row, tr[mat-header-row]',
        template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CDK_ROW_TEMPLATE"],
        host: {
          'class': 'mat-header-row',
          'role': 'row'
        },
        // See note on CdkTable for explanation on why this uses the default change detection strategy.
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        exportAs: 'matHeaderRow',
        providers: [{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkHeaderRow"],
          useExisting: MatHeaderRow
        }]
      }]
    }];
    /**
     * Footer template container that contains the cell outlet. Adds the right class and role.
     */

    var MatFooterRow = /*#__PURE__*/function (_angular_cdk_table__W13) {
      _inherits(MatFooterRow, _angular_cdk_table__W13);

      var _super32 = _createSuper(MatFooterRow);

      function MatFooterRow() {
        _classCallCheck(this, MatFooterRow);

        return _super32.apply(this, arguments);
      }

      return MatFooterRow;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkFooterRow"]);

    MatFooterRow.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'mat-footer-row, tr[mat-footer-row]',
        template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CDK_ROW_TEMPLATE"],
        host: {
          'class': 'mat-footer-row',
          'role': 'row'
        },
        // See note on CdkTable for explanation on why this uses the default change detection strategy.
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        exportAs: 'matFooterRow',
        providers: [{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkFooterRow"],
          useExisting: MatFooterRow
        }]
      }]
    }];
    /**
     * Data row template container that contains the cell outlet. Adds the right class and role.
     */

    var MatRow = /*#__PURE__*/function (_angular_cdk_table__W14) {
      _inherits(MatRow, _angular_cdk_table__W14);

      var _super33 = _createSuper(MatRow);

      function MatRow() {
        _classCallCheck(this, MatRow);

        return _super33.apply(this, arguments);
      }

      return MatRow;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkRow"]);

    MatRow.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'mat-row, tr[mat-row]',
        template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CDK_ROW_TEMPLATE"],
        host: {
          'class': 'mat-row',
          'role': 'row'
        },
        // See note on CdkTable for explanation on why this uses the default change detection strategy.
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        exportAs: 'matRow',
        providers: [{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkRow"],
          useExisting: MatRow
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Column that simply shows text content for the header and row cells. Assumes that the table
     * is using the native table implementation (`<table>`).
     *
     * By default, the name of this column will be the header text and data property accessor.
     * The header text can be overridden with the `headerText` input. Cell values can be overridden with
     * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
     * input.
     * @template T
     */

    var MatTextColumn = /*#__PURE__*/function (_angular_cdk_table__W15) {
      _inherits(MatTextColumn, _angular_cdk_table__W15);

      var _super34 = _createSuper(MatTextColumn);

      function MatTextColumn() {
        _classCallCheck(this, MatTextColumn);

        return _super34.apply(this, arguments);
      }

      return MatTextColumn;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkTextColumn"]);

    MatTextColumn.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'mat-text-column',
        template: "\n    <ng-container matColumnDef>\n      <th mat-header-cell *matHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td mat-cell *matCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        // Change detection is intentionally not set to OnPush. This component's template will be provided
        // to the table to be inserted into its view. This is problematic when change detection runs since
        // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
        // mean's the template in the table's view will not have the updated value (and in fact will cause
        // an ExpressionChangedAfterItHasBeenCheckedError).
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var EXPORTED_DECLARATIONS = [// Table
    MatTable, // Template defs
    MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, // Cell directives
    MatHeaderCell, MatCell, MatFooterCell, // Row directives
    MatHeaderRow, MatRow, MatFooterRow, MatTextColumn];

    var MatTableModule = function MatTableModule() {
      _classCallCheck(this, MatTableModule);
    };

    MatTableModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkTableModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
        exports: EXPORTED_DECLARATIONS,
        declarations: EXPORTED_DECLARATIONS
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
     * flaky browser support and the value not being defined in Closure's typings.
     * @type {?}
     */

    var MAX_SAFE_INTEGER = 9007199254740991;
    /**
     * Data source that accepts a client-side data array and includes native support of filtering,
     * sorting (using MatSort), and pagination (using MatPaginator).
     *
     * Allows for sort customization by overriding sortingDataAccessor, which defines how data
     * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
     * which defines how row data is converted to a string for filter matching.
     *
     * **Note:** This class is meant to be a simple data source to help you get started. As such
     * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
     * interactions. If your app needs to support more advanced use cases, consider implementing your
     * own `DataSource`.
     * @template T
     */

    var MatTableDataSource = /*#__PURE__*/function (_angular_cdk_table__W16) {
      _inherits(MatTableDataSource, _angular_cdk_table__W16);

      var _super35 = _createSuper(MatTableDataSource);

      /**
       * @param {?=} initialData
       */
      function MatTableDataSource() {
        var _this41;

        var initialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, MatTableDataSource);

        _this41 = _super35.call(this);
        /**
         * Stream emitting render data to the table (depends on ordered data changes).
         */

        _this41._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        /**
         * Stream that emits when a new filter string is set on the data source.
         */

        _this41._filter = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
        /**
         * Used to react to internal changes of the paginator that are made by the data source itself.
         */

        _this41._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Subscription to the changes that should trigger an update to the table's rendered rows, such
         * as filtering, sorting, pagination, or base data changes.
         */

        _this41._renderChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Data accessor function that is used for accessing data properties for sorting through
         * the default sortData function.
         * This default function assumes that the sort header IDs (which defaults to the column name)
         * matches the data's properties (e.g. column Xyz represents data['Xyz']).
         * May be set to a custom function for different behavior.
         * @param data Data object that is being accessed.
         * @param sortHeaderId The name of the column that represents the data.
         */

        _this41.sortingDataAccessor =
        /**
        * @param {?} data
        * @param {?} sortHeaderId
        * @return {?}
        */
        function (data, sortHeaderId) {
          /** @type {?} */
          var value =
          /** @type {?} */
          data[sortHeaderId];

          if (Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["_isNumberValue"])(value)) {
            /** @type {?} */
            var numberValue = Number(value); // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
            // leave them as strings. For more info: https://goo.gl/y5vbSg

            return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
          }

          return value;
        };
        /**
         * Gets a sorted copy of the data array based on the state of the MatSort. Called
         * after changes are made to the filtered data or when sort changes are emitted from MatSort.
         * By default, the function retrieves the active sort and its direction and compares data
         * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
         * of data ordering.
         * @param data The array of data that should be sorted.
         * @param sort The connected MatSort that holds the current sort state.
         */


        _this41.sortData =
        /**
        * @param {?} data
        * @param {?} sort
        * @return {?}
        */
        function (data, sort) {
          /** @type {?} */
          var active = sort.active;
          /** @type {?} */

          var direction = sort.direction;

          if (!active || direction == '') {
            return data;
          }

          return data.sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            /** @type {?} */
            var valueA = _this41.sortingDataAccessor(a, active);
            /** @type {?} */


            var valueB = _this41.sortingDataAccessor(b, active); // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
            // one value exists while the other doesn't. In this case, existing value should come last.
            // This avoids inconsistent results when comparing values to undefined/null.
            // If neither value exists, return 0 (equal).

            /** @type {?} */


            var comparatorResult = 0;

            if (valueA != null && valueB != null) {
              // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
              if (valueA > valueB) {
                comparatorResult = 1;
              } else if (valueA < valueB) {
                comparatorResult = -1;
              }
            } else if (valueA != null) {
              comparatorResult = 1;
            } else if (valueB != null) {
              comparatorResult = -1;
            }

            return comparatorResult * (direction == 'asc' ? 1 : -1);
          });
        };
        /**
         * Checks if a data object matches the data source's filter string. By default, each data object
         * is converted to a string of its properties and returns true if the filter has
         * at least one occurrence in that string. By default, the filter string has its whitespace
         * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
         * filter matching.
         * @param data Data object used to check against the filter.
         * @param filter Filter string that has been set on the data source.
         * @return Whether the filter matches against the data
         */


        _this41.filterPredicate =
        /**
        * @param {?} data
        * @param {?} filter
        * @return {?}
        */
        function (data, filter) {
          // Transform the data into a lowercase string of all property values.

          /** @type {?} */
          var dataStr = Object.keys(data).reduce(
          /**
          * @param {?} currentTerm
          * @param {?} key
          * @return {?}
          */
          function (currentTerm, key) {
            // Use an obscure Unicode character to delimit the words in the concatenated string.
            // This avoids matches where the values of two columns combined will match the user's query
            // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
            // that has a very low chance of being typed in by somebody in a text field. This one in
            // particular is "White up-pointing triangle with dot" from
            // https://en.wikipedia.org/wiki/List_of_Unicode_characters
            return currentTerm +
            /** @type {?} */
            data[key] + '◬';
          }, '').toLowerCase(); // Transform the filter by converting it to lowercase and removing whitespace.

          /** @type {?} */

          var transformedFilter = filter.trim().toLowerCase();
          return dataStr.indexOf(transformedFilter) != -1;
        };

        _this41._data = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](initialData);

        _this41._updateChangeSubscription();

        return _this41;
      }
      /**
       * Array of data that should be rendered by the table, where each object represents one row.
       * @return {?}
       */


      _createClass(MatTableDataSource, [{
        key: "_updateChangeSubscription",

        /**
         * Subscribe to changes that should trigger an update to the table's rendered rows. When the
         * changes occur, process the current state of the filter, sort, and pagination along with
         * the provided base data and send it to the table for rendering.
         * @return {?}
         */
        value: function _updateChangeSubscription() {
          var _this42 = this;

          // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
          // The events should emit whenever the component emits a change or initializes, or if no
          // component is provided, a stream with just a null event should be provided.
          // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
          // pipeline can progress to the next step. Note that the value from these streams are not used,
          // they purely act as a signal to progress in the pipeline.

          /** @type {?} */
          var sortChange = this._sort ?
          /** @type {?} */
          Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._sort.sortChange, this._sort.initialized) : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
          /** @type {?} */

          var pageChange = this._paginator ?
          /** @type {?} */
          Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
          /** @type {?} */

          var dataStream = this._data; // Watch for base data or filter changes to provide a filtered set of data.

          /** @type {?} */

          var filteredData = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([dataStream, this._filter]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref) {
            var _ref2 = _slicedToArray(_ref, 1),
                data = _ref2[0];

            return _this42._filterData(data);
          })); // Watch for filtered data or sort changes to provide an ordered set of data.

          /** @type {?} */

          var orderedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([filteredData, sortChange]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 1),
                data = _ref4[0];

            return _this42._orderData(data);
          })); // Watch for ordered data or page changes to provide a paged set of data.

          /** @type {?} */

          var paginatedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([orderedData, pageChange]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 1),
                data = _ref6[0];

            return _this42._pageData(data);
          })); // Watched for paged data changes and send the result to the table to render.

          this._renderChangesSubscription.unsubscribe();

          this._renderChangesSubscription = paginatedData.subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            return _this42._renderData.next(data);
          });
        }
        /**
         * Returns a filtered data array where each filter object contains the filter string within
         * the result of the filterTermAccessor function. If no filter is set, returns the data array
         * as provided.
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "_filterData",
        value: function _filterData(data) {
          var _this43 = this;

          // If there is a filter string, filter out data that does not contain it.
          // Each data object is converted to a string using the function defined by filterTermAccessor.
          // May be overridden for customization.
          this.filteredData = !this.filter ? data : data.filter(
          /**
          * @param {?} obj
          * @return {?}
          */
          function (obj) {
            return _this43.filterPredicate(obj, _this43.filter);
          });

          if (this.paginator) {
            this._updatePaginator(this.filteredData.length);
          }

          return this.filteredData;
        }
        /**
         * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
         * data array as provided. Uses the default data accessor for data lookup, unless a
         * sortDataAccessor function is defined.
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "_orderData",
        value: function _orderData(data) {
          // If there is no active sort or direction, return the data without trying to sort.
          if (!this.sort) {
            return data;
          }

          return this.sortData(data.slice(), this.sort);
        }
        /**
         * Returns a paged slice of the provided data array according to the provided MatPaginator's page
         * index and length. If there is no paginator provided, returns the data array as provided.
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "_pageData",
        value: function _pageData(data) {
          if (!this.paginator) {
            return data;
          }
          /** @type {?} */


          var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
          return data.slice(startIndex, startIndex + this.paginator.pageSize);
        }
        /**
         * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
         * index does not exceed the paginator's last page. Values are changed in a resolved promise to
         * guard against making property changes within a round of change detection.
         * @param {?} filteredDataLength
         * @return {?}
         */

      }, {
        key: "_updatePaginator",
        value: function _updatePaginator(filteredDataLength) {
          var _this44 = this;

          Promise.resolve().then(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var paginator = _this44.paginator;

            if (!paginator) {
              return;
            }

            paginator.length = filteredDataLength; // If the page index is set beyond the page, reduce it to the last page.

            if (paginator.pageIndex > 0) {
              /** @type {?} */
              var lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
              /** @type {?} */

              var newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);

              if (newPageIndex !== paginator.pageIndex) {
                paginator.pageIndex = newPageIndex; // Since the paginator only emits after user-generated changes,
                // we need our own stream so we know to should re-render the data.

                _this44._internalPageChanges.next();
              }
            }
          });
        }
        /**
         * Used by the MatTable. Called when it connects to the data source.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "connect",
        value: function connect() {
          return this._renderData;
        }
        /**
         * Used by the MatTable. Called when it is destroyed. No-op.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "disconnect",
        value: function disconnect() {}
      }, {
        key: "data",
        get: function get() {
          return this._data.value;
        }
        /**
         * @param {?} data
         * @return {?}
         */
        ,
        set: function set(data) {
          this._data.next(data);
        }
        /**
         * Filter term that should be used to filter out objects from the data array. To override how
         * data objects match to this filter string, provide a custom function for filterPredicate.
         * @return {?}
         */

      }, {
        key: "filter",
        get: function get() {
          return this._filter.value;
        }
        /**
         * @param {?} filter
         * @return {?}
         */
        ,
        set: function set(filter) {
          this._filter.next(filter);
        }
        /**
         * Instance of the MatSort directive used by the table to control its sorting. Sort changes
         * emitted by the MatSort will trigger an update to the table's rendered data.
         * @return {?}
         */

      }, {
        key: "sort",
        get: function get() {
          return this._sort;
        }
        /**
         * @param {?} sort
         * @return {?}
         */
        ,
        set: function set(sort) {
          this._sort = sort;

          this._updateChangeSubscription();
        }
        /**
         * Instance of the MatPaginator component used by the table to control what page of the data is
         * displayed. Page changes emitted by the MatPaginator will trigger an update to the
         * table's rendered data.
         *
         * Note that the data source uses the paginator's properties to calculate which page of data
         * should be displayed. If the paginator receives its properties as template inputs,
         * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
         * initialized before assigning it to this data source.
         * @return {?}
         */

      }, {
        key: "paginator",
        get: function get() {
          return this._paginator;
        }
        /**
         * @param {?} paginator
         * @return {?}
         */
        ,
        set: function set(paginator) {
          this._paginator = paginator;

          this._updateChangeSubscription();
        }
      }]);

      return MatTableDataSource;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["DataSource"]);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=table.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/esm2015/toolbar.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/toolbar.js ***!
    \***********************************************************/

  /*! exports provided: MatToolbarModule, throwToolbarMixedModesError, MatToolbarRow, MatToolbar */

  /***/
  function node_modulesAngularMaterialEsm2015ToolbarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatToolbarModule", function () {
      return MatToolbarModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "throwToolbarMixedModesError", function () {
      return throwToolbarMixedModesError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatToolbarRow", function () {
      return MatToolbarRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatToolbar", function () {
      return MatToolbar;
    });
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatToolbar.

    /**
     * \@docs-private
     */


    var MatToolbarBase =
    /**
     * @param {?} _elementRef
     */
    function MatToolbarBase(_elementRef) {
      _classCallCheck(this, MatToolbarBase);

      this._elementRef = _elementRef;
    };
    /** @type {?} */


    var _MatToolbarMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinColor"])(MatToolbarBase);

    var MatToolbarRow = function MatToolbarRow() {
      _classCallCheck(this, MatToolbarRow);
    };

    MatToolbarRow.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: 'mat-toolbar-row',
        exportAs: 'matToolbarRow',
        host: {
          'class': 'mat-toolbar-row'
        }
      }]
    }];

    var MatToolbar = /*#__PURE__*/function (_MatToolbarMixinBase2) {
      _inherits(MatToolbar, _MatToolbarMixinBase2);

      var _super36 = _createSuper(MatToolbar);

      /**
       * @param {?} elementRef
       * @param {?} _platform
       * @param {?=} document
       */
      function MatToolbar(elementRef, _platform, document) {
        var _this45;

        _classCallCheck(this, MatToolbar);

        _this45 = _super36.call(this, elementRef);
        _this45._platform = _platform; // TODO: make the document a required param when doing breaking changes.

        _this45._document = document;
        return _this45;
      }
      /**
       * @return {?}
       */


      _createClass(MatToolbar, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this46 = this;

          if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])() || !this._platform.isBrowser) {
            return;
          }

          this._checkToolbarMixedModes();

          this._toolbarRows.changes.subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this46._checkToolbarMixedModes();
          });
        }
        /**
         * Throws an exception when developers are attempting to combine the different toolbar row modes.
         * @private
         * @return {?}
         */

      }, {
        key: "_checkToolbarMixedModes",
        value: function _checkToolbarMixedModes() {
          var _this47 = this;

          if (!this._toolbarRows.length) {
            return;
          } // Check if there are any other DOM nodes that can display content but aren't inside of
          // a <mat-toolbar-row> element.

          /** @type {?} */


          var isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            return !(node.classList && node.classList.contains('mat-toolbar-row'));
          }).filter(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            return node.nodeType !== (_this47._document ? _this47._document.COMMENT_NODE : 8);
          }).some(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            return !!(node.textContent && node.textContent.trim());
          });

          if (isCombinedUsage) {
            throwToolbarMixedModesError();
          }
        }
      }]);

      return MatToolbar;
    }(_MatToolbarMixinBase);

    MatToolbar.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
      args: [{
        selector: 'mat-toolbar',
        exportAs: 'matToolbar',
        template: "<ng-content></ng-content><ng-content select=\"mat-toolbar-row\"></ng-content>",
        styles: ["@media (-ms-high-contrast:active){.mat-toolbar{outline:solid 1px}}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media (max-width:599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}"],
        inputs: ['color'],
        host: {
          'class': 'mat-toolbar',
          '[class.mat-toolbar-multiple-rows]': '_toolbarRows.length > 0',
          '[class.mat-toolbar-single-row]': '_toolbarRows.length === 0'
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
      }]
    }];
    /** @nocollapse */

    MatToolbar.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };

    MatToolbar.propDecorators = {
      _toolbarRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
        args: [MatToolbarRow]
      }]
    };
    /**
     * Throws an exception when attempting to combine the different toolbar row modes.
     * \@docs-private
     * @return {?}
     */

    function throwToolbarMixedModesError() {
      throw Error('MatToolbar: Attempting to combine different toolbar modes. ' + 'Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content ' + 'inside of a `<mat-toolbar>` for a single row.');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatToolbarModule = function MatToolbarModule() {
      _classCallCheck(this, MatToolbarModule);
    };

    MatToolbarModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
      args: [{
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
        exports: [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
        declarations: [MatToolbar, MatToolbarRow]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=toolbar.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/tooltip.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/tooltip.js ***!
    \***********************************************************/

  /*! exports provided: MatTooltipModule, getMatTooltipInvalidPositionError, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY, SCROLL_THROTTLE_MS, TOOLTIP_PANEL_CLASS, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltip, TooltipComponent, matTooltipAnimations */

  /***/
  function node_modulesAngularMaterialEsm2015TooltipJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTooltipModule", function () {
      return MatTooltipModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatTooltipInvalidPositionError", function () {
      return getMatTooltipInvalidPositionError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY", function () {
      return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY", function () {
      return MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SCROLL_THROTTLE_MS", function () {
      return SCROLL_THROTTLE_MS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TOOLTIP_PANEL_CLASS", function () {
      return TOOLTIP_PANEL_CLASS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY", function () {
      return MAT_TOOLTIP_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
      return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS", function () {
      return MAT_TOOLTIP_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTooltip", function () {
      return MatTooltip;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipComponent", function () {
      return TooltipComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matTooltipAnimations", function () {
      return matTooltipAnimations;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by MatTooltip.
     * \@docs-private
     * @type {?}
     */


    var matTooltipAnimations = {
      /**
       * Animation that transitions a tooltip in and out.
       */
      tooltipState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('state', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('initial, void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'scale(0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'scale(0)',
        offset: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0.5,
        transform: 'scale(0.99)',
        offset: 0.5
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'scale(1)',
        offset: 1
      })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      })))])
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Time in ms to throttle repositioning after scroll events.
     * @type {?}
     */

    var SCROLL_THROTTLE_MS = 20;
    /**
     * CSS class that will be attached to the overlay panel.
     * @type {?}
     */

    var TOOLTIP_PANEL_CLASS = 'mat-tooltip-panel';
    /**
     * Creates an error to be thrown if the user supplied an invalid tooltip position.
     * \@docs-private
     * @param {?} position
     * @return {?}
     */

    function getMatTooltipInvalidPositionError(position) {
      return Error("Tooltip position \"".concat(position, "\" is invalid."));
    }
    /**
     * Injection token that determines the scroll handling while a tooltip is visible.
     * @type {?}
     */


    var MAT_TOOLTIP_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["InjectionToken"]('mat-tooltip-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition({
            scrollThrottle: SCROLL_THROTTLE_MS
          });
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
      provide: MAT_TOOLTIP_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]],
      useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
    };
    /**
     * Injection token to be used to override the default options for `matTooltip`.
     * @type {?}
     */

    var MAT_TOOLTIP_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["InjectionToken"]('mat-tooltip-default-options', {
      providedIn: 'root',
      factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
      return {
        showDelay: 0,
        hideDelay: 0,
        touchendHideDelay: 1500
      };
    }
    /**
     * Directive that attaches a material design tooltip to the host element. Animates the showing and
     * hiding of a tooltip provided position (defaults to below the element).
     *
     * https://material.io/design/components/tooltips.html
     */


    var MatTooltip = /*#__PURE__*/function () {
      /**
       * @param {?} _overlay
       * @param {?} _elementRef
       * @param {?} _scrollDispatcher
       * @param {?} _viewContainerRef
       * @param {?} _ngZone
       * @param {?} platform
       * @param {?} _ariaDescriber
       * @param {?} _focusMonitor
       * @param {?} scrollStrategy
       * @param {?} _dir
       * @param {?} _defaultOptions
       * @param {?=} hammerLoader
       */
      function MatTooltip(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions, hammerLoader) {
        var _this48 = this;

        _classCallCheck(this, MatTooltip);

        this._overlay = _overlay;
        this._elementRef = _elementRef;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewContainerRef = _viewContainerRef;
        this._ngZone = _ngZone;
        this._ariaDescriber = _ariaDescriber;
        this._focusMonitor = _focusMonitor;
        this._dir = _dir;
        this._defaultOptions = _defaultOptions;
        this._position = 'below';
        this._disabled = false;
        /**
         * The default delay in ms before showing the tooltip after show is called
         */

        this.showDelay = this._defaultOptions.showDelay;
        /**
         * The default delay in ms before hiding the tooltip after hide is called
         */

        this.hideDelay = this._defaultOptions.hideDelay;
        this._message = '';
        this._manualListeners = new Map();
        /**
         * Emits when the component is destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        this._scrollStrategy = scrollStrategy;
        /** @type {?} */

        var element = _elementRef.nativeElement;
        /** @type {?} */

        var hasGestures = typeof window === 'undefined' ||
        /** @type {?} */
        window.Hammer || hammerLoader; // The mouse events shouldn't be bound on mobile devices, because they can prevent the
        // first tap from firing its click event or can cause the tooltip to open for clicks.

        if (!platform.IOS && !platform.ANDROID) {
          this._manualListeners.set('mouseenter',
          /**
          * @return {?}
          */
          function () {
            return _this48.show();
          }).set('mouseleave',
          /**
          * @return {?}
          */
          function () {
            return _this48.hide();
          });
        } else if (!hasGestures) {
          // If Hammerjs isn't loaded, fall back to showing on `touchstart`, otherwise
          // there's no way for the user to trigger the tooltip on a touch device.
          this._manualListeners.set('touchstart',
          /**
          * @return {?}
          */
          function () {
            return _this48.show();
          });
        }

        this._manualListeners.forEach(
        /**
        * @param {?} listener
        * @param {?} event
        * @return {?}
        */
        function (listener, event) {
          return element.addEventListener(event, listener);
        });

        _focusMonitor.monitor(_elementRef).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(
        /**
        * @param {?} origin
        * @return {?}
        */
        function (origin) {
          // Note that the focus monitor runs outside the Angular zone.
          if (!origin) {
            _ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return _this48.hide(0);
            });
          } else if (origin === 'keyboard') {
            _ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return _this48.show();
            });
          }
        });

        if (_defaultOptions && _defaultOptions.position) {
          this.position = _defaultOptions.position;
        }
      }
      /**
       * Allows the user to define the position of the tooltip relative to the parent element
       * @return {?}
       */


      _createClass(MatTooltip, [{
        key: "ngOnInit",

        /**
         * Setup styling-specific things
         * @return {?}
         */
        value: function ngOnInit() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;
          /** @type {?} */

          var elementStyle =
          /** @type {?} */
          element.style;

          if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
            // When we bind a gesture event on an element (in this case `longpress`), HammerJS
            // will add some inline styles by default, including `user-select: none`. This is
            // problematic on iOS and in Safari, because it will prevent users from typing in inputs.
            // Since `user-select: none` is not needed for the `longpress` event and can cause unexpected
            // behavior for text fields, we always clear the `user-select` to avoid such issues.
            elementStyle.webkitUserSelect = elementStyle.userSelect = elementStyle.msUserSelect = '';
          } // Hammer applies `-webkit-user-drag: none` on all elements by default,
          // which breaks the native drag&drop. If the consumer explicitly made
          // the element draggable, clear the `-webkit-user-drag`.


          if (element.draggable && elementStyle.webkitUserDrag === 'none') {
            elementStyle.webkitUserDrag = '';
          }
        }
        /**
         * Dispose the tooltip when destroyed.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this49 = this;

          if (this._overlayRef) {
            this._overlayRef.dispose();

            this._tooltipInstance = null;
          } // Clean up the event listeners set in the constructor


          this._manualListeners.forEach(
          /**
          * @param {?} listener
          * @param {?} event
          * @return {?}
          */
          function (listener, event) {
            _this49._elementRef.nativeElement.removeEventListener(event, listener);
          });

          this._manualListeners.clear();

          this._destroyed.next();

          this._destroyed.complete();

          this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.message);

          this._focusMonitor.stopMonitoring(this._elementRef);
        }
        /**
         * Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input
         * @param {?=} delay
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          var _this50 = this;

          var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.showDelay;

          if (this.disabled || !this.message || this._isTooltipVisible() && !
          /** @type {?} */
          this._tooltipInstance._showTimeoutId && !
          /** @type {?} */
          this._tooltipInstance._hideTimeoutId) {
            return;
          }
          /** @type {?} */


          var overlayRef = this._createOverlay();

          this._detach();

          this._portal = this._portal || new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["ComponentPortal"](TooltipComponent, this._viewContainerRef);
          this._tooltipInstance = overlayRef.attach(this._portal).instance;

          this._tooltipInstance.afterHidden().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this50._detach();
          });

          this._setTooltipClass(this._tooltipClass);

          this._updateTooltipMessage();

          /** @type {?} */
          this._tooltipInstance.show(delay);
        }
        /**
         * Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input
         * @param {?=} delay
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.hideDelay;

          if (this._tooltipInstance) {
            this._tooltipInstance.hide(delay);
          }
        }
        /**
         * Shows/hides the tooltip
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          this._isTooltipVisible() ? this.hide() : this.show();
        }
        /**
         * Returns true if the tooltip is currently visible to the user
         * @return {?}
         */

      }, {
        key: "_isTooltipVisible",
        value: function _isTooltipVisible() {
          return !!this._tooltipInstance && this._tooltipInstance.isVisible();
        }
        /**
         * Handles the keydown events on the host element.
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(e) {
          if (this._isTooltipVisible() && e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["hasModifierKey"])(e)) {
            e.preventDefault();
            e.stopPropagation();
            this.hide(0);
          }
        }
        /**
         * Handles the touchend events on the host element.
         * @return {?}
         */

      }, {
        key: "_handleTouchend",
        value: function _handleTouchend() {
          this.hide(this._defaultOptions.touchendHideDelay);
        }
        /**
         * Create the overlay config and position strategy
         * @private
         * @return {?}
         */

      }, {
        key: "_createOverlay",
        value: function _createOverlay() {
          var _this51 = this;

          if (this._overlayRef) {
            return this._overlayRef;
          }
          /** @type {?} */


          var scrollableAncestors = this._scrollDispatcher.getAncestorScrollContainers(this._elementRef); // Create connected position strategy that listens for scroll events to reposition.

          /** @type {?} */


          var strategy = this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn('.mat-tooltip').withFlexibleDimensions(false).withViewportMargin(8).withScrollableContainers(scrollableAncestors);

          strategy.positionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @param {?} change
          * @return {?}
          */
          function (change) {
            if (_this51._tooltipInstance) {
              if (change.scrollableViewProperties.isOverlayClipped && _this51._tooltipInstance.isVisible()) {
                // After position changes occur and the overlay is clipped by
                // a parent scrollable then close the tooltip.
                _this51._ngZone.run(
                /**
                * @return {?}
                */
                function () {
                  return _this51.hide(0);
                });
              }
            }
          });
          this._overlayRef = this._overlay.create({
            direction: this._dir,
            positionStrategy: strategy,
            panelClass: TOOLTIP_PANEL_CLASS,
            scrollStrategy: this._scrollStrategy()
          });

          this._updatePosition();

          this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this51._detach();
          });

          return this._overlayRef;
        }
        /**
         * Detaches the currently-attached tooltip.
         * @private
         * @return {?}
         */

      }, {
        key: "_detach",
        value: function _detach() {
          if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
          }

          this._tooltipInstance = null;
        }
        /**
         * Updates the position of the current tooltip.
         * @private
         * @return {?}
         */

      }, {
        key: "_updatePosition",
        value: function _updatePosition() {
          /** @type {?} */
          var position =
          /** @type {?} */

          /** @type {?} */
          this._overlayRef.getConfig().positionStrategy;
          /** @type {?} */


          var origin = this._getOrigin();
          /** @type {?} */


          var overlay = this._getOverlayPosition();

          position.withPositions([Object.assign({}, origin.main, overlay.main), Object.assign({}, origin.fallback, overlay.fallback)]);
        }
        /**
         * Returns the origin position and a fallback position based on the user's position preference.
         * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
         * @return {?}
         */

      }, {
        key: "_getOrigin",
        value: function _getOrigin() {
          /** @type {?} */
          var isLtr = !this._dir || this._dir.value == 'ltr';
          /** @type {?} */

          var position = this.position;
          /** @type {?} */

          var originPosition;

          if (position == 'above' || position == 'below') {
            originPosition = {
              originX: 'center',
              originY: position == 'above' ? 'top' : 'bottom'
            };
          } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
            originPosition = {
              originX: 'start',
              originY: 'center'
            };
          } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
            originPosition = {
              originX: 'end',
              originY: 'center'
            };
          } else {
            throw getMatTooltipInvalidPositionError(position);
          }

          var _this$_invertPosition = this._invertPosition(originPosition.originX, originPosition.originY),
              x = _this$_invertPosition.x,
              y = _this$_invertPosition.y;

          return {
            main: originPosition,
            fallback: {
              originX: x,
              originY: y
            }
          };
        }
        /**
         * Returns the overlay position and a fallback position based on the user's preference
         * @return {?}
         */

      }, {
        key: "_getOverlayPosition",
        value: function _getOverlayPosition() {
          /** @type {?} */
          var isLtr = !this._dir || this._dir.value == 'ltr';
          /** @type {?} */

          var position = this.position;
          /** @type {?} */

          var overlayPosition;

          if (position == 'above') {
            overlayPosition = {
              overlayX: 'center',
              overlayY: 'bottom'
            };
          } else if (position == 'below') {
            overlayPosition = {
              overlayX: 'center',
              overlayY: 'top'
            };
          } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
            overlayPosition = {
              overlayX: 'end',
              overlayY: 'center'
            };
          } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
            overlayPosition = {
              overlayX: 'start',
              overlayY: 'center'
            };
          } else {
            throw getMatTooltipInvalidPositionError(position);
          }

          var _this$_invertPosition2 = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY),
              x = _this$_invertPosition2.x,
              y = _this$_invertPosition2.y;

          return {
            main: overlayPosition,
            fallback: {
              overlayX: x,
              overlayY: y
            }
          };
        }
        /**
         * Updates the tooltip message and repositions the overlay according to the new message length
         * @private
         * @return {?}
         */

      }, {
        key: "_updateTooltipMessage",
        value: function _updateTooltipMessage() {
          var _this52 = this;

          // Must wait for the message to be painted to the tooltip so that the overlay can properly
          // calculate the correct positioning based on the size of the text.
          if (this._tooltipInstance) {
            this._tooltipInstance.message = this.message;

            this._tooltipInstance._markForCheck();

            this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @return {?}
            */
            function () {
              if (_this52._tooltipInstance) {
                /** @type {?} */
                _this52._overlayRef.updatePosition();
              }
            });
          }
        }
        /**
         * Updates the tooltip class
         * @private
         * @param {?} tooltipClass
         * @return {?}
         */

      }, {
        key: "_setTooltipClass",
        value: function _setTooltipClass(tooltipClass) {
          if (this._tooltipInstance) {
            this._tooltipInstance.tooltipClass = tooltipClass;

            this._tooltipInstance._markForCheck();
          }
        }
        /**
         * Inverts an overlay position.
         * @private
         * @param {?} x
         * @param {?} y
         * @return {?}
         */

      }, {
        key: "_invertPosition",
        value: function _invertPosition(x, y) {
          if (this.position === 'above' || this.position === 'below') {
            if (y === 'top') {
              y = 'bottom';
            } else if (y === 'bottom') {
              y = 'top';
            }
          } else {
            if (x === 'end') {
              x = 'start';
            } else if (x === 'start') {
              x = 'end';
            }
          }

          return {
            x: x,
            y: y
          };
        }
      }, {
        key: "position",
        get: function get() {
          return this._position;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this._position) {
            this._position = value;

            if (this._overlayRef) {
              this._updatePosition();

              if (this._tooltipInstance) {
                /** @type {?} */
                this._tooltipInstance.show(0);
              }

              this._overlayRef.updatePosition();
            }
          }
        }
        /**
         * Disables the display of the tooltip.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); // If tooltip is disabled, hide immediately.

          if (this._disabled) {
            this.hide(0);
          }
        }
        /**
         * The message to be displayed in the tooltip
         * @return {?}
         */

      }, {
        key: "message",
        get: function get() {
          return this._message;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          var _this53 = this;

          this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message); // If the message is not a string (e.g. number), convert it to a string and trim it.


          this._message = value != null ? "".concat(value).trim() : '';

          if (!this._message && this._isTooltipVisible()) {
            this.hide(0);
          } else {
            this._updateTooltipMessage();

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              // The `AriaDescriber` has some functionality that avoids adding a description if it's the
              // same as the `aria-label` of an element, however we can't know whether the tooltip trigger
              // has a data-bound `aria-label` or when it'll be set for the first time. We can avoid the
              // issue by deferring the description by a tick so Angular has time to set the `aria-label`.
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                _this53._ariaDescriber.describe(_this53._elementRef.nativeElement, _this53.message);
              });
            });
          }
        }
        /**
         * Classes to be passed to the tooltip. Supports the same syntax as `ngClass`.
         * @return {?}
         */

      }, {
        key: "tooltipClass",
        get: function get() {
          return this._tooltipClass;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._tooltipClass = value;

          if (this._tooltipInstance) {
            this._setTooltipClass(this._tooltipClass);
          }
        }
      }]);

      return MatTooltip;
    }();

    MatTooltip.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Directive"],
      args: [{
        selector: '[matTooltip]',
        exportAs: 'matTooltip',
        host: {
          '(longpress)': 'show()',
          '(keydown)': '_handleKeydown($event)',
          '(touchend)': '_handleTouchend()'
        }
      }]
    }];
    /** @nocollapse */

    MatTooltip.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ElementRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollDispatcher"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Inject"],
          args: [MAT_TOOLTIP_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Inject"],
          args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Inject"],
          args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_LOADER"]]
        }]
      }];
    };

    MatTooltip.propDecorators = {
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
        args: ['matTooltipPosition']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
        args: ['matTooltipDisabled']
      }],
      showDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
        args: ['matTooltipShowDelay']
      }],
      hideDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
        args: ['matTooltipHideDelay']
      }],
      message: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
        args: ['matTooltip']
      }],
      tooltipClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"],
        args: ['matTooltipClass']
      }]
    };
    /**
     * Internal component that wraps the tooltip's content.
     * \@docs-private
     */

    var TooltipComponent = /*#__PURE__*/function () {
      /**
       * @param {?} _changeDetectorRef
       * @param {?} _breakpointObserver
       */
      function TooltipComponent(_changeDetectorRef, _breakpointObserver) {
        _classCallCheck(this, TooltipComponent);

        this._changeDetectorRef = _changeDetectorRef;
        this._breakpointObserver = _breakpointObserver;
        /**
         * Property watched by the animation framework to show or hide the tooltip
         */

        this._visibility = 'initial';
        /**
         * Whether interactions on the page should close the tooltip
         */

        this._closeOnInteraction = false;
        /**
         * Subject for notifying that the tooltip has been hidden from the view
         */

        this._onHide = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * Stream that emits whether the user has a handset-sized display.
         */

        this._isHandset = this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["Breakpoints"].Handset);
      }
      /**
       * Shows the tooltip with an animation originating from the provided origin
       * @param {?} delay Amount of milliseconds to the delay showing the tooltip.
       * @return {?}
       */


      _createClass(TooltipComponent, [{
        key: "show",
        value: function show(delay) {
          var _this54 = this;

          // Cancel the delayed hide if it is scheduled
          if (this._hideTimeoutId) {
            clearTimeout(this._hideTimeoutId);
            this._hideTimeoutId = null;
          } // Body interactions should cancel the tooltip if there is a delay in showing.


          this._closeOnInteraction = true;
          this._showTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this54._visibility = 'visible';
            _this54._showTimeoutId = null; // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways

            _this54._markForCheck();
          }, delay);
        }
        /**
         * Begins the animation to hide the tooltip after the provided delay in ms.
         * @param {?} delay Amount of milliseconds to delay showing the tooltip.
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide(delay) {
          var _this55 = this;

          // Cancel the delayed show if it is scheduled
          if (this._showTimeoutId) {
            clearTimeout(this._showTimeoutId);
            this._showTimeoutId = null;
          }

          this._hideTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this55._visibility = 'hidden';
            _this55._hideTimeoutId = null; // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways

            _this55._markForCheck();
          }, delay);
        }
        /**
         * Returns an observable that notifies when the tooltip has been hidden from view.
         * @return {?}
         */

      }, {
        key: "afterHidden",
        value: function afterHidden() {
          return this._onHide.asObservable();
        }
        /**
         * Whether the tooltip is being displayed.
         * @return {?}
         */

      }, {
        key: "isVisible",
        value: function isVisible() {
          return this._visibility === 'visible';
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._onHide.complete();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_animationStart",
        value: function _animationStart() {
          this._closeOnInteraction = false;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_animationDone",
        value: function _animationDone(event) {
          /** @type {?} */
          var toState =
          /** @type {?} */
          event.toState;

          if (toState === 'hidden' && !this.isVisible()) {
            this._onHide.next();
          }

          if (toState === 'visible' || toState === 'hidden') {
            this._closeOnInteraction = true;
          }
        }
        /**
         * Interactions on the HTML body should close the tooltip immediately as defined in the
         * material design spec.
         * https://material.io/design/components/tooltips.html#behavior
         * @return {?}
         */

      }, {
        key: "_handleBodyInteraction",
        value: function _handleBodyInteraction() {
          if (this._closeOnInteraction) {
            this.hide(0);
          }
        }
        /**
         * Marks that the tooltip needs to be checked in the next change detection run.
         * Mainly used for rendering the initial text before positioning a tooltip, which
         * can be problematic in components with OnPush change detection.
         * @return {?}
         */

      }, {
        key: "_markForCheck",
        value: function _markForCheck() {
          this._changeDetectorRef.markForCheck();
        }
      }]);

      return TooltipComponent;
    }();

    TooltipComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"],
      args: [{
        selector: 'mat-tooltip-component',
        template: "<div class=\"mat-tooltip\" [ngClass]=\"tooltipClass\" [class.mat-tooltip-handset]=\"(_isHandset | async)?.matches\" [@state]=\"_visibility\" (@state.start)=\"_animationStart()\" (@state.done)=\"_animationDone($event)\">{{message}}</div>",
        styles: [".mat-tooltip-panel{pointer-events:none!important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}@media (-ms-high-contrast:active){.mat-tooltip{outline:solid 1px}}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ChangeDetectionStrategy"].OnPush,
        animations: [matTooltipAnimations.tooltipState],
        host: {
          // Forces the element to have a layout in IE and Edge. This fixes issues where the element
          // won't be rendered if the animations are disabled or there is no web animations polyfill.
          '[style.zoom]': '_visibility === "visible" ? 1 : null',
          '(body:click)': 'this._handleBodyInteraction()',
          'aria-hidden': 'true'
        }
      }]
    }];
    /** @nocollapse */

    TooltipComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatTooltipModule = function MatTooltipModule() {
      _classCallCheck(this, MatTooltipModule);
    };

    MatTooltipModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"],
      args: [{
        imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatCommonModule"]],
        exports: [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatCommonModule"]],
        declarations: [MatTooltip, TooltipComponent],
        entryComponents: [TooltipComponent],
        providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, {
          provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_GESTURE_CONFIG"],
          useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["GestureConfig"]
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=tooltip.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/components/manutencao-usuario-admin/manutencao-usuario-admin.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/components/manutencao-usuario-admin/manutencao-usuario-admin.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentComponentsManutencaoUsuarioAdminManutencaoUsuarioAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-accordion *ngIf=\"isModoRelatorio\">\n  <mat-expansion-panel expanded>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        <mat-icon inline=\"true\">filter_alt\n        </mat-icon>\n        Filtros\n      </mat-panel-title>\n      <mat-panel-description>\n        Filtragem de dados\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <mat-label>Filtrar por usuarios: </mat-label>\n    <mat-select value=\"TODOS\" style=\"max-width: 100px\" (selectionChange)=\"filtrarAtivoInativo($event)\">\n      <mat-option value=\"ATIVOS\">\n        Ativos\n      </mat-option>\n      <mat-option value=\"INATIVOS\">\n        Inativos\n      </mat-option>\n      <mat-option value=\"TODOS\">\n        Todos\n      </mat-option>\n    </mat-select>\n  </mat-expansion-panel>\n</mat-accordion>\n<mat-card *ngIf=\"!isModoRelatorio\" class=\"info-usuario-container\">\n  <div style=\"display: flex; flex-direction: row\">\n    <h3>Usuários cadastrados no sistema</h3>\n    <div style=\"flex: 1\">\n    </div>\n    <div style=\"margin-top: 0.8%;\">\n      <button style=\"width: 100%;\" mat-raised-button routerLink=\"/manutencao-usuario/relatorio\">\n        Acessar Relatório\n        <mat-icon inline matPrefix>receipt_long</mat-icon>\n      </button>\n    </div>\n  </div>\n</mat-card>\n<mat-progress-bar *ngIf=\"isLoading\" mode=\"query\"></mat-progress-bar>\n<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Email</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"nome\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Nome</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.nome}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"perfil\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Perfil</th>\n    <td mat-cell *matCellDef=\"let element\">\n      <mat-select [value]=\"element.perfil\" [disabled]=\"isModoRelatorio\" style=\"max-width: 80%\"\n                  (selectionChange)=\"alterarPefil(element, $event)\">\n        <mat-option value=\"ADMINISTRADOR\">\n          ADMINISTRADOR\n        </mat-option>\n        <mat-option value=\"VISITANTE\">\n          VISITANTE\n        </mat-option>\n      </mat-select>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"ativo\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Ativo</th>\n    <td mat-cell *matCellDef=\"let element\">\n      <mat-checkbox color=\"primary\" [checked]=\"element.ativo\"\n                    [disabled]=\"isModoRelatorio\" (change)=\"alterarStatus(element, $event)\">\n\n      </mat-checkbox>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"telefone\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Telefonne</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.telefone}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"cep\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> CEP</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.cep}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n<mat-paginator class=\"mat-elevation-z8\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/usuario/manutencao-usuario/manutencao-usuario.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/usuario/manutencao-usuario/manutencao-usuario.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentPagesUsuarioManutencaoUsuarioManutencaoUsuarioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<h1>\n  Manutenção de Usuário\n</h1>\n<div class=\"info-usuario-container\">\n  <mat-accordion>\n    <mat-expansion-panel expanded=\"true\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Informações de cadastro\n        </mat-panel-title>\n        <mat-panel-description>\n          Visualização e edição de informações cadastradas no sistema.\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <app-info-usuario></app-info-usuario>\n    </mat-expansion-panel>\n  </mat-accordion>\n</div>\n<div class=\"info-usuario-container\" *ngIf=\"mostrarManutencaoAdmin\">\n  <app-manutencao-usuario-admin [isModoRelatorio]=\"false\"></app-manutencao-usuario-admin>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/usuario/relatorio/relatorio.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/usuario/relatorio/relatorio.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentPagesUsuarioRelatorioRelatorioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<h1>\n  Relatório\n</h1>\n<div class=\"container-relatorio\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>Quantidade de usuários</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <p>Quantidade total de Usuários: {{qtdTotalDeUsuarios}}</p>\n      <p *ngIf=\"qtdUsuariosFiltrados !== ''\">Quantidade de usuários {{qtdUsuariosFiltrados}}</p>\n    </mat-card-content>\n  </mat-card>\n</div>\n<div class=\"container-relatorio\">\n  <app-manutencao-usuario-admin\n    [isModoRelatorio]=\"true\"\n    (qtdTotalUsers)=\"onUsuariosTotal($event)\"\n    (qtdUsuariosFiltrados)=\"onUsuariosFiltrado($event)\"\n  ></app-manutencao-usuario-admin>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/header/header.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/header/header.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreLayoutHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\n  <button mat-icon-button routerLink=\"/manutencao-usuario\">\n    <mat-icon>home</mat-icon>\n  </button>\n  <span>Seleção Grupo Saga</span>\n  <span class=\"toolbar-spacer\"></span>\n  <button mat-icon-button aria-label=\"Logout\" (click)=\"sair()\" matTooltip=\"Sair\">\n    <mat-icon>exit_to_app</mat-icon>\n  </button>\n</mat-toolbar>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/info-usuario/info-usuario.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/info-usuario/info-usuario.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsInfoUsuarioInfoUsuarioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"form\" class=\"form-container-info-usuario\">\n  <div class=\"container-info-usuario\">\n    <mat-form-field class=\"form-field-info\">\n      <mat-label>Nome</mat-label>\n      <input matInput formControlName=\"nome\" required>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-field-info\">\n      <mat-label>Email</mat-label>\n      <input matInput formControlName=\"email\">\n    </mat-form-field>\n\n    <mat-form-field class=\"form-field-info\" required>\n      <mat-label>Pefil</mat-label>\n      <mat-select formControlName=\"perfil\">\n        <mat-option value=\"ADMINISTRADOR\">\n          ADMINISTRADOR\n        </mat-option>\n        <mat-option value=\"VISITANTE\">\n          VISITANTE\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-field-info\">\n      <mat-label>Telefone</mat-label>\n      <input matInput formControlName=\"telefone\" type=\"number\" maxlength=\"10\">\n    </mat-form-field>\n  </div>\n  <div class=\"container-info-usuario\">\n    <mat-form-field class=\"form-field-info\">\n      <mat-label>CEP</mat-label>\n      <input matInput formControlName=\"cep\" type=\"number\" size=\"8\">\n    </mat-form-field>\n\n    <mat-form-field class=\"form-field-info\">\n      <mat-label>Endereço</mat-label>\n      <input matInput formControlName=\"endereco\">\n    </mat-form-field>\n\n    <mat-form-field class=\"form-field-info\">\n      <mat-label>Senha</mat-label>\n      <input matInput formControlName=\"senha\" type=\"password\" maxlength=\"16\" required>\n    </mat-form-field>\n\n    <p class=\"form-field-info\">\n      <mat-checkbox color=\"primary\" formControlName=\"ativo\">Ativo</mat-checkbox>\n    </p>\n  </div>\n</form>\n<div class=\"center-button\">\n  <button style=\"width: 100%\" mat-raised-button color=\"primary\" [disabled]=\"form.invalid\" (click)=\"salvar()\">\n    Salvar Informações\n  </button>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/content/components/components.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/content/components/components.module.ts ***!
    \*********************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppContentComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _manutencao_usuario_admin_manutencao_usuario_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./manutencao-usuario-admin/manutencao-usuario-admin.component */
    "./src/app/content/components/manutencao-usuario-admin/manutencao-usuario-admin.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_manutencao_usuario_admin_manutencao_usuario_admin_component__WEBPACK_IMPORTED_MODULE_3__["ManutencaoUsuarioAdminComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]],
      schemas: [_manutencao_usuario_admin_manutencao_usuario_admin_component__WEBPACK_IMPORTED_MODULE_3__["ManutencaoUsuarioAdminComponent"]],
      exports: [_manutencao_usuario_admin_manutencao_usuario_admin_component__WEBPACK_IMPORTED_MODULE_3__["ManutencaoUsuarioAdminComponent"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/content/components/manutencao-usuario-admin/manutencao-usuario-admin.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/content/components/manutencao-usuario-admin/manutencao-usuario-admin.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContentComponentsManutencaoUsuarioAdminManutencaoUsuarioAdminComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhcGhhZWwvRG9jdW1lbnRvcy9QZXJzb25hbC9jaGFsbGVuZ2UtZnJvbnQtcGhhZWwvc3JjL2FwcC9jb250ZW50L2NvbXBvbmVudHMvbWFudXRlbmNhby11c3VhcmlvLWFkbWluL21hbnV0ZW5jYW8tdXN1YXJpby1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGVudC9jb21wb25lbnRzL21hbnV0ZW5jYW8tdXN1YXJpby1hZG1pbi9tYW51dGVuY2FvLXVzdWFyaW8tYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2NvbXBvbmVudHMvbWFudXRlbmNhby11c3VhcmlvLWFkbWluL21hbnV0ZW5jYW8tdXN1YXJpby1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/content/components/manutencao-usuario-admin/manutencao-usuario-admin.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/content/components/manutencao-usuario-admin/manutencao-usuario-admin.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: ManutencaoUsuarioAdminComponent */

  /***/
  function srcAppContentComponentsManutencaoUsuarioAdminManutencaoUsuarioAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManutencaoUsuarioAdminComponent", function () {
      return ManutencaoUsuarioAdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/usuario.service */
    "./src/app/content/services/usuario.service.ts");
    /* harmony import */


    var _core_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/services/message.service */
    "./src/app/core/services/message.service.ts");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../core/authentication/auth.service */
    "./src/app/core/authentication/auth.service.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");

    var ManutencaoUsuarioAdminComponent = /*#__PURE__*/function () {
      function ManutencaoUsuarioAdminComponent(authService, userService, messageService) {
        _classCallCheck(this, ManutencaoUsuarioAdminComponent);

        this.authService = authService;
        this.userService = userService;
        this.messageService = messageService;
        this.qtdTotalUsers = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.qtdUsuariosFiltrados = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isLoading = true;
        this.displayedColumns = ['id', 'nome', 'perfil', 'ativo', 'cep', 'telefone'];
      }

      _createClass(ManutencaoUsuarioAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.carregarUsuarios();
        }
      }, {
        key: "carregarUsuarios",
        value: function carregarUsuarios() {
          var _this56 = this;

          this.userService.list().subscribe(function (data) {
            if (_this56.isModoRelatorio) {
              _this56.usuarios = data;
            } else {
              _this56.usuarios = data.filter(function (u) {
                return u.email !== _this56.authService.getAuthUserEmail();
              });
            }

            _this56.qtdTotalUsers.emit(_this56.usuarios.length);

            _this56.setDataSource();
          });
        }
      }, {
        key: "setDataSource",
        value: function setDataSource() {
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.usuarios);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.isLoading = false;
        }
      }, {
        key: "alterarStatus",
        value: function alterarStatus(usuario, event) {
          var _this57 = this;

          usuario.ativo = event.checked;
          this.userService.update(usuario.id, this.handleUser(usuario)).subscribe(function (data) {
            _this57.messageService.showMessageSucessfull("O status do usu\xE1rio ".concat(usuario.nome, " foi alterado para ").concat(event.checked, "!"));
          }, function (error) {
            _this57.messageService.showMessageError("Erro ao alterar o status do usu\xE1rio ".concat(usuario.nome, "..."));
          });
        }
      }, {
        key: "alterarPefil",
        value: function alterarPefil(usuario, event) {
          var _this58 = this;

          usuario.perfil = event.value;
          this.userService.update(usuario.id, this.handleUser(usuario)).subscribe(function (data) {
            _this58.messageService.showMessageSucessfull("O status do usu\xE1rio ".concat(usuario.nome, " foi alterado para ").concat(event.checked, "!"));
          }, function (error) {
            _this58.messageService.showMessageError("Erro ao alterar o status do usu\xE1rio ".concat(usuario.nome, "..."));
          });
        }
      }, {
        key: "filtrarAtivoInativo",
        value: function filtrarAtivoInativo(event) {
          var _this59 = this;

          this.isLoading = true;
          this.userService.list().subscribe(function (users) {
            var usersFiltrados = [];

            if (_this59.isModoRelatorio) {
              usersFiltrados = users;
            } else {
              usersFiltrados = users.filter(function (u) {
                return u.email !== _this59.authService.getAuthUserEmail();
              });
            }

            switch (event.value) {
              case 'ATIVOS':
                _this59.usuarios = usersFiltrados.filter(function (u) {
                  return u.ativo === true;
                });

                _this59.setDataSource();

                _this59.qtdUsuariosFiltrados.emit(" ativos: ".concat(_this59.usuarios.length));

                break;

              case 'INATIVOS':
                _this59.usuarios = usersFiltrados.filter(function (u) {
                  return u.ativo === false;
                });

                _this59.qtdUsuariosFiltrados.emit(" inativos: ".concat(_this59.usuarios.length));

                _this59.setDataSource();

                break;

              default:
                _this59.usuarios = usersFiltrados;

                _this59.qtdUsuariosFiltrados.emit("");

                _this59.setDataSource();

                break;
            }

            _this59.isLoading = false;
          });
        }
      }, {
        key: "handleUser",
        value: function handleUser(valores) {
          return {
            perfil: valores.perfil,
            email: valores.email,
            nome: valores.nome,
            ativo: valores.ativo,
            senha: valores.senha,
            cep: valores.cep === undefined ? '' : valores.cep,
            endereco: valores.endereco === undefined ? '' : valores.endereco,
            telefone: valores.telefone === undefined ? '' : valores.telefone
          };
        }
      }]);

      return ManutencaoUsuarioAdminComponent;
    }();

    ManutencaoUsuarioAdminComponent.ctorParameters = function () {
      return [{
        type: _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
      }, {
        type: _core_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ManutencaoUsuarioAdminComponent.prototype, "qtdTotalUsers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ManutencaoUsuarioAdminComponent.prototype, "qtdUsuariosFiltrados", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], {
      "static": true
    })], ManutencaoUsuarioAdminComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
      "static": true
    })], ManutencaoUsuarioAdminComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ManutencaoUsuarioAdminComponent.prototype, "isModoRelatorio", void 0);
    ManutencaoUsuarioAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manutencao-usuario-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manutencao-usuario-admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/components/manutencao-usuario-admin/manutencao-usuario-admin.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manutencao-usuario-admin.component.scss */
      "./src/app/content/components/manutencao-usuario-admin/manutencao-usuario-admin.component.scss"))["default"]]
    })], ManutencaoUsuarioAdminComponent);
    /***/
  },

  /***/
  "./src/app/content/pages/usuario/manutencao-usuario/manutencao-usuario.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/content/pages/usuario/manutencao-usuario/manutencao-usuario.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContentPagesUsuarioManutencaoUsuarioManutencaoUsuarioComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".info-usuario-container {\n  margin-top: 2%;\n  display: flex;\n  justify-content: center;\n}\n\n.info-container {\n  flex-direction: column;\n}\n\nmat-accordion {\n  min-width: 80%;\n}\n\napp-manutencao-usuario-admin {\n  min-width: 80%;\n  margin-bottom: 3%;\n}\n\nh1 {\n  margin-top: 2%;\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhcGhhZWwvRG9jdW1lbnRvcy9QZXJzb25hbC9jaGFsbGVuZ2UtZnJvbnQtcGhhZWwvc3JjL2FwcC9jb250ZW50L3BhZ2VzL3VzdWFyaW8vbWFudXRlbmNhby11c3VhcmlvL21hbnV0ZW5jYW8tdXN1YXJpby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGVudC9wYWdlcy91c3VhcmlvL21hbnV0ZW5jYW8tdXN1YXJpby9tYW51dGVuY2FvLXVzdWFyaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvcGFnZXMvdXN1YXJpby9tYW51dGVuY2FvLXVzdWFyaW8vbWFudXRlbmNhby11c3VhcmlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8tdXN1YXJpby1jb250YWluZXJ7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmluZm8tY29udGFpbmVye1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5tYXQtYWNjb3JkaW9ue1xuICBtaW4td2lkdGg6IDgwJTtcbn1cblxuYXBwLW1hbnV0ZW5jYW8tdXN1YXJpby1hZG1pbntcbiAgbWluLXdpZHRoOiA4MCU7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufVxuXG5oMXtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4iLCIuaW5mby11c3VhcmlvLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmluZm8tY29udGFpbmVyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxubWF0LWFjY29yZGlvbiB7XG4gIG1pbi13aWR0aDogODAlO1xufVxuXG5hcHAtbWFudXRlbmNhby11c3VhcmlvLWFkbWluIHtcbiAgbWluLXdpZHRoOiA4MCU7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufVxuXG5oMSB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/content/pages/usuario/manutencao-usuario/manutencao-usuario.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/content/pages/usuario/manutencao-usuario/manutencao-usuario.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: ManutencaoUsuarioComponent */

  /***/
  function srcAppContentPagesUsuarioManutencaoUsuarioManutencaoUsuarioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManutencaoUsuarioComponent", function () {
      return ManutencaoUsuarioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../core/authentication/auth.service */
    "./src/app/core/authentication/auth.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _models_perfil_usuario_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../models/perfil-usuario.enum */
    "./src/app/content/models/perfil-usuario.enum.ts");

    var ManutencaoUsuarioComponent = /*#__PURE__*/function () {
      function ManutencaoUsuarioComponent(authService, dialog) {
        _classCallCheck(this, ManutencaoUsuarioComponent);

        this.authService = authService;
        this.dialog = dialog;
        this.mostrarManutencaoAdmin = false;
      }

      _createClass(ManutencaoUsuarioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.usuario = this.authService.getauthData();
          this.mostrarManutencaoAdmin = this.usuario.perfil.nome === _models_perfil_usuario_enum__WEBPACK_IMPORTED_MODULE_4__["PerfilUsuarioEnum"].ADMINISTRADOR;
        }
      }]);

      return ManutencaoUsuarioComponent;
    }();

    ManutencaoUsuarioComponent.ctorParameters = function () {
      return [{
        type: _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]
      }];
    };

    ManutencaoUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manutencao-usuario',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manutencao-usuario.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/usuario/manutencao-usuario/manutencao-usuario.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manutencao-usuario.component.scss */
      "./src/app/content/pages/usuario/manutencao-usuario/manutencao-usuario.component.scss"))["default"]]
    })], ManutencaoUsuarioComponent);
    /***/
  },

  /***/
  "./src/app/content/pages/usuario/relatorio/relatorio.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/content/pages/usuario/relatorio/relatorio.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContentPagesUsuarioRelatorioRelatorioComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  margin-top: 2%;\n  margin-left: 10%;\n}\n\n.container-relatorio {\n  display: flex;\n  justify-content: center;\n  margin-top: 2%;\n}\n\napp-manutencao-usuario-admin {\n  width: 80%;\n}\n\nmat-card {\n  width: 79%;\n  display: flex;\n  flex-direction: column;\n}\n\nmat-card mat-card-content {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhcGhhZWwvRG9jdW1lbnRvcy9QZXJzb25hbC9jaGFsbGVuZ2UtZnJvbnQtcGhhZWwvc3JjL2FwcC9jb250ZW50L3BhZ2VzL3VzdWFyaW8vcmVsYXRvcmlvL3JlbGF0b3Jpby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGVudC9wYWdlcy91c3VhcmlvL3JlbGF0b3Jpby9yZWxhdG9yaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7QUNFRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QURERTtFQUNFLGlCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L3BhZ2VzL3VzdWFyaW8vcmVsYXRvcmlvL3JlbGF0b3Jpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmNvbnRhaW5lci1yZWxhdG9yaW97XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cbmFwcC1tYW51dGVuY2FvLXVzdWFyaW8tYWRtaW57XG4gIHdpZHRoOiA4MCU7XG59XG5cbm1hdC1jYXJke1xuICB3aWR0aDogNzklO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXQtY2FyZC1jb250ZW50e1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG59XG4iLCJoMSB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4uY29udGFpbmVyLXJlbGF0b3JpbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuYXBwLW1hbnV0ZW5jYW8tdXN1YXJpby1hZG1pbiB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbm1hdC1jYXJkIHtcbiAgd2lkdGg6IDc5JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbm1hdC1jYXJkIG1hdC1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/content/pages/usuario/relatorio/relatorio.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/content/pages/usuario/relatorio/relatorio.component.ts ***!
    \************************************************************************/

  /*! exports provided: RelatorioComponent */

  /***/
  function srcAppContentPagesUsuarioRelatorioRelatorioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelatorioComponent", function () {
      return RelatorioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RelatorioComponent = /*#__PURE__*/function () {
      function RelatorioComponent() {
        _classCallCheck(this, RelatorioComponent);

        this.qtdTotalDeUsuarios = 0;
        this.qtdUsuariosFiltrados = '';
      }

      _createClass(RelatorioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onUsuariosTotal",
        value: function onUsuariosTotal(value) {
          this.qtdTotalDeUsuarios = value;
        }
      }, {
        key: "onUsuariosFiltrado",
        value: function onUsuariosFiltrado(value) {
          this.qtdUsuariosFiltrados = value;
        }
      }]);

      return RelatorioComponent;
    }();

    RelatorioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-relatorio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./relatorio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/pages/usuario/relatorio/relatorio.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./relatorio.component.scss */
      "./src/app/content/pages/usuario/relatorio/relatorio.component.scss"))["default"]]
    })], RelatorioComponent);
    /***/
  },

  /***/
  "./src/app/content/pages/usuario/usuario-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/content/pages/usuario/usuario-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: UsuarioRoutingModule */

  /***/
  function srcAppContentPagesUsuarioUsuarioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioRoutingModule", function () {
      return UsuarioRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./relatorio/relatorio.component */
    "./src/app/content/pages/usuario/relatorio/relatorio.component.ts");
    /* harmony import */


    var _manutencao_usuario_manutencao_usuario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./manutencao-usuario/manutencao-usuario.component */
    "./src/app/content/pages/usuario/manutencao-usuario/manutencao-usuario.component.ts");
    /* harmony import */


    var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../core/guards/auth.guard */
    "./src/app/core/guards/auth.guard.ts");
    /* harmony import */


    var _core_guards_relatorio_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../core/guards/relatorio.guard */
    "./src/app/core/guards/relatorio.guard.ts");

    var routes = [{
      path: '',
      component: _manutencao_usuario_manutencao_usuario_component__WEBPACK_IMPORTED_MODULE_4__["ManutencaoUsuarioComponent"]
    }, {
      path: 'relatorio',
      component: _relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_3__["RelatorioComponent"],
      canActivate: [_core_guards_relatorio_guard__WEBPACK_IMPORTED_MODULE_6__["RelatorioGuard"]],
      canActivateChild: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
      canLoad: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }];

    var UsuarioRoutingModule = function UsuarioRoutingModule() {
      _classCallCheck(this, UsuarioRoutingModule);
    };

    UsuarioRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UsuarioRoutingModule);
    /***/
  },

  /***/
  "./src/app/content/pages/usuario/usuario.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/content/pages/usuario/usuario.module.ts ***!
    \*********************************************************/

  /*! exports provided: UsuarioModule */

  /***/
  function srcAppContentPagesUsuarioUsuarioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioModule", function () {
      return UsuarioModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _usuario_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./usuario-routing.module */
    "./src/app/content/pages/usuario/usuario-routing.module.ts");
    /* harmony import */


    var _relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./relatorio/relatorio.component */
    "./src/app/content/pages/usuario/relatorio/relatorio.component.ts");
    /* harmony import */


    var _manutencao_usuario_manutencao_usuario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./manutencao-usuario/manutencao-usuario.component */
    "./src/app/content/pages/usuario/manutencao-usuario/manutencao-usuario.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/content/components/components.module.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");

    var UsuarioModule = function UsuarioModule() {
      _classCallCheck(this, UsuarioModule);
    };

    UsuarioModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_4__["RelatorioComponent"], _manutencao_usuario_manutencao_usuario_component__WEBPACK_IMPORTED_MODULE_5__["ManutencaoUsuarioComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _usuario_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsuarioRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"]]
    })], UsuarioModule);
    /***/
  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout/header/header.component */
    "./src/app/core/layout/header/header.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
      exports: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
      schemas: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
    })], CoreModule);
    /***/
  },

  /***/
  "./src/app/core/guards/relatorio.guard.ts":
  /*!************************************************!*\
    !*** ./src/app/core/guards/relatorio.guard.ts ***!
    \************************************************/

  /*! exports provided: RelatorioGuard */

  /***/
  function srcAppCoreGuardsRelatorioGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelatorioGuard", function () {
      return RelatorioGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../authentication/auth.service */
    "./src/app/core/authentication/auth.service.ts");
    /* harmony import */


    var _content_models_perfil_usuario_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../content/models/perfil-usuario.enum */
    "./src/app/content/models/perfil-usuario.enum.ts");

    var RelatorioGuard = /*#__PURE__*/function () {
      function RelatorioGuard(authService, router) {
        _classCallCheck(this, RelatorioGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(RelatorioGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          return this.isAutenticado();
        }
      }, {
        key: "isAutenticado",
        value: function isAutenticado() {
          if (this.authService.getauthData().perfil === _content_models_perfil_usuario_enum__WEBPACK_IMPORTED_MODULE_4__["PerfilUsuarioEnum"].ADMINISTRADOR && this.authService.isAuthenticated()) {
            return true;
          } else {
            this.router.navigate(['/manutencao-usuario']);
            return false;
          }
        }
      }]);

      return RelatorioGuard;
    }();

    RelatorioGuard.ctorParameters = function () {
      return [{
        type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    RelatorioGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RelatorioGuard);
    /***/
  },

  /***/
  "./src/app/core/layout/header/header.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/core/layout/header/header.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreLayoutHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".toolbar-spacer {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhcGhhZWwvRG9jdW1lbnRvcy9QZXJzb25hbC9jaGFsbGVuZ2UtZnJvbnQtcGhhZWwvc3JjL2FwcC9jb3JlL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuIiwiLnRvb2xiYXItc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/core/layout/header/header.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/layout/header/header.component.ts ***!
    \********************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppCoreLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../authentication/auth.service */
    "./src/app/core/authentication/auth.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(authService) {
        _classCallCheck(this, HeaderComponent);

        this.authService = authService;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sair",
        value: function sair() {
          this.authService.logout();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/core/layout/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/info-usuario/info-usuario.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/info-usuario/info-usuario.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsInfoUsuarioInfoUsuarioComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-container-info-usuario {\n  flex-direction: row;\n  display: flex;\n  justify-content: space-between;\n  align-content: space-between;\n}\n\n.container-info-usuario {\n  min-width: 50%;\n  display: flex;\n  justify-content: space-between;\n  align-content: space-between;\n  flex-direction: column;\n}\n\n.form-field-info {\n  max-width: 50%;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\n.center-button {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhcGhhZWwvRG9jdW1lbnRvcy9QZXJzb25hbC9jaGFsbGVuZ2UtZnJvbnQtcGhhZWwvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pbmZvLXVzdWFyaW8vaW5mby11c3VhcmlvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pbmZvLXVzdWFyaW8vaW5mby11c3VhcmlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2luZm8tdXN1YXJpby9pbmZvLXVzdWFyaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXItaW5mby11c3Vhcmlve1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb250YWluZXItaW5mby11c3VhcmlvIHtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mb3JtLWZpZWxkLWluZm97XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uY2VudGVyLWJ1dHRvbntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIuZm9ybS1jb250YWluZXItaW5mby11c3VhcmlvIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY29udGFpbmVyLWluZm8tdXN1YXJpbyB7XG4gIG1pbi13aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3JtLWZpZWxkLWluZm8ge1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmNlbnRlci1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/info-usuario/info-usuario.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/info-usuario/info-usuario.component.ts ***!
    \**************************************************************************/

  /*! exports provided: InfoUsuarioComponent */

  /***/
  function srcAppSharedComponentsInfoUsuarioInfoUsuarioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoUsuarioComponent", function () {
      return InfoUsuarioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/authentication/auth.service */
    "./src/app/core/authentication/auth.service.ts");
    /* harmony import */


    var _content_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../content/services/usuario.service */
    "./src/app/content/services/usuario.service.ts");
    /* harmony import */


    var _core_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../core/services/message.service */
    "./src/app/core/services/message.service.ts");
    /* harmony import */


    var _content_models_perfil_usuario_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../content/models/perfil-usuario.enum */
    "./src/app/content/models/perfil-usuario.enum.ts");

    var InfoUsuarioComponent = /*#__PURE__*/function () {
      function InfoUsuarioComponent(authService, formBuilder, usuarioService, messageService) {
        var _this60 = this;

        _classCallCheck(this, InfoUsuarioComponent);

        this.authService = authService;
        this.formBuilder = formBuilder;
        this.usuarioService = usuarioService;
        this.messageService = messageService;
        this.usuarioService.list().subscribe(function (users) {
          _this60.usuarios = users;
        });
      }

      _createClass(InfoUsuarioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.usuario = this.authService.getauthData();
          this.form = this.formBuilder.group({
            nome: [this.usuario.nome, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            email: [{
              value: this.usuario.email,
              disabled: true
            }],
            senha: [this.usuario.senha, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            perfil: [{
              value: this.usuario.perfil,
              disabled: this.usuario.perfil.nome === _content_models_perfil_usuario_enum__WEBPACK_IMPORTED_MODULE_6__["PerfilUsuarioEnum"].VISITANTE
            }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ativo: [this.usuario.ativo, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            telefone: [this.usuario.telefone, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)])],
            cep: [this.usuario.cep, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8)])],
            endereco: [this.usuario.endereco, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)])]
          });
        }
      }, {
        key: "salvar",
        value: function salvar() {
          var _this61 = this;

          this.usuarioService.list().subscribe(function (usuarios) {
            var users = usuarios.filter(function (user) {
              return user.perfil.nome === _content_models_perfil_usuario_enum__WEBPACK_IMPORTED_MODULE_6__["PerfilUsuarioEnum"].ADMINISTRADOR && user.ativo === true;
            });

            if (users.length <= 1 && _this61.usuario.perfil.nome === _content_models_perfil_usuario_enum__WEBPACK_IMPORTED_MODULE_6__["PerfilUsuarioEnum"].ADMINISTRADOR && (_this61.form.value.perfil === _content_models_perfil_usuario_enum__WEBPACK_IMPORTED_MODULE_6__["PerfilUsuarioEnum"].VISITANTE || _this61.form.value.ativo === false)) {
              _this61.messageService.showMessageInfo('Impossível salvar as alterações, pois deve haver ao menos um administrador.');
            } else {
              var user = _this61.getInformacoes(_this61.form.value);

              _this61.usuarioService.update(user.email, user).subscribe(function (data) {
                _this61.authService.updateInfo(user);

                _this61.messageService.showMessageSucessfull('Dados alterados com sucesso!');
              }, function (error) {
                _this61.messageService.showMessageError('Erro ao atualizar as informações...');
              });
            }
          });
        }
      }, {
        key: "getInformacoes",
        value: function getInformacoes(formValues) {
          return {
            perfil: formValues.perfil === undefined ? this.usuario.perfil : formValues.perfil,
            email: this.usuario.email,
            nome: formValues.nome,
            ativo: formValues.ativo,
            senha: formValues.senha,
            cep: formValues.cep,
            endereco: formValues.endereco,
            telefone: formValues.telefone
          };
        }
      }]);

      return InfoUsuarioComponent;
    }();

    InfoUsuarioComponent.ctorParameters = function () {
      return [{
        type: _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _content_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
      }, {
        type: _core_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]
      }];
    };

    InfoUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-info-usuario',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./info-usuario.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/info-usuario/info-usuario.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./info-usuario.component.scss */
      "./src/app/shared/components/info-usuario/info-usuario.component.scss"))["default"]]
    })], InfoUsuarioComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _components_info_usuario_info_usuario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/info-usuario/info-usuario.component */
    "./src/app/shared/components/info-usuario/info-usuario.component.ts");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_info_usuario_info_usuario_component__WEBPACK_IMPORTED_MODULE_3__["InfoUsuarioComponent"]],
      entryComponents: [_components_info_usuario_info_usuario_component__WEBPACK_IMPORTED_MODULE_3__["InfoUsuarioComponent"]],
      exports: [_components_info_usuario_info_usuario_component__WEBPACK_IMPORTED_MODULE_3__["InfoUsuarioComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"]]
    })], SharedModule);
    /***/
  }
}]);
//# sourceMappingURL=content-pages-usuario-usuario-module-es5.js.map