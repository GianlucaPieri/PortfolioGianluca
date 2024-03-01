import { createBrowserRouter } from "react-router-dom";
import App from '@pages/App'
import Skills from "@pages/Skills";
import Aboutme from "@pages/Aboutme";
import Myproject from "@pages/Myproject";


const router = createBrowserRouter([

    {
        path : '/',
        element : <App/>
    },

    
       
    {
        path : '/aboutme',
        element : <Aboutme/>
    },

    {
        path : '/skills',
        element : <Skills/>
    },

    {
        path : '/myproject',
        element : <Myproject/>
    },
        
  

])
export default router;