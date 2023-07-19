<template>
    <div class="conten-area">
        <div class=" container tulisan2">
            <div class=" card">
                <img src="@/assets/image/dataWilayahGambar.jpg" class=" card-img gambar" alt="">
                <div class=" card-img-overlay">
                    <h1 class=" card-title text-center"><b class="tebal">Data Wilayah Desa Pasar Pedati</b></h1>
                </div>
            </div>
            <div class=" mt-2">
                <Pendahuluan />
            </div>
        </div>
    </div>
</template>
<script>
import Pendahuluan from "@/components/componenDataWilayah/Pendahuluan.vue";
export default {
    name: "DataWilayah",
    components: {
        Pendahuluan
    }
}
</script>
<style>
.gambar {
    height: 300px !important;
    object-fit: cover;
}
.conten-area {
    margin-top: 90px;
}
.tebal {
    font-family: 'Merriweather', serif;
    font-weight: bold;
    /* atur ketebalan sebesar 20 */
    font-size: 50px;
}

.tulisan2 {
    font-family: 'Merriweather', serif;
}

.intenden {
    text-indent: 50px;
}

.justify {
    text-align: justify;
}
</style>