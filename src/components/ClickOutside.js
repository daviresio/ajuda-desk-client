import React, {useEffect, useRef} from 'react';

const ClickOutside = ({clickOutside, children}) => {

    const node = useRef()

    useEffect(() => {

        document.addEventListener("mousedown", handleClick)

        return () => {
            document.removeEventListener("mousedown", handleClick)
        }

    }, [])

    const handleClick = e => {
        if(!node.current.contains(e.target)) clickOutside()
    }

    return (
        <div ref={node}>
            {children}
        </div>
    );
};

export default ClickOutside;