import styled from 'styled-components';

export const OptionBtn = styled.button`
  border: none;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 3px;
  background-color: blue;
  color: white;
  font-size: 16px;
  box-shadow: 2px 2px 3px grey;
  &:hover,
  &:focus {
    scale: 1.05;
  }
`;
export const OptionContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;
