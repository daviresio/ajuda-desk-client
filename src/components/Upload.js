import React, {useRef} from 'react';
import {uploadImage} from "../services/upload";

const Upload = ({children, onComplete, accept = 'image/*'}) => {

    const node = useRef()

    const handleClick = () => {
        node.current.click()
    }

    const handleUpload = async (e) => {
        if (!e.target.files) return
        try {
            const result = await uploadImage(e.target.files[0])
            onComplete(result)
        } catch (e) {
            console.log(e)
        }

        if(node && node.current) node.current.value = ''
    }

    return (
        <>
            {React.cloneElement(children, {...children.props, onClick: handleClick})}
            <input ref={node} type={'file'} accept={accept} onChange={handleUpload}/>
        </>
    );
};

export default Upload;