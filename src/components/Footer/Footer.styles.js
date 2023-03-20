import styled from "@emotion/styled";
import { BsGithub } from 'react-icons/bs';

export const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;
  color: #fff;
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  box-shadow: 0 3px 5px 0 rgb(0 4 56 / 50%);
  z-index: 9;
`;

export const DeveloperData = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  font-weight: 500;
`;

export const Svg = styled(BsGithub)`
  margin-left: 5px;
  color: #fff;;
  width: 25px;
  height: 25px;
  transform: scale(1);
  transition: all 250ms;

  animation: mymove 8s linear 1s infinite;
  :hover {
    opacity: 0.8;
    transform: scale(1.1);
    animation: normal;
  }

  @keyframes mymove {
  50% {transform: rotateY(180deg);}
}
`;
