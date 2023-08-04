import { createStoreHook } from "react-redux";
import { HANDLE_CHAIR_BOOKINGS, PAY } from "./actionType";

const initialState = {
  chairBookings: [],
  chairBookeds: [],
};
//*Lấy data từ local xuống để load ra
//kiểm tra xem item có sẵn kh

const btMovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //payload = ghe
    case HANDLE_CHAIR_BOOKINGS:
      //*============================================================

      //*=============================================================
      const data = [...state.chairBookings];
      console.log(state);
      console.log("chairBookings -data: ", data);
      const dataIndex = data.findIndex((value) => value.soGhe == payload.soGhe);
      if (dataIndex == -1) {
        data.push(payload);
      } else {
        data.splice(dataIndex, 1);
      }

      //Đưa lên local:
      let dataString = JSON.stringify(data);
      localStorage.setItem("chairBookings", dataString);

      return { ...state, chairBookings: data };

    case PAY:
      const payData = [...state.chairBookings, ...state.chairBookeds];
      console.log("payData:   ", payData);

      //Đưa lên local:
      let payDataString = JSON.stringify(payData);
      localStorage.setItem("chairBookeds", payDataString);

      return { ...state, chairBookeds: payData, chairBookings: [] };
    default:
      return state;
  }
};
export default btMovieReducer;

//TODO: onclick => đổi màu => thanh toán sẽ chọn => bỏ vào Array
//TODO: ==> Render
