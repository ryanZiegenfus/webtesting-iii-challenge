import React from "react";
import { render } from '@testing-library/react'
import * as rtl from "react-testing-library"
import Display from "../display/Display";
import Controls from '../controls/Controls';

test("Testing for displaying display on dashboard", () => {
  rtl.render(<Display />);
  //console.log(display);
});

test("Testing for displaying controls on dashboard", () => {
    rtl.render(<Controls />);
    //console.log(controls);
  });