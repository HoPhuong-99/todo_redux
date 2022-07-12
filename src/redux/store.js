import { legacy_createStore as createStore } from "redux";
import rootReducer from './reducer'
import {composeWithDevTools} from 'redux-devtools-extension'
// createStore nhận 3 giá trí
// rootReducer => dùng để cập nhật function
// initValue => set giá trị mặc định nào đó
// enhancers =>
const composeEnhancers = composeWithDevTools();
const store = createStore(rootReducer,composeEnhancers);


export default store;