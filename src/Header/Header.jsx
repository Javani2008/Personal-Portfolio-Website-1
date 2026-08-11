
import './Header.css'
function Header() {
    return (
        <div className="Header">
            <h2 className="title">Amir</h2>
            <nav className="links">
                <a href="#" className='active'>Home</a>
                <a href="">About</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
            </nav>
        </div>
    )
}
export default Header