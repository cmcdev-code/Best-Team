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

interface MoneyType {
  moneyType?: string
}



function UserInputsTerm() {
  const [term, setTerm] = useState<number>(0);

  const handleMoneyChange = (e: any) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setTerm(newValue);
    } else {
      setTerm(0);
    }
  };

  return (
    <Card>
        <input
        type="number"
        placeholder="Enter an amount"
        value={term}
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

export default UserInputsTerm;