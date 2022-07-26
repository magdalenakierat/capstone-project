import styled from 'styled-components';

export default function CategoryList() {
  return (
    <StyledCategoryList>
      <StyledCategoryListItem>Alle</StyledCategoryListItem>
      <StyledCategoryListItem>Atem</StyledCategoryListItem>
      <StyledCategoryListItem>Augen</StyledCategoryListItem>
      <StyledCategoryListItem>Bewegung</StyledCategoryListItem>
    </StyledCategoryList>
  );
}

const StyledCategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0 0.25rem 0;
`;

const StyledCategoryListItem = styled.li`
  border-radius: 1.25rem;
  background: #e6e8e9;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  list-style-type: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem 0.25rem 0;
`;
