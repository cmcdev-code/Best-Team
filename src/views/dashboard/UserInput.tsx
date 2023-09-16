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

// ** Icons Imports
import MenuUp from 'mdi-material-ui/MenuUp'
import DotsVertical from 'mdi-material-ui/DotsVertical'


function UserInputs() {
  const [money, setMoney] = useState<number>(0);
  const [inputAmount, setInputAmount] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setInputAmount(isNaN(newValue) ? 0 : newValue);
  };

  const handleAddMoney = () => {
    setMoney(money + inputAmount);
    setInputAmount(0); // Reset the input field after adding money
  };

  return (
    <div>
      <p>Money: {money}</p>
      <input
        type="number"
        placeholder="Enter an amount"
        value={inputAmount}
        onChange={handleInputChange}
      />
      <button onClick={handleAddMoney}>Add Money</button>
    </div>
  );
}

const UserInputBox = () => {
    return(
        <Card>
            <CardHeader
                title = 'Update Information'
                titleTypographyProps={{ sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' } }}
                action={
                  <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
                    <DotsVertical />
                  </IconButton>
                }
            />

        </Card>
    )
}


export default UserInputs;