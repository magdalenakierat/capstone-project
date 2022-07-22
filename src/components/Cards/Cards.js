import Card from '../Card/Card';

export default function Cards(props) {
  return (
    <>
      <Card
        category={props.excercises[0].category}
        description={props.excercises[0].description}
        repeat={props.excercises[0].repeat}
        duration={props.excercises[0].duration}
      />
      <Card
        category={props.excercises[1].category}
        description={props.excercises[1].description}
        repeat={props.excercises[1].repeat}
        duration={props.excercises[1].duration}
      />
      <Card
        category={props.excercises[2].category}
        description={props.excercises[2].description}
        repeat={props.excercises[2].repeat}
        duration={props.excercises[2].duration}
      />
    </>
  );
}
