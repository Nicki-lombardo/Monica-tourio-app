import styled, { css } from "styled-components";

export const StyledLink = styled.a`
  background-color: #ffce32;
  padding: 0.8rem 1.5rem;
  border-radius: 0.6rem;
  color: black;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #ef036c; /* Color interactivo al pasar el ratón */
  }

  ${({ justifySelf }) =>
    justifySelf &&
    css`
      justify-self: ${justifySelf};
    `}

  ${({ variant }) =>
    variant === "outlined" &&
    css`
      text-align: center;
      background-color: white;
      border: 3px #ef036c;
    `}
`;
