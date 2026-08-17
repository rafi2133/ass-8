import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";


const MainLayout = ({children}) => {
    return (
        <> 
        <Navbar></Navbar>
        <Header></Header>
            {children}
        </>
    );
};

export default MainLayout;