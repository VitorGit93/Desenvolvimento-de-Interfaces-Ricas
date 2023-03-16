import { useState } from "react";
import { movies } from "./data"
//import "./style.css";

export function Gallery() {

    // A função "useState" é usada para definir o estado do filme atual exibido na galeria.
    // A variável "filmeNoAr" é o índice do filme atual e começa em 0.
    // A função "setfilmeNoAr" é usada para atualizar o status do filme atual quando o usuário clica nos botões "Anterior" ou "Próximo".

    const [filmeNoAr, setfilmeNoAr] = useState(0);

    console.log(filmeNoAr)
    // As funções "irProximoFilme" e "irAnteriorFilme" são usadas para atualizar o índice do filme atual.
    // Quando "irProximoFilme" é chamado, o valor de "filmeNoAr" é incrementado em 1, e quando "irAnteriorFilme" é chamado, é decrementado em 1.

    function irProximoFilme() {

        if (filmeNoAr === movies.length - 1) {
            setfilmeNoAr(0)
        } else {
            setfilmeNoAr(filmeNoAr + 1)
        }


    }

    function irAnteriorFilme() {

        if (filmeNoAr === 0) {
            setfilmeNoAr(movies.length - 1)
        } else {
            setfilmeNoAr(filmeNoAr - 1)
        }

    }

    // Adicionar verificação de limite para o índice filmeNoAr
    /* O código também executa verificações de limites para garantir que os filmes fora do intervalo da lista não sejam exibidos.
        A const "movie" é definida como o filme correspondente ao índice "filmeNoAr" na lista de filmes "movies",
        mas se não houver filmes na lista, é definida como "null". As variáveis ​​"ePrimeiroFilme" e "eUltimoFilme" são definidas como true
        se o índice do filme atual for o primeiro ou o último da lista, respectivamente.
    */
    const movie = movies.length > 0 ? movies[filmeNoAr] : null;
    console.log(movie)
    const ePrimeiroFilme = filmeNoAr === 0 ? movies.length - 1 : false;
    console.log(ePrimeiroFilme)
    const eUltimoFilme = filmeNoAr === movies.length - 1 ?  0 : false;
    console.log(ePrimeiroFilme)

    /* Por fim, é retornado um snippet JSX que contém um elemento section para exibir a imagem do filme atual,
        bem como os botões "Anterior" e "Próximo" que podem ser desabilitados se o limite da lista for atingido.
    */

    return (
        <>
            <section className="gallery">
                {movie && <img src={movie.images.poster} alt={movie.title} />}
            </section>

            <button className="btn-default" onClick={irAnteriorFilme}>Anterior</button>
            <button className="btn-default" onClick={irProximoFilme}>Próximo</button>
        </>
    )
}

/*
 
  import { useState } from "react";
import { movies } from "./data";
//import "./style.css";

export function Gallery() {
  const [filmeNoAr, setfilmeNoAr] = useState(0);
  const totalMovies = movies.length;

  function irProximoFilme() {
    if (filmeNoAr === totalMovies - 1) {
      setfilmeNoAr(0);
    } else {
      setfilmeNoAr(filmeNoAr + 1);
    }
  }

  function irAnteriorFilme() {
    if (filmeNoAr === 0) {
      setfilmeNoAr(totalMovies - 1);
    } else {
      setfilmeNoAr(filmeNoAr - 1);
    }
  }

  function generateIndicators() {
    let indicators = [];
    for (let i = 0; i < totalMovies; i++) {
      indicators.push(
        <span
          key={i}
          className={`indicator ${i === filmeNoAr ? 'active' : ''}`}
          onClick={() => setfilmeNoAr(i)}
        ></span>
      );
    }
    return indicators;
  }

  const movie = totalMovies > 0 ? movies[filmeNoAr] : null;

  return (
    <>
      <section className="gallery">
        {movie && <img src={movie.images.poster} alt={movie.title} />}
      </section>
      <div className="indicators



*/








