"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBidirectionalScrollView = exports.getFooterContainer = exports.getItemAnimator = exports.getCellContainerPlatformStyles = exports.PlatformConfig = void 0;
var react_native_1 = require("react-native");
var DefaultJSItemAnimator_1 = require("recyclerlistview/dist/reactnative/platform/reactnative/itemanimators/defaultjsanimator/DefaultJSItemAnimator");
var BiDirectionalScrollView_1 = require("../../BiDirectionalScrollView");
var PlatformConfig = {
    defaultDrawDistance: 250,
    invertedTransformStyle: { transform: [{ scaleY: -1 }] },
    invertedTransformStyleHorizontal: { transform: [{ scaleX: -1 }] },
};
exports.PlatformConfig = PlatformConfig;
var getCellContainerPlatformStyles = function (inverted, parentProps) {
    return undefined;
};
exports.getCellContainerPlatformStyles = getCellContainerPlatformStyles;
var getItemAnimator = function () {
    return new DefaultJSItemAnimator_1.DefaultJSItemAnimator();
};
exports.getItemAnimator = getItemAnimator;
var getFooterContainer = function () {
    return undefined;
};
exports.getFooterContainer = getFooterContainer;
var getBidirectionalScrollView = function (experimentalScrollPositionManagement, renderScrollComponent) {
    return experimentalScrollPositionManagement && react_native_1.Platform.OS === "android"
        ? BiDirectionalScrollView_1.BidirectionalScrollView
        : renderScrollComponent;
};
exports.getBidirectionalScrollView = getBidirectionalScrollView;
//# sourceMappingURL=PlatformHelper.js.map