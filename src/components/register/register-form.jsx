"use client";
import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const RegisterForm = () => {
  const [checkPolicy, setCheckPolicy] = useState(false);
  return (
    <div className="grid place-content-center">
      <Card sx={{ padding: 5 }} className="rounded-lg">
        <div className="w-full text-center">
          <h1 className="text-3xl">
            به <span className="text-teal-400">BeMe</span> خوش آمدید
          </h1>
        </div>
        <div className="w-full text-center py-5">
          <h4 className="text-2xl">
            برای ثبت نام لطفا شماره تلفن خود را وارد کنید
          </h4>
        </div>

        <TextField
          id="outlined-basic"
          required
          label="شماره تلفن"
          variant="outlined"
          className="w-full"
        />

        <FormGroup className="my-5">
          <div className="w-full text-center mr-0">
            <FormControlLabel
              required
              control={<Checkbox />}
              className="w-full mr-0"
              label="شرایط و قوانین BeMe را میذیرم"
              onChange={(e) => setCheckPolicy(e.target.checked)}
              value={checkPolicy}
            />
          </div>
        </FormGroup>

        <Button
          variant="contained"
          disabled={!checkPolicy}
          className="w-full text-base md:text-2xl md:p-3 borders border-solid border-teal-400 rounded-lg bg-teal-400 transition duration-200 ease-out hover:ease-in hover:bg-teal-300"
        >
          ثبت نام
        </Button>
      </Card>
    </div>
  );
};

export default RegisterForm;
