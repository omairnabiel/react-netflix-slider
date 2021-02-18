interface PosterProps {
    url: string | undefined
}
export default function Poster({url}:PosterProps) {
    return  <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={url} alt="" width="384" height="512"/>
}