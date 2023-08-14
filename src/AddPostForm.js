import React, {useState} from "react";
import { useBlogContext } from "./BlogContext";

const AddPostForm = () => {
    const {addPost} = useBlogContext();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const newPost = {title, content}
        addPost(newPost);
        setTitle('');
        setContent('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} />
            <button type="submit">Add Post</button>
        </form>
    )
}

export default AddPostForm;
