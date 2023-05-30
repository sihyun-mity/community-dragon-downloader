import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 8px;
`;

export const InputElement = styled.input`
  width: 56vw;
  height: 48px;
  padding: 6px 16px;
  outline: 0 solid transparent;
  border: 0;
  border-radius: 99px;
  box-sizing: border-box;
  transition: outline 160ms ease-in-out;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;

  :focus {
    outline: 3px solid #9ba4b5;
  }
`;

export const NextButton = styled.button<{ isActive: boolean }>`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-content: center;
  background: transparent;
  margin: 0;
  border: 0;
  border-radius: 99px;
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'not-allowed')};
`;

export const ImageBox = styled.img`
  height: 48px;
  object-fit: contain;
  pointer-events: none;
`;
