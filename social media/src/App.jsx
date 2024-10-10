
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./component/header"
import Footer from "./component/footer"
import Sidebar from "./component/sidebar"
import PostItem from './component/PostItem'
import { useState } from 'react'
import CreatPost from './creatPost'
function App() {
const [SelectedTab,setSelectedTab]=useState("asgusd")
  return (
<div className="sidenav">
<Sidebar/>
<div className="content">
<Header/>
{/* <PostItem/>
<CreatPost/> */}
{SelectedTab==="Home"?<PostItem/>:<CreatPost/>}
<Footer/>
</div>
</div>


  )
}

export default App
