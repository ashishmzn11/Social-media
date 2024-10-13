import { useContext } from "react"
import Post from "./Post"
import { PostList } from "../store/Post-list-store"

const PostItem=()=>{
    const {postList}=useContext(PostList)
    return(
<>
{
postList.map((post)=><Post key={postList.id} post={post}/>)
}

</>
    )
}
export default PostItem