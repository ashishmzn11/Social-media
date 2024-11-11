import { MdDelete } from "react-icons/md";
import './sidebar.css'
import { useContext } from "react";
import { PostList } from "../store/Post-list-store";
function Post({post}){

  const { deletPost }=useContext(PostList);
      
    return(
     
<div>
<div className="card" style={{width: "30rem"}}>
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
  <h5 className="card-title">{post.title}
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletPost(post.userId)}>
    
  <MdDelete />
  </span>
  </h5>
    <p className="card-text">{post.post}</p>
    {
      post.tags.map((tag)=>(<span key={tag} className="btn btn-primary tag">{tag}</span>))
    }
    
  </div>
  <div className="alert alert-success" role="alert">
  {post.reactions}
</div>
</div>
</div>
    )
}
export default Post