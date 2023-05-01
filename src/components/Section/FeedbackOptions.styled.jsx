import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 6px;
  align-items: center;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  /* flex-basis: calc((50%-10px) / 3); */
`;

export const Button = styled.button`
  text-align: center;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid;
  border-radius: 2px;

  &:focus,
  &:hover {
    cursor: pointer;
    background-color: #5a7ec5;
    transform: scale(1.1);
  }
`;
