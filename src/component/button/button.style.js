import styled from 'styled-components'

export const StyledButton = styled.button `
  padding: 0 ${({ label }) => label ? '24px' : '20px'};
  border-radius: 20px;
  height: 40px;
  line-height: 40px;
  border: 0;
  justify-self: center;
  background-color: #002666;
  color: white;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  & > i {
  ${({ label} ) => {
    if (!label) {
      return `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      `
    }
  }}
}
  &::after {
    color: #002666;
    background-color: white;
    content: '${({ label }) => label}';
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.10s;
  }

  &:hover::after {
    ${({ label }) => label ? 'top: 0' : ''}
  }

  & > span:last-child {
    padding-left: 10px;
  }

  & > span:empty {
    display: none;
  }
  `