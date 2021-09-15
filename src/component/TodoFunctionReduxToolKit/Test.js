import React, { useState } from "react";
// style
import "./style/styleTodoReduxToolkit.css";

function Test(props) {
  const text = props;
  return (
    <>
      <form>
        <input type="text" placeholder={text.text} />
      </form>
    </>
  );
}

export default Test;

Test.propTypes = {};

Test.defaultPros = {};
