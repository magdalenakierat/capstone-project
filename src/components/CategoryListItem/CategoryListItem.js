import styled from 'styled-components';

export default function CategoryListItem() {
  return (
    <>
      <StyledCategoryListItem>Alle</StyledCategoryListItem>
      <StyledCategoryListItem>Atem</StyledCategoryListItem>
      <StyledCategoryListItem>Augen</StyledCategoryListItem>
      <StyledCategoryListItem>Bewegung</StyledCategoryListItem>
    </>
  );
}

const StyledCategoryListItem = styled.li`
  border-radius: 1.25rem;
  background: #e6e8e9;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  list-style-type: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem 0.5rem 0;
`;
