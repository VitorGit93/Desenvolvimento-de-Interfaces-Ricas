import {AppBar, CssBaseline, ThemeProvider} from "@mui/material";
import {TodoList} from "./components/TodoListComponent";
import {darkTheme} from './Themes';

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <AppBar position="static">
                {/* AppBar content */}
            </AppBar>
            <TodoList/>
        </ThemeProvider>
    );
}

export default App;
