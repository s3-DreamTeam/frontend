import * as React from 'react';
import { AppBar, Button, IconButton, Paper, Stack, Toolbar, Typography } from '@mui/material';
import { MenuOpenRounded, MenuRounded, MoreVertRounded, PersonRounded } from '@mui/icons-material';
import NavigationDrawer from './navigationDrawer';
import { useState } from 'react';
import Main from './mainContainer';




/**
 * # PageLayout
 * Pagelayout is a whole ass page. You give it a title and it'll show it in the
 * top bar on the left next to the menu button.
 * You then fill the page with your contents as you wish.
 * @param {*} param0 
 * @returns 
 */
const PageLayout = ({ title }) => {

    const [wantedDrawerState, setDrawerState] = useState(false);

    const handleMenuClicked = () => {
        setDrawerState(!wantedDrawerState);
    };

    return (
        <Paper elevation={0} sx={{height:"100vh"}} square>
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
                        sx={{flexGrow: 1}}
                    >
                        <IconButton 
                            size='medium' 
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            sx={{mr: '1rem'}}
                            onClick={handleMenuClicked}
                        >
                            {wantedDrawerState ? 
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
                        sx={{flexGrow: 1}}
                    >
                    </Stack>
                    <Stack
                        direction='row'
                        alignItems='center'
                        justifyContent='flex-end'
                        sx={{flexGrow: 1}}
                    >
                        <IconButton 
                            size='medium' 
                            edge='end'
                            color='inherit'
                            aria-label='profile menu'
                            sx={{mr: '0rem'}}
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
            <NavigationDrawer open={wantedDrawerState} onClose={() => setDrawerState(false)} />
            <Main open={wantedDrawerState}>
                <Toolbar />
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Button variant='contained'>WEEEEEEEEEEEEEEEEEEEEEEEEEEEEEe</Button>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
                <Typography>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
            </Main>
      </Paper>
    );
  };
  
  export default PageLayout;