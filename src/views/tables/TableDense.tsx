// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

const createData = (name: string, calories: number, fat: number, carbs: number, protein: number) => {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Apartment 1', 990000, 3, 2, 2000),
  createData('Apartment 2', 990000, 3, 2, 2000),
  createData('Apartment 3', 990000, 3, 2, 2000),
  createData('Apartment 4', 990000, 3, 2, 2000),
  createData('Apartment 5', 990000, 3, 2, 2000),
]

const TableDense = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>On the market (100g serving)</TableCell>
            <TableCell align='right'>Price ($)</TableCell>
            <TableCell align='right'>Bedrooms</TableCell>
            <TableCell align='right'>Bathrooms</TableCell>
            <TableCell align='right'>Square Feet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.calories}</TableCell>
              <TableCell align='right'>{row.fat}</TableCell>
              <TableCell align='right'>{row.carbs}</TableCell>
              <TableCell align='right'>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableDense
