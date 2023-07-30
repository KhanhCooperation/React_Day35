import React from "react";
import "./css/index.css";
const Result = () => {
  return (
    <div>
      <h1>This is result</h1>
      <h1>DANH SÁCH GHẾ BẠN CHỌN</h1>
      {/* Color  */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="selected"></div>
          <p>Ghế đã đặt</p>
        </div>
        <div className="flex gap-2">
          <div className="onChoice"></div>
          <p>Ghế đang chọn</p>
        </div>
        <div className="flex gap-2">
          <div className="nonSelected"></div>
          <p>Ghế chưa đặt</p>
        </div>
      </div>

      <div className="table">
        <table border="1">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
          <tr>
            <td>John</td>
            <td>30</td>
            <td>New York</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>25</td>
            <td>Los Angeles</td>
          </tr>
          <tr>
            <td>Mike</td>
            <td>40</td>
            <td>Chicago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Result;
