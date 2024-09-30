import * as React from 'react';
import { Card, Drawer, Stack, Toolbar } from '@mui/material';
import { AodRounded, ConstructionRounded, InsightsRounded, TextSnippetRounded, WarehouseRounded } from '@mui/icons-material';
import StyledDivider from '../divider/styledDivider';
import NavigationDrawerButton from './navigationDrawerButton';
import { AppRoutes } from '../../utils/routerRouteManager';

/**
 * # Navigation Drawer
 * Is the little menu that pops up or hides on the left of your screen.
 * Allows you to navigate to all the different main menus of the app.
 * @warning
 * Width is hardcoded to 275 to avoid dynamic adjustments when selecting links.
 * ---
 * @param open : boolean indicating if the drawer should be seen
 * @param onClose : function to execute when the drawer decides to close itself
 * @returns 
 */
const NavigationDrawer = ({ open, onClose }) => {
    const DrawerContents = (
        <Stack
            direction='column'
            alignItems='flex-start'
            spacing={1}
        >
            <NavigationDrawerButton title='Analytics' correspondingAppRoute={AppRoutes.Analytics} icon={<InsightsRounded />} />
            <StyledDivider aria-hidden='true' thiccness={2} flexItem />

            <NavigationDrawerButton title='machine manager' correspondingAppRoute={AppRoutes.MachineManager} icon={<AodRounded />} />
            <NavigationDrawerButton title='Stock manager' correspondingAppRoute={AppRoutes.StockManager} icon={<WarehouseRounded />} />
            <StyledDivider aria-hidden='true' thiccness={2} flexItem />

            <NavigationDrawerButton title='machine editor' correspondingAppRoute={AppRoutes.MachineEditor} icon={<ConstructionRounded />} />
            <NavigationDrawerButton title='stock editor' correspondingAppRoute={AppRoutes.StockEditor} icon={<ConstructionRounded />} />
            <StyledDivider aria-hidden='true' thiccness={2} flexItem />

            <NavigationDrawerButton title='changelogs' correspondingAppRoute={AppRoutes.Changelogs} icon={<TextSnippetRounded />} />
        </Stack>
    );

    return (
        <Drawer
            variant='persistent'
            open={open}
            onClose={onClose}
            sx={{
                flexShrink: 0,
                "& .MuiDrawer-paper": { borderWidth: 0, backgroundColor: '#00000000' },
                boxSizing: 'border-box'
            }}
            PaperProps={{ style: { overflow: 'visible', width: 275 } }}
        >
            <Toolbar />
            <Card
                elevation={20}
                sx={{ height: '100%', borderRadius: '0 1.5rem 1.5rem 0', padding: '1.5rem' }}
            >
                {DrawerContents}
            </Card>
        </Drawer>
    );
};

export default NavigationDrawer;