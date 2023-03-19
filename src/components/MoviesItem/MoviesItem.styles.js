import styled from "@emotion/styled";

export const Item = styled.li`
padding:10px;
  border-radius: 2px;
  max-width:260px;
  display: flex;
  justify-content: center;
  align-items:center;
  background-color: #D5CEA3;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    &:hover {
      transform: scale(1.03);
      cursor: pointer;
    }
`;

export const Info = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

export const Image = styled.img`
  width: 240px;
  height: 320px;
  margin-bottom: 10px;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-size: 12px;
  font-weight: 700;
  color: #1A120B;
  text-shadow: #FF8303 1px 0 3px;
`;
export const Vote = styled.span`
  font-size: 15px;
  font-weight: 700;
  padding: 1px 5px;
  border-radius: 8px;
  background-color: #FF8303;
  color: #F0E3CA;
`;

