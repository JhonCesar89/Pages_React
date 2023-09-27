import "bootstrap/dist/css/bootstrap.min.css";
import Header from"./pages/Header";
import Inicio from "./pages/Inicio";
import Footer from "./pages/Footer";

function App () {
  return(
		<div>
			<Header />
			<Inicio />
			<Footer />
		</div>
  );
}

export default App;