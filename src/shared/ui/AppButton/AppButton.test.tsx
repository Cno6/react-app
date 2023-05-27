// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
import React from 'react';
import { AppButton, ThemeAppButton } from './AppButton';

describe('AppButton', () => {
  it('is render', () => {
    render(<AppButton>{'TEST'}</AppButton>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  it('is have "text" theme', () => {
    render(<AppButton theme={ThemeAppButton.TEXT}>{'TEST'}</AppButton>);
    expect(screen.getByText('TEST')).toHaveClass('text');
  });
});
