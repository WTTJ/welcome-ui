import { WuiProps } from '@welcome-ui/system';
import { Shape, Size, Variant } from './index';
export interface StyledButtonProps {
    disabled?: boolean;
    shape?: Shape;
    size?: Size;
    variant?: Variant;
}
export declare const Button: import("styled-components").StyledComponent<import("reakit-system/ts/createComponent").Component<"button", import("reakit/ts").ClickableOptions>, import("@xstyled/system").Theme, StyledButtonProps & WuiProps, never>;
