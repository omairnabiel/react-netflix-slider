import { CSSProperties } from "react";
import { useRouter } from "next/router"
import { useSetRecoilState} from "recoil"

// state atoms
import { Movie } from "../../shared/types/movie";
import { selectedMovie } from "../../state/atoms/movie"

interface TileProps {
    movie: Movie,
    transform: CSSProperties
}

export default function Tile({movie, transform}:TileProps) {
    const router = useRouter()
    const setCurrentMovie = useSetRecoilState(selectedMovie)

    const routeToDetail = () => {
        setCurrentMovie({data: movie, loading:false,error: undefined})
        router.push(`/detail/${movie.id}`)
    }

    return (
        <div 
        className="box-border h-52 w-80 border-1 duration-500 shadow-xl cursor-pointer" 
        style={transform} 
        onClick={routeToDetail}
        >
        <img className="min-w-full max-h-full" src={movie.poster} />
        </div>
    )
}