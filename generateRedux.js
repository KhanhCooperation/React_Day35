// Generate redux:
//* B1: npm i redux react-redux
// Xong nho check package.json

//* B2: Tao folder store => index.js
//? paste:
//?     import { createStore } from "redux";

//?     export const store = createStore();

//* B3: Trong file index.js
//? import { Provider } from "react-redux";

//* B4: bỏ vào index.js:
// <Provider store={store}>
//     <App />
//   </Provider>
//   !! Nhớ import store

//* B5:Tạo rootReducer.js
// =>
//?  import { combineReducers } from "redux";

//? export const rootReducer = combineReducers;

//* B6: Bật index.js
//? export const store = createStore(rootReducer);

//* B7: Giờ để sử dụng, ta tạo một thư mục riêng của bài tập đó trong store, đặt tên file là reducer.js

//* B8: Trong reducer.js
//?         const initialState ={}

//?         const tenfileReducer = (state= initialState, action) =>{

//?         }
//?         export default tenfileReducer;

// rootReducer Có vai trò như 1 state tổng được trả về từ combineReducers

//* B9: import vào trong rootReducer.js (bỏ vào trong combine:)

//?     import tenfileReducer from "./BTMovie/reducer";

//?     export const rootReducer = combineReducers({
//?     tenfile: tenfileReducer,
//?     });
