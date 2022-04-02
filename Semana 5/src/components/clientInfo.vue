<template>
    <hr>
    <br>
    
    <div class="caja">

        <div class="sociales">
            <p>Síguenos y escríbenos en nuestras redes sociales!</p><br>

            <a href="#">Facebook</a><br><br>
            <a href="#">Instagram</a><br><br>
            <a href="#">Twitter</a><br><br>
        </div>

        <div class="clientInfo">

            <div class="formulario">

                <label for="nombre">Nombre</label>
                <input v-model="name" type="text" name="nombre" id="nombre" placeholder="Su nombre...">

                <label for="tel">Teléfono</label>
                <input v-model="tel" type="tel" name="tel" id="tel" placeholder="55...." maxlength="10">

            </div>
            
            <div class="formulario">

                <label for="email">Correo</label>
                <input v-model="email" type="email" name="email" id="email" placeholder="Su correo...">

                <label for="send">Comentario</label>
                <input type="text" name="send" id="send" placeholder="...">

            </div>
            
        </div>

    </div>

    <br><br>
    <button @click="NewTab(), moveUp()">Pagar</button>

</template>

<script>
import { mapState } from "vuex";

export default {
    name: 'clientInfo',
    
    methods:{
        NewTab() {
            this.$router.push({ name: 'home' });
        },
        moveUp(){
            window.scrollTo(0,0);
        }   
    },

    
    computed:{
        ...mapState(["persona"]),
        name:{
            set(name) {
                this.$store.commit("setValues", {name});
            },
        },
        tel:{
            set(tel) {
                this.$store.commit("setValues", {tel});
            },
        },
        email:{
            set(email) {
                this.$store.commit("setValues", {email});
            },
        }
    }
}
</script>

<style scoped>
hr{
    margin-inline: 200px;
    opacity: .3;
    color: brown;
}

.caja{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-inline: 100px;
}

.clientInfo{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.clientInfo .formulario{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.5em;
    font-size: 14px;
}

@media (max-width: 40em) and (max-width: 984px) {

    .caja{
        margin-inline: 0;
        display: flex;
        justify-content: center;
    }
    .clientInfo{
        display: flex;
        flex-direction: column;
    }

    p:active{
        transition: .5s;
        z-index: 1;
        transform: scale(1.05);
        border: 1px solid lavender;
    }

}


input{
    padding: 10px;
    margin-right: 25px;
    color: rgb(100, 100, 100);
    margin-bottom: 20px;
}

p{
    padding: 10px;
    transition: .5s;
    transition-timing-function: ease-in-out;
}

p:hover{
    transition: .5s;
    z-index: 1;
    transform: scale(1.05);
    border: 1px solid lavender;
}

button{
    background-color: blue;
    color: #fff;
    padding: 10px;
    min-width: 200px;
    cursor: pointer;
}

</style>