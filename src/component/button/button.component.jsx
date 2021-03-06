import React from 'react'
import { StyledButton } from './button.style'

const Button = ({ onClick, label, children }) => 
  <StyledButton 
    onClick={onClick}
    label={label}
    data-testid="awesome-button">
    {children}
    <span>{label}</span>
  </StyledButton>

export { Button }