import styled from 'styled-components';
import CategoryListItem from '../CategoryListItem/CategoryListItem';

export default function CategoryList() {
  return (
    <StyledCategoryList>
      <CategoryListItem></CategoryListItem>
    </StyledCategoryList>
  );
}

const StyledCategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0 0.25rem 0;
`;
