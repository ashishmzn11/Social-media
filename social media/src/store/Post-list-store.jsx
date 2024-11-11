import { createContext,useReducer } from "react";
export const PostList = createContext({
    postList:[],
    addPost:()=>{},
    deletPost:()=>{}
});
const postListReucer=(currpostlist,action)=>{
    let newPostList=currpostlist;
    if(action.type==="DELETE_POST")
    {
        newPostList=currpostlist.filter(
            (post)=>post.userId !==action.payload.postId
        );
    }
    else if(action.type==="ADD_POST"){
        newPostList=[action.payload, ...currpostlist]
    }
    return newPostList;
};

const PostListProvider=({children})=>{
    const [postList,dispatchList]=useReducer(
        postListReucer,
        Default_Post_List
    );


    const addPost=(userId,title,post,reactions,tags)=>{ dispatchList({
        type:"ADD_POST",
        payload:{
            id:Date.now(),
            userId:userId,
            title:title,
            post:post,
            tags:tags,
            reactions:reactions
        },
    })};


    const deletPost=(postId)=>{
        dispatchList({
            type:"DELETE_POST",
            payload:{
                postId,
            },
        });
    };
    return(
       <PostList.Provider value={{postList,addPost,deletPost}} >
        {children}
       </PostList.Provider>
    );
};

const Default_Post_List=[
    {
        userId:"1",
        title:"going to dheli",
        post:"ashish",
        tags:["like", "dislike","comment"],
        reactions:"20"
    },
    {
        userId:"2",
        title:"going to eli",
        post:"ashi",
        tags:["like", "dislike","comment"],
        reactions:"20"
    },
    {
        userId:"3",
        title:"going to dli",
        post:"ash",
        tags:["like", "dislike","comment"],
        reactions:"20"
    },
]
export default PostListProvider;