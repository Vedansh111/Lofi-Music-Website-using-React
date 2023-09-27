import { useSelector, useDispatch } from "react-redux";
import {changeDayNight} from '../../store/slice/modeSlice';
import "./styles.scss";
import { Link } from "react-router-dom";
import DarkLightSwitch from "../../components/DarkLightSwitch";
import RainToggleButton from "../../components/RainToggleButton";


const Header = () => {
  const daynight = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  
  const { mode } = daynight;


  const daynightHandler = () => {
    dispatch(changeDayNight(mode));
  };

  return (
    <nav className='wrap'>

      <Link to='/'>
        <img src='/assets/icons/lofi-logo.gif' alt='' />
      </Link>
      <div className='nav-menu'>
        <RainToggleButton />
      </div>
      <div className='nav-menu'>
        <div onClick={daynightHandler}>
          <DarkLightSwitch theme={mode} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
