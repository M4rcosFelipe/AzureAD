import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 10px 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.onPrimary};
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: 0.1s all;
  margin: ${(props) => props.margin || "0px"};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryVariant};
  }
  &[disabled] {
    background-color: gray;
    pointer-events: none;
  }
`;
