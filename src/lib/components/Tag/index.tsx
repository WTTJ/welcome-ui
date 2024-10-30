import * as React from "react";

type TagSize = "xs" | "sm" | "md";
type TagVariant = keyof typeof SecondaryColors | "default" | "primary";

export type TagProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  onRemove?: () => void;
  size?: TagSize;
  to?: string;
  variant?: TagVariant;
};

import * as S from "./styles";
import { SecondaryColors } from "../../theme";

export const Tag: React.FC<TagProps> = ({
  children,
  href,
  onClick,
  onRemove,
  size = "md",
  to,
  variant = "default",
}) => {
  const hasIntOrStringChildren =
    !!(children || children === 0) &&
    ["number", "string"].includes(typeof children);
  const childrenLength = hasIntOrStringChildren
    ? children.toString().length
    : undefined;
  const hasLink = !!href || !!to;

  return (
    <S.Tag
      hasClickAction={!!onClick}
      hasLink={hasLink}
      hasRemoveAction={!!onRemove}
      href={href}
      length={childrenLength}
      onClick={onClick}
      size={size}
      to={to}
      variant={variant}
    >
      {children}
      {!!onRemove && (
        <S.ActionIcon size={size}>
          <S.Button onClick={onRemove} title="Remove" type="button">
            x
          </S.Button>
        </S.ActionIcon>
      )}
    </S.Tag>
  );
};
