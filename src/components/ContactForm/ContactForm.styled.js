import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px 20px;
  border: 2.5px solid black;
  border-radius: 15px;
  width: 450px;
`;

export const FormInput = styled.input`
  margin-top: 10px;
  padding-left: 10px;
  height: 30px;
  border: 2px solid black;
  outline: none;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.71;
  letter-spacing: 0.01em;
  color: black;
`;

export const FormButton = styled.button`
  margin-top: 15px;
  align-items: center;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  margin-right: 10px;
  font-family: Inter, sans-serif;
  font-size: 16px;
  height: 38px;
  justify-content: center;
  line-height: 24px;
  width: 140px;
  padding: 0 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:after {
    background-color: #111;
    border-radius: 8px;
    content: '';
    display: block;
    height: 38px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(8px, 8px);
    transition: transform 0.2s ease-out;
    z-index: -1;
  }

  &:hover:after {
    transform: translate(0, 0);
  }

  &:active {
    background-color: #ffdeda;
    outline: 0;
  }

  &:hover {
    outline: 0;
  }
  @media (min-width: 768px) {
    & {
      padding: 0 20px;
    }
  }
`;
