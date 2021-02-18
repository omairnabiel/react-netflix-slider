import { useState,useEffect, CSSProperties } from "react"

// types
import { Movie } from "../../shared/types/movie"

// components
import SliderControl from "./slider-control/SliderControl"
import Tile from "../tile/Tile"

const ITEM_WIDTH = 300
const PADDINGS = 68

interface SliderProps {
    movies: Array<Movie>
    genre: string
}

export default function Slider({movies, genre}: SliderProps) {

    const [distance, setDistance] = useState<number>(0)
    const [remaining, setRemaining] = useState<number>(0)
    const [viewed, setViewed] = useState<number>(0)
    
    const transform = (x: number): CSSProperties => { 
      return { transform: `translate(${x}px)`} 
    };

    useEffect(() => {
        setRemaining(Math.ceil(movies.length - (window.innerWidth / ITEM_WIDTH)))
        setViewed(Math.floor(window.innerWidth / ITEM_WIDTH))

        addEventListener("resize", function(){
            setRemaining(Math.ceil(movies.length - (window.innerWidth / ITEM_WIDTH)))
            setViewed(Math.floor(window.innerWidth / ITEM_WIDTH))
        })
    }, [])

    const handleNext = () => {
        if(remaining <= 0) return
        const inWidth = Math.floor(window.innerWidth / ITEM_WIDTH)
        if(remaining > inWidth) {
           setDistance(-Math.abs(Math.abs(distance) + PADDINGS + (ITEM_WIDTH * inWidth)))
           setRemaining((remaining - inWidth))
           setViewed(viewed + inWidth)
        } else {
           setDistance(-Math.abs(Math.abs(distance) + PADDINGS + (ITEM_WIDTH * remaining)))
           setViewed(viewed + remaining)
           setRemaining(0)
        }    
    }


    const handlePrev = () => {
        const inWidth = Math.floor(window.innerWidth / ITEM_WIDTH)
        if(viewed === Math.floor(window.innerWidth / ITEM_WIDTH)) return
        if(viewed - inWidth < inWidth) {
            setDistance(distance + PADDINGS + (ITEM_WIDTH *(inWidth - (viewed - inWidth))))
            setRemaining(Math.ceil(movies?.length - (window.innerWidth / ITEM_WIDTH)))
            setViewed(Math.round(window.innerWidth / ITEM_WIDTH))
        }
        else {
            setDistance(distance + PADDINGS + (ITEM_WIDTH *inWidth))
            setRemaining(remaining + inWidth)
            setViewed(viewed - inWidth)   
        }
    }
     return (
    <>
    <div className="mb-16 mt-10 overflow-x-hidden">
            
            <div className="font-mono font-semibold text-xl ml-2">{genre?.split(",").join("/")}</div>
            <div className="relative w-full ml-2 mr-2">
            <SliderControl onClick={handlePrev} iconType="previous" position="left"/>
            <SliderControl onClick={handleNext} iconType="next" position="right"/>
                <div className="grid grid-flow-col no-wrap auto-cols-max overflow-visible">
                {
                movies?.length > 0 ?
                movies.map((movie: Movie,i: number)=> (<Tile key={movie.id} movie={movie} transform={transform(distance)}/>))
                :
                <div>No Movies</div>
                } 
                </div>
            </div>
    </div>
    </>
    )
}
