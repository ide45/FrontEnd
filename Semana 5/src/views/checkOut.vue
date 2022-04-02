<template>
    <div class="content" id="fo">
        <br><br><br><br><br><br><br>
        <h1>Su compra</h1>
        <br><br>
        <div class="box">
            <p id="cake">{{$store.state.cakes1}}</p>
            <p id="cake">{{$store.state.cakes2}}</p>
            <p id="cake">{{$store.state.cakes3}}</p>
            <p id="cake">{{$store.state.cakes4}}</p>
            <p id="cake">{{$store.state.topping1}}</p>
            <br>
            <p>Total: ${{$store.state.checkOut}}</p>
        </div>

        <br><br><br><br><br><br>
        <h1>Contacto</h1><br>
        <client-info/><br><br>
        <br><br>
        <infoBakery/>
    </div>
</template>

<script>
import clientInfo from '@/components/clientInfo.vue'
import infoBakery from '@/components/infoBakery.vue'

export default {
    name: 'checkOut',
    components:{
        clientInfo,
        infoBakery
    },
    methods:{
        
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.box{
    padding: 10px;
    max-width: 35%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    align-items: center;
    border: 2px solid azure;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.253);
}

p{
    font-size: 1.5em;
}

</style>