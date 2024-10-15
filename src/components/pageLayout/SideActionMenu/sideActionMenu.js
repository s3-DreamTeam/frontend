import { Card, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { animationFinishedHidden, animationFinishedShown } from "../../../store/sideActionsMenuSlice";
import SAMDivider from "./samDivider";
import SAMList from "./samList";
import SAMRefresh from "./samRefresh";
import SAMAdd from "./samAdd";
import SAMSortBy from "./samSortBy";
import SAMFilter from "./samFilter";

/**
 * # SideActionMenu
 * Menu displayed on the right of main menus to allow the user
 * to access features such as sorting, creating, filtering the
 * contents of the page they are on.
 * The menu should always be on the right, middle, of their screens.
 */
const SideActionMenu = ({
    onRefresh,
    onAdd,
    isRefreshing,

    disableSort,
    disableFilter,
    disableList,
    disableRefresh,
    disableNew,

    sortTooltip,
    filterTooltip,
    listTooltip,
    retryTooltip,
    newTooltip,
}) => {
    const dispatch = useDispatch();
    const sideActionsMenuState = useSelector((state) => state.sideActionsMenuState.value);
    const sideActionsMenuAnimationState = useSelector((state) => state.sideActionsMenuState.animationState);
    const [animateClass, setAnimateClass] = useState(sideActionsMenuAnimationState ? '' : 'shown');

    useEffect(() => {
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
    }, [sideActionsMenuState, sideActionsMenuAnimationState, dispatch]);

    return (
        <div
            className={animateClass}
            style={{
                justifyContent: 'center',
                alignContent: 'center',
                position: 'fixed',
                top: '35%',
                right: '0%',
                transition: 'transform 0.2s ease',
                transform: animateClass === 'shown' ? 'translateX(0)' : 'translateX(100%)'
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
                    <SAMSortBy disabled={disableSort} />
                    <SAMFilter disabled={disableFilter} />
                    <SAMList disabled={disableList} />
                    <SAMRefresh disabled={disableRefresh} onClick={onRefresh} isRefreshing={isRefreshing} />
                    <SAMDivider />
                    <SAMAdd disabled={disableNew} onClick={onAdd} />
                </Stack>
            </Card>
        </div>
    );
};

export default SideActionMenu;