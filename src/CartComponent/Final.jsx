import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import styles from './choosepayment.module.css';
import { AuthContext } from '../Logincomponent/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: 100;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 600,
  bgcolor: '',
  border: '2px solid white',
  p: 2,
  px: 4,
  pb: 3,
};

export default function Final() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { enterCapche, authCapche, authenticateCapche } =
    React.useContext(AuthContext);
  const navigate = useNavigate();
  const handle_Authenticate = (enter_capche) => {
    authenticateCapche(enterCapche);
    handleOpen();
    setTimeout(() => {
      cart.length = 0;
      navigate('/');
    }, 2000);
  };

  const { cart } = useSelector((state) => ({
    cart: state.cart.cart,
  }));
  return (
    <div>
      <button
        type="button"
        onClick={() => handle_Authenticate(enterCapche)}
        className={styles.payment_place_order}
      >
        PLACE ORDER
      </button>
      {authCapche ? (
        <React.Fragment>
          <StyledModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={open}
            onClose={handleClose}
            BackdropComponent={Backdrop}
          ></StyledModal>{' '}
        </React.Fragment>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </div>
  );
}
