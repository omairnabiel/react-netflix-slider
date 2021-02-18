// components
import SearchInput from "../search-input/SearchInput"

interface HeadingProps{
    heading:string;
 }

export default function Header({heading}:HeadingProps){

    return (
    <div className="flex lg:flex-row md:flex-col flex-col items-center justify-between mt-2 pl-5 pr-8 mb-3 w-full">
    
        <div className="justify-self-end"> 
            <h1 className="text-3xl">{heading}</h1>
        </div>
        
        <div className="justify-self-end lg:mt-2 md:mt-5 mt-5">
            <SearchInput/>
        </div>

    </div>
    )

}
