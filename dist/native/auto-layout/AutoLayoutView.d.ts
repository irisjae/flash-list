import React, { ReactNode } from "react";
import { LayoutChangeEvent } from "react-native";
import { OnAutoLayoutEvent } from "./AutoLayoutViewNativeComponentProps";
export declare type BlankAreaEventHandler = (blankAreaEvent: BlankAreaEvent) => void;
export declare type OnAutoLayoutHandler = (rawEvent: OnAutoLayoutEvent) => void;
export declare const useOnNativeBlankAreaEvents: (onBlankAreaEvent: (blankAreaEvent: BlankAreaEvent) => void) => void;
export interface BlankAreaEvent {
    offsetStart: number;
    offsetEnd: number;
    blankArea: number;
}
export interface AutoLayoutViewProps {
    children?: ReactNode;
    onBlankAreaEvent?: BlankAreaEventHandler;
    onAutoLayout?: OnAutoLayoutHandler;
    onLayout?: (event: LayoutChangeEvent) => void;
    innerRef?: any;
    disableAutoLayout?: boolean;
    enableAutoLayoutInfo?: boolean;
    autoLayoutId?: number;
    preservedIndex?: number;
}
declare class AutoLayoutView extends React.Component<AutoLayoutViewProps> {
    private _renderId;
    private onBlankAreaEventCallback;
    private broadcastBlankEvent;
    render(): JSX.Element;
}
export default AutoLayoutView;
//# sourceMappingURL=AutoLayoutView.d.ts.map