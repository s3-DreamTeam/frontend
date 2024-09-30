import * as React from 'react';
import { AppBar, IconButton, Paper, Stack, Toolbar, Typography } from '@mui/material';
import { MenuOpenRounded, MenuRounded, MoreVertRounded, PersonRounded } from '@mui/icons-material';
import NavigationDrawer from './navigationDrawer';
import { openNavigationDrawer, closeNavigationDrawer } from '../../store/navigationDrawerSlice';
import Main from './mainContainer';
import { useDispatch, useSelector } from 'react-redux';
import SideActionMenu from '../sideActionMenu';
import { hideSideActionsMenu, showSideActionsMenu } from '../../store/sideActionsMenuSlice';


/**
 * # PageLayout
 * Pagelayout is a whole ass page. You give it a title and it'll show it in the
 * top bar on the left next to the menu button.
 * You then fill the page with your contents as you wish.
 * 
 * ---
 * @param {*} title : The name of the page, so it can be shown in the app bar
 * @param {*} childrens : The components to show inside the page
 * @param {boolean} hideActionBar : For main menus that don't need it.
 * @returns 
 */
const PageLayout = ({
    title,
    childrens,
    disableAllActionsButNew,
    hideActionBar,
    isRefreshing,
    onRefresh,
    onAdd
}) => {

    const dispatch = useDispatch();

    // Need to use the animation state of the drawer instead of its real state to trigger the main menu animations
    // Otherwise, the main menu animations are instantaneous. This is the sole fix I found.
    const sideMenuAnimationState = useSelector((state) => state.sideActionsMenuState.animationState);
    const drawerState = useSelector((state) => state.drawerState.value);

    const handleMenuClicked = () => {
        if (drawerState) {
            dispatch(closeNavigationDrawer());
        } else {
            dispatch(openNavigationDrawer());
        }
    };

    if (hideActionBar) {
        dispatch(hideSideActionsMenu());
    } else {
        dispatch(showSideActionsMenu());
    }

    return (
        <Paper elevation={0} sx={{ height: "100vh", overflow: 'hidden' }} square>
            <AppBar
                position='fixed'
                color='transparent'
                elevation={0}
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backdropFilter: 'blur(30px)',
                }}
            >
                <Toolbar>
                    <Stack
                        direction='row'
                        alignItems='center'
                        sx={{ flexGrow: 1 }}
                    >
                        <IconButton
                            size='medium'
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            sx={{ mr: '1rem' }}
                            onClick={handleMenuClicked}
                        >
                            {drawerState ?
                                <MenuOpenRounded fontSize='large' /> :
                                <MenuRounded fontSize='large' />
                            }
                        </IconButton>
                        <Typography
                            variant='h5'
                            component='div'
                            fontWeight={600}
                            color='inherit'
                        >
                            {title}
                        </Typography>
                    </Stack>
                    <Stack
                        direction='row'
                        alignItems='center'
                        sx={{ flexGrow: 1 }}
                    >
                    </Stack>
                    <Stack
                        direction='row'
                        alignItems='center'
                        justifyContent='flex-end'
                        sx={{ flexGrow: 1 }}
                    >
                        <IconButton
                            size='medium'
                            edge='end'
                            color='inherit'
                            aria-label='profile menu'
                            sx={{ mr: '0rem' }}
                        >
                            <PersonRounded fontSize='large' />
                        </IconButton>
                        <IconButton
                            size='medium'
                            edge='end'
                            color='inherit'
                            aria-label='more menu'
                        >
                            <MoreVertRounded fontSize='large' />
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>
            <NavigationDrawer open={drawerState} onClose={() => dispatch(closeNavigationDrawer())} />
            <Main
                navigationDrawerState={drawerState}
                sideActionMenuState={sideMenuAnimationState}
                sx={{ height: '100%' }}
            >
                <Toolbar />
                <Stack
                    direction='row'
                    sx={{
                        height: '100%'
                    }}
                >
                    {/*Contains the main components being displayed. Flexgrow allows it to take all the space it can.*/}
                    <div style={{ flexGrow: 1 }}>
                        {childrens}
                    </div>
                    {/*It's position is fixed, thus doesn't matter if it's in the stack or not. Kept there in case.*/}
                    <SideActionMenu
                        disableAllButNew={disableAllActionsButNew}
                        onRefresh={onRefresh}
                        onAdd={onAdd}
                        isRefreshing={isRefreshing}
                    />
                </Stack>
            </Main>
        </Paper>
    );
};

export default PageLayout;