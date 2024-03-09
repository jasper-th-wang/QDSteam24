import cryingMinimon from '../../assets/crying-minimon.jpg';
import happyMinimon from '../../assets/happy-minimon.jpg';
import neutralMinimon from '../../assets/nutral-minimon.jpg';

const petModes = {
  0: neutralMinimon,
  1: happyMinimon,
  2: cryingMinimon,
};

function Pet({ mode }) {
  const petImage = petModes[mode];

  return <img src={petImage} alt="pet" width="100px" />;
}

export default Pet;
