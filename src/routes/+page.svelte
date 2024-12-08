<script lang="ts">
	import type { Character } from '$lib/tipos';
	import Personaje from '$lib/components/Personaje.svelte';

	let personajes: Character[] = $state([]);
	let paginasTotales = $state(0);
	let page = $state(1);

	async function cargarPersonajes() {
		const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
		const data = await response.json();
		personajes = data.results;
		paginasTotales = data.info.pages;
	}

	$effect(() => {
		cargarPersonajes();
	});

	function siguientePagina() {
		page++;
		if (page > paginasTotales) {
			page = paginasTotales;
		}
		cargarPersonajes();
	}

	function anteriorPagina() {
		page--;
		if (page < 1) {
			page = 1;
		}
		cargarPersonajes();
	}
</script>

<h1 class="title">Rick and Morty Svelte</h1>

<div class="btn">
	<button onclick={anteriorPagina} disabled={page === 1}>Anterior</button>
	<button onclick={siguientePagina}>Siguiente</button>
</div>

<main class="container">
	{#each personajes as personaje (personaje.id)}
		<Personaje {personaje} />
	{/each}
</main>

<style>
	button {
		background-color: #4f4f4f;
		color: #e0e0e0;
		border: none;
		padding: 10px 20px;
		cursor: pointer;
		margin-bottom: 16px;
	}

	button:hover {
		background-color: #5c5c5c;
	}

	.container {
		display: grid;
		padding: 16px;
		width: 70%;
		margin: 0 auto;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 16px;
		border-radius: 1%;
	}

	.title {
		text-align: center;
	}

	.btn {
		margin: 0 auto;
		width: 70%;
		display: flex;
		justify-content: space-between;
	}
</style>
