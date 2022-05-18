import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './popup.module.css';

const Head = ({ color, title }) => {
  return (
    <li
      className={styles.item}
      style={{ color, fontWeight: 'bold', paddingTop: '20px' }}
    >
      {title}
    </li>
  );
};

const PopupComponent = ({ isVisible }) => {
  const navigate = useNavigate();

  const goToShirts = () => {
    navigate('/men-tshirts');
  };

  const goToJeans = () => {
    navigate('/men-jeans');
  };

  const [mouseOver, setMouseOver] = useState(false);

  return (
    <Box>
      {/* <div onMouseEnter={() => setMouseOver(true) } onMouseLeave={() => setMouseOver(false)} className={ (isVisible || mouseOver) ? styles.outerContainer : styles.displayNone}> */}
      <div
        className={
          isVisible || mouseOver ? styles.outerContainer : styles.displayNone
        }
      >
        {/* <div className={styles.outerContainer}> */}
        {/* <div className={styles.innerContainer}> */}
        <div
          onMouseEnter={() => setMouseOver(true)}
          onMouseLeave={() => setMouseOver(false)}
          className={
            isVisible || mouseOver ? styles.innerContainer : styles.displayNone
          }
        >
          <ul className={styles.list}>
            <Head color="red" title="Topware" />
            <li className={styles.item} onClick={goToShirts}>
              <b>Shirts</b>
            </li>
            <li className={styles.item}>Casual Shirts </li>
            <li className={styles.item}>Formal Shirts</li>
            <li className={styles.item}>Sweatshirts</li>
            <li className={styles.item}>Sweaters</li>
            <li className={styles.item}>Jacktes</li>
            <li className={styles.item}>Blazers & Coats</li>
            <li className={styles.item}>Suits</li>
            <li className={styles.item}>Rain Jackets</li>
            <Head color="red" title="Indian & Festive Wear" />
            <li className={styles.item}>Kurtas & Kurta Sets</li>
            <li className={styles.item}>Sherwanis</li>
            <li className={styles.item}>Nehru Jackets</li>
            <li className={styles.item}>Dhotis</li>
          </ul>
          <ul className={styles.list}>
            <Head color="red" title="Bottomware" />
            <li className={styles.item} onClick={goToJeans}>
              Jeans
            </li>
            <li className={styles.item}>Casual Trousers</li>
            <li className={styles.item}>Formal Trousers</li>
            <li className={styles.item}>Shorts</li>
            <li className={styles.item}>Track Pants & Joggers</li>
            <Head color="red" title="Innerwear & Sleeper" />
            <li className={styles.item}>Briefs & Trunks</li>
            <li className={styles.item}>Boxers</li>
            <li className={styles.item}>Vests</li>
            <li className={styles.item}>Sleepwear</li>
            <li className={styles.item}>Sleeperwear & Loungerwear</li>
            <Head color="red" title="Plus Size" />
          </ul>
          <ul className={styles.list}>
            <Head color="red" title="Topware" />
            <li className={styles.item}>T-Shirts</li>
            <li className={styles.item}>Casual Shirts </li>
            <li className={styles.item}>Formal Shirts</li>
            <li className={styles.item}>Sweatshirts</li>
            <li className={styles.item}>Sweaters</li>
            <li className={styles.item}>Jacktes</li>
            <li className={styles.item}>Blazers & Coats</li>
            <li className={styles.item}>Suits</li>
            <li className={styles.item}>Rain Jackets</li>
          </ul>
          <ul className={styles.list}>
            <Head color="red" title="Footware" />
            <li className={styles.item}>Sports Shoes</li>
            <li className={styles.item}>Casual Shoes</li>
            <li className={styles.item}>Formal Shoes</li>
            <li className={styles.item}>Sneakers</li>
            <li className={styles.item}>Sandles</li>
            <li className={styles.item}>Jacktes</li>
            <Head color="red" title="Personal Care & Grooming" />
            <Head color="red" title="Sunglasses & Frames" />
            <Head color="red" title="Watches  " />
          </ul>
          <ul className={styles.list}>
            <Head color="red" title="Fashion Accessorites" />
            <li className={styles.item}>Wallets</li>
            <li className={styles.item}>Belts</li>
            <li className={styles.item}>Trimmers</li>
            <li className={styles.item}>Deodorants</li>
            <li className={styles.item}>Formal Shirts</li>
            <li className={styles.item}>Sweatshirts</li>
            <li className={styles.item}>Sweaters</li>
            <li className={styles.item}>Jacktes</li>
            <Head color="red" title="Basg & Bagpacks" />
            <Head color="red" title="Luggages & Trolleys" />
          </ul>
        </div>
      </div>
    </Box>
  );
};

export default PopupComponent;
