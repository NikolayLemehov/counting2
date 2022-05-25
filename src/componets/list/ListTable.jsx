import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import {IconButton} from "@mui/material";
import {Delete as DeleteIcon} from "@mui/icons-material";
import {delOperation} from "../../asyncAction/delOperation";

const ListTable = () => {
  const dispatch = useDispatch()
  const operations = useSelector(state => state.operation.operations)

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Value</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {operations.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="right">{row.value}</TableCell>
                <TableCell align="right">
                  <IconButton
                    variant="outlined"
                    color="error"
                    onClick={() => dispatch(delOperation(row._id))}
                  >
                    <DeleteIcon/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListTable;