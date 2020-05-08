import * as React from "react";
import styled from "@emotion/styled";

const UIStyledButton = styled.button`
  font-family: monospace;
  text-transform: uppercase;
  padding: 0.3rem 0.9rem;
  color: white;
  background: #1d526c;
  border-radius: 3px;
  transition: opacity 90ms ease-in-out;
 
  &:hover {
    opacity: 0.8;
  }
  
  &:focus, &:active {
    opacity: 0.6;
  }
`;

const UIButton = (props: {
    onClick: () => void;
    children: React.ReactNode;
}) => (
    <UIStyledButton
        onClick={ props.onClick }
    >
        { props.children }
    </UIStyledButton>
);

export default UIButton;
