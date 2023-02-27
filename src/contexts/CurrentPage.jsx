import { createContext , useState } from "react";

export const CurrentPageContext = createContext({}) ; 

export const CurrentPageContextProvider = ({children}) => {
            const [currentPage , setCurrentPage] = useState("asd") ; 
            return <CurrentPageContext.Provider value={{currentPage , setCurrentPage}}>
                        {children}
            </CurrentPageContext.Provider>
}
