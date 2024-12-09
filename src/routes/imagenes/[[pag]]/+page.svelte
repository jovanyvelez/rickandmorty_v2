<script lang="ts">
	import type { Character } from '$lib/tipos';
	import Personaje from '$lib/components/Personaje.svelte';

	let { data } = $props();

	const personajes: Character[] = data.personajes;
	const paginasTotales = data.paginas;
	const pagina = data.pagina;

</script>

<h1 class="title">Rick and Morty Svelte</h1>

<div class="btn">
	{#if pagina > 1}
		<a href={`/imagenes/${pagina - 1}`} data-sveltekit-reload>Anterior</a>
	{/if}

	{#if pagina < paginasTotales}
		<a href={`/imagenes/${pagina + 1}`} data-sveltekit-reload>Siguiente</a>
	{/if}
</div>

<main class="container">
	{#each personajes as personaje (personaje.id)}
		<Personaje {personaje} />
	{/each}
</main>

