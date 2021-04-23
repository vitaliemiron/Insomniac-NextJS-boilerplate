// #region Global Imports
import React from 'react';
// #endregion Global Imports

// #region Local Imports
import { Buttons, CircularProgress } from './styled';
import { IButton } from './Button';
// #endregion Local Imports

export const Button: React.FunctionComponent<IButton.IProps> = ({
  children,
  onClick,
  className,
  disabled,
  loading,
  type,
  color,
  size,
  backgroundcolormain,
  modifier,
  active,
  disableRipple,
  disableFocusRipple,
}) => {
  const modifiers = modifier || 'default';
  return loading ? (
    <CircularProgress className={className} />
  ) : (
    <Buttons
      size={size}
      active={active}
      className={`${modifiers} ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
      color={color}
      backgroundcolormain={backgroundcolormain}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
    >
      {children}
    </Buttons>
  );
};

export default Button;
