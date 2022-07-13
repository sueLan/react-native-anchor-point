import type { TransformsStyle } from "react-native";

export interface Point {
    x: number;
    y: number;
}

export interface Size {
    width: number;
    height: number;
}

const isValidSize = (size: Size): boolean => {
    return size && size.width > 0 && size.height > 0;
}; 

const defaultAnchorPoint = { x: 0.5, y: 0.5 };

export const withAnchorPoint = (transform: TransformsStyle, anchorPoint: Point, size: Size) => {
    if(!isValidSize(size)) {
        return transform;
    }

    let injectedTransform = transform.transform;
    if (!injectedTransform) {
        return transform;
    }

    if (anchorPoint.x !== defaultAnchorPoint.x && size.width) {
        const shiftTranslateX = [];

        // shift before rotation
        shiftTranslateX.push({
            translateX: size.width * (anchorPoint.x - defaultAnchorPoint.x),
        });
        injectedTransform = [...shiftTranslateX, ...injectedTransform];
        // shift after rotation
        injectedTransform.push({
            translateX: size.width * (defaultAnchorPoint.x - anchorPoint.x),
        });
    }

    if (!Array.isArray(injectedTransform)) {
        return { transform: injectedTransform };
    }

    if (anchorPoint.y !== defaultAnchorPoint.y && size.height) {
        let shiftTranslateY = [];
        // shift before rotation
        shiftTranslateY.push({
            translateY: size.height * (anchorPoint.y - defaultAnchorPoint.y),
        });
        injectedTransform = [...shiftTranslateY, ...injectedTransform];
        // shift after rotation
        injectedTransform.push({
            translateY: size.height * (defaultAnchorPoint.y - anchorPoint.y),
        });
    }

    return { transform: injectedTransform };
};

export function getAnchorPoint(anchorPoint: Point, size: Size) {
    let translateX = 0;
    let translateY = 0;

    if (anchorPoint.x !== defaultAnchorPoint.x && size.width) {
        translateX = size.width * (anchorPoint.x - defaultAnchorPoint.x);
    }

    if (anchorPoint.y !== defaultAnchorPoint.y && size.height) {
        translateY = size.height * (anchorPoint.y - defaultAnchorPoint.y);
    }

    return { translateX, translateY };
}
