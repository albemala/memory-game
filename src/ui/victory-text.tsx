import * as React from "react";
import styled from "@emotion/styled";

const UIStyledVictoryText = styled.h2`
  font-size: 2rem;
  color: #869da8;
`;

const UIVictoryText = (props: {
    children: React.ReactNode;
}) => (
    <UIStyledVictoryText>
        { props.children }
    </UIStyledVictoryText>
);

export default UIVictoryText;
