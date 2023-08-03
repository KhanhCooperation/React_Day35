import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { chairBookingsAction } from "../store/BTMovie/action";

const Chair = (props) => {
  const { ghe, index } = props;
  const dispatch = useDispatch();
  const { chairBookings, chairBookeds } = useSelector((state) => state.btMovie);
  return (
    <button
      key={index}
      className={cn("cursor-pointer hover:bg-gray-300 rounded", {
        onChoice: chairBookings.find((value) => value.soGhe == ghe.soGhe),
      })}
      style={{ width: "40px", border: "1px solid white" }}
      onClick={() => dispatch(chairBookingsAction(ghe))}
    >
      {ghe.soGhe}
    </button>
  );
};

export default Chair;
