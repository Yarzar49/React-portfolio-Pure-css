import React, { useState } from "react";
import { useBlogContext } from "./BlogContext";
import EditPostForm from "./EditPostForm";

const PostList = () => {
    const { posts, deletePost } = useBlogContext();
    const [selectedPost, setSelectedPost] = useState(null);

    const handleEditClick = post => {
        setSelectedPost(post);
    }
    return (
        <div>
            {
                posts.map((post, index) => (
                    <div key={index}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        {/* Implement edit and delete buttons */}
                        <button onClick={() => {
                            handleEditClick(post)
                        }}>Edit</button> 
                        {
                            selectedPost && selectedPost.id === post.id && (
                                <EditPostForm post={post} onCancel={() => setSelectedPost(null)}/>
                            )
                        }       
                        <button onClick={ () => deletePost(post.id)}>Delete</button>                
                    </div>
                ))
            }
        </div>
    )
}

export default PostList;