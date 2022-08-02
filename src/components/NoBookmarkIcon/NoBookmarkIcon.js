import Icon from '@mdi/react';
import {mdiCardsHeartOutline} from '@mdi/js';

export default function NoBookmarkIcon() {
  return (
    <>
      <Icon path={mdiCardsHeartOutline} title="Kein Bookmark" size={0.75} color="black" />
    </>
  );
}
