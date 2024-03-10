import cryingMinimon from '../../assets/crying-minimon.jpg';
import happyMinimon from '../../assets/happy-minimon.jpg';
import neutralMinimon from '../../assets/nutral-minimon.jpg';
import congratulatingMinimon from '../../assets/congratulating-minimon.jpg';

const petModes = {
  0: neutralMinimon,
  1: happyMinimon,
  2: cryingMinimon,
  3: congratulatingMinimon,
};

function Pet({ mode }) {
  const petImage = petModes[mode];
  if (mode === 3) {
    return <img src={petImage} alt="pet" width="300px" />;
  } else {
      return <img src={petImage} alt="pet" width="100px" />;
  }
}

export default Pet;
