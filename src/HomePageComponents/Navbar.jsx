import React, { useState } from 'react';
import styles from './navbar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { Profile } from './Profile';
import PopupComponent from './PopupComponent';
import { useSelector } from 'react-redux';
import PopupComponentWomen from './PopupComponentWomen';

import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [item, setItem] = useState('');

  const numberOfItems = useSelector((state) => state.bag.length);

  const isLoggedIn = useSelector((state) => state.auth.status);

  const numberStyle = {
    display: 'inline-block',
    position: 'relative',
    bottom: '14px',
    right: '8px',
    backgroundColor: '#f16565',
    borderRadius: '50%',
    color: 'white',
    width: '20px',
    fontSize: '14px',
    padding: '2px',
  };

  const style = {
    color: 'rgb(151, 148, 148)',
    padding: '6px 14px',
    cursor: 'pointer',
  };

  const iconStyle = {
    color: 'rgb(122, 122, 122)',
  };

  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const [women, setWomen] = useState(false);

  const handelSearch = (e) => {
    setItem('');
  };

  const goToWishlist = (e) => {
    navigate('/wishlist');
  };
  const { cart } = useSelector((state) => ({
    cart: state.cart.cart,
  }));
  return (
    <>
      <div className={styles.navbar}>
        <Link to="/">
          <img
            className={styles.logo}
            src="https://images.news18.com/ibnlive/uploads/2021/01/1611996262_ynt.jpeg?im=FitAndFill,width=1200,height=900"
            alt="logo"
          />
        </Link>
        <div
          className={styles.link}
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          MEN
        </div>

        <div
          className={styles.link1}
          onMouseEnter={() => setWomen(true)}
          onMouseLeave={() => setWomen(false)}
        >
          WOMEN
        </div>
        <div
          className={styles.link}
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          KIDS
        </div>
        <div
          className={styles.link}
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          HOME & LIVING
        </div>
        <div
          className={styles.link}
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          BEAUTY
        </div>
        <div
          className={styles.link}
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          STUDIO
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.search}>
            {/* <NavLink to="/search/q="> */}
            <SearchIcon
              sx={style}
              onClick={() => navigate(`/search/${item}`)}
            />
            {/* </NavLink> */}
            <input
              className={styles.input}
              value={item}
              type="text"
              onChange={(e) => setItem(e.currentTarget.value)}
              placeholder="Search for products, brands and more"
            />
          </div>
        </div>
        <div
          className={styles.iconDiv}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          <PersonOutlineIcon sx={iconStyle} />
          <div className={styles.text}>
            <div>Profile</div>
          </div>
        </div>
        <div className={styles.iconDiv} onClick={goToWishlist}>
          <FavoriteBorderIcon sx={iconStyle} />
          <div className={styles.text}>Wishlist</div>
        </div>
        {isLoggedIn ? (
          <div className={styles.iconDiv1} onClick={() => navigate('/cart')}>
            <ContentPasteIcon sx={iconStyle} />
            <p style={numberStyle}>{cart.length}</p>
            <div
              style={{ textAlign: 'left', paddingLeft: '10px' }}
              className={styles.text}
            >
              Bag
            </div>
          </div>
        ) : (
          <div
            className={styles.iconDiv1}
            onClick={() => navigate('/emptycart')}
          >
            <ContentPasteIcon sx={iconStyle} />
            <div style={{ textAlign: 'center' }} className={styles.text}>
              Bag
            </div>
          </div>
        )}
      </div>
      <Profile visible={visible} />
      <PopupComponentWomen isVisible={women} />
      <PopupComponent isVisible={isVisible} />
    </>
  );
};

export default Navbar;
