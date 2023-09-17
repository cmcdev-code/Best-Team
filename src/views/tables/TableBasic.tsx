// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

const createData:any = (name: string, cost: number, beds: number, bathrooms: number, protein: number) => {
  return { name, cost, beds, bathrooms, protein }
}

const rows = [
  createData('Property 1', 1542000, 5.0, 4, 4445),
  createData('Property 2', 2131000, 4, 3, 10160),
  createData('Property 3', 1155000, 3, 3, 3210),
  createData('Property 4', 1664000, 3, 2, 4502),
  createData('Property 5', 953000, 2, 1, 6201)
]

const TableBasic = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>On the Market</TableCell>
            <TableCell align='right'>Cost ($)</TableCell>
            <TableCell align='right'>Bedrooms</TableCell>
            <TableCell align='right'>Bathrooms</TableCell>
            <TableCell align='right'>Square feet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.name}
              sx={{
                '&:last-of-type td, &:last-of-type th': {
                  border: 0
                }
              }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.cost}</TableCell>
              <TableCell align='right'>{row.beds}</TableCell>
              <TableCell align='right'>{row.bathrooms}</TableCell>
              <TableCell align='right'>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableBasic
