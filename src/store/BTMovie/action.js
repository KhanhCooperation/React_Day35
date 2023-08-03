import { HANDLE_CHAIR_BOOKINGS } from "./actionType";

export const chairBookingsAction = (payload) => {
  return {
    type: HANDLE_CHAIR_BOOKINGS,
    payload,
  };
};
