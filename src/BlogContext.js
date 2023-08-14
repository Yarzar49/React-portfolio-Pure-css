import React, {createContext, useContext, useReducer} from "react";

const BlogContext = createContext();
const blogReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_POST':
            return [...state, action.payload];
        case 'EDIT_POST':
            // Implement edit logic
            const updatePosts =state.map(post => 
                post.id === action.payload.id ? action.payload : post
                )
            return updatePosts;
        case 'DELETE_POST':
        // Implement delete logic
            const filteredPosts = state.filter(post => post.id !== action.payload);
            return filteredPosts;
        default:
            return state;
    }
};

export const BlogProvier = ({children}) => {
    const [state, dispatch] = useReducer(blogReducer, [])

    const addPost = (post) => {
        dispatch(
            {
                type: 'ADD_POST', payload: post
            }
        )
    }

    const editPost = post => {
        dispatch(
            {
                type: 'EDIT_POST', payload: post
            }
        )
    }

    const deletePost = postId => {
        dispatch(
            {
                type:'DELETE_POST',  payload: postId
             })
    }

    return (
        <BlogContext.Provider value={{posts: state, addPost, editPost, deletePost}}>
            {children}
        </BlogContext.Provider>
    )
}

export const useBlogContext = () => useContext(BlogContext);
