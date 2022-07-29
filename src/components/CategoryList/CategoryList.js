import styled from 'styled-components';

export default function CategoryList({onFilter}) {
  return (
    <StyledCategoryList>
      <StyledCategoryListItem>
        <StyledButton onClick={() => onFilter('Alle')}>Alle</StyledButton>
      </StyledCategoryListItem>
      <StyledCategoryListItem>
        <StyledButton onClick={() => onFilter('Bewegung')}>Bewegung</StyledButton>
      </StyledCategoryListItem>
      <StyledCategoryListItem>
        <StyledButton onClick={() => onFilter('Atemübung')}>Atem</StyledButton>
      </StyledCategoryListItem>
      <StyledCategoryListItem>
        <StyledButton onClick={() => onFilter('Augenübung')}>Augen</StyledButton>
      </StyledCategoryListItem>
      <StyledCategoryListItem>
        <StyledButton>Favoriten</StyledButton>
      </StyledCategoryListItem>
    </StyledCategoryList>
  );
}

const StyledCategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0 0.25rem 0;
`;

const StyledCategoryListItem = styled.li`
  list-style-type: none;
`;

const StyledButton = styled.button`
  border-radius: 1.25rem;
  border: none;
  background: #e6e8e9;
  color: #000;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem 0.5rem 0;
  &:hover {
    background-color: #000;
    color: #e6e8e9;
  }
`;
