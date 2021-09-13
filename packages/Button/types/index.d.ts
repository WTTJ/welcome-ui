import React from 'react';
import { WuiProps } from '@welcome-ui/system';
import * as S from './styles';
export declare type Shape = 'circle' | 'square';
export declare type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare type Variant = 'primary' | 'secondary' | 'tertiary' | 'primary-info' | 'secondary-info' | 'primary-success' | 'secondary-success' | 'tertiary-negative' | 'quaternary' | 'primary-warning' | 'secondary-warning' | 'primary-danger' | 'secondary-danger' | 'disabled';
export interface ButtonOptions {
    disabled?: boolean;
    size?: Size;
    variant?: Variant;
    shape?: Shape;
}
export declare type ButtonProps = ButtonOptions & React.HTMLAttributes<HTMLButtonElement> & WuiProps;
export declare const Button: React.ForwardRefExoticComponent<ButtonOptions & React.HTMLAttributes<HTMLButtonElement> & WuiProps & React.RefAttributes<HTMLButtonElement>>;
export declare const StyledButton: import("styled-components").StyledComponent<import("reakit-system/ts/createComponent").Component<"button", import("reakit/ts").ClickableOptions>, import("@xstyled/system").Theme, S.StyledButtonProps & WuiProps, never>;
