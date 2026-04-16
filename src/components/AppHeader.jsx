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

        <header>
            <div className="container">
                <div className="header-logo">
                    <img src={headerLogo} alt="" />
                </div>
                <nav>
                    {menu.map((item) => (
                        <a href={item.path} key={item.id}>{item.text}</a>
                    ))}



                    {/* <a href="#">CHARACTERS</a>
                    <a href="#" className="text-primary border-bottom border-primary border-4">COMICS</a>
                    <a href="#">MOVIE</a>
                    <a href="#">TV</a>
                    <a href="#">GAMES</a>
                    <a href="#">COLLECTIBLES</a>
                    <a href="#">VIDEO</a>
                    <a href="#">FANS</a>
                    <a href="#">NEWS</a>
                    <a href="#">SHOP</a> */}
                </nav>
            </div>
        </header>

    )
}