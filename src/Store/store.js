import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './AuthReducer/reducer';
import { bagReducer } from './BagReducer/reducer';
import { wishlistReducer } from './WishlistReducer/reducer';
import { cartReducer } from "./CartReducer/reducer";
import { productReducer } from "./Products/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    wishlist: wishlistReducer,
    bag: bagReducer,
    product: productReducer,
    cart: cartReducer,
}
)
export const store = createStore(rootReducer, composeEnhancers (
    applyMiddleware(thunk)
  ));


console.log(store.getState());
