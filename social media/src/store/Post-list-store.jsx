import { createContext,useReducer } from "react";
export const PostList = createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{}
});
const postListReucer=(currpostlist,action)=>{
    return currpostlist;
};

const PostListProvider=({children})=>{
    const [postList,dispatchList]=useReducer(
        PostListProvider,
        Default_Post_List
    );
    const addPost=()=>{};
    const deletPost=()=>{};
    return(
       <PostList.Provider value={{postList,addPost,deletPost}} >
        {children}
       </PostList.Provider>
    );
};

const Default_Post_List=[
    {
        id:"1",
        title:"going to dheli",
        body:"ashish"
    },
    {
        id:"2",
        title:"going to eli",
        body:"ashi"
    },
    {
        id:"3",
        title:"going to dli",
        body:"ash"
    },
]
export default PostListProvider;