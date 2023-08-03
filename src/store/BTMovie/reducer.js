import { HANDLE_CHAIR_BOOKINGS } from "./actionType";

const initialState = {
  chairBookings: [],
  chairBookeds: [],
};

const btMovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HANDLE_CHAIR_BOOKINGS:
      console.log("CHBK: ", state.chairBookings);
      console.log("CHBKed: ", state.chairBookeds);
      const data = [...state.chairBookings];

      console.log("chairBookings -data: ", data);
      const dataIndex = data.findIndex((value) => value.soGhe == payload.soGhe);
      if (dataIndex == -1) {
        data.push(payload);
      } else {
        data.splice(dataIndex, 1);
      }
      return { ...state, chairBookings: data };
    default:
      return state;
  }
};
export default btMovieReducer;

//TODO: onclick => đổi màu => thanh toán sẽ chọn => bỏ vào Array
//TODO: ==> Render
