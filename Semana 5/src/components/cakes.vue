<template>

    <hr>
    <br><br>
    <div class="pasteles">

        <div class="box">
            <button id="mobile" class="mobile"></button>
            <img src="../assets/cake1.jpg" alt="pastel">
            <div class="descripcionOculta">
                <div class="sabor">Raro</div>
                <p>Lorem ipsum dolor sit.<br>$250</p>
                <p id="o">{{ $store.state.counterCake1 }}</p>
                <button @click="$store.commit('quitar1')">Agregar</button>
            </div>
        </div>
        
        <div class="box">
            <img src="../assets/cake3.jpg" alt="pastel">
            <div class="descripcionOculta">
                <div class="sabor">Bonito</div>
                <p>Lorem ipsum dolor sit.<br>$100</p>
                <p>Restantes: {{ $store.state.counterCake2 }}</p>
                <button @click="$store.commit('quitar2')">Agregar</button>
            </div>
        </div>

        <div class="box">
            <img src="../assets/cake4.jpg" alt="pastel">
            <div class="descripcionOculta">
                <div class="sabor">Mango</div>
                <p>Lorem ipsum dolor sit.<br>$150</p>
                <p>Restantes: {{ $store.state.counterCake3 }}</p>
                <button @click="$store.commit('quitar3')">Agregar</button>
            </div>
        </div>

        <div class="box">
            <img src="../assets/cake5.jpg" alt="pastel">
            <div class="descripcionOculta">
                <div class="sabor">Indiferente</div>
                <p>Lorem ipsum dolor sit<br>$300</p>
                <p>Restantes: {{ $store.state.counterCake4 }}</p>
                <button @click="$store.commit('quitar4')">Agregar</button>
            </div>
        </div>
        
    </div>

</template>

<script>
export default {
    name: 'cakes',

    methods:{

 
    }
}
</script>

<style scoped>

.pasteles{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.pasteles .box{
    position: relative;
}

.pasteles .box{
    border: 2px solid ghostwhite;
    transition: .5s;
    transition-timing-function: ease-in-out;
}


div.box:hover{
    transition: .5s;
    z-index: 1;
    transform: scale(1.1);
    border-radius: 2%;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.157);
    border: 2px solid antiquewhite;
}


div.descripcionOculta{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 1s;
    transition-timing-function: ease-in-out;
    opacity: 0;
}

.descripcionOculta:hover{
    opacity: 1;
    transition: 1s;
}

@media (max-width: 40em) and (max-width: 984px) {

        div.box:active{
            transition: .5s;
            z-index: 1;
            transform: scale(1.1);
            border-radius: 2%;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.157);
            border: 2px solid antiquewhite;
        }

        .descripcionOculta:active{
            opacity: 1;
            transition: 1s;
        }

    }

.sabor{
    font-size: 2em;
    font-weight: bold;
}

p{
    font-size: 1.25em;
    margin-top: 0.25em;
}

button{
    padding: 10px;
    cursor: pointer;
    border: 0;
    background-color: transparent;
    color: lightblue;
    font-size: 1.2em;
}

button.mobile{
    width: 100%;
    height: 100%;
    display: none;
}

hr{
    margin-inline: 200px;
    opacity: .3;
    color: brown;
}

.oculto{
    display: none;
}

</style>