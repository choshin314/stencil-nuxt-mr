/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface StShadow {
        "headingTag": string;
        "headingText": string;
    }
    interface StShadowless {
        "headingTag": string;
        "headingText": string;
    }
}
declare global {
    interface HTMLStShadowElement extends Components.StShadow, HTMLStencilElement {
    }
    var HTMLStShadowElement: {
        prototype: HTMLStShadowElement;
        new (): HTMLStShadowElement;
    };
    interface HTMLStShadowlessElement extends Components.StShadowless, HTMLStencilElement {
    }
    var HTMLStShadowlessElement: {
        prototype: HTMLStShadowlessElement;
        new (): HTMLStShadowlessElement;
    };
    interface HTMLElementTagNameMap {
        "st-shadow": HTMLStShadowElement;
        "st-shadowless": HTMLStShadowlessElement;
    }
}
declare namespace LocalJSX {
    interface StShadow {
        "headingTag"?: string;
        "headingText"?: string;
    }
    interface StShadowless {
        "headingTag"?: string;
        "headingText"?: string;
    }
    interface IntrinsicElements {
        "st-shadow": StShadow;
        "st-shadowless": StShadowless;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "st-shadow": LocalJSX.StShadow & JSXBase.HTMLAttributes<HTMLStShadowElement>;
            "st-shadowless": LocalJSX.StShadowless & JSXBase.HTMLAttributes<HTMLStShadowlessElement>;
        }
    }
}
