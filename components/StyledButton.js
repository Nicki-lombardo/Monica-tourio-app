import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: #ffce32;
  padding: 0.8rem;
  border-radius: 0.6rem;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: inherit;

  &:hover {
    color: #ef036c; /* Color interactivo al pasar el ratón */
  }

  ${({ variant }) =>
    variant === "delete" &&
    css`
      background-color: #fe3a4a;
      color: white;
    `}
`;
