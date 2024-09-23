import styled from "styled-components";
import { StyledButton } from "./StyledButton.js";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Asegura que el contenedor ocupe toda la altura de la página */
  width: 100%;
`;

export const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
  width: 90%; /* Aumentamos el ancho del formulario */
  max-width: 800px; /* Establecemos un ancho máximo mayor */
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 2px solid black;
  border-radius: 0.5rem;
`;

export const Textarea = styled.textarea`
  font-family: inherit;
  border: 2px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export default function Form({ onSubmit, formName, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <FormWrapper>
      <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
        <Label htmlFor="name">Place name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          defaultValue={defaultData?.name}
          required
        />
        <Label htmlFor="image-url">Image Url</Label>
        <Input
          id="image-url"
          name="image"
          type="text"
          defaultValue={defaultData?.image}
          required
        />
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          name="location"
          type="text"
          defaultValue={defaultData?.location}
        />
        <Label htmlFor="map-url">Map Url</Label>
        <Input
          id="map-url"
          name="mapURL"
          type="text"
          defaultValue={defaultData?.mapURL}
          required
        />
        <Label htmlFor="description">Description</Label>
        <Textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          defaultValue={defaultData?.description}
          required
        ></Textarea>
        <StyledButton type="submit">
          {defaultData ? "Update place" : "Add place"}
        </StyledButton>
      </FormContainer>
    </FormWrapper>
  );
}
