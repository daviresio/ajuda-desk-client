import React, {useEffect, useState} from 'react';

const DelayUnmount = ({mount, delay = 500, children}) => {

    const [render, setRender] = useState(false)
    const [willUnmount, setWillUnmount] = useState(false)

    useEffect(() => {
        if(render && !mount) {
            setWillUnmount(true)
            setTimeout(() => setRender(false), delay)
        }
        if(!render && mount) {
            setRender(true)
            setWillUnmount(false)
        }
    }, [mount, willUnmount])

    return (
        render ? React.Children.map(children, c => typeof c === 'string' ? null : React.cloneElement(c, {...c.props, willUnmount})) : null
    );
};

export default DelayUnmount;