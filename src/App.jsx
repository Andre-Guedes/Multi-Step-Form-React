import { HiChevronDoubleLeft, HiChevronDoubleRight, HiPaperAirplane } from "react-icons/hi2";

import UserData from "./components/UserData";
import Research from "./components/Research";
import Summary from "./components/Summary";

import {forms} from "./hooks/forms"

import './App.css';
import './form.css';
import './button.css';
import { useState } from "react";

const formData = {
  name: "",
  email: "",
  phone: "",
  review: "",
  comment: ""
}

function App() {
  const [data, setdata] = useState(formData)
  
  const updateFieldHandler = (key, value) => {
    setdata((prev) => {
      return{...prev, [key]: value}
    })
  }

  const formStep = 
    [<UserData data={data} updateFieldHandler={updateFieldHandler}/>, 
    <Research data={data} updateFieldHandler={updateFieldHandler}/>, 
    <Summary data={data} />]

  const {currentComponent, step, previousStep, nextStep, isFirstStep, isLastStep} = forms(formStep)
  
  return (
    <>
      <div className='header'>
        <h2>Preencha seus dados abaixo</h2>
        <p>Mantenha seu dados atualizados</p>
      </div>
      <div className="form-container">
        <div className="form-header">
          <h4 className="actived">Identificação</h4>
          <p/>
          <h4 className={step >= 1 ? "actived" : ""}>Pesquisa Satisfação</h4>
          <p/>
          <h4 className={step >= 2 ? "actived" : ""}>Resumo</h4>
        </div>
        <form onSubmit={(e) => nextStep(step + 1 , e)}>
          <div className="input-container">
            {currentComponent}
          </div>
          <div className="actions">
            {isFirstStep ? 
              "" :
              <button type='button' onClick={() => previousStep(step - 1)}>
              <HiChevronDoubleLeft/>
              <span>Voltar</span>
              </button>}
            {isLastStep ? 
               <button type='submit'>
               <span>Enviar</span>
               <HiPaperAirplane />
               </button> :
              <button type='submit'>
              <span>Avançar</span>
              <HiChevronDoubleRight/>
              </button>}
          </div>
        </form>
      </div>
    </>
  )
}

export default App
