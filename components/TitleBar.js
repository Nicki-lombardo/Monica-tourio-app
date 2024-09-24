import styled from "styled-components";

const Headline = styled.h1`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50%; /* Reducimos el ancho para que sea más pequeña */
  background-color: white;
  margin: 0;
  padding: 10px; /* Reducimos el padding para que sea más compacta */
  text-align: center;
  z-index: 1;
  font-size: 3em; /* Tamaño de fuente más pequeño */
  color: #ffce32; /* Color de texto inicial */

  &:hover {
    color: #ef036c; /* Color interactivo al pasar el ratón */
  }
`;

export default function TitleBar() {
  return <Headline>Rent a Bike 🚲</Headline>;
}
