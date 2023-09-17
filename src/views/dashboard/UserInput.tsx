import { NONAME } from "dns"


import React, { useState } from 'react';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'
import { SxProps } from "@mui/material";
// ** Icons Imports
import MenuUp from 'mdi-material-ui/MenuUp'
import DotsVertical from 'mdi-material-ui/DotsVertical'

//importing theme -Morris Delete if break
import { ThemeColor } from 'src/@core/layouts/types'

function ParentUserInputs() {
  // Define state variables and handlers for each variable
  const [money, setMoney] = useState<number>(0);
  const [credit, setCredit] = useState<number>(0);
  const [term, setTerm] = useState<number>(0);
  const [loan, setLoan] = useState<number>(0);
  const [debt, setDebt] = useState<number>(0);
  const [assets, setAssets] = useState<number>(0);
  const [grad, setGrad] = useState<boolean>(false);

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
      <label>Money:</label>
      <input
        type="number"
        value={money}
        onChange={handleInputChange}
        placeholder="Enter money"
      />
    </div>
  );
}

function CreditInput({credit, onCreditChange}: {credit:number , onCreditChange: (value: number)=> void}){
  const handleCreditInputChange = (e1: React.ChangeEvent<HTMLInputElement>)=>{
    const newCredit= parseFloat (e1.target.value);
    if(!isNaN(newCredit)){
      onCreditChange(newCredit);
    }else{
      onCreditChange(0);
    }
  };
  
  return (
    <div>
      <label>Credit Score:</label>
    <input
      type="number"
      value={credit}
      onChange ={handleCreditInputChange}
      placeholder="Enter Credit Score"
    />
    </div>
  )
  
}
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
        sx = {{
          color: 'ThemeColor.primary.common.white',
          backgroundColor: `ThemeColor.primary.color.main`
        }}
      />
    </Card>
  );
}



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

const UserInputBox = () => {
    return (
      <Card sx={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', margin: '16px', padding: '16px' }}>
        <CardHeader
          title="Update Information"
          titleTypographyProps={{ sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' } }}
          action={
            <IconButton
              size="small"
              aria-label="settings"
              sx={{ color: 'text.secondary' }}
              className="card-more-options"
            >
              <DotsVertical />
            </IconButton>
          }
        />
      </Card>
    );
  };

export default UserInputs;