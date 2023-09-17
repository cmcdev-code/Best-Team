import { NONAME } from "dns"

import * as tf from '@tensorflow/tfjs';
import React, { useState, useEffect } from 'react';


import Card from '@mui/material/Card'

import Typography from '@mui/material/Typography'


// function theme(){
//   const theme: ThemeColor();
  
// const inputStyle = {
//   backgroundColor: theme.palette.primary.main, // Replace with your desired color
//   color: theme.palette.common.white, // Text color
//   padding: '8px', // Adjust as needed
//   border: 'none', // Remove the default input border
//   borderRadius: '4px', // Add rounded corners if desired
//   outline: 'none', // Remove the default focus outline
// };
// }

function ParentUserInputs() {
  // Define state variables and handlers for each variable
  const [money, setMoney] = useState<number>(0);
  const [credit, setCredit] = useState<number>(0);
  const [term, setTerm] = useState<number>(0);
  const [loan, setLoan] = useState<number>(0);
  const [debt, setDebt] = useState<number>(0);
  const [assets, setAssets] = useState<number>(0);
  const [grad, setGrad] = useState<boolean>(false);

  localStorage.setItem("money",money.toString());
  localStorage.setItem("credit",credit.toString());
  localStorage.setItem("term",term.toString());
  localStorage.setItem("loan",loan.toString());
  localStorage.setItem("debt",debt.toString());
  localStorage.setItem("assets",assets.toString());
  localStorage.setItem("grad",grad.toString());

  return (
    <div>
      {/* Pass state variables and handlers as props to child components */}
      <MoneyInput money={money} onMoneyChange={setMoney} />
      <CreditInput credit={credit} onCreditChange={setCredit} />
      <TermInput term={term} onTermChange={setTerm} />
      <LoanInput loan={loan} onLoanChange={setLoan} />
      <DebtInput debt={debt} onDebtChange={setDebt} />
      <AssetsInput assets={assets} onAssetsChange={setAssets} />
      <GradInput grad={grad} onGradChange={setGrad} />
    </div>
  );
}



function GradInput({grad,onGradChange}:{grad: boolean; onGradChange: (value: boolean)=>void}){
  const handelGradChange=()=>{
    onGradChange(!grad);
  }
  return (
    <div>
        <Typography component='h1' variant='h6' sx={{ mb: 10 }}>
        Did you graduate from college?
        </Typography>
      
      <input 
      type = "checkBox"
      id="gradCheckBox"
      onChange={handelGradChange}
      />
    </div>
  );

}


import { customColors } from "src/@core/theme/palette";
import { Label } from "mdi-material-ui";

function AssetsInput({assets,onAssetsChange}:{assets:number, onAssetsChange: (value:number)=>void}){
  const handelAssetsChange= (e5: React.ChangeEvent<HTMLInputElement>)=>{
    const newAssets= parseFloat(e5.target.value);
    if(!isNaN(newAssets)){
      onAssetsChange(newAssets);
    }else{
      onAssetsChange(0);
    }
  }
  return (
    <div>
    <label>Assets:</label>
    <input
      type="textfield"
      value={assets}
      onChange={handelAssetsChange}
      placeholder="Enter your current Assets"
    />
    
  </div>
  );
}

function DebtInput({debt, onDebtChange}: {debt: number; onDebtChange: (value : number )=> void}){
  const handleDebtChange= (e4: React.ChangeEvent<HTMLInputElement>)=>{
    const newDebt= parseFloat(e4.target.value);
    if(!isNaN(newDebt)){
      onDebtChange(newDebt);
    }else{
      onDebtChange(0);
    }
  }
return (
  <div>
  <label>Debt:</label>
  <input
    type="number"
    value={debt}
    onChange={handleDebtChange}
    placeholder="Enter your current debt"
  />
</div>
);

}

// Define separate child components for each state variable
function MoneyInput({ money, onMoneyChange }: { money: number; onMoneyChange: (value: number) => void }) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMoney = parseFloat(e.target.value);
    if (!isNaN(newMoney)) {
      onMoneyChange(newMoney);
    } else {
      onMoneyChange(0);
    }
  };

  return (
    <div>
      <label>Enter Your Salary</label>
      <input
        type="number"
        value={money}
        onChange={handleInputChange}
        placeholder="Enter money"
      />
    </div>
  );
}
function CreditInput({ credit, onCreditChange }: { credit: number; onCreditChange: (value: number) => void }) {
  const handleCreditInputChange = (e1: React.ChangeEvent<HTMLInputElement>) => {
    const newCredit = parseFloat(e1.target.value);
    if (!isNaN(newCredit)) {
      onCreditChange(newCredit);
    } else {
      onCreditChange(0);
    }
  };

  return (
    <div>
      <label>Enter Your Credit Card Score</label>
      <input
        type="number"
        value={credit}
        onChange={handleCreditInputChange}
        placeholder="Enter Credit Score"
      />
    </div>
  );
}



{/* <Card>
<input
type="number"
placeholder="Enter an amount"
value={money}
onChange={handleMoneyChange}

/>
</Card>); */}
function TermInput({term,onTermChange}:{term:number, onTermChange:(value:number)=>void}){
  const handleTermChange= (e2: React.ChangeEvent<HTMLInputElement>)=>{
    const newTerm=parseFloat(e2.target.value);
    if(!isNaN(newTerm)){
      onTermChange(newTerm);
    }else{
      onTermChange(0);
    }
  }
  return (
    <div>
      <label>Term of Loan:</label>
    <input
      type="number"
      value={term}
      onChange ={handleTermChange}
      placeholder="Enter Term of Loan"
    />
    </div>
  )
}

function LoanInput({loan,onLoanChange}:{loan:number, onLoanChange:(value:number)=> void}){
  const handleLoanChange=(e3: React.ChangeEvent<HTMLInputElement>)=>{
    const newLoan=parseFloat(e3.target.value);
    if(!isNaN(newLoan)){
      onLoanChange(newLoan);
    }else{
      onLoanChange(0);
    }
  }
  return (

  <div>
      <label>Amount for Loan:</label>
    <input
      type="number"
      value={loan}
      onChange ={handleLoanChange}
      placeholder="Enter the Amount the loan is for"
    />
    </div>
  )

}






function UserInputs() {
  const [money, setMoney] = useState<number>(0);

  const handleMoneyChange = (e: any) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setMoney(newValue);
    } else {
      setMoney(0);
    }
  };
return (
    <Card>
        <input
        type="number"
        placeholder="Enter an amount"
        value={money}
        onChange={handleMoneyChange}

      />
    </Card>);
};




// const UserInputBox = () => {
//     return(
//         <Card>
//             <CardHeader
//                 title = 'Update Information'
//                 titleTypographyProps={{ sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' } }}
//                 action={
//                   <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
//                     <DotsVertical />
//                   </IconButton>
//                 }
//             />

//         </Card>
//     )
// }




export default ParentUserInputs