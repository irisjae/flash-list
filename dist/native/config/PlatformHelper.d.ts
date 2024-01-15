import { ScrollViewProps } from "react-native";
import { BaseItemAnimator } from "recyclerlistview";
import React from "react";
declare const PlatformConfig: {
    defaultDrawDistance: number;
    invertedTransformStyle: {
        transform: {
            scaleY: number;
        }[];
    };
    invertedTransformStyleHorizontal: {
        transform: {
            scaleX: number;
        }[];
    };
};
declare const getCellContainerPlatformStyles: (inverted: boolean, parentProps: {
    x: number;
    y: number;
    isHorizontal?: boolean;
}) => {
    transform: string;
    WebkitTransform: string;
} | undefined;
declare const getItemAnimator: () => BaseItemAnimator | undefined;
declare const getFooterContainer: () => React.ComponentClass | undefined;
declare const getBidirectionalScrollView: (experimentalScrollPositionManagement: boolean, renderScrollComponent: React.FC<ScrollViewProps> | React.ComponentType<ScrollViewProps> | undefined) => (new (props: import("recyclerlistview/dist/reactnative/core/scrollcomponent/BaseScrollView").ScrollViewDefaultProps) => import("recyclerlistview").BaseScrollView) | undefined;
export { PlatformConfig, getCellContainerPlatformStyles, getItemAnimator, getFooterContainer, getBidirectionalScrollView, };
//# sourceMappingURL=PlatformHelper.d.ts.map