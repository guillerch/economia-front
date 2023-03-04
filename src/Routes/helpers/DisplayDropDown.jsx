import { useState,useEffect, useRef } from 'react';

export const DisplayDropDown = () => {
    const [displayDropdown, setDisplayDropdown] = useState(false);
    let menuRef = useRef();

    useEffect(()=>{
        let handler = (e) =>{
            if (!menuRef.current.contains(e.target)) {
                setDisplayDropdown(false);
            }
        }
        document.addEventListener("mousedown",handler)
    })
    return {
        menuRef,
        displayDropdown,
        setDisplayDropdown,
    }
}
