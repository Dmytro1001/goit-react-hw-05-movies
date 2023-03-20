import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 0 15px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 0 10px 10px 0;
  background-color: #d0d0d0;
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: 1px solid #6e6e6e;
  border-radius: 10px 0 0 10px;
  border-right: none;
  outline: none;
  padding: 9px 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
