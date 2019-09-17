import React from "react";
import * as rtl from 'react-testing-library';
import { render } from '@testing-library/react';
import Display from "../display/Display";

test("Testing for displaying open and unlocked display", () => {
  rtl.render(<Display closed={false} locked={false}/>)
  //console.log(display);
});

test("Testing for displaying closed and unlocked in display", () => {
    rtl.render(<Display closed={true} locked={false}/>);
    //console.log(display);
  });

test("Testing for displaying closed and locked in display", () => {
    rtl.render(<Display closed={true} locked={true}/>);
//console.log(display);
});

test("Testing for not displaying open and locked in display", () => {
    rtl.render(<Display closed={false} locked={true}/>);
//console.log(display);
});