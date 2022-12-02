import { useState } from "react";

export function forms(steps) {
    const [step, setStep] = useState(0)

    function previousStep(i) {
        if(step === 0) return
        setStep(i)
    }
    
    function nextStep (i, e) {
        if(e) e.preventDefault();
        if(step === steps.length - 1) return
        setStep(i)
    }

    return{
        step,
        currentComponent: steps[step],
        previousStep,
        nextStep,
        isFirstStep: step === 0 ? true : false,
        isLastStep: step+1 === steps.length ? true : false
    }
}