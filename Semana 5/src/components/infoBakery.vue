<template>
    <div class="infoBakery">

        <h2>Pato</h2>

        <div class="socialLinks">
           <img src="../assets/facebook.png" alt="facebook">&emsp;
           <img src="../assets/instagram.png" alt="instagram">
        </div>
        
        <div class="contact">

            <div class="contactInfo">
                <p>Horario de atención: 10am - 6pm</p>
                <p>Dirección: Av. Pato. Calle Alada</p>
                <p>Teléfono: 1234567891</p>
            </div>
            
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'infoBakery',
}
</script>

<style scoped>

.infoBakery{
    display: flex;
    background-color: azure;
    justify-content: space-evenly;
    align-items: center;
    height: 125px;
    flex-wrap: wrap;
    width: 100%;
}

@media (max-width: 40em) and (max-width: 984px) {

    .infoBakery{
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
    }
    
}


.infoBakery .socialLinks{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 70px;
}

.infoBakery .socialLinks img{
    height: 100%;
    width: 100%;

    filter: grayscale(50%);
}

.infoBakery .contact{
    display: flex;
    align-self: flex-end;
    padding-block-end: 1.5em;
}


</style>