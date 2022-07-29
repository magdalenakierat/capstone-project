import styled from 'styled-components';
import Icon from '@mdi/react';
import {mdiCardsHeartOutline} from '@mdi/js';

export default function Bookmark() {
  return (
    <StyledBookmark>
      <Icon path={mdiCardsHeartOutline} title="Noch kein Favorit" size={0.75} color="black" />
    </StyledBookmark>
  );
}

const StyledBookmark = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  background-color: transparent;
`;
