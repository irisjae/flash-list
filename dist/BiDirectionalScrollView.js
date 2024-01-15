"use strict";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.BidirectionalScrollView = exports.ScrollViewComponent = void 0;
var tslib_1 = require("tslib");
/**
 * This file comes courtsey of steuerbot and their work on react-native-bidirectional-flatlist. Huge thanks for helping
 * solve this problem with fling!
 * */
var react_1 = tslib_1.__importStar(require("react"));
var react_native_1 = require("react-native");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var ScrollViewRNRaw = react_native_1.ScrollView.render().type;
var ScrollViewComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ScrollViewComponent, _super);
    function ScrollViewComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.shift = function (_a) {
            var offset = _a.offset, height = _a.height;
            _this._scrollViewRef.setNativeProps({
                shiftOffset: react_native_1.PixelRatio.getPixelSizeForLayoutSize(offset),
                shiftHeight: react_native_1.PixelRatio.getPixelSizeForLayoutSize(height),
            });
        };
        return _this;
    }
    ScrollViewComponent.prototype.render = function () {
        var NativeDirectionalScrollView = BidirectionalFlatlist;
        var NativeDirectionalScrollContentView = react_native_1.View;
        var contentContainerStyle = [this.props.contentContainerStyle];
        var contentSizeChangeProps = this.props.onContentSizeChange == null
            ? null
            : {
                onLayout: this._handleContentOnLayout,
            };
        var stickyHeaderIndices = this.props.stickyHeaderIndices;
        var children = this.props.children;
        var hasStickyHeaders = Array.isArray(stickyHeaderIndices) && stickyHeaderIndices.length > 0;
        var contentContainer = (react_1.default.createElement(NativeDirectionalScrollContentView, tslib_1.__assign({}, contentSizeChangeProps, { ref: this._setInnerViewRef, style: contentContainerStyle, removeClippedSubviews: 
            // Subview clipping causes issues with sticky headers on Android and
            // would be hard to fix properly in a performant way.
            react_native_1.Platform.OS === "android" && hasStickyHeaders
                ? false
                : this.props.removeClippedSubviews, collapsable: false }), children));
        var alwaysBounceHorizontal = this.props.alwaysBounceHorizontal === undefined
            ? this.props.horizontal
            : this.props.alwaysBounceHorizontal;
        var alwaysBounceVertical = this.props.alwaysBounceVertical === undefined
            ? !this.props.horizontal
            : this.props.alwaysBounceVertical;
        var baseStyle = styles.baseVertical;
        var props = tslib_1.__assign(tslib_1.__assign({}, this.props), { alwaysBounceHorizontal: alwaysBounceHorizontal, alwaysBounceVertical: alwaysBounceVertical, style: react_native_1.StyleSheet.compose(baseStyle, this.props.style), 
            // Override the onContentSizeChange from props, since this event can
            // bubble up from TextInputs
            onContentSizeChange: null, onLayout: this._handleLayout, onMomentumScrollBegin: this._handleMomentumScrollBegin, onMomentumScrollEnd: this._handleMomentumScrollEnd, onResponderGrant: this._handleResponderGrant, onResponderReject: this._handleResponderReject, onResponderRelease: this._handleResponderRelease, onResponderTerminationRequest: this._handleResponderTerminationRequest, onScrollBeginDrag: this._handleScrollBeginDrag, onScrollEndDrag: this._handleScrollEndDrag, onScrollShouldSetResponder: this._handleScrollShouldSetResponder, onStartShouldSetResponder: this._handleStartShouldSetResponder, onStartShouldSetResponderCapture: this._handleStartShouldSetResponderCapture, onTouchEnd: this._handleTouchEnd, onTouchMove: this._handleTouchMove, onTouchStart: this._handleTouchStart, onTouchCancel: this._handleTouchCancel, onScroll: this._handleScroll, scrollEventThrottle: hasStickyHeaders
                ? 1
                : this.props.scrollEventThrottle, sendMomentumEvents: Boolean(this.props.onMomentumScrollBegin || this.props.onMomentumScrollEnd), 
            // default to true
            snapToStart: this.props.snapToStart !== false, 
            // default to true
            snapToEnd: this.props.snapToEnd !== false, 
            // pagingEnabled is overridden by snapToInterval / snapToOffsets
            pagingEnabled: react_native_1.Platform.select({
                // on iOS, pagingEnabled must be set to false to have snapToInterval / snapToOffsets work
                ios: this.props.pagingEnabled === true &&
                    this.props.snapToInterval == null &&
                    this.props.snapToOffsets == null,
                // on Android, pagingEnabled must be set to true to have snapToInterval / snapToOffsets work
                android: this.props.pagingEnabled === true ||
                    this.props.snapToInterval != null ||
                    this.props.snapToOffsets != null,
            }) });
        // const { decelerationRate } = this.props;
        // if (decelerationRate != null) {
        //   props.decelerationRate = processDecelerationRate(decelerationRate);
        // }
        return (react_1.default.createElement(NativeDirectionalScrollView, tslib_1.__assign({}, props, { ref: this._setNativeRef }), contentContainer));
    };
    return ScrollViewComponent;
}(ScrollViewRNRaw));
exports.ScrollViewComponent = ScrollViewComponent;
var styles = react_native_1.StyleSheet.create({
    baseVertical: {
        flexGrow: 1,
        flexShrink: 1,
        flexDirection: "column",
        overflow: "scroll",
    },
});
// eslint-disable-next-line react/display-name
exports.BidirectionalScrollView = (0, react_1.forwardRef)(function (props, ref) {
    return react_1.default.createElement(ScrollViewComponent, tslib_1.__assign({}, props, { ref: ref }));
});
//# sourceMappingURL=BiDirectionalScrollView.js.map