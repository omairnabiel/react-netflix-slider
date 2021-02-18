import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faGreaterThan,faLessThan} from "@fortawesome/free-solid-svg-icons"

interface SliderControlProps {
    iconType: "next" | "previous",
    position: "left" | "right",
    onClick: Function
}

export default function SliderControl({iconType, onClick, position}: SliderControlProps) {
    const ICON_SIZE = '2x'
    const ICON_COLOR = "#a9a9a9"
    return (
        <div 
        className={`flex items-center self-center absolute ${position}-0 top-16 w-1 p-4 mr-5 w-20 z-10 opacity-100 cursor-pointer transform hover:scale-125`}
        onClick={()=>onClick()}
        >
         <FontAwesomeIcon icon={ iconType === "next"? faGreaterThan: faLessThan} size={ICON_SIZE} style={{color: ICON_COLOR}}/>
        </div>

    )
}
