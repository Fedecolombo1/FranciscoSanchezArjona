import './Page.css'
import NavBar from '../NavBar/NavBar'

const Page = ({ children }) => {
    return(
        <div className="contariner-fluid">
             <NavBar />
            {children}
        </div>                 
    )
}

export default Page;