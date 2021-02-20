import React from "react"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

interface RatingsProps {
    filled: number
}
export default function Ratings({filled}: RatingsProps) {
    const TOTAL_STARS = 5
    const ICON_SIZE = '2x'
    const FILL_COLOR = '#ffff00'
    const EMPTY_COLOR = '#fff'

    const stars: JSX.Element[] = []

    const renderStars = () => {
        for(let i = 1; i <= TOTAL_STARS; i++) {
            stars.push(<FontAwesomeIcon key={i} style={i < (filled/2)? { color: FILL_COLOR }: {color: EMPTY_COLOR}} icon={faStar} size={ICON_SIZE}/>)
        }
        return stars
    }

    return (
        <div>
        {renderStars()}
        </div>
        )
} 