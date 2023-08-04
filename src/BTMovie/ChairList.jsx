import React from "react";
import Chair from "./Chair";
import { useSelector } from "react-redux";

const ChairList = ({ data }) => {
  const { chairBookings, chairBookeds } = useSelector((state) => state.btMovie);

  // useEffect(() => {
  //   let chairBookingsData = localStorage.getItem("chairBookings")
  //     ? JSON.parse(localStorage.getItem("chairBookings"))
  //     : {};
  //   console.log("chairBookingsData-useEffect:  ", chairBookingsData);
  //   const chairBookings = [...chairBookingsData];
  // }, []);

  // console.log(data);

  return (
    <div>
      <h1>This is chairList</h1>
      <div className="text-xl" style={{ overflow: "auto", height: "75vh" }}>
        {data.map((item, index) => {
          return (
            <div className="flex justify-center mb-2">
              <div className="flex gap-4" style={{ width: "40px" }}>
                <div>{item.hang}</div>
              </div>
              <div className="flex gap-4 ">
                {item.danhSachGhe.map((ghe, index) => {
                  return <Chair ghe={ghe} index={index}></Chair>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChairList;
