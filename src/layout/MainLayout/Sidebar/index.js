import PropTypes from 'prop-types';
import { memo, useMemo } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, useMediaQuery } from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MenuList from './MenuList';
import LogoSection from '../LogoSection';
import { openDrawer } from 'store/slices/menu';
import { useDispatch, useSelector } from 'store';
import { drawerWidth } from 'store/constant';

// ==============================|| SIDEBAR DRAWER ||============================== //

const Sidebar = ({ window }) => {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    const dispatch = useDispatch();
    const { drawerOpen } = useSelector((state) => state.menu);

    const logo = useMemo(
        () => (
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
                    <LogoSection />
                </Box>
            </Box>
        ),
        []
    );

    const drawer = useMemo(
        () => (
            <PerfectScrollbar
                component="div"
                style={{
                    height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
                    paddingLeft: '16px',
                    paddingRight: '16px'
                }}
            >
                <MenuList />
            </PerfectScrollbar>
        ),
        [matchUpMd]
    );

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <Box component="nav" sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }} aria-label="mailbox folders">
            <Drawer
                container={container}
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="left"
                open={drawerOpen}
                onClose={() => dispatch(openDrawer(!drawerOpen))}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        background: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        borderRight: 'none',
                        [theme.breakpoints.up('md')]: {
                            top: '88px'
                        }
                    }
                }}
                ModalProps={{ keepMounted: true }}
                color="inherit"
            >
                {drawerOpen && logo}
                {drawerOpen && drawer}
            </Drawer>
        </Box>
    );
};

Sidebar.propTypes = {
    window: PropTypes.object
};

export default memo(Sidebar);

// import PropTypes from 'prop-types';

// // material-ui
// import { useTheme } from '@mui/material/styles';
// import { Box, Drawer, useMediaQuery } from '@mui/material';

// // third-party
// import PerfectScrollbar from 'react-perfect-scrollbar';
// import { BrowserView, MobileView } from 'react-device-detect';

// // project imports
// import MenuList from './MenuList';
// import LogoSection from '../LogoSection';
// import { drawerWidth } from 'store/constant';

// // ==============================|| SIDEBAR DRAWER ||============================== //

// const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
//     const theme = useTheme();
//     const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

//     const drawer = (
//         <>
//             <Box sx={{ display: { xs: 'block', md: 'none' } }}>
//                 <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
//                     <LogoSection />
//                 </Box>
//             </Box>
//             <BrowserView>
//                 <PerfectScrollbar
//                     component="div"
//                     style={{
//                         height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
//                         paddingLeft: '16px',
//                         paddingRight: '16px'
//                     }}
//                 >
//                     <MenuList />
//                 </PerfectScrollbar>
//             </BrowserView>
//             <MobileView>
//                 <Box sx={{ px: 2 }}>
//                     <MenuList />
//                 </Box>
//             </MobileView>
//         </>
//     );

//     const container = window !== undefined ? () => window.document.body : undefined;

//     return (
//         <Box component="nav" sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }} aria-label="mailbox folders">
//             <Drawer
//                 container={container}
//                 variant={matchUpMd ? 'persistent' : 'temporary'}
//                 anchor="left"
//                 open={drawerOpen}
//                 onClose={drawerToggle}
//                 sx={{
//                     '& .MuiDrawer-paper': {
//                         width: drawerWidth,
//                         background: theme.palette.background.default,
//                         color: theme.palette.text.primary,
//                         borderRight: 'none',
//                         [theme.breakpoints.up('md')]: {
//                             top: '88px'
//                         }
//                     }
//                 }}
//                 ModalProps={{ keepMounted: true }}
//                 color="inherit"
//             >
//                 {drawer}
//             </Drawer>
//         </Box>
//     );
// };

// Sidebar.propTypes = {
//     drawerOpen: PropTypes.bool,
//     drawerToggle: PropTypes.func,
//     window: PropTypes.object
// };

// export default Sidebar;
