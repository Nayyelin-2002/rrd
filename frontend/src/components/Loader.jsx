import React from "react";

const Loader = () => {
  return (
    <section className="loadercss">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Loader;
