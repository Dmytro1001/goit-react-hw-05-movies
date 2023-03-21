import styled from "@emotion/styled";
import { SiThemoviedatabase } from "react-icons/si";
import { NavLink } from 'react-router-dom';



export const HeaderContainer = styled.header`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
 background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
`;

export const Container = styled.header`
max-width: 1280px;
padding: 8px 25px;
  /* margin-bottom: 20px; */
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
  padding: 8px 15px;
 }
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
  text-shadow: 1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 2px 2px 2px rgba(206,89,55,0);

  &.active {
    font-weight: 700;
    color: #F8E12A; 
    text-shadow: 1px 0px 1px #999999,
     0px 1px 1px #959595,
      2px 1px 1px #999999,
       1px 2px 1px #959595,
        3px 2px 1px #999999,
         2px 3px 1px #959595,
          4px 3px 1px #999999,
           3px 4px 1px #959595,
            5px 4px 1px #999999,
             4px 5px 1px #959595,
              6px 5px 1px #999999,
               5px 6px 1px #959595,
                7px 6px 1px #999999,
                 2px 2px 2px rgba(206,89,55,0);      
  }
`;