import Card from '../Card/Card';

export default function Cards(props) {
  return (
    <div>
      <>
        {props.excercises.map(excercise => (
          <Card
            key={excercise.id}
            category={excercise.category}
            description={excercise.description}
            repeat={excercise.repeat}
            duration={excercise.duration}
          />
        ))}
      </>
    </div>
  );
}
