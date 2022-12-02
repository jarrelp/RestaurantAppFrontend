import { useEffect, useState } from 'react';

// project imports
import CustomList from '../common/CustomList';
import AddDepartment from './AddDepartment';
import { useDispatch, useSelector } from 'store';
import { getDepartmentsList } from 'store/slices/department';
import { openDrawer } from 'store/slices/menu';

// table header options
const headCells = [
    {
        id: 'id',
        numeric: true,
        label: 'ID',
        align: 'left',
        initialValue: 0
    },
    {
        id: 'name',
        numeric: false,
        label: 'Name',
        align: 'left',
        initialValue: ''
    }
];

// ==============================|| DEPARTMENT LIST ||============================== //

const DepartmentList = () => {
    const dispatch = useDispatch();

    // show a right sidebar when clicked on new custom
    const [open, setOpen] = useState(false);
    const handleClickOpenDialog = () => {
        setOpen(true);
    };
    const handleCloseDialog = () => {
        setOpen(false);
    };

    // department data
    const [departments, setDepartments] = useState([]);
    const departmentState = useSelector((state) => state.department);

    useEffect(() => {
        setDepartments(departmentState.departments);
    }, [departmentState]);

    useEffect(() => {
        dispatch(getDepartmentsList());

        // hide left drawer when email app opens
        dispatch(openDrawer(false));
    }, [dispatch]);

    return (
        <CustomList
            name={'Department'}
            headCells={headCells}
            customs={departments}
            handleClickOpenDialog={handleClickOpenDialog}
            addCustom={<AddDepartment open={open} handleCloseDialog={handleCloseDialog} />}
        />
    );
};

export default DepartmentList;
