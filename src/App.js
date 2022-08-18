import './App.css';

// components


// hooks
import { useState } from 'react';

function App() {

  // valor presente - valor que eu peguei emprestado
  const [presentValue, SetPresentValue] = useState(0);
  // saldo devedor
  const [debitBalance, SetDebitBalance] = useState(0);
  // numero de parcelas para pagar mensalmente
  let [numberInstallment, SetNumberInstallment] = useState(0);
  // preço da parcela
  const [priceInstallment, SetPriceInstallment] = useState(0);
  // taxa porcentual
  const [ratePercentual, SetRatePercentual] = useState(0);
  // juros
  const [fees, SetFees] = useState(0);
  // amortizações
  const [amortization, SetAmortization] = useState(0);


  class ItemLista {
    constructor(id, shouldPay, valueAmortization, valueFees, valueDebitBalance) {
      this.id = id
      this.shouldPay = shouldPay
      this.valueAmortization = valueAmortization
      this.valueFees = valueFees
      this.valueDebitBalance = valueDebitBalance
    }
  }



  const calculateAmortization = (e) => {
    e.preventDefault();

    console.log("calculando...")

    // constantes, nao se alteram
    SetAmortization(presentValue / numberInstallment)

    SetDebitBalance(presentValue)

    // valor do juros
    SetFees((presentValue * (ratePercentual / 100)))

    SetPriceInstallment((presentValue * (ratePercentual / 100)) + (presentValue / numberInstallment))

    /* for (let index = 0; index < numberInstallment; index++) {
      let ObjectItem = new ItemLista(index)
      
    } */
  }

  return (
    <div className="App bg-gray-800 h-screen flex justify-center flex-col">
      <a className="text-slate-400 uppercase" href="#home">gostou do projeto? fale comigo.</a>
      <h1 className="text-slate-100 font-bold">Simulador para Amortização Financeira 2022</h1>
      <form className="flex flex-col" onSubmit={calculateAmortization} >
        <label className="text-gray-400 p-top-9">
          Quanto você pegou emprestado? R$
          <input type="number" placeholder="Ex: 30.000" name="presentValue" onChange={(event) => SetPresentValue(parseInt(event.target.value))}></input>  
        </label>
        <label className="text-gray-400">
          R$ {presentValue} serão pagos em quantas parcelas?
          <input type="number" placeholder="Ex: 12" name="numberInstallment" onChange={(event) => SetNumberInstallment(parseInt(event.target.value))}></input>
        </label>
        <label className="text-gray-400">
          Qual foi a taxa de juros mensalmente cobrada em porcentagem? 
          <input type="number" placeholder="Ex: 3" name="ratePercentual" onChange={(event) => SetRatePercentual(parseInt(event.target.value))}></input>
        </label>
        <input type="submit" value="Calcular" className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'/>
      </form>
      <div className='text-gray-400'>
        <p>{debitBalance}</p>
        <p>{fees}</p>
        <p>{amortization}</p>
        <p>{priceInstallment}</p>
        <table>
          <thead>
            <tr>
              <th>Número da Parcela</th>
              <th>Você deve Pagar</th>
              <th>Amortização</th>
              <th>Valor do Juros neste Mês</th>
              <th>Você ainda deve</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
