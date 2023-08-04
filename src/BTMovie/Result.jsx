import React, { useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { chairBookingsAction, payAction } from "../store/BTMovie/action";

const Result = () => {
  const { chairBookings, chairBookeds } = useSelector((state) => state.btMovie);
  const dispatch = useDispatch();

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
          <div className="nonSelected"></div>
          <p>Ghế chưa đặt</p>
        </div>
      </div>

      {/* ================================================= */}

      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center text-sm font-light">
                <thead class="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                  <tr>
                    <th>Số Ghế</th>
                    <th>Giá</th>
                    <th>Hủy</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map ghế đang chọn  */}
                  {chairBookings.map((ghe) => (
                    <tr>
                      <td>{ghe.soGhe}</td>
                      <td>{ghe.gia}</td>
                      <td>
                        <button
                          className="px-3 py-1 bg-red-400"
                          onClick={() => {
                            dispatch(chairBookingsAction(ghe));
                          }}
                        >
                          Del
                        </button>
                      </td>
                    </tr>
                  ))}
                  {/* Tính tổng tiền */}
                  <tr>
                    <td>Tổng tiền</td>
                    <td>
                      {chairBookings.reduce(
                        (total, ghe) => (total += ghe.gia),
                        0
                      )}
                    </td>
                    <td>
                      <button
                        className="px-3 py-1 text-black bg-yellow-400"
                        onClick={() => {
                          dispatch(payAction());
                        }}
                      >
                        PAY
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================== */}

      {/* <div className="table">
        <thead>
          <tr className="grid grid-cols-3 gap-4">
            <th className="col-span-1">Số Ghế</th>
            <th className="col-span-1">Giá</th>
            <th className="col-span-1">Hủy</th>
          </tr>
        </thead>
        <tbody>
          {chairBookings.map((ghe) => (
            <tr>
              <td>{ghe.soGhe}</td>
              <td>{ghe.gia}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    dispatch(chairBookingsAction(ghe));
                  }}
                >
                  Hủy
                </button>
              </td>
            </tr>
          ))} */}

      {/* Tính tổng tiền */}
      {/* <tr>
            <td>Tổng tiền</td>
            <td>
              {chairBookings.reduce((total, ghe) => (total += ghe.gia), 0)}
            </td>
            <button
              className="px-3 py-1 text-black bg-yellow-400"
              onClick={() => {
                dispatch(payAction());
              }}
            >
              Pay
            </button>
          </tr>
        </tbody> */}
    </div>
  );
};

export default Result;
