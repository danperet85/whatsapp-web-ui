import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  color: ${(props) => props.theme.common.mainHeadingColor};
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: ${(props) => props.theme.common.subHeadingColor};
`;

export const Input = styled.input`
  padding: 6px 8px;
  border: 1px solid ${(props) => props.theme.common.borderColor};
  border-radius: 4px;
  color: ${(props) => props.theme.common.mainHeadingColor};
  background: ${(props) => props.theme.common.secondaryColor};
`;

export const Button = styled.button`
  padding: 8px;
  border: none;
  border-radius: 4px;
  background: ${(props) => props.theme.common.tertiaryColor};
  color: #fff;
`;
