import CountDownTimer from './CountDownTimer';

const exampleDuration = {minutes: 1};

export default {
  title: 'CountDownTimer',
  component: CountDownTimer,
};

export const Default = () => <CountDownTimer exerciseDuration={exampleDuration.minutes} />;
