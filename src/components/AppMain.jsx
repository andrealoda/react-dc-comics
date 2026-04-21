import jumbotronImg from '../assets/img/jumbotron.jpg'
import comics from '../data/comics.js'
import Card from './Card';

export default function AppMain() {

    return (

        <main className="bg-black">
            <div className="jumbotronHead ">
                <img src={jumbotronImg} alt="" />

            </div>
            <div className="container text-white text-start">
                <a href="#">
                    <button className="btn btn-primary rounded-0 px-5 negative-translation-50">CURRENT SERIES</button>
                </a>

                <div className="jumbotron d-flex flex-wrap justify-content-center gap-5 mt-5">

                    {comics.map((item) => (
                        <Card key={item.id} thumb={item.thumb} title={item.title} />
                    ))}


                </div>
                <div className="d-flex justify-content-center py-4">
                    <a href="#">
                        <button className="btn btn-primary rounded-0 px-5">LOAD MORE</button>
                    </a>
                </div>

            </div>
        </main>

    )
}