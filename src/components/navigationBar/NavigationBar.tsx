import {
  NavigationDiv,
  NavigationTabIconStyle,
  NavigationIcon,
  NavigationIconTitle,
} from './navigationBarStyles';
import {
  faMagnifyingGlass,
  faCommentDots,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type NavigationProps = {
  title: string;
  icon: IconProp;
  isActive: boolean;
};

const NavigationTabIcon = ({ title, icon, isActive }: NavigationProps) => {
  return (
    <NavigationTabIconStyle>
      <NavigationIcon isActive={isActive}>
        <FontAwesomeIcon icon={icon} />
      </NavigationIcon>
      <NavigationIconTitle isActive={isActive}>{title}</NavigationIconTitle>
    </NavigationTabIconStyle>
  );
};

function Footer() {
  return (
    <NavigationDiv>
      <NavigationTabIcon
        title={'매칭'}
        icon={faMagnifyingGlass}
        isActive={true}
      />
      <NavigationTabIcon title={'채팅'} icon={faCommentDots} isActive={false} />
      <NavigationTabIcon title={'마이페이지'} icon={faUser} isActive={false} />
    </NavigationDiv>
  );
}

export default Footer;
