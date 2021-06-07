import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "./components/Image";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <div className="col-sm-8 col-11 mx-auto header">
        <div className="row">
          {/* Image component */}
          <Image />

          {/* Details component */}
          <Details />
        </div>
      </div>
    </div>
  );
}

export default App;
