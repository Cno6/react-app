import { classNames } from 'shared/lib/classNames/classNames';
import React, { ButtonHTMLAttributes, FC } from 'react';
import cls from './AppButton.module.scss';

export enum ThemeAppButton {
  FILLED = 'filled',
  OUTLINED = 'outlined',
  TEXT = 'text'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeAppButton
}

export const AppButton: FC<AppButtonProps> = (props) => {
  const {
    className, theme = ThemeAppButton.FILLED, onClick, children, ...otherProps
  } = props;

  return (
    <button
      className={classNames(cls.AppButton, {}, [className, cls[theme]])}
      onClick={onClick}
      type="button"
      {...otherProps}
    >
      { children }
    </button>
  );
};
