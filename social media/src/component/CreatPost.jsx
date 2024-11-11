import { createContext, useContext, useRef } from "react";
import "../App.css";
import { PostList } from "../store/Post-list-store";
  const CreatPost=()=>{
    const {addPost}=useContext(PostList);
   const userIdElement=useRef();
   const titleElement=useRef();
   const reactionsElement=useRef();
   const postElement=useRef();
   const tagsElement=useRef();
   const handleSubmit=(event)=>{
    event.preventDefault();
const userId=userIdElement.current.value;
const title=titleElement.current.value;
const post=postElement.current.value;
const reactions=reactionsElement.current.value;
const tags=tagsElement.current.value.split(" ");
userIdElement.current.value="";
titleElement.current.value="";
postElement.current.value="";
reactionsElement.current.value="";
tagsElement.current.value="";
addPost(userId,title,post,reactions,tags);
   }
  return (
    <form className="creatpost" onSubmit={
      handleSubmit
    }>
       <div className="mb-3">
        <lable htmlfor="userId" className="form-lable mb-3">enter your id here</lable>
        <textarea rows="4" type="text" className="form-control w-75 mb-3 mt-3" id="userId" ref={userIdElement}placeholder="Your id number"></textarea>
      </div>

      <div className="mb-3">
        <lable htmlfor="title" className="form-lable mb-3">Post Title</lable>
        <textarea rows="4" type="text" className="form-control w-75 mb-3 mt-3" id="title"ref={titleElement} placeholder="How are you feeling today..."></textarea>
      </div>


      <div className="mb-3">
        <lable htmlfor="post" className="form-lable mb-3">Post contants</lable>
        <textarea rows="4" type="text" className="form-control w-75 mb-3 mt-3" id="post"ref={postElement}placeholder="Tell us more about it..."></textarea>
      </div>

      <div className="mb-3">
        <lable htmlfor="reactions" className="form-lable mb-3">Number of Reactions</lable>
        <textarea rows="4" type="text" className="form-control w-75 mb-3 mt-3" id="reactions" ref={reactionsElement}placeholder="How many peopel reaction on this post..."></textarea>
      </div>

      <div className="mb-3">
        <lable htmlfor="tags" className="form-lable mb-3">Enter you hastags here</lable>
        <textarea rows="4" type="text" className="form-control w-75 mb-3 mt-3" id="tags" ref={tagsElement}placeholder="Please enter tages using space"></textarea>
        <button type="submit" className="btn btn-primary">Post</button>
      </div>
    </form>
  );
}
export default CreatPost;
