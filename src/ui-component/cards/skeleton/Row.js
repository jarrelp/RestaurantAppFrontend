// // material-ui
// import { Checkbox, IconButton, Table, TableBody, TableCell, TableContainer, TableRow, Typography, Skeleton } from '@mui/material';

// // assets
// import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

// import React from 'react';

// const Row = ({ handleSelectAllClick, rows, theme, selected, rowsPerPage, isSelected, handleClick }) => {
//     return (
//         <TableContainer>
//             <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
//                 <EnhancedTableHead
//                     numSelected={selected.length}
//                     onSelectAllClick={handleSelectAllClick}
//                     rowCount={rows.length}
//                     theme={theme}
//                     selected={selected}
//                 />
//                 <TableBody>
//                     {rows.slice(1 * rowsPerPage, 1 * rowsPerPage + rowsPerPage).map((row, index) => {
//                         if (typeof row === 'number') return null;
//                         const isItemSelected = isSelected(row.name);
//                         const labelId = `enhanced-table-checkbox-${index}`;

//                         return (
//                             <TableRow
//                                 hover
//                                 role="checkbox"
//                                 aria-checked={isItemSelected}
//                                 tabIndex={-1}
//                                 key={index}
//                                 selected={isItemSelected}
//                             >
//                                 <TableCell padding="checkbox" sx={{ pl: 3 }} onClick={(event) => handleClick(event, row.name)}>
//                                     <Checkbox
//                                         color="primary"
//                                         checked={isItemSelected}
//                                         inputProps={{
//                                             'aria-labelledby': labelId
//                                         }}
//                                     />
//                                 </TableCell>
//                                 <TableCell
//                                     align="center"
//                                     component="th"
//                                     id={labelId}
//                                     scope="row"
//                                     onClick={(event) => handleClick(event, row.name)}
//                                     sx={{ cursor: 'pointer' }}
//                                 >
//                                     <Typography variant="subtitle1" sx={{ color: 'grey.900' }}>
//                                         {' '}
//                                         <Skeleton variant="text" height={30} />{' '}
//                                     </Typography>
//                                 </TableCell>
//                                 <TableCell
//                                     component="th"
//                                     id={labelId}
//                                     scope="row"
//                                     onClick={(event) => handleClick(event, row.name)}
//                                     sx={{ cursor: 'pointer' }}
//                                 >
//                                     <Typography variant="subtitle1" sx={{ color: 'grey.900' }}>
//                                         {' '}
//                                         <Skeleton variant="text" height={30} />{' '}
//                                     </Typography>
//                                 </TableCell>
//                                 <TableCell align="center" sx={{ pr: 3 }}>
//                                     <IconButton size="large">
//                                         <MoreHorizOutlinedIcon sx={{ fontSize: '1.3rem' }} />
//                                     </IconButton>
//                                 </TableCell>
//                             </TableRow>
//                         );
//                     })}
//                     {/* {emptyRows > 0 && (
//                         <TableRow
//                             style={{
//                                 height: 53 * emptyRows
//                             }}
//                         >
//                             <TableCell colSpan={6} />
//                         </TableRow>
//                     )} */}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// };

// export default Row;

// // ==============================|| TABLE HEADER ||============================== //

// function EnhancedTableHead({ onSelectAllClick, numSelected, rowCount, selected }) {
//     return (
//         <TableHead>
//             <TableRow>
//                 <TableCell padding="checkbox" sx={{ pl: 3 }}>
//                     <Checkbox
//                         color="primary"
//                         indeterminate={numSelected > 0 && numSelected < rowCount}
//                         checked={rowCount > 0 && numSelected === rowCount}
//                         onChange={onSelectAllClick}
//                         inputProps={{
//                             'aria-label': 'select all desserts'
//                         }}
//                     />
//                 </TableCell>
//                 {numSelected > 0 && (
//                     <TableCell padding="none" colSpan={7}>
//                         <EnhancedTableToolbar numSelected={selected.length} />
//                     </TableCell>
//                 )}
//                 {numSelected <= 0 &&
//                     headCells.map((headCell) => (
//                         <TableCell key={headCell.id} align={headCell.align} padding={headCell.disablePadding ? 'none' : 'normal'}>
//                             <TableSortLabel
//                                 active={orderBy === headCell.id}
//                                 direction={orderBy === headCell.id ? order : 'asc'}
//                                 onClick={createSortHandler(headCell.id)}
//                             >
//                                 {headCell.label}
//                             </TableSortLabel>
//                         </TableCell>
//                     ))}
//                 {numSelected <= 0 && (
//                     <TableCell sortDirection={false} align="center" sx={{ pr: 3 }}>
//                         <Typography variant="subtitle1" sx={{ color: 'grey.900' }}>
//                             Action
//                         </Typography>
//                     </TableCell>
//                 )}
//             </TableRow>
//         </TableHead>
//     );
// }

// EnhancedTableHead.propTypes = {
//     selected: PropTypes.array,
//     numSelected: PropTypes.number.isRequired,
//     onSelectAllClick: PropTypes.func.isRequired,
//     rowCount: PropTypes.number.isRequired
// };
