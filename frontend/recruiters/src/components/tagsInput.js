import { useState } from 'react';
import "./tagsInput.css";

function TagsInput(props){
    //const [tags, setTags] = useState([])

    function handleKeyDown(e){
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        props.setTags([...props.tags, value])
        e.target.value = ''
    }

    function removeTag(index){
        props.setTags(props.tags.filter((el, i) => i !== index))
    }

    return (
        <div className="tags-input-container">
            { props.tags.map((tag, index) => (
                <span className="tag-item" key={index}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </span>
            )) }
            <br></br>
            <input onKeyDown={handleKeyDown} type="text" className="tags-input" />
        </div>
    )
}

export default TagsInput