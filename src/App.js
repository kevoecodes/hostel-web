// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { useNavigate } from 'react-router';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

// Snackbar CONFIG
export let snackbarRef = null;
export let globalNavigator = null;

function SnackbarReferenceProvider() {
    snackbarRef = useSnackbar();
    globalNavigator = useNavigate();
    return <></>;
}

// APP
const App = () => (
    <SnackbarProvider maxSnack={3} autoHideDuration={5000} preventDuplicate={true}>
        <SnackbarReferenceProvider />
        <ThemeCustomization>
            <ScrollTop>
                <Routes />
            </ScrollTop>
        </ThemeCustomization>
    </SnackbarProvider>
);

export default App;
