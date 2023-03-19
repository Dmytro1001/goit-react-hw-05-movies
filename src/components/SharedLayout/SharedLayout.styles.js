import styled from "@emotion/styled";
import { SiThemoviedatabase } from "react-icons/si";
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Header = styled.header`
  padding: 8px 10px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;  
`;

export const Logo = styled(SiThemoviedatabase)`
  width: 50px;
  height: 50px;
  transition: opacity 250ms;
  margin-right: 15px;
  color: #537FE7;
  transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1);;
  
  &:hover,
  &:focus {
    color: #E7B10A;
transform: scale(1.1) rotate(360deg);
  }
`;

export const WrapperNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & ul {
    display: flex;
  } 

`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 500;
  text-shadow: 1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC, 2px 2px 2px rgba(206,89,55,0);

  &.active {
    color: #FDDB3A; 
    text-shadow: 1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC, 2px 2px 2px rgba(206,89,55,0);      
  }
`;