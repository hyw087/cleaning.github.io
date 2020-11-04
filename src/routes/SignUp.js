/**
 * /* eslint-disable
 *
 * @format
 */

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Navbar from "../Navbar";
import Terms from "./Terms";
import "../SignUp.css";
import InfoInput from "./InfoInput";
import SignUpComp from "./SignUpComp";
import Home from "./Home";
import { Link, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "73%",
    textAlign: "center",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  mainButton: {
    "margin-right": "8px",
    textDecoration: "none",
    color: "#000",
  },

  LogInButton: {
    color: "#fff",
    textDecoration: "none",
  },
}));

function getSteps() {
  return ["약관동의", "정보입력", "가입완료"];
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [checked, setChecked] = useState({
    agree01: false,
    agree02: false,
  });
  const steps = getSteps();

  const handleNext = () => {
    if (checked.agree01 && checked.agree02) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      alert("약관동의하셔야합니다.");
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const headerstyle = {
    textAlign: "center",
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <>
            <Terms
              onCheck={(checkedTarget) => {
                // console.dir(checkedTarget.target)
                // console.dir(checkedTarget);
                setChecked({
                  ...checked,
                  // 아이디가 agree01 , agree02일수도 있기때문에 []로로 감싸준다 <- 변수사용을위해서
                  // []안감싸줄때는 무조건 String으로만 쓸때
                  [checkedTarget.target.id]: checkedTarget.target.checked,
                });
                console.log([checkedTarget.target]);
                console.log([checkedTarget.target.checked]);
              }}
            />
          </>
        );
      case 1:
        return (
          <>
            <InfoInput />
          </>
        );
      case 2:
        return (
          <>
            <SignUpComp />
          </>
        );
      // default:
      // return 'Unknown stepIndex';
    }
  }
  console.log(checked);
  return (
    <div className="steper">
      {/* <Navbar /> */}
      <h1 style={headerstyle}>회원가입</h1>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel={false}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              {/* <Typography className={classes.instructions}> */}
              <Link to="/LogIn" className={classes.LogInButton}>
                {"로그인"}
              </Link>
              {/* </Typography> */}
              {/* <Button onClick={handleReset}>Reset</Button> */}
            </div>
          ) : (
            <div>
              {getStepContent(activeStep)}
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  {activeStep === 0 || activeStep === 1 ? (
                    "뒤로"
                  ) : (
                    <Link to="/" className={classes.mainButton}>
                      {"메인으로"}
                    </Link>
                  )}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {/* 완료 클릭시 Link줘서 회원가입이 완료되었습니다 나오게끔 */}
                  {activeStep === steps.length - 1 ? (
                    <Link to="/LogIn" className={classes.LogInButton}>
                      {"로그인"}
                    </Link>
                  ) : activeStep ? (
                    "가입하기"
                  ) : (
                    "다음"
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
