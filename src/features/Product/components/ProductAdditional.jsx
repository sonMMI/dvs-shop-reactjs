import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';

function ProductAdditional(props) {
  return (
    <div>
      <h1>Additional Information</h1>
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell align="right">ASIN</TableCell>
                <TableCell align="right">B071HN7DYP</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">Customer Reviews</TableCell>
                <TableCell align="right">4.7 out of 5 stars</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">Best Sellers Rank</TableCell>
                <TableCell align="right">
                  <Typography>#5 (See Top 100)</Typography>
                  <Typography>#1 Best Product</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ProductAdditional;
