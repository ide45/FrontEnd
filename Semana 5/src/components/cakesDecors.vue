<template>

    <hr>
    <br>
    <div class="decors">

        <div class="elementos">

            <input type="checkbox" id="texto" name="texto" @click="activo()">
            <label for="texto">&nbsp;Mensaje personalizado - $55</label>

            <input type="text" name="textoPoner" id="textoPoner" 
            placeholder="Escriba su mensaje..." class="oculto" maxlength="25">

        </div>

        <div class="elementos">
            <input type="checkbox" id="chispas" name="chispas">
            <label for="chispas">&nbsp;Chispas de chocolate - $20</label>
        </div>

        <div class="elementos">
            <input type="checkbox" id="almendras" name="almendras">
            <label for="almendras">&nbsp;Almendras - $70</label>
        </div>

        <div class="elementos">
            <input type="checkbox" id="frutos" name="frutos">
            <label for="frutos">&nbsp;Frutos - $10</label>
        </div>

    </div>
    
    <br><br>
    <button @click="prueba(), $store.commit('checkBoxs'), NewTab(), moveUp()">Confirmar</button>

</template>

<script>

export default {
    name: 'cakesDecors',

    methods:{
        activo() {
            const checkBox = document.getElementById("texto");
            const text = document.getElementById("textoPoner");
            if(checkBox.checked == true){
                text.style.display = "block";
            }else{
                text.style.display = "none";
            }
        },

        prueba(){
            const uname = document.querySelector("#textoPoner");
        },

        NewTab() {
            this.$router.push({ name: 'checkOut' });
        },
        moveUp(){
            window.scrollTo(0,0);
        } 
    },

}

</script>

<style scoped>
    
hr{
    margin-inline: 200px;
    opacity: .3;
    color: brown;
}

    .decors{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
        margin: 15px;
    }

    @media (max-width: 40em) and (max-width: 984px) {

        .decors{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

    }

    .elementos{
        color: black;
        font-weight: bold;
        align-items: center;
        flex-direction: column;
        padding: 25px;  
        border: 1px solid azure;
        background-color: blanchedalmond;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.171);
    }

    .oculto{
        display: none;
        padding: 7px;
        margin: 10px auto;
        background-color: transparent;
        border: none;
        color: black;
        font-weight: 500;
    }

    button{
        padding: 8px;
        margin: 10px auto;
        border: 0px;
        border-radius: 15%;
        cursor: pointer;
        box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.13);
        transition: .5s;
        transition-timing-function: ease-in-out;
    }

    button:hover{
    transition: .5s;
    transform: scale(1.05);
    }

</style>