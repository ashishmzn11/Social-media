import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header";
import Footer from "./component/footer";
import Sidebar from "./component/sidebar";
import PostItem from "./component/PostItem";
import { useState } from "react";
import CreatPost from "./component/CreatPost";
import PostListProvider from "./store/Post-list-store";

function App() {
  const [SelectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="sidenav">
        <Sidebar SelectedTab={SelectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {/* <PostItem/>
<CreatPost/> */}

          {SelectedTab === "Home" ? <PostItem /> : <CreatPost />}
          <Footer />
        </div>
      </div>
      </PostListProvider>
  );
}

export default App;
