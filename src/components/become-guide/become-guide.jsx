"use client";
import React from "react";
import { BasePage } from "../base-page";
import { MuiTheme } from "../mui-theme";
import  Filterbox  from "./Filterbox";
import {persons} from '../../js-modules/person-data'
import { PersonsCard } from ".";
const BecomeGuide = () => {
  console.log('persons',persons);
  return (
    <BasePage fluid={'true'} className={"border-2 border-dark "}>
      <MuiTheme>
      <Filterbox/>
      <PersonsCard></PersonsCard>
      </MuiTheme>
    </BasePage>
  );
};

export default BecomeGuide;
