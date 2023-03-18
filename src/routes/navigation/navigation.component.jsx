import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../components/contexts/user.context';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { CartContext } from '../../components/contexts/cart.context';

import { ReactComponent as AppLogo } from '../../assets/crown.svg';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  //console.log(currentUser);

  const handleUserSignOut = async () => {
    await signOutUser();
    //setCurrentUser(null); --AuthstateChangeListener Will take care of that
  };

  return (
    <Fragment>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <AppLogo />
        </Link>
        <div className='nav-links-container'>
          <Link to='/shop' className='nav-link'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={handleUserSignOut}>
              Sign Out
            </span>
          ) : (
            <Link to='/auth' className='nav-link'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
