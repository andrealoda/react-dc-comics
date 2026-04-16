import headerLogo from '../assets/img/dc-logo.png'

export default function AppHeader() {

    return (

        <header>
            <div className="container">
                <div className="header-logo">
                    <img src={headerLogo} alt="" />
                </div>
                <nav>
                    <a href="#">CHARACTERS</a>
                    <a href="#" className="text-primary border-bottom border-primary border-4">COMICS</a>
                    <a href="#">MOVIE</a>
                    <a href="#">TV</a>
                    <a href="#">GAMES</a>
                    <a href="#">COLLECTIBLES</a>
                    <a href="#">VIDEO</a>
                    <a href="#">FANS</a>
                    <a href="#">NEWS</a>
                    <a href="#">SHOP</a>
                </nav>
            </div>

        </header>

    )
}