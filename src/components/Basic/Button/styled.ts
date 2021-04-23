import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  CircularProgress as MuiCircularProgress,
} from '@material-ui/core';
import { theme } from '@Utils';
import styled from 'styled-components';

export interface ButtonProps {
  color?: string;
  backgroundcolormain?: string;
  active?: boolean;
  size?: string;
}

export const CircularProgress = withStyles({
  root: {
    color: theme.colors.blue.base,
  },
})(MuiCircularProgress);

export const Buttons = styled(Button)`
  &.default {
    display: flex;
    align-items: center;
    color: ${(props: ButtonProps) =>
      props.color ? props.color : theme.colors.black.lighten100};
    text-transform: uppercase;
    padding: ${(props: ButtonProps) =>
      props.size === 'small' ? '1.1rem 1.3rem' : '1.35rem 2.6rem'};
    letter-spacing: 3px;
    line-height: 19px;
    border-radius: 23px;
    font-size: 1.6rem;
    font-weight: 700;
    background-color: ${(props: ButtonProps) =>
      props.backgroundcolormain
        ? props.backgroundcolormain
        : theme.colors.blue.base};

    &:hover {
      background-color: ${theme.colors.blue.lighten45};
    }

    &:active {
      background-color: ${theme.colors.blue.lighten45};
    }

    .MuiButton-endIcon {
      margin-left: 1.95rem;
    }

    .MuiButton-iconSizeMedium > *:first-child {
      font-size: 1.4rem;
    }
  }

  &.outlined {
    text-transform: uppercase;
    padding: 0.3rem 1.3rem;
    letter-spacing: 1px;
    line-height: 20px;
    border-radius: 23px;
    font-size: 1.2rem;
    font-weight: 700;
    box-shadow: none;
    color: ${(props: ButtonProps) =>
      props.active
        ? theme.colors.black.lighten100
        : theme.colors.blue.lighten30};
    border: 0.5px solid
      ${(props: ButtonProps) =>
        props.active ? theme.colors.blue.lighten30 : theme.colors.gray.base};
    background-color: ${(props: ButtonProps) =>
      props.active
        ? theme.colors.blue.lighten30
        : theme.colors.black.lighten100};
    :hover {
      box-shadow: none;
      background-color: ${(props: ButtonProps) =>
        props.active
          ? theme.colors.blue.lighten30
          : theme.colors.black.lighten100};
    }
  }

  &.clear {
    color: ${(props: ButtonProps) =>
      props.color ? props.color : theme.colors.blue.base};
  }

  &.square {
    display: flex;
    align-items: center;
    color: ${(props: ButtonProps) =>
      props.color ? props.color : theme.colors.black.lighten100};
    line-height: 1;
    border-radius: 8px;
    font-size: 1.6rem;
    background-color: ${(props: ButtonProps) =>
      props.backgroundcolormain
        ? props.backgroundcolormain
        : theme.colors.blue.base};
    padding: ${(props: ButtonProps) =>
      props.size === 'small' ? '1.1rem 1.3rem' : '1.35rem 2.6rem'};
    text-transform: unset;
    letter-spacing: unset;

    &:hover {
      background-color: ${theme.colors.blue.lighten45};
    }

    &:active {
      background-color: ${theme.colors.blue.lighten45};
    }

    .MuiButton-endIcon {
      margin-left: 1.95rem;
    }

    .MuiButton-iconSizeMedium > *:first-child {
      font-size: 1.4rem;
    }
  }
`;
