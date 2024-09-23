import styled from "styled-components";
import { FormContainer, Input, Label } from "./Form";
import { StyledButton } from "./StyledButton.js";
import { useRouter } from "next/router.js";
import useSWR from "swr";

export default function Comments({}) {
  const router = useRouter();
  const { data, error } = useSWR(`/api/comments/${router.query.id}`);
  const comments = data;
  const isLoading = !data && !error;
  const isError = error;
  const locationName = router.query.id;
  const { id } = router.query;
  const { mutate } = useSWR(`/api/comments/${id}`);

  const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid black;
    border-radius: 0.8rem;
    padding: 0.5rem;
    text-align: center;
    p {
      border-bottom: solid 1px black;
      padding: 20px;
    }
  `;

  async function handleSubmitComment(e) {
    e.preventDefault();

    const FormData = new FormData(form);
    const form = e.target;
    const comments = Object.fromEntries(FormData.entries());

    try {
      const res = await fetch(`/api/comments/${id}`, {
        method: "POST",
        body: JSON.stringify(comments),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        form.reset();
        mutate();
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Article>
      <FormContainer onSubmit={handleSubmitComment}>
        <Label htmlFor="name">Your Name</Label>
        <Input type="text" name="name" placeholder="name" />
        <Label htmlFor="comment">Your Comment</Label>
        <Input type="text" name="comment" placeholder="comment here..." />
        <StyledButton type="submit">Send</StyledButton>
      </FormContainer>
      {comments && (
        <>
          <h2>
            {comments.length} We’d love to hear what you think. Leave a comment!
          </h2>
          {comments.map(({ name, comment }, idx) => {
            return (
              <>
                <p key={_id}>
                  <small>
                    <strong>{name}</strong> commented on {locationName}
                  </small>
                </p>
                <span>{comment}</span>
              </>
            );
          })}
        </>
      )}
    </Article>
  );
}
