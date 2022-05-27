import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import {Box, IconButton, Stack} from "@mui/material";
import {Delete as DeleteIcon, Edit as EditIcon} from "@mui/icons-material";
import {delOperation} from "../../asyncAction/delOperation";
import {updateOperation} from "../../asyncAction/updateOperation";

const ListTable = () => {
  const dispatch = useDispatch()
  const operations = useSelector(state => state.operation.operations)
  // console.log(operations)

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Value</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {operations.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="td">{row.date}</TableCell>
                <TableCell component="td" align="right">{row.value}</TableCell>
                <TableCell component="td" align="right">
                  {row.total}
                </TableCell>
                <TableCell align="right">
                  <Box>
                    <Stack direction="row" sx={{justifyContent: "flex-end"}} spacing={1}>
                      <IconButton
                        variant="outlined"
                        color="primary"
                        onClick={() => dispatch(updateOperation(row._id))}
                        disabled={row.editLoading}
                      >
                        <EditIcon/>
                      </IconButton>
                      <IconButton
                        variant="outlined"
                        color="error"
                        onClick={() => dispatch(delOperation(row._id))}
                        disabled={row.deleteLoading}
                      >
                        <DeleteIcon/>
                      </IconButton>
                    </Stack>
                  </Box>
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