System.register(["jimu-core/emotion","jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-arcgis"
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ },

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/save-route/src/runtime/widget.tsx ***!
  \*******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const { useState } = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React;
// Your layer URLs
const ROUTE_LAYER_URL = 'https://services8.arcgis.com/vU0VLgUKq26SeM2d/arcgis/rest/services/Surview_Routes/FeatureServer/0';
const POINTS_LAYER_URL = 'https://services8.arcgis.com/vU0VLgUKq26SeM2d/arcgis/rest/services/IntegrityManagementMasterSheet/FeatureServer/0';
const POINT_ID_FIELD = 'Client_tracking__';
const Widget = (props) => {
    const [status, setStatus] = useState('');
    const [saving, setSaving] = useState(false);
    const handleSaveRoute = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        setSaving(true);
        setStatus('Reading route...');
        try {
            const [FeatureLayer, Graphic] = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.loadArcGISJSAPIModules)([
                'esri/layers/FeatureLayer',
                'esri/Graphic'
            ]);
            // --- Step 1: Get the Directions widget route result from the map ---
            // The Directions widget stores its result on the map view
            const jimuMapView = props.jimuMapView;
            if (!jimuMapView) {
                setStatus('❌ No map view found. Connect this widget to a map.');
                setSaving(false);
                return;
            }
            const mapView = jimuMapView.view;
            const directionsWidget = (_b = (_a = mapView.ui._components) === null || _a === void 0 ? void 0 : _a.find((c) => { var _a; return ((_a = c === null || c === void 0 ? void 0 : c.widget) === null || _a === void 0 ? void 0 : _a.declaredClass) === 'esri.widgets.Directions'; })) === null || _b === void 0 ? void 0 : _b.widget;
            if (!directionsWidget || !directionsWidget.routeServiceArea) {
                setStatus('❌ No route found. Please calculate a route first.');
                setSaving(false);
                return;
            }
            const routeResult = (_c = directionsWidget.viewModel) === null || _c === void 0 ? void 0 : _c.routeResult;
            if (!routeResult) {
                setStatus('❌ Route result not available. Please solve the route first.');
                setSaving(false);
                return;
            }
            // --- Step 2: Get optimized stops in order ---
            setStatus('Reading stops...');
            const stops = ((_e = (_d = routeResult.routeResults) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.stops) || [];
            const sortedStops = [...stops].sort((a, b) => a.attributes.Sequence - b.attributes.Sequence);
            // --- Step 3: Match stop names/geometry to your point layer ---
            setStatus('Matching point IDs...');
            const pointsLayer = new FeatureLayer({ url: POINTS_LAYER_URL });
            const pointQuery = pointsLayer.createQuery();
            pointQuery.returnGeometry = true;
            pointQuery.outFields = [POINT_ID_FIELD, 'OBJECTID'];
            const pointResults = yield pointsLayer.queryFeatures(pointQuery);
            // Build ordered stop list matched to Client_tracking__ field
            const orderedStops = sortedStops.map((stop, index) => {
                // Match by stop name or geometry proximity to your point features
                const matchedPoint = pointResults.features.find((f) => f.attributes[POINT_ID_FIELD] === stop.attributes.Name ||
                    f.attributes[POINT_ID_FIELD] === stop.attributes[POINT_ID_FIELD]);
                return {
                    seq: index + 1,
                    id: (matchedPoint === null || matchedPoint === void 0 ? void 0 : matchedPoint.attributes[POINT_ID_FIELD]) || stop.attributes.Name || `Stop ${index + 1}`
                };
            });
            const stopOrderJSON = JSON.stringify(orderedStops);
            // --- Step 4: Save route line to Surview_Routes layer ---
            setStatus('Saving route to layer...');
            const routeGeometry = (_h = (_g = (_f = routeResult.routeResults) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.route) === null || _h === void 0 ? void 0 : _h.geometry;
            if (!routeGeometry) {
                setStatus('❌ Could not read route geometry.');
                setSaving(false);
                return;
            }
            const routeLayer = new FeatureLayer({ url: ROUTE_LAYER_URL });
            // First clear any existing routes (optional — remove these lines to keep history)
            const existingQuery = routeLayer.createQuery();
            existingQuery.where = '1=1';
            existingQuery.returnGeometry = false;
            existingQuery.outFields = ['OBJECTID'];
            const existing = yield routeLayer.queryFeatures(existingQuery);
            if (existing.features.length > 0) {
                yield routeLayer.applyEdits({ deleteFeatures: existing.features });
            }
            // Add new route feature
            const routeFeature = new Graphic({
                geometry: routeGeometry,
                attributes: {
                    RouteName: `Route ${new Date().toLocaleDateString()}`,
                    CreatedDate: Date.now(),
                    StopOrder: stopOrderJSON
                }
            });
            yield routeLayer.applyEdits({ addFeatures: [routeFeature] });
            // --- Step 5: Trigger CSV download of ordered stops ---
            setStatus('Generating CSV...');
            const csvRows = ['Stop Order,Client Tracking ID'];
            orderedStops.forEach((s) => {
                csvRows.push(`${s.seq},${s.id}`);
            });
            const csvContent = csvRows.join('\n');
            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `route_stops_${new Date().toISOString().slice(0, 10)}.csv`;
            a.click();
            URL.revokeObjectURL(url);
            setStatus(`✅ Route saved! ${orderedStops.length} stops exported.`);
        }
        catch (err) {
            console.error('Save Route error:', err);
            setStatus(`❌ Error: ${err.message}`);
        }
        finally {
            setSaving(false);
        }
    });
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { padding: '10px', fontFamily: 'sans-serif' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: handleSaveRoute, disabled: saving, style: {
                    backgroundColor: saving ? '#aaa' : '#0079c1',
                    color: 'white',
                    border: 'none',
                    padding: '10px 16px',
                    borderRadius: '4px',
                    cursor: saving ? 'not-allowed' : 'pointer',
                    width: '100%',
                    fontSize: '14px'
                }, children: saving ? 'Saving...' : '💾 Save Route to Field Map' }), status && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { style: { marginTop: '8px', fontSize: '12px', color: '#333' }, children: status }))] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zYXZlLXJvdXRlL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHdFOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKRjtBQUNHO0FBRXBELE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyw0Q0FBSztBQUUxQixrQkFBa0I7QUFDbEIsTUFBTSxlQUFlLEdBQ25CLG1HQUFtRztBQUNyRyxNQUFNLGdCQUFnQixHQUNwQixtSEFBbUg7QUFDckgsTUFBTSxjQUFjLEdBQUcsbUJBQW1CO0FBRTFDLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBMEIsRUFBRSxFQUFFO0lBQzVDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcsUUFBUSxDQUFTLEVBQUUsQ0FBQztJQUNoRCxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUFHLFFBQVEsQ0FBVSxLQUFLLENBQUM7SUFFcEQsTUFBTSxlQUFlLEdBQUcsR0FBUyxFQUFFOztRQUNqQyxTQUFTLENB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QUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQztZQUN2QyxTQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEMsQ0FBQztnQkFBUyxDQUFDO1lBQ1QsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUNsQixDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU8sQ0FDTCwwRUFBSyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsYUFDdkQsNEVBQ0UsT0FBTyxFQUFFLGVBQWUsRUFDeEIsUUFBUSxFQUFFLE1BQU0sRUFDaEIsS0FBSyxFQUFFO29CQUNMLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUztvQkFDNUMsS0FBSyxFQUFFLE9BQU87b0JBQ2QsTUFBTSxFQUFFLE1BQU07b0JBQ2QsT0FBTyxFQUFFLFdBQVc7b0JBQ3BCLFlBQVksRUFBRSxLQUFLO29CQUNuQixNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVM7b0JBQzFDLEtBQUssRUFBRSxNQUFNO29CQUNiLFFBQVEsRUFBRSxNQUFNO2lCQUNqQixZQUVBLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyw0QkFBNEIsR0FDN0MsRUFDUixNQUFNLElBQUksQ0FDVCx1RUFBRyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFHLE1BQU0sR0FBSyxDQUM5RSxJQUNHLENBQ1A7QUFDSCxDQUFDO0FBRUQsaUVBQWUsTUFBTTtBQUNiLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2F2ZS1yb3V0ZS9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IFJlYWN0LCBBbGxXaWRnZXRQcm9wcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5cclxuY29uc3QgeyB1c2VTdGF0ZSB9ID0gUmVhY3RcclxuXHJcbi8vIFlvdXIgbGF5ZXIgVVJMc1xyXG5jb25zdCBST1VURV9MQVlFUl9VUkwgPVxyXG4gICdodHRwczovL3NlcnZpY2VzOC5hcmNnaXMuY29tL3ZVMFZMZ1VLcTI2U2VNMmQvYXJjZ2lzL3Jlc3Qvc2VydmljZXMvU3Vydmlld19Sb3V0ZXMvRmVhdHVyZVNlcnZlci8wJ1xyXG5jb25zdCBQT0lOVFNfTEFZRVJfVVJMID1cclxuICAnaHR0cHM6Ly9zZXJ2aWNlczguYXJjZ2lzLmNvbS92VTBWTGdVS3EyNlNlTTJkL2FyY2dpcy9yZXN0L3NlcnZpY2VzL0ludGVncml0eU1hbmFnZW1lbnRNYXN0ZXJTaGVldC9GZWF0dXJlU2VydmVyLzAnXHJcbmNvbnN0IFBPSU5UX0lEX0ZJRUxEID0gJ0NsaWVudF90cmFja2luZ19fJ1xyXG5cclxuY29uc3QgV2lkZ2V0ID0gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxhbnk+KSA9PiB7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpXHJcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlUm91dGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRTYXZpbmcodHJ1ZSlcclxuICAgIHNldFN0YXR1cygnUmVhZGluZyByb3V0ZS4uLicpXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgW0ZlYXR1cmVMYXllciwgR3JhcGhpY10gPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgICAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJyxcclxuICAgICAgICAnZXNyaS9HcmFwaGljJ1xyXG4gICAgICBdKVxyXG5cclxuICAgICAgLy8gLS0tIFN0ZXAgMTogR2V0IHRoZSBEaXJlY3Rpb25zIHdpZGdldCByb3V0ZSByZXN1bHQgZnJvbSB0aGUgbWFwIC0tLVxyXG4gICAgICAvLyBUaGUgRGlyZWN0aW9ucyB3aWRnZXQgc3RvcmVzIGl0cyByZXN1bHQgb24gdGhlIG1hcCB2aWV3XHJcbiAgICAgIGNvbnN0IGppbXVNYXBWaWV3ID0gcHJvcHMuamltdU1hcFZpZXdcclxuICAgICAgaWYgKCFqaW11TWFwVmlldykge1xyXG4gICAgICAgIHNldFN0YXR1cygn4p2MIE5vIG1hcCB2aWV3IGZvdW5kLiBDb25uZWN0IHRoaXMgd2lkZ2V0IHRvIGEgbWFwLicpXHJcbiAgICAgICAgc2V0U2F2aW5nKGZhbHNlKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBtYXBWaWV3ID0gamltdU1hcFZpZXcudmlld1xyXG4gICAgICBjb25zdCBkaXJlY3Rpb25zV2lkZ2V0ID0gbWFwVmlldy51aS5fY29tcG9uZW50cz8uZmluZChcclxuICAgICAgICAoYzogYW55KSA9PiBjPy53aWRnZXQ/LmRlY2xhcmVkQ2xhc3MgPT09ICdlc3JpLndpZGdldHMuRGlyZWN0aW9ucydcclxuICAgICAgKT8ud2lkZ2V0XHJcblxyXG4gICAgICBpZiAoIWRpcmVjdGlvbnNXaWRnZXQgfHwgIWRpcmVjdGlvbnNXaWRnZXQucm91dGVTZXJ2aWNlQXJlYSkge1xyXG4gICAgICAgIHNldFN0YXR1cygn4p2MIE5vIHJvdXRlIGZvdW5kLiBQbGVhc2UgY2FsY3VsYXRlIGEgcm91dGUgZmlyc3QuJylcclxuICAgICAgICBzZXRTYXZpbmcoZmFsc2UpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJvdXRlUmVzdWx0ID0gZGlyZWN0aW9uc1dpZGdldC52aWV3TW9kZWw/LnJvdXRlUmVzdWx0XHJcbiAgICAgIGlmICghcm91dGVSZXN1bHQpIHtcclxuICAgICAgICBzZXRTdGF0dXMoJ+KdjCBSb3V0ZSByZXN1bHQgbm90IGF2YWlsYWJsZS4gUGxlYXNlIHNvbHZlIHRoZSByb3V0ZSBmaXJzdC4nKVxyXG4gICAgICAgIHNldFNhdmluZyhmYWxzZSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gLS0tIFN0ZXAgMjogR2V0IG9wdGltaXplZCBzdG9wcyBpbiBvcmRlciAtLS1cclxuICAgICAgc2V0U3RhdHVzKCdSZWFkaW5nIHN0b3BzLi4uJylcclxuICAgICAgY29uc3Qgc3RvcHMgPSByb3V0ZVJlc3VsdC5yb3V0ZVJlc3VsdHM/LlswXT8uc3RvcHMgfHwgW11cclxuICAgICAgY29uc3Qgc29ydGVkU3RvcHMgPSBbLi4uc3RvcHNdLnNvcnQoXHJcbiAgICAgICAgKGE6IGFueSwgYjogYW55KSA9PiBhLmF0dHJpYnV0ZXMuU2VxdWVuY2UgLSBiLmF0dHJpYnV0ZXMuU2VxdWVuY2VcclxuICAgICAgKVxyXG5cclxuICAgICAgLy8gLS0tIFN0ZXAgMzogTWF0Y2ggc3RvcCBuYW1lcy9nZW9tZXRyeSB0byB5b3VyIHBvaW50IGxheWVyIC0tLVxyXG4gICAgICBzZXRTdGF0dXMoJ01hdGNoaW5nIHBvaW50IElEcy4uLicpXHJcbiAgICAgIGNvbnN0IHBvaW50c0xheWVyID0gbmV3IEZlYXR1cmVMYXllcih7IHVybDogUE9JTlRTX0xBWUVSX1VSTCB9KVxyXG4gICAgICBjb25zdCBwb2ludFF1ZXJ5ID0gcG9pbnRzTGF5ZXIuY3JlYXRlUXVlcnkoKVxyXG4gICAgICBwb2ludFF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxyXG4gICAgICBwb2ludFF1ZXJ5Lm91dEZpZWxkcyA9IFtQT0lOVF9JRF9GSUVMRCwgJ09CSkVDVElEJ11cclxuICAgICAgY29uc3QgcG9pbnRSZXN1bHRzID0gYXdhaXQgcG9pbnRzTGF5ZXIucXVlcnlGZWF0dXJlcyhwb2ludFF1ZXJ5KVxyXG5cclxuICAgICAgLy8gQnVpbGQgb3JkZXJlZCBzdG9wIGxpc3QgbWF0Y2hlZCB0byBDbGllbnRfdHJhY2tpbmdfXyBmaWVsZFxyXG4gICAgICBjb25zdCBvcmRlcmVkU3RvcHMgPSBzb3J0ZWRTdG9wcy5tYXAoKHN0b3A6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIC8vIE1hdGNoIGJ5IHN0b3AgbmFtZSBvciBnZW9tZXRyeSBwcm94aW1pdHkgdG8geW91ciBwb2ludCBmZWF0dXJlc1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZWRQb2ludCA9IHBvaW50UmVzdWx0cy5mZWF0dXJlcy5maW5kKFxyXG4gICAgICAgICAgKGY6IGFueSkgPT5cclxuICAgICAgICAgICAgZi5hdHRyaWJ1dGVzW1BPSU5UX0lEX0ZJRUxEXSA9PT0gc3RvcC5hdHRyaWJ1dGVzLk5hbWUgfHxcclxuICAgICAgICAgICAgZi5hdHRyaWJ1dGVzW1BPSU5UX0lEX0ZJRUxEXSA9PT0gc3RvcC5hdHRyaWJ1dGVzW1BPSU5UX0lEX0ZJRUxEXVxyXG4gICAgICAgIClcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgc2VxOiBpbmRleCArIDEsXHJcbiAgICAgICAgICBpZDogbWF0Y2hlZFBvaW50Py5hdHRyaWJ1dGVzW1BPSU5UX0lEX0ZJRUxEXSB8fCBzdG9wLmF0dHJpYnV0ZXMuTmFtZSB8fCBgU3RvcCAke2luZGV4ICsgMX1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgY29uc3Qgc3RvcE9yZGVySlNPTiA9IEpTT04uc3RyaW5naWZ5KG9yZGVyZWRTdG9wcylcclxuXHJcbiAgICAgIC8vIC0tLSBTdGVwIDQ6IFNhdmUgcm91dGUgbGluZSB0byBTdXJ2aWV3X1JvdXRlcyBsYXllciAtLS1cclxuICAgICAgc2V0U3RhdHVzKCdTYXZpbmcgcm91dGUgdG8gbGF5ZXIuLi4nKVxyXG4gICAgICBjb25zdCByb3V0ZUdlb21ldHJ5ID0gcm91dGVSZXN1bHQucm91dGVSZXN1bHRzPy5bMF0/LnJvdXRlPy5nZW9tZXRyeVxyXG4gICAgICBpZiAoIXJvdXRlR2VvbWV0cnkpIHtcclxuICAgICAgICBzZXRTdGF0dXMoJ+KdjCBDb3VsZCBub3QgcmVhZCByb3V0ZSBnZW9tZXRyeS4nKVxyXG4gICAgICAgIHNldFNhdmluZyhmYWxzZSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgcm91dGVMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoeyB1cmw6IFJPVVRFX0xBWUVSX1VSTCB9KVxyXG5cclxuICAgICAgLy8gRmlyc3QgY2xlYXIgYW55IGV4aXN0aW5nIHJvdXRlcyAob3B0aW9uYWwg4oCUIHJlbW92ZSB0aGVzZSBsaW5lcyB0byBrZWVwIGhpc3RvcnkpXHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nUXVlcnkgPSByb3V0ZUxheWVyLmNyZWF0ZVF1ZXJ5KClcclxuICAgICAgZXhpc3RpbmdRdWVyeS53aGVyZSA9ICcxPTEnXHJcbiAgICAgIGV4aXN0aW5nUXVlcnkucmV0dXJuR2VvbWV0cnkgPSBmYWxzZVxyXG4gICAgICBleGlzdGluZ1F1ZXJ5Lm91dEZpZWxkcyA9IFsnT0JKRUNUSUQnXVxyXG4gICAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHJvdXRlTGF5ZXIucXVlcnlGZWF0dXJlcyhleGlzdGluZ1F1ZXJ5KVxyXG4gICAgICBpZiAoZXhpc3RpbmcuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGF3YWl0IHJvdXRlTGF5ZXIuYXBwbHlFZGl0cyh7IGRlbGV0ZUZlYXR1cmVzOiBleGlzdGluZy5mZWF0dXJlcyB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBBZGQgbmV3IHJvdXRlIGZlYXR1cmVcclxuICAgICAgY29uc3Qgcm91dGVGZWF0dXJlID0gbmV3IEdyYXBoaWMoe1xyXG4gICAgICAgIGdlb21ldHJ5OiByb3V0ZUdlb21ldHJ5LFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgIFJvdXRlTmFtZTogYFJvdXRlICR7bmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKX1gLFxyXG4gICAgICAgICAgQ3JlYXRlZERhdGU6IERhdGUubm93KCksXHJcbiAgICAgICAgICBTdG9wT3JkZXI6IHN0b3BPcmRlckpTT05cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBhd2FpdCByb3V0ZUxheWVyLmFwcGx5RWRpdHMoeyBhZGRGZWF0dXJlczogW3JvdXRlRmVhdHVyZV0gfSlcclxuXHJcbiAgICAgIC8vIC0tLSBTdGVwIDU6IFRyaWdnZXIgQ1NWIGRvd25sb2FkIG9mIG9yZGVyZWQgc3RvcHMgLS0tXHJcbiAgICAgIHNldFN0YXR1cygnR2VuZXJhdGluZyBDU1YuLi4nKVxyXG4gICAgICBjb25zdCBjc3ZSb3dzID0gWydTdG9wIE9yZGVyLENsaWVudCBUcmFja2luZyBJRCddXHJcbiAgICAgIG9yZGVyZWRTdG9wcy5mb3JFYWNoKChzOiBhbnkpID0+IHtcclxuICAgICAgICBjc3ZSb3dzLnB1c2goYCR7cy5zZXF9LCR7cy5pZH1gKVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zdCBjc3ZDb250ZW50ID0gY3N2Um93cy5qb2luKCdcXG4nKVxyXG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2NzdkNvbnRlbnRdLCB7IHR5cGU6ICd0ZXh0L2NzdicgfSlcclxuICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKVxyXG4gICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICAgIGEuaHJlZiA9IHVybFxyXG4gICAgICBhLmRvd25sb2FkID0gYHJvdXRlX3N0b3BzXyR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKX0uY3N2YFxyXG4gICAgICBhLmNsaWNrKClcclxuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpXHJcblxyXG4gICAgICBzZXRTdGF0dXMoYOKchSBSb3V0ZSBzYXZlZCEgJHtvcmRlcmVkU3RvcHMubGVuZ3RofSBzdG9wcyBleHBvcnRlZC5gKVxyXG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignU2F2ZSBSb3V0ZSBlcnJvcjonLCBlcnIpXHJcbiAgICAgIHNldFN0YXR1cyhg4p2MIEVycm9yOiAke2Vyci5tZXNzYWdlfWApXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRTYXZpbmcoZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNhdmVSb3V0ZX1cclxuICAgICAgICBkaXNhYmxlZD17c2F2aW5nfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNhdmluZyA/ICcjYWFhJyA6ICcjMDA3OWMxJyxcclxuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgICBwYWRkaW5nOiAnMTBweCAxNnB4JyxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgICAgICBjdXJzb3I6IHNhdmluZyA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcicsXHJcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgZm9udFNpemU6ICcxNHB4J1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7c2F2aW5nID8gJ1NhdmluZy4uLicgOiAn8J+SviBTYXZlIFJvdXRlIHRvIEZpZWxkIE1hcCd9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7c3RhdHVzICYmIChcclxuICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Ub3A6ICc4cHgnLCBmb250U2l6ZTogJzEycHgnLCBjb2xvcjogJyMzMzMnIH19PntzdGF0dXN9PC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXRcbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9