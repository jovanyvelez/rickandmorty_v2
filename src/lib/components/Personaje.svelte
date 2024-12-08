<script>
    let { personaje } = $props();
</script>

<div>
    <img src={personaje.image} alt={personaje.name} />
    <h2>{personaje.name}</h2>
</div>


<style>
    div {
        background-color: rgb(178, 127, 127);
        padding: 16px;
        border-radius: 5%;
        text-align: center;
    }
    img {
        border-radius: 5%;
        width: 100%;
        height: auto;
    }
</style>