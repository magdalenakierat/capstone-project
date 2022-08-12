import CategoryList from './CategoryList';

export default {
  title: 'CategoryList',
  component: CategoryList,
};

export const Default = () => <CategoryList onFilter={() => console.log('Button was clicked.')} />;
