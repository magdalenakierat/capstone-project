import Bookmark from './Bookmark';

export default {
  title: 'Bookmark',
  component: Bookmark,
};

export const Default = () => <Bookmark onBookmark={() => console.log('Bookmark was clicked.')} />;
