import { movies} from "./data"

export function Gallery() {

    let movie = movies[0]

    return (
        <>
            <section className="gallery">
                <img src={movie.images.poster} alt="" />
            </section>

            <button>Anterior</button>
            <button>Próxima</button>

        </>
    )
}