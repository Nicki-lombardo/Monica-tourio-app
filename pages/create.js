import Link from "next/link.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "../components/Form.js";
import { StyledLink } from "../components/StyledLink.js";
//import DetailsPage from "./places/[id]/index.js";
import useSWR from "swr";

const StyledBackLink = styled(StyledLink)`
  justify-self: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-decoration: none;
`;

export default function CreatePlacePage() {
  const router = useRouter();
  async function addPlace(place) {
    const response = await fetch("/api/places", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(place),
    });
    if (response.ok) {
      await response.json();
      router.push("/");
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <>
      <Link href="/" passHref legacyBehavior>
        <StyledBackLink> 🔙 </StyledBackLink>
      </Link>
      <Form onSubmit={addPlace} formName={"add-place"} />
    </>
  );
}
