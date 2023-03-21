import styled from '@emotion/styled';

export const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1280px;
  padding: 20px 40px;
  margin-right: auto;
  margin-left: auto;
`;

export const Poster = styled.img`
  width: 320px;
  margin-right: 15px;
  border-radius: 10px 0 0 10px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const About = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;

  & span {
    font-weight: 400;
  }
`;

export const Vote = styled.span`
  padding: 1px 5px;
  border-radius: 8px;
  background-color: #ff8303;
  color: #fff;

  & span {
    font-weight: 400;
  }
`;

export const Item = styled.li`
  /* margin-bottom: 10px; */
`;
