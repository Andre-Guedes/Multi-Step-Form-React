import { HiChevronDoubleLeft, HiChevronDoubleRight, HiPaperAirplane } from "react-icons/hi2";

import UserData from "./components/UserData";
import Research from "./components/Research";
import Summary from "./components/Summary";

import {forms} from "./hooks/forms"

import './App.css';

function App() {
  const formStep = [<UserData />, <Research/>, <Summary/>]

  const {currentComponent, step, previousStep, nextStep, isFirstStep, isLastStep} = forms(formStep)
  
  return (
    <>
      <div className='header'>
      <h2>Preencha seus dados abaixo</h2>
      <p>Mantenha seu dados atualizados</p>
      </div>
      <div className="form-container">
        <div className="form-header">
          <h4 className="actived">Confirmação de dados</h4>
          <p className="line"/>
          <h4 >Pesquisa Satisfação</h4>
          <p className="line"/>
          <h4 >Resumo</h4>
        </div>
        <form onSubmit={(e) => (nextStep(step + 1 , e), activeHeader())}>
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
