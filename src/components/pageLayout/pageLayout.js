import * as React from 'react';
import { AppBar, Paper, Stack, Toolbar } from '@mui/material';
import NavigationDrawer from './navigationDrawer';
import { openNavigationDrawer, closeNavigationDrawer } from '../../store/navigationDrawerSlice';
import Main from './mainContainer';
import { useDispatch, useSelector } from 'react-redux';
import SideActionMenu from './SideActionMenu/sideActionMenu';
import { hideSideActionsMenu, showSideActionsMenu } from '../../store/sideActionsMenuSlice';
import LeftBarArea from './AppBar/leftBarArea';
import RightBarArea from './AppBar/rightBarArea';
import MiddlebarArea from './AppBar/middleBarArea';


/**
 * # PageLayout
 * Pagelayout is a whole ass page. You give it a title and it'll show it in the
 * top bar on the left next to the menu button.
 * You then fill the page with your contents as you wish.
 * 
 * ---
 * @param {*} title : The name of the page, so it can be shown in the app bar
 * @param {*} childrens : The components to show inside the page
 * @param {*} hideActionBar : For main menus that don't need it.
 * @param {*} disableAllActionsButNew : disables all sideActions except the Add button.
 * @param {*} hideNavigationDrawer : Removes the menu button and slides away the navigation drawer.
 * @param {*} hasGoBackArrow : Shows a go back arrow next to the menu button
 * @param {*} isRefreshing : If set to true, the refresh icon will spin in the side actions menu.
 * 
 * @param {*} onGoBack : Callback executed when the go back arrow is clicked
 * @param {*} onAdd : Callback when the add button is clicked
 * @param {*} onFilter : Callback when the filter button is clicked
 * @param {*} onList : Callback when the list button is clicked
 * @param {*} onRefresh : Callback when the refresh button is clicked
 * @returns 
 */
const PageLayout = ({
    title,
    childrens,

    hideActionBar,
    disableAllActionsButNew,

    hideNavigationDrawer,

    hasGoBackArrow,
    onGoBack,

    isRefreshing,
    onRefresh,
    onAdd,
    onFilter,
    onList,
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

    if (hideNavigationDrawer) {
        dispatch(closeNavigationDrawer());
    }

    return (
        <Paper elevation={0} sx={{ height: "100vh", overflow: 'auto' }} square>
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
                    <LeftBarArea
                        appTitle={title}
                        onGoBackClick={onGoBack}
                        onMenuClick={handleMenuClicked}
                        drawerOpened={drawerState}
                        showGoBackButton={hasGoBackArrow}
                        hideMenuButton={hideNavigationDrawer}
                    />
                    <MiddlebarArea />
                    <RightBarArea />
                </Toolbar>
            </AppBar>
            <NavigationDrawer open={drawerState} onClose={() => dispatch(closeNavigationDrawer())} />
            <Main
                navigationDrawerState={drawerState}
                sideActionMenuState={sideMenuAnimationState}
                sx={{
                    height: '100%',
                    paddingTop: '4rem'
                }}
            >
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