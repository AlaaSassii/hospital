import { createContext , useState } from "react";

export const MenuPageContext = createContext({}) ; 

export const MenuPageProvider = ({children}) => {
            const [MenuPage , setMenuPage] = useState(true) ; 
            return (
            <MenuPageContext.Provider value={{MenuPage , setMenuPage}}>
                        {children}
            </MenuPageContext.Provider>
            )
}
