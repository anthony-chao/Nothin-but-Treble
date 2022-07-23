/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/bars.js":
/*!*****************************!*\
  !*** ./src/classes/bars.js ***!
  \*****************************/
/***/ (function(module) {

eval("class Bars {\n  constructor() {\n    this.bars = Bars.makeBars();\n  }\n\n  isEmptyPos(pos) {\n    if (!Bars.isValidPos(pos)) {\n      // I'm not sure if we need this functionality - it'll just drop if it's not a valid position (like delete the note)\n      throw new MoveError('Is not valid position on the music sheet!');\n    }\n\n    return this.bars[pos[0]][pos[1][pos[2]]] === null;\n  }\n\n  placeNote(pos, note) {\n    if (!this.isEmptyPos(pos)) {\n      throw new MoveError('There is already a note on this beat!');\n    }\n\n    this.bars[pos[0]][pos[1][pos[2]]] = note;\n  }\n\n  static isValidPos(pos) {\n    return 0 <= pos[0] && pos[0] < 3 && 0 <= pos[1] && pos[1] < 4 && 0 <= pos[2] && pos[1] < 13;\n  }\n\n  static makeBars() {\n    const bars = [];\n\n    for (let i = 0; i < 3; i++) {\n      let bar = [];\n\n      for (let y = 0; y < 4; y++) {\n        let beat = [];\n\n        for (let z = 0; z < 13; z++) {\n          beat.push(null);\n        }\n\n        bar.push(beat);\n      }\n\n      bars.push(bar);\n    }\n\n    return bars;\n  }\n\n}\n\nmodule.exports = Bars;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xhc3Nlcy9iYXJzLmpzLmpzIiwibmFtZXMiOlsiQmFycyIsImNvbnN0cnVjdG9yIiwiYmFycyIsIm1ha2VCYXJzIiwiaXNFbXB0eVBvcyIsInBvcyIsImlzVmFsaWRQb3MiLCJNb3ZlRXJyb3IiLCJwbGFjZU5vdGUiLCJub3RlIiwiaSIsImJhciIsInkiLCJiZWF0IiwieiIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVibGUtc2hlZXQvLi9zcmMvY2xhc3Nlcy9iYXJzLmpzPzQ3NGQiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLmJhcnMgPSBCYXJzLm1ha2VCYXJzKCk7XG4gICAgfVxuXG4gICAgaXNFbXB0eVBvcyhwb3MpIHtcbiAgICAgIGlmICghQmFycy5pc1ZhbGlkUG9zKHBvcykpIHsgICAgICAgIC8vIEknbSBub3Qgc3VyZSBpZiB3ZSBuZWVkIHRoaXMgZnVuY3Rpb25hbGl0eSAtIGl0J2xsIGp1c3QgZHJvcCBpZiBpdCdzIG5vdCBhIHZhbGlkIHBvc2l0aW9uIChsaWtlIGRlbGV0ZSB0aGUgbm90ZSlcbiAgICAgICAgdGhyb3cgbmV3IE1vdmVFcnJvcignSXMgbm90IHZhbGlkIHBvc2l0aW9uIG9uIHRoZSBtdXNpYyBzaGVldCEnKTtcbiAgICAgIH1cbiAgXG4gICAgICByZXR1cm4gKHRoaXMuYmFyc1twb3NbMF1dW3Bvc1sxXVtwb3NbMl1dXSA9PT0gbnVsbCk7XG4gICAgfVxuXG4gICAgcGxhY2VOb3RlKHBvcywgbm90ZSkge1xuICAgICAgaWYgKCF0aGlzLmlzRW1wdHlQb3MocG9zKSkge1xuICAgICAgICB0aHJvdyBuZXcgTW92ZUVycm9yKCdUaGVyZSBpcyBhbHJlYWR5IGEgbm90ZSBvbiB0aGlzIGJlYXQhJyk7XG4gICAgICB9XG4gIFxuICAgICAgdGhpcy5iYXJzW3Bvc1swXV1bcG9zWzFdW3Bvc1syXV1dID0gbm90ZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNWYWxpZFBvcyhwb3MpIHtcbiAgICAgICAgcmV0dXJuICgwIDw9IHBvc1swXSkgJiZcbiAgICAgICAgKHBvc1swXSA8IDMpICYmXG4gICAgICAgICgwIDw9IHBvc1sxXSkgJiZcbiAgICAgICAgKHBvc1sxXSA8IDQpICYmXG4gICAgICAgICgwIDw9IHBvc1syXSkgJiZcbiAgICAgICAgKHBvc1sxXSA8IDEzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWFrZUJhcnMoKSB7XG4gICAgICAgIGNvbnN0IGJhcnMgPSBbXTtcbiAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBiYXIgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDQ7IHkrKykge1xuICAgICAgICAgICAgbGV0IGJlYXQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgMTM7IHorKykge1xuICAgICAgICAgICAgICAgIGJlYXQucHVzaChudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJhci5wdXNoKGJlYXQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGJhcnMucHVzaChiYXIpXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIGJhcnM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhcnM7Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxJQUFOLENBQVc7RUFDUEMsV0FBVyxHQUFHO0lBQ1osS0FBS0MsSUFBTCxHQUFZRixJQUFJLENBQUNHLFFBQUwsRUFBWjtFQUNEOztFQUVEQyxVQUFVLENBQUNDLEdBQUQsRUFBTTtJQUNkLElBQUksQ0FBQ0wsSUFBSSxDQUFDTSxVQUFMLENBQWdCRCxHQUFoQixDQUFMLEVBQTJCO01BQVM7TUFDbEMsTUFBTSxJQUFJRSxTQUFKLENBQWMsMkNBQWQsQ0FBTjtJQUNEOztJQUVELE9BQVEsS0FBS0wsSUFBTCxDQUFVRyxHQUFHLENBQUMsQ0FBRCxDQUFiLEVBQWtCQSxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9BLEdBQUcsQ0FBQyxDQUFELENBQVYsQ0FBbEIsTUFBc0MsSUFBOUM7RUFDRDs7RUFFREcsU0FBUyxDQUFDSCxHQUFELEVBQU1JLElBQU4sRUFBWTtJQUNuQixJQUFJLENBQUMsS0FBS0wsVUFBTCxDQUFnQkMsR0FBaEIsQ0FBTCxFQUEyQjtNQUN6QixNQUFNLElBQUlFLFNBQUosQ0FBYyx1Q0FBZCxDQUFOO0lBQ0Q7O0lBRUQsS0FBS0wsSUFBTCxDQUFVRyxHQUFHLENBQUMsQ0FBRCxDQUFiLEVBQWtCQSxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9BLEdBQUcsQ0FBQyxDQUFELENBQVYsQ0FBbEIsSUFBb0NJLElBQXBDO0VBQ0Q7O0VBRWdCLE9BQVZILFVBQVUsQ0FBQ0QsR0FBRCxFQUFNO0lBQ25CLE9BQVEsS0FBS0EsR0FBRyxDQUFDLENBQUQsQ0FBVCxJQUNOQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FESCxJQUVOLEtBQUtBLEdBQUcsQ0FBQyxDQUFELENBRkYsSUFHTkEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLENBSEgsSUFJTixLQUFLQSxHQUFHLENBQUMsQ0FBRCxDQUpGLElBS05BLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxFQUxWO0VBTUg7O0VBRWMsT0FBUkYsUUFBUSxHQUFHO0lBQ2QsTUFBTUQsSUFBSSxHQUFHLEVBQWI7O0lBRUEsS0FBSyxJQUFJUSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO01BQ3hCLElBQUlDLEdBQUcsR0FBRyxFQUFWOztNQUNGLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtRQUMxQixJQUFJQyxJQUFJLEdBQUcsRUFBWDs7UUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7VUFDekJELElBQUksQ0FBQ0UsSUFBTCxDQUFVLElBQVY7UUFDSDs7UUFDREosR0FBRyxDQUFDSSxJQUFKLENBQVNGLElBQVQ7TUFDRDs7TUFDRFgsSUFBSSxDQUFDYSxJQUFMLENBQVVKLEdBQVY7SUFDRDs7SUFFRCxPQUFPVCxJQUFQO0VBQ0g7O0FBOUNNOztBQWlEWGMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCakIsSUFBakIifQ==\n//# sourceURL=webpack-internal:///./src/classes/bars.js\n");

/***/ }),

/***/ "./src/classes/view.js":
/*!*****************************!*\
  !*** ./src/classes/view.js ***!
  \*****************************/
/***/ (function(module) {

eval("class View {\n  constructor(game, el) {\n    this.game = game;\n    this.el = el;\n    this.setupSheet();\n  }\n\n  setupSheet() {\n    const bar = document.createElement(\"ul\");\n\n    for (let column = 0; column < 4; column++) {\n      for (let row = 0; row < 13; row++) {\n        const beat = document.createElement(\"li\");\n        beat.dataset.pos = JSON.stringify([column, row]);\n        bar.append(beat);\n\n        if (row % 2 === 0) {\n          beat.classList.add(\"even-row\");\n        } else {\n          beat.classList.add(\"odd-row\");\n        }\n      }\n    }\n\n    this.el.append(bar);\n  }\n\n}\n\nmodule.exports = View;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xhc3Nlcy92aWV3LmpzLmpzIiwibmFtZXMiOlsiVmlldyIsImNvbnN0cnVjdG9yIiwiZ2FtZSIsImVsIiwic2V0dXBTaGVldCIsImJhciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbHVtbiIsInJvdyIsImJlYXQiLCJkYXRhc2V0IiwicG9zIiwiSlNPTiIsInN0cmluZ2lmeSIsImFwcGVuZCIsImNsYXNzTGlzdCIsImFkZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3RyZWJsZS1zaGVldC8uL3NyYy9jbGFzc2VzL3ZpZXcuanM/OTQ5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCBlbCkge1xuICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICAgIHRoaXMuc2V0dXBTaGVldCgpXG4gICAgfVxuICAgIFxuICAgIHNldHVwU2hlZXQoKSB7XG4gICAgICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIFxuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgNDsgY29sdW1uKyspIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTM7IHJvdysrKSB7XG4gICAgICAgICAgY29uc3QgYmVhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICBiZWF0LmRhdGFzZXQucG9zID0gSlNPTi5zdHJpbmdpZnkoW2NvbHVtbiwgcm93XSlcbiAgICAgICAgICBiYXIuYXBwZW5kKGJlYXQpO1xuICAgICAgICAgIGlmIChyb3cgJSAyID09PSAwKSB7XG4gICAgICAgICAgICBiZWF0LmNsYXNzTGlzdC5hZGQoXCJldmVuLXJvd1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBiZWF0LmNsYXNzTGlzdC5hZGQoXCJvZGQtcm93XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIHRoaXMuZWwuYXBwZW5kKGJhcik7XG4gIFxuICAgIH1cbiAgfVxuICBcbiAgbW9kdWxlLmV4cG9ydHMgPSBWaWV3OyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsSUFBTixDQUFXO0VBQ1BDLFdBQVcsQ0FBQ0MsSUFBRCxFQUFPQyxFQUFQLEVBQVc7SUFDcEIsS0FBS0QsSUFBTCxHQUFZQSxJQUFaO0lBQ0EsS0FBS0MsRUFBTCxHQUFVQSxFQUFWO0lBQ0EsS0FBS0MsVUFBTDtFQUNEOztFQUVEQSxVQUFVLEdBQUc7SUFDWCxNQUFNQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFaOztJQUVBLEtBQUssSUFBSUMsTUFBTSxHQUFHLENBQWxCLEVBQXFCQSxNQUFNLEdBQUcsQ0FBOUIsRUFBaUNBLE1BQU0sRUFBdkMsRUFBMkM7TUFDekMsS0FBSyxJQUFJQyxHQUFHLEdBQUcsQ0FBZixFQUFrQkEsR0FBRyxHQUFHLEVBQXhCLEVBQTRCQSxHQUFHLEVBQS9CLEVBQW1DO1FBQ2pDLE1BQU1DLElBQUksR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWI7UUFDQUcsSUFBSSxDQUFDQyxPQUFMLENBQWFDLEdBQWIsR0FBbUJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlLENBQUNOLE1BQUQsRUFBU0MsR0FBVCxDQUFmLENBQW5CO1FBQ0FKLEdBQUcsQ0FBQ1UsTUFBSixDQUFXTCxJQUFYOztRQUNBLElBQUlELEdBQUcsR0FBRyxDQUFOLEtBQVksQ0FBaEIsRUFBbUI7VUFDakJDLElBQUksQ0FBQ00sU0FBTCxDQUFlQyxHQUFmLENBQW1CLFVBQW5CO1FBQ0QsQ0FGRCxNQUdLO1VBQ0hQLElBQUksQ0FBQ00sU0FBTCxDQUFlQyxHQUFmLENBQW1CLFNBQW5CO1FBQ0Q7TUFDRjtJQUNGOztJQUVELEtBQUtkLEVBQUwsQ0FBUVksTUFBUixDQUFlVixHQUFmO0VBRUQ7O0FBMUJNOztBQTZCVGEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbkIsSUFBakIifQ==\n//# sourceURL=webpack-internal:///./src/classes/view.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const Bars = __webpack_require__(/*! ./classes/bars.js */ \"./src/classes/bars.js\");\n\nconst View = __webpack_require__(/*! ./classes/view.js */ \"./src/classes/view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const bars = new Bars();\n  const rootEl = document.querySelector(\".MusicSheet\");\n  new View(bars, rootEl);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLGdEQUFELENBQXBCOztBQUNBLE1BQU1DLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxnREFBRCxDQUFwQjs7QUFFQUUsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsTUFBTTtFQUVsRCxNQUFNQyxJQUFJLEdBQUcsSUFBSUwsSUFBSixFQUFiO0VBQ0EsTUFBTU0sTUFBTSxHQUFHSCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBZjtFQUNBLElBQUlMLElBQUosQ0FBU0csSUFBVCxFQUFlQyxNQUFmO0FBRUQsQ0FORCIsInNvdXJjZXMiOlsid2VicGFjazovL3RyZWJsZS1zaGVldC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJhcnMgPSByZXF1aXJlKFwiLi9jbGFzc2VzL2JhcnMuanNcIik7XG5jb25zdCBWaWV3ID0gcmVxdWlyZShcIi4vY2xhc3Nlcy92aWV3LmpzXCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbiAgY29uc3QgYmFycyA9IG5ldyBCYXJzKCk7XG4gIGNvbnN0IHJvb3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuTXVzaWNTaGVldFwiKTtcbiAgbmV3IFZpZXcoYmFycywgcm9vdEVsKTtcblxufSk7Il0sIm5hbWVzIjpbIkJhcnMiLCJyZXF1aXJlIiwiVmlldyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJhcnMiLCJyb290RWwiLCJxdWVyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVibGUtc2hlZXQvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;