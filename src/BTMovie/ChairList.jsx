import React from "react";

const ChairList = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>This is chairList</h1>;
      <div className="text-xl" style={{ overflow: "auto", height: "75vh" }}>
        {data.map((item) => {
          return (
            <div className="flex justify-center mb-2">
              <div className="flex gap-4" style={{ width: "40px" }}>
                <div>{item.hang}</div>
              </div>
              <div className="flex gap-4 ">
                {item.danhSachGhe.map((ghe, index) => {
                  return (
                    <div className="">
                      <div
                        className=""
                        style={{ width: "40px", border: "1px solid black" }}
                      >
                        {ghe.soGhe}
                      </div>
                    </div>
                  );
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
