import { createStore } from 'redux';
import useUserStore from './user/store';
import reducer from './reducer';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = createStore(reducer);
const persister = 'Free';

export { store, persister };
export {useUserStore};
