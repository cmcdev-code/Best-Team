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


function parentUserInputs(){
  const  [money,setMoney] = useState<number>(0);
  const [credit,setCredit] = useState<number>(0);
  const [term,setTerm]=useState<number>(0);
  const [loan,setLoan]= useState<number>(0);
  const [debt,setDebt]=useState<number>(0);
  const [assets,setAssets]=useState<number>(0);
  const [grad,setGrad]=useState<boolean>(false);

  const handleMoneyChange=(e1:any)=>{
    const newMoney=parseFloat(e1.target.value);
    if(!isNaN(newMoney)){
      setMoney(newMoney);
    }else{
      setMoney(0);
    }
  }
  const handelCreditChange=(e2:any)=>{
    const newCredit=parseFloat(e2.target.value);
    if(!isNaN(newCredit)){
      setCredit(newCredit);
    }else {
      setCredit(0);
    }
  }
  const handelTermChange=(e3:any)=>{
    const newTerm=parseFloat(e3.target.value);
    if(!isNaN(newTerm)){
      setTerm(newTerm);
    }else{
      setTerm(0);
    }
  }
  const handelLoanChange=(e4:any)=>{
    const newLoan=parseFloat(e4.target.value);
    if(!isNaN(newLoan)){
      setLoan(newLoan);
    }else{
      setLoan(0);
    }
  }
  const 


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