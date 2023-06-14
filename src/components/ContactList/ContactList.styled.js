import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  width: 300px;
  margin-top: 10px;
`;

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const ContactsName = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.71;
  letter-spacing: 0.01em;
  color: black;
`;

export const ContactsPhone = styled.span``;

export const ContactsButton = styled.button`
align-items: center;
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
  border: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: "Codec cold",sans-serif;
  font-size: 10px;
  font-weight: 700;
  height: 28px;
  justify-content: center;
  letter-spacing: .2px;
  line-height: 1;
  max-width: 100%;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 3px;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  
  &:active {
  outline: 0;
}

&:hover {
  outline: 0;
}

& span {
  transition: all 300ms;
}

&:hover span {
  transform: scale(.8);
  opacity: .75;
}

@media screen and (max-width: 991px) {
  & {
    font-size: 15px;
    height: 50px;
  }


  & span {
    line-height: 10px;
  }

  `;
