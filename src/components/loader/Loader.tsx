import { ReactComponent as RoommateLogo } from 'assets/roommate.svg';
import { LoaderStyle } from 'design/loader/loderStyles';
import { LoaderCircleStyle } from '../../design/loader/loderStyles';

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '0%',
  },
  end: {
    y: '100%',
  },
};

const loadingCicleTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: 'easeInOut',
};

function Loader() {
  return (
    <>
      <LoaderStyle
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <LoaderCircleStyle
          variants={loadingCircleVariants}
          transition={loadingCicleTransition}
        />
        <LoaderCircleStyle
          variants={loadingCircleVariants}
          transition={loadingCicleTransition}
        />
        <LoaderCircleStyle
          variants={loadingCircleVariants}
          transition={loadingCicleTransition}
        />
      </LoaderStyle>
      <div style={{ height: '15px', width: '10px' }}></div>
      <RoommateLogo height={38} />;
    </>
  );
}

export default Loader;
