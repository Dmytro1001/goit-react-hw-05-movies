import styled from '@emotion/styled';

export const Item = styled.li`
  padding: 10px;
  border-radius: 5px;
  max-width: 302px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffd59a;
  box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 550ms cubic-bezier(0.4, 0, 0.2, 1),
    color 550ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #bfa074;
    transform: scale(1.03);
    cursor: pointer;

    & h2 {
      color: #ffffff;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 288px;
  height: 384px;
  margin-bottom: 10px;
  object-fit: cover;
  background: #fff;
`;

export const Title = styled.h2`
  font-size: 12px;
  font-weight: 700;
  color: #1a120b;
  text-shadow: #ff8303 1px 0 3px;
  transition: color 550ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const Vote = styled.span`
  font-size: 15px;
  font-weight: 700;
  padding: 1px 5px;
  border-radius: 8px;
  background-color: #ff8303;
  color: #f0e3ca;
`;
