import React from "react";
import data from "./data.json";
import ChairList from "./ChairList";
import Result from "./Result";

const BTMovie = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <ChairList data={data}></ChairList>
        </div>
        <div className="col-span-1">
          <Result></Result>
        </div>
      </div>
    </div>
  );
};

export default BTMovie;
