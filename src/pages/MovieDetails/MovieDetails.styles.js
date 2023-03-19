import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
display: flex;
flex-direction: wrap;
justify-content: center;
align-items: center;
padding: 20px;
`;

export const Link = styled(NavLink)`
  padding: 1px 5px;
  border-radius: 4px;
  /* text-decoration: none; */
  color: black;
  font-weight: 500;
  font-size: 20px;

  &.active {
    color: orangered;
    border-radius: 0;
    font-weight: 700;
    border-bottom: 4px solid orangered;
  }
`;

export const List = styled(NavLink)`
  display: flex;
justify-content: center;
align-items: center;
gap: 20px;
`;

export const Text = styled.p`
font-size: 20px;
font-weight: 700;
margin-right: 20px;`