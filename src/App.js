import './App.scss';
import { ThemeProvider } from './content/ThemeContext';
import Container from "./companents/Container";
function App() {
  return (
    <div className="App">

 <ThemeProvider>
   <Container/>
 </ThemeProvider>

    </div>
  );
}

export default App;
