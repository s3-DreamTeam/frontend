import { Collapse, Stack } from '@mui/material';
import MenuButton from './MenuButton';
import GoBackArrow from './GoBackArrow';
import BarTitle from './barTitle';
import { TransitionGroup } from 'react-transition-group';
import { useState } from 'react';

function renderitem(item, appTitle, onMenuClick, onGoBackClick, hideMenuButton, showGoBackButton, drawerOpened) {
    switch (item) {
        case ("Menu"):
            return (<MenuButton onClick={onMenuClick} opened={drawerOpened} shown={!hideMenuButton} />);
        case ("GoBack"):
            return (<GoBackArrow onClick={onGoBackClick} shown={showGoBackButton} />);
        default:
            console.error("transition fuckery: " + item);
    }
}


const LeftBarArea = ({ appTitle, onMenuClick, onGoBackClick, hideMenuButton, showGoBackButton, drawerOpened }) => {

    const newBarItems = [];

    if (!hideMenuButton) {
        newBarItems.push("Menu");
    }

    if (showGoBackButton) {
        newBarItems.push("GoBack");
    }

    return (
        <Stack
            direction='row'
            alignItems='center'
            sx={{ flexGrow: 1 }}
        >
            <TransitionGroup
            >
                {newBarItems.map((item) => (
                    <Collapse
                        key={item}
                        orientation={'horizontal'}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                        }}
                    >
                        {renderitem(item, appTitle, onMenuClick, onGoBackClick, hideMenuButton, showGoBackButton, drawerOpened)}
                    </Collapse>
                ))}
            </TransitionGroup>
            <BarTitle text={appTitle} />
        </Stack>
    );
};
export default LeftBarArea;