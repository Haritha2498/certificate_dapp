import React from "react";

const Nav = () => {
  return (
    <>
      <div className="flex gap-12 text-right float-right mt-10 mr-10">
        <a href="/">
          {" "}
          <input
            type="button"
            name="Home"
            id=""
            value="Home"
            className="w-32 h-10 bg-blue-500 text-white rounded-lg hover:bg-violet-400 "
          />
        </a>

        <br />
      </div>
      <br />
    </>
  );
};

export default Nav ;
