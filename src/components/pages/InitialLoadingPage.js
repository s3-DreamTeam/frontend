import FetchErrorPage from "./FetchErrorPage";
import WholePageLoading from "../wholePageLoading";


/**
 * Large page displayed to the user as long as their data hasn't been loaded
 * at least once.
 * Use the redux store to save when the data has been saved or not.
 * @param {*} param0 
 * @returns 
 */
const InitialLoadingPage = ({
    onRetryClick,
    error,
    isLoading
}) => {
    return (
        (isLoading
            ? <WholePageLoading />
            : <FetchErrorPage onRetryClick={onRetryClick} errorName={error} />
        )
    );
};

export default InitialLoadingPage;