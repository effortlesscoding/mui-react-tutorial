import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(projectName, employer, awardedBid, projectAwarded, milestonesReleased, status) {
  return { projectName, employer, awardedBid, projectAwarded, milestonesReleased, status };
}

const rows = [
  createData('JAVA Project', '@anurag', '$15', '15 days ago', '$15', 'complete'),
  createData('Spring project', '@amit189', '$30', '1 month ago', '$30', 'complete'),
  createData('Hibernate project', '@abhi1234', '$50', '2 months ago', '$0', 'cancelled'),
  createData('Spring boot project', '@rajat23', '$100', '4 months ago', '$100', 'complete'),
  createData('Rest Api Project', '@anekant89', '$80', '5 months ago', '$80', 'complete'),
];

export default function ProjectList() {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Project Name</StyledTableCell>
            <StyledTableCell align="left">Employer</StyledTableCell>
            <StyledTableCell align="left">Awarded Bid</StyledTableCell>
            <StyledTableCell align="left">Project Awarded</StyledTableCell>
            <StyledTableCell align="left">Milestones Released</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.projectName}>
              <StyledTableCell component="th" scope="row">
                {row.projectName}
              </StyledTableCell>
              <StyledTableCell align="left">{row.employer}</StyledTableCell>
              <StyledTableCell align="left">{row.awardedBid}</StyledTableCell>
              <StyledTableCell align="left">{row.projectAwarded}</StyledTableCell>
              <StyledTableCell align="left">{row.milestonesReleased}</StyledTableCell>
              <StyledTableCell align="left">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}