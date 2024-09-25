import * as React from 'react';
import { Button, Card, Drawer, Stack, Toolbar } from '@mui/material';
import { AodRounded, ConstructionRounded, InsightsRounded, TextSnippetRounded, WarehouseRounded } from '@mui/icons-material';
import StyledDivider from '../divider/styledDivider';
import NavigationDrawerButton from './navigationDrawerButton';

const NavigationDrawer = ({ open, onClose }) => {
    const DrawerContents = (
        <Stack
            direction='column'
            alignItems='flex-start'
            spacing={1}
        >
            <NavigationDrawerButton title='Analytics' selected={false} icon={<InsightsRounded />} />
            <StyledDivider aria-hidden='true' thiccness={2} flexItem sx={{ borderRadius: 100 }} />

            <NavigationDrawerButton title='machine manager' selected={false} icon={<AodRounded />} />
            <NavigationDrawerButton title='Stock manager' selected={false} icon={<WarehouseRounded />} />
            <StyledDivider aria-hidden='true' thiccness={2} flexItem sx={{ borderRadius: 100 }} />

            <NavigationDrawerButton title='machine editor' selected={true} icon={<ConstructionRounded />} />
            <NavigationDrawerButton title='stock editor' selected={false} icon={<ConstructionRounded />} />
            <StyledDivider aria-hidden='true' thiccness={2} flexItem sx={{ borderRadius: 100 }} />

            <NavigationDrawerButton title='changelogs' selected={false} icon={<TextSnippetRounded />} />
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
                width: 240,
                boxSizing: 'border-box'
            }}
            PaperProps={{ style: { overflow: 'visible' } }}
        >
            <Toolbar />
            <Card
                elevation={20}
                sx={{ height: '100%', borderRadius: '0 1.5rem 1.5rem 0', padding: '2rem' }}
            >
                {DrawerContents}
            </Card>
        </Drawer>
    );
};

export default NavigationDrawer;