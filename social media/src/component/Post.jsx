function Post({post}){
    return(
<div>
<div className="card" style={{width: "18rem"}}>
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
  <h5 class="card-title">{post.title}</h5>
    <p class="card-text">{post.body}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
    )
}
export default Post