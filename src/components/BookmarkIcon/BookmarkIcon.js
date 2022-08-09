import Icon from '@mdi/react';
import {mdiCardsHeart} from '@mdi/js';

export default function BookmarkIcon() {
  return (
    <>
      <Icon path={mdiCardsHeart} title="Bookmark" size={0.75} color="var(--primary-color)" />
    </>
  );
}
