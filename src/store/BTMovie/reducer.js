import { HANDLE_CHAIR_BOOKINGS, PAY } from "./actionType";

const initialState = {
  chairBookings: [],
  chairBookeds: [],
};

const btMovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HANDLE_CHAIR_BOOKINGS:
      const data = [...state.chairBookings];

      console.log("chairBookings -data: ", data);
      const dataIndex = data.findIndex((value) => value.soGhe == payload.soGhe);
      if (dataIndex == -1) {
        data.push(payload);
      } else {
        data.splice(dataIndex, 1);
      }
      return { ...state, chairBookings: data };
    case PAY:
      const payData = [...state.chairBookeds, ...state.chairBookings];
      return { ...state, chairBookeds: payData, chairBookings: [] };
    default:
      return state;
  }
};
export default btMovieReducer;

//TODO: onclick => đổi màu => thanh toán sẽ chọn => bỏ vào Array
//TODO: ==> Render
