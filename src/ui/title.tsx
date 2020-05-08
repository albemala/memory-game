import * as React from "react";
import styled from "@emotion/styled";

const UIStyledTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #1d526c;
`;

const UITitle = (props: {
    children: React.ReactNode;
}) => (
    <UIStyledTitle>
        { props.children }
    </UIStyledTitle>
);

export default UITitle;
