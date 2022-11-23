// import { useEffect, useState } from 'react';

// // material-ui
// import { useTheme } from '@mui/material/styles';
// import {
//     CardContent,
//     Checkbox,
//     Fab,
//     Grid,
//     IconButton,
//     InputAdornment,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TablePagination,
//     TableRow,
//     TextField,
//     Tooltip,
//     Typography,
//     LinearProgress
// } from '@mui/material';

// // project imports
// import CustomAdd from './CustomAdd';
// import MainCard from 'ui-component/cards/MainCard';
// import { useDispatch, useSelector } from 'store';
// import CustomTableHead from '../common/CustomTableHead';
// import { openDrawer } from 'store/slices/menu';
// // import RowSkeleton from 'ui-component/cards/skeleton/Row';

// // assets
// import SearchIcon from '@mui/icons-material/Search';
// import AddIcon from '@mui/icons-material/AddTwoTone';
// import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

// // table sort
// const descendingComparator = (a, b, orderBy) => {
//     if (b[orderBy] < a[orderBy]) {
//         return -1;
//     }
//     if (b[orderBy] > a[orderBy]) {
//         return 1;
//     }
//     return 0;
// };

// const getComparator = (order, orderBy) =>
//     order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);

// const stableSort = (array, comparator) => {
//     const stabilizedThis = array.map((el, index) => [el, index]);
//     stabilizedThis.sort((a, b) => {
//         const order = comparator(a[0], b[0]);
//         if (order !== 0) return order;
//         return a[1] - b[1];
//     });
//     return stabilizedThis.map((el) => el[0]);
// };

// // ==============================|| CUSTOM LIST ||============================== //

// const CustomList = ({ getCustomList, headCells }) => {
//     const theme = useTheme();
//     const dispatch = useDispatch();

//     const [isLoading, setLoading] = useState(true);

//     // custom data
//     const [customObjList, setCustomObjList] = useState([]);
//     const customState = useSelector((state) => state.custom);

//     useEffect(() => {
//         setCustomObjList(customState.customObjList);
//     }, [customState]);

//     useEffect(() => {
//         dispatch(getCustomList);

//         // hide left drawer when email app opens
//         dispatch(openDrawer(false));
//     }, [dispatch]);

//     useEffect(() => {
//         if (customObjList.length > 0) {
//             setLoading(false);
//         }
//     }, [customObjList]);

//     // show a right sidebar when clicked on new custom
//     const [open, setOpen] = useState(false);
//     const handleClickOpenDialog = () => {
//         setOpen(true);
//     };
//     const handleCloseDialog = () => {
//         setOpen(false);
//     };

//     const [order, setOrder] = useState('asc');
//     const [orderBy, setOrderBy] = useState('calories');
//     const [selected, setSelected] = useState([]);
//     const [page, setPage] = useState(0);
//     const [rowsPerPage, setRowsPerPage] = useState(5);
//     const [search, setSearch] = useState('');
//     const [rows, setRows] = useState([]);

//     useEffect(() => {
//         setRows(customObjList);
//     }, [customObjList]);

//     const handleSearch = (event) => {
//         const newString = event?.target.value;
//         setSearch(newString || '');

//         if (newString) {
//             const newRows = rows.filter((row) => {
//                 let matches = true;

//                 const properties = ['name', 'id'];
//                 let containsQuery = false;

//                 properties.forEach((property) => {
//                     if (row[property].toString().toLowerCase().includes(newString.toString().toLowerCase())) {
//                         containsQuery = true;
//                     }
//                 });

//                 if (!containsQuery) {
//                     matches = false;
//                 }
//                 return matches;
//             });
//             setRows(newRows);
//         } else {
//             setRows(customObjList);
//         }
//     };

//     const handleRequestSort = (event, property) => {
//         const isAsc = orderBy === property && order === 'asc';
//         setOrder(isAsc ? 'desc' : 'asc');
//         setOrderBy(property);
//     };

//     const handleSelectAllClick = (event) => {
//         if (event.target.checked) {
//             const newSelectedId = rows.map((n) => n.name);
//             setSelected(newSelectedId);
//             return;
//         }
//         setSelected([]);
//     };

//     const handleClick = (event, name) => {
//         const selectedIndex = selected.indexOf(name);
//         let newSelected = [];

//         if (selectedIndex === -1) {
//             newSelected = newSelected.concat(selected, name);
//         } else if (selectedIndex === 0) {
//             newSelected = newSelected.concat(selected.slice(1));
//         } else if (selectedIndex === selected.length - 1) {
//             newSelected = newSelected.concat(selected.slice(0, -1));
//         } else if (selectedIndex > 0) {
//             newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
//         }

//         setSelected(newSelected);
//     };

//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(parseInt(event?.target.value, 10));
//         setPage(0);
//     };

//     const isSelected = (name) => selected.indexOf(name) !== -1;
//     const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//     return (
//         <>
//             <MainCard title="Custom List" content={false}>
//                 <CardContent>
//                     <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 InputProps={{
//                                     startAdornment: (
//                                         <InputAdornment position="start">
//                                             <SearchIcon fontSize="small" />
//                                         </InputAdornment>
//                                     )
//                                 }}
//                                 onChange={handleSearch}
//                                 placeholder="Search Custom"
//                                 value={search}
//                                 size="small"
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6} sx={{ textAlign: 'right' }}>
//                             {/* custom add & dialog */}
//                             <Tooltip title="Add Custom">
//                                 <Fab
//                                     color="primary"
//                                     size="small"
//                                     onClick={handleClickOpenDialog}
//                                     sx={{ boxShadow: 'none', ml: 1, width: 32, height: 32, minHeight: 32 }}
//                                 >
//                                     <AddIcon fontSize="small" />
//                                 </Fab>
//                             </Tooltip>
//                             <CustomAdd open={open} handleCloseDialog={handleCloseDialog} />
//                         </Grid>
//                     </Grid>
//                 </CardContent>

//                 {/* table */}
//                 <TableContainer>
//                     <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
//                         <CustomTableHead
//                             numSelected={selected.length}
//                             order={order}
//                             orderBy={orderBy}
//                             onSelectAllClick={handleSelectAllClick}
//                             onRequestSort={handleRequestSort}
//                             rowCount={rows.length}
//                             theme={theme}
//                             selected={selected}
//                             headCells={headCells}
//                         />
//                         <TableBody>
//                             {stableSort(rows, getComparator(order, orderBy))
//                                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                                 .map((row, index) => {
//                                     if (typeof row === 'number') return null;
//                                     const isItemSelected = isSelected(row.name);
//                                     const labelId = `enhanced-table-checkbox-${index}`;

//                                     return (
//                                         <TableRow
//                                             hover
//                                             role="checkbox"
//                                             aria-checked={isItemSelected}
//                                             tabIndex={-1}
//                                             key={index}
//                                             selected={isItemSelected}
//                                         >
//                                             <TableCell padding="checkbox" sx={{ pl: 3 }} onClick={(event) => handleClick(event, row.name)}>
//                                                 <Checkbox
//                                                     color="primary"
//                                                     checked={isItemSelected}
//                                                     inputProps={{
//                                                         'aria-labelledby': labelId
//                                                     }}
//                                                 />
//                                             </TableCell>
//                                             <TableCell
//                                                 align="center"
//                                                 component="th"
//                                                 id={labelId}
//                                                 scope="row"
//                                                 onClick={(event) => handleClick(event, row.name)}
//                                                 sx={{ cursor: 'pointer' }}
//                                             >
//                                                 <Typography variant="subtitle1" sx={{ color: 'grey.900' }}>
//                                                     {' '}
//                                                     #{row.id}{' '}
//                                                 </Typography>
//                                             </TableCell>
//                                             <TableCell
//                                                 component="th"
//                                                 id={labelId}
//                                                 scope="row"
//                                                 onClick={(event) => handleClick(event, row.name)}
//                                                 sx={{ cursor: 'pointer' }}
//                                             >
//                                                 <Typography variant="subtitle1" sx={{ color: 'grey.900' }}>
//                                                     {' '}
//                                                     {row.name}{' '}
//                                                 </Typography>
//                                             </TableCell>
//                                             <TableCell align="center" sx={{ pr: 3 }}>
//                                                 <IconButton size="large">
//                                                     <MoreHorizOutlinedIcon sx={{ fontSize: '1.3rem' }} />
//                                                 </IconButton>
//                                             </TableCell>
//                                         </TableRow>
//                                     );
//                                 })}
//                             {emptyRows > 0 && (
//                                 <TableRow
//                                     style={{
//                                         height: 53 * emptyRows
//                                     }}
//                                 >
//                                     <TableCell colSpan={6} />
//                                 </TableRow>
//                             )}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>

//                 {isLoading &&
//                     [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
//                         <Grid key={item} item xs={12} sm={6} md={4} lg={3}>
//                             {/* <RowSkeleton
//                                 handleSelectAllClick={handleSelectAllClick}
//                                 rows={rows}
//                                 theme={theme}
//                                 selected={selected}
//                                 rowsPerPage={rowsPerPage}
//                                 isSelected={isSelected}
//                                 handleClick={handleClick}
//                             /> */}
//                             <LinearProgress />
//                         </Grid>
//                     ))}

//                 {/* table pagination */}
//                 <TablePagination
//                     rowsPerPageOptions={[5, 10, 25]}
//                     component="div"
//                     count={rows.length}
//                     rowsPerPage={rowsPerPage}
//                     page={page}
//                     onPageChange={handleChangePage}
//                     onRowsPerPageChange={handleChangeRowsPerPage}
//                 />
//             </MainCard>
//         </>
//     );
// };

// export default CustomList;
