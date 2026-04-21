export default function Card({ thumb, title }) {
    return (
        <div className="card comic-card bg-black">
            <a href="#" className="text-decoration-none text-center">
                <img src={thumb} alt={title} className="thumb" />
                <span className="comics-text text-white">{title}</span>
            </a>
        </div>
    );
}