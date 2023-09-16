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





function UserInputsLoan() {
  const [loan, setLoan] = useState<number>(0);

  const handleMoneyChange = (e: any) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setLoan(newValue);
    } else {
      setLoan(0);
    }
  };

  return (
    <Card>
        <input
        type="number"
        placeholder="Enter an amount"
        value={loan}
        onChange={handleMoneyChange}
      />
    </Card>
  );
}



export default UserInputsLoan;