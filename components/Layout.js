import Loader from "./Loader";
import Navbar from "./Navbar";

function Layout({ children }) {
    return (
        <>
            <Loader />
            <Navbar />
            {children}
        </>
    )
}

export default Layout;