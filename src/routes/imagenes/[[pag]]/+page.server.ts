

export async function load({ params }) {

    let pagina: number;
    if (!params.pag) {
        pagina = 1;
    } else {
        const { pag } = params;
        pagina = parseInt(pag, 10);
    }
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);
    const datos = await res.json();
    const paginas = datos.info.pages;
    const personajes = datos.results

    return {
        personajes, pagina, paginas
    };
}