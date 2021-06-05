import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return <div className="App">
    <div className="col-sm-8 col-11 mx-auto header">
      <div className="row">
        <div className="col-sm-6 image_div"><img src="/image/photo.png" className="my_photo" alt=""/></div>
        <div className="col-sm-6 details p-4">
          <p className="text-center thank_you">Thank you so much for getting here! I'm Alok, web developer</p>
          <p className="text-uppercase reach_me">Reach me on</p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/alok-deka-473b2662/"><i className="bi bi-linkedin"></i></a>          
            <a href="tel:7002337118"><i className="bi bi-telephone-fill"></i></a>
            <a href="mailto:deka.alok@gmail.com"><i className="bi bi-envelope-fill"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default App;
