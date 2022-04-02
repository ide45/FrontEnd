<template>
    <br><br><br><br><br><br><br>
    <div class="contenedor">

        <div class="pasteles">
            <ul>Existencias pasteles
                <li>Indiferente: {{$store.state.counterCake4}}</li>
                <li>Bonito: {{$store.state.counterCake2}}</li>
                <li>Mango: {{$store.state.counterCake3}}</li>
                <li>Raro: {{$store.state.counterCake1}}</li>
            </ul>  
        </div>

        <div class="toppings">
            <ul>Existencias toppings
                <li>Chispas de chocolate: {{$store.state.counterTop1}}</li>
                <li>Almendras: {{$store.state.counterTop2}}</li>
                <li>Frutos: {{$store.state.counterTop3}}</li>
            </ul> 
 
        </div>

    </div>
    <br>
    <hr>
    <div class="pedido"> 
        <h1>ULTIMO PEDIDO</h1>
            <p>Nombre del cliente: {{$store.state.persona.name}}</p>
            <p>Celular: {{$store.state.persona.tel}}</p>
            <p>Correo: {{$store.state.persona.email}}</p>
        <h2>ITEMS</h2>
            <p id="cake">{{$store.state.cakes1}}</p>
            <p id="cake">{{$store.state.cakes2}}</p>
            <p id="cake">{{$store.state.cakes3}}</p>
            <p id="cake">{{$store.state.cakes4}}</p>
            <p id="cake">{{$store.state.topping1}}</p>
            <br>
            <p>Total: ${{$store.state.checkOut}}</p>
    </div>
    
</template>

<script>

export default {
    name: 'bossStock',
    
}
</script>

<style scoped>

@media (max-width: 330px) {

    .contenedor{
        display: flex;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 20px;
        margin: auto 0;
    }
    
}

ul{
    font-weight: bold;
    line-height: 1.5em;
}
.contenedor{    
    display: flex;
    flex-direction: column;
    max-width: 600px;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    text-align: center;
    flex-direction: row;
}

.pasteles{
    display: flex;
    max-width: fit-content;
    justify-self: flex-start;
}

.pedido{
    display: flex;
    flex-direction: column;
    margin: auto 0;
    padding-top: 3em;
    line-height: 3em;
}

hr{
    margin-inline: 200px;
    opacity: .3;
    color: azure;
}

h1{
    padding: 10px;
    border: 2px solid black;
}

</style>