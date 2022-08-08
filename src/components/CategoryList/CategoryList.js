import styled from 'styled-components';

export default function CategoryList({onFilter, filter}) {
  const filterOptions = ['Alle', 'Bewegung', 'Atemübung', 'Augenübung', 'Favoriten'];

  return (
    <StyledCategoryList>
      {filterOptions.map(option => {
        return (
          <StyledCategoryListItem key={option}>
            <StyledButton isFilter={filter === option} onClick={() => onFilter(option)}>
              {option}
            </StyledButton>
          </StyledCategoryListItem>
        );
      })}
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
  background: ${props => (props.isFilter ? '#6d81fe' : 'rgba(109, 129, 254, 0.15)')};
  color: ${props => (props.isFilter ? '#fff' : '#000')};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem 0.5rem 0;
  &:hover {
    background-color: #6d81fe;
    color: #fff;
  }
`;
