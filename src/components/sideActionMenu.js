import { AddCircleRounded, AddRounded, FilterAltRounded, ListRounded, Menu, SwapVertRounded, SyncRounded } from "@mui/icons-material";
import { Card, IconButton, Stack } from "@mui/material";
import StyledDivider from "./divider/styledDivider";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { animationFinishedHidden, animationFinishedShown } from "../store/sideActionsMenuSlice";

/**
 * # SideActionMenu
 * Menu displayed on the right of main menus to allow the user
 * to access features such as sorting, creating, filtering the
 * contents of the page they are on.
 * The menu should always be on the right, middle, of their screens.
 */
const SideActionMenu = ({ disableAllButNew }) => {
    const dispatch = useDispatch();
    const sideActionsMenuState = useSelector((state) => state.sideActionsMenuState.value);
    const sideActionsMenuAnimationState = useSelector((state) => state.sideActionsMenuState.animationState);
    const [animateClass, setAnimateClass] = useState(sideActionsMenuAnimationState ? '' : 'shown');

    useEffect(() => {
        // Trigger animation when sideActionsMenuState changes

        if (sideActionsMenuState) {
            if (!sideActionsMenuAnimationState) {
                setAnimateClass('shown');
            }
        } else {
            if (sideActionsMenuAnimationState) {
                setAnimateClass('');
            }
        }

        // Remove the animation class after a short delay
        const timeout = setTimeout(() => {
            if (sideActionsMenuState) {
                setAnimateClass('shown');
                dispatch(animationFinishedShown());
            } else {
                setAnimateClass('');
                dispatch(animationFinishedHidden());
            }
        }, 1); // Adjust the duration to match your animation length

        return () => clearTimeout(timeout); // Clean up timeout on unmount
    }, [sideActionsMenuState]);

    return (
        <div
            className={animateClass}
            style={{
                justifyContent: 'center',
                alignContent: 'center',
                position: 'fixed',
                top: '35%',
                right: '0%',
                transition: 'transform 0.2s ease', // Add transition
                transform: animateClass === 'shown' ? 'translateX(0)' : 'translateX(100%)' // Animation effect
            }}
        >
            <Card
                elevation={20}
                sx={{
                    width: '100%',
                    borderRadius: '1.5rem 0rem 0rem 1.5rem',
                    padding: '1rem'
                }}
            >
                <Stack spacing={1}>
                    <IconButton size="small" disabled={disableAllButNew}>
                        <SwapVertRounded fontSize="large" />
                    </IconButton>
                    <IconButton size="small" disabled={disableAllButNew}>
                        <FilterAltRounded fontSize="large" />
                    </IconButton>
                    <IconButton size="small" disabled={disableAllButNew}>
                        <ListRounded fontSize="large" />
                    </IconButton>
                    <IconButton size="small" disabled={disableAllButNew}>
                        <SyncRounded fontSize="large" />
                    </IconButton>
                    <div style={{ margin: '0.25rem' }} />
                    <StyledDivider thiccness={4} />
                    <div style={{ margin: '0.25rem' }} />
                    <IconButton size="small" color="secondary">
                        <AddCircleRounded fontSize="large" />
                    </IconButton>
                </Stack>
            </Card>
        </div>
    );
};

export default SideActionMenu;