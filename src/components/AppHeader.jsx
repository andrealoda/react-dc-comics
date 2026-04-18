import headerLogo from '../assets/img/dc-logo.png'


export default function AppHeader() {

    const menu = [
        {
            id: 1,
            text: "CHARACTERS",
            path: "/characters"
        },
        {
            id: 2,
            text: "COMICS",
            path: "/comics"
        },
        {
            id: 3,
            text: "MOVIE",
            path: "/movie"
        },
        {
            id: 4,
            text: "TV",
            path: "/tv"
        },
        {
            id: 5,
            text: "GAMES",
            path: "/games"
        },
        {
            id: 6,
            text: "COLLECTIBLES",
            path: "/collectibles"
        },
        {
            id: 7,
            text: "VIDEO",
            path: "/video"
        },
        {
            id: 8,
            text: "FANS",
            path: "/fans"
        },
        {
            id: 9,
            text: "NEWS",
            path: "/news"
        },
        {
            id: 10,
            text: "SHOP",
            path: "/shop"
        }
    ]

    return (

        <header className='bg-white'>
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-white">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={headerLogo} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                {menu.map((item) => (
                                    <li className="nav-item p-2 text-dark" key={item.id}>
                                        <a href={item.path} className="text-black text-decoration-none">{item.text}</a>
                                    </li>
                                ))}


                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header >

    )
}