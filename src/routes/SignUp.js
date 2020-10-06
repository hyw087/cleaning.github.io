import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from '../Navbar';
import Terms from './Terms';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
        textAlign : "center",
        marginRight : "auto",
        marginLeft : "auto",
        marginTop : "0",
        marginBottom : "0",

    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['약관동의', '정보입력', '가입완료'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
        return (
            <>
                <Terms />
            </>
        );
        case 1:
        return 'What is an ad group anyways?';
        case 2:
        return 'This is the bit I really care about!';
        default:
        return 'Unknown stepIndex';
    }
}

export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const headerstyle =  {
        textAlign : "center",
    }

    return (
    <div>
        <Navbar />
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
                <Typography className={classes.instructions}>All steps completed</Typography>
                {/* <Button onClick={handleReset}>Reset</Button> */}
            </div>
            ) : (
            <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div>
                <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                >
                    뒤로
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                    {/* 완료 클릭시 Link줘서 회원가입이 완료되었습니다 나오게끔 */}
                    {activeStep === steps.length - 1 ? '완료' : '다음'}
                </Button>
                </div>
            </div>
            )}
        </div>
        </div>
    </div>
    );
}
