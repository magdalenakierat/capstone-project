import BackButton from '../components/BackButton';
import BreatheAnimation from '../components/BreatheAnimation/BreatheAnimation';
import CountDownTimer from '../components/CountDownTimer';
import {Link} from 'react-router-dom';

export default function AnimationPage({minSecs}) {
  return (
    <>
      <Link to="/">
        <BackButton />
      </Link>
      <BreatheAnimation />
      <CountDownTimer minSecs={minSecs} />
    </>
  );
}
