import { Link } from "react-router-dom"
export default function LinkNav({children , to = '#'}){

    return(

        <Link to={to} className="md:flex flex-col text-[0px] md:text-[20px] items-center text-center underline ">
           {children}
        </Link>
        
    )


}