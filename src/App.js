import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./NavigationBar";
import {Container} from "react-bootstrap";
import PathRoutes from "./Routes";
import Home from "./Home";
import Scoring from "./Scoring";

function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <Container fluid className="p-3">
            <PathRoutes/>
        </Container>
    </div>
  );
}

export default App;
