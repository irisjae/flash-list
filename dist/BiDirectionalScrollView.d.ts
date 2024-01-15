/**
 * This file comes courtsey of steuerbot and their work on react-native-bidirectional-flatlist. Huge thanks for helping
 * solve this problem with fling!
 * */
import { Component } from "react";
import { ScrollView as ScrollViewRN, ScrollViewProps } from "react-native";
import type { ShiftFunction } from "./types";
declare const ScrollViewRNRaw: Component<ScrollViewProps>;
export declare class ScrollViewComponent extends ScrollViewRNRaw {
    constructor(props: ScrollViewProps);
    shift: ShiftFunction;
    render(): JSX.Element;
}
export declare type ScrollViewType = typeof ScrollViewRN & {
    shift: (options: {
        offset: number;
        height: number;
    }) => void;
};
export declare const BidirectionalScrollView: ScrollViewType;
export {};
//# sourceMappingURL=BiDirectionalScrollView.d.ts.map