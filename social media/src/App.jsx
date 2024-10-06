
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./component/header"
import Footer from "./component/footer"
import Sidebar from "./component/sidebar"
function App() {

  return (
<div className="sidenav">
<Sidebar/>
<div className="content">
<Header/>
<Footer/>
</div>
</div>


  )
}

export default App
