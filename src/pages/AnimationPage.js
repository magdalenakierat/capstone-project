import BreatheAnimation from '../components/BreatheAnimation/BreatheAnimation';
import CountDownTimer from '../components/CountDownTimer';

export default function AnimationPage({minSecs}) {
  return (
    <>
      <h1>Animation</h1>
      <BreatheAnimation />
      <CountDownTimer minSecs={minSecs} />
    </>
  );
}
