// components/AddPlace.js
import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { StyledButton } from "./StyledButton";
import { StyledLink } from "./StyledLink";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export default function AddPlace() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [mapURL, setMapURL] = useState("");
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    const newPlace = {
      name,
      location,
      description,
      image,
      mapURL,
    };

    const response = await fetch("/api/places", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlace),
    });

    if (response.ok) {
      router.push("/");
    } else {
      console.error("Failed to add place");
    }
  }

  return (
    <FormContainer>
      <h2>Add a New Place</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <TextArea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Google Maps URL"
          value={mapURL}
          onChange={(e) => setMapURL(e.target.value)}
          required
        />
        <StyledButton type="submit">Add Place</StyledButton>
      </form>
      <StyledLink href="/">Back</StyledLink>
    </FormContainer>
  );
}
