"use client";
import React from "react";
import { BasePage } from "../base-page";
import { MuiTheme } from "../mui-theme";
import  Filterbox  from "./Filterbox";
import {persons} from '../../js-modules/person-data'
const BecomeGuide = () => {
  console.log('persons',persons);
  return (
    <BasePage fluid={'true'} className={"border-2 border-dark "}>
      <MuiTheme>
      <Filterbox/>
      </MuiTheme>
    </BasePage>
  );
};

export default BecomeGuide;
