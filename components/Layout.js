import NavBar from "./NavBar"

const Layout = (props) => (
    <>
        <NavBar/>

        <main className="container py-4">
            {props.children}
        </main>
        
        <footer className="bg-dark text-light text-center">
            <div className="container p-3">
                <h43>&copy; {new Date().getFullYear()} Juan Marin Ramallo, All rights reserverd</h43>                
            </div>
        </footer>
    </>
)

export default Layout;