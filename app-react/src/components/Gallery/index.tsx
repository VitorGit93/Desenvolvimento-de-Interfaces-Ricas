import { useState } from "react";
import { movies } from "./data"

export function Gallery() {
    const [filmeNoAr, setfilmeNoAr] = useState(0);

    function irProximoFilme() {
        setfilmeNoAr(filmeNoAr + 1);
    }

    function irAnteriorFilme() {
        setfilmeNoAr(filmeNoAr - 1);
    }

    // Add bounds checking for the filmeNoAr index
    const movie = movies.length > 0 ? movies[filmeNoAr] : null;
    const ePrimeiroFilme = filmeNoAr === 0;
    const eUltimoFilme = filmeNoAr === movies.length - 1;

    return (
        <>
            <section className="gallery">
                {movie && <img src={movie.images.poster} alt={movie.title} />}
            </section>

            <button disabled={ePrimeiroFilme} className="action-buttons" onClick={irAnteriorFilme}>Anterior</button>
            <button disabled={eUltimoFilme} className="action-buttons" onClick={irProximoFilme}>Próxima</button>
        </>
    )
}
