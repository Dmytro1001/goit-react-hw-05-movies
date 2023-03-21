import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: linear-gradient(to right, #ec7a7a 0%, #e0d8d8 50%, #e0d8d8 100%);
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 500;
  text-shadow: 1px 0px 1px #cccccc, 0px 1px 1px #eeeeee, 2px 1px 1px #cccccc,
    1px 2px 1px #eeeeee, 3px 2px 1px #cccccc, 2px 3px 1px #eeeeee,
    4px 3px 1px #cccccc, 2px 2px 2px rgba(206, 89, 55, 0);

  &.active {
    font-weight: 700;
    color: #f8e12a;
    text-shadow: 1px 0px 1px #999999, 0px 1px 1px #959595, 2px 1px 1px #999999,
      1px 2px 1px #959595, 3px 2px 1px #999999, 2px 3px 1px #959595,
      4px 3px 1px #999999, 3px 4px 1px #959595, 5px 4px 1px #999999,
      4px 5px 1px #959595, 6px 5px 1px #999999, 5px 6px 1px #959595,
      7px 6px 1px #999999, 2px 2px 2px rgba(206, 89, 55, 0);
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-right: 20px;
`;

export const BackBtn = styled(NavLink)`
  margin-left: 40px;
  max-width: 100px;
  padding: 5px 10px;
  border: none;
  outline: none;
  text-align: center;
  font-weight: 700;
  color: rgb(255, 255, 255);
  background: #222;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;
