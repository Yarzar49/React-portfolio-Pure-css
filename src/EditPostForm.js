import React, { useState } from "react";
import { useBlogContext } from "./BlogContext";

const EditPostForm = ({ post, onCancel }) => {
    const { editPost } = useBlogContext();
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const handleSubmit = e => {
        e.preventDefault();
        const updatedPost = { id: post.id, title, content};
        editPost(updatedPost);
        onCancel();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={e => setContent(e.target.value)} />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
        </form>
    )
}

export default EditPostForm;