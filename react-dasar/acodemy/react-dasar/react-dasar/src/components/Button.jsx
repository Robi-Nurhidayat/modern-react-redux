import styled from "styled-components";

const Button = styled.button`
  background-color: salmon;
  padding: 0.5rem;
  color: ${(props) => (props.primary ? "white" : "black")};
  ${(props) => props.rounded && "border-radius: 20px; border:none"}
`;
export default Button;
