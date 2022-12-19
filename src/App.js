
import './App.css';
import FormRoll from './components/FormRoll';
//import FormikContainer from './components/FormikContainer';
//import Login from './components/Login';
//import Register from './components/Register';
//import NewForm from './components/NewForm';
import {theme,ThemeProvider} from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <FormRoll/>
      </ThemeProvider>
    </div>
  );
}

export default App;
