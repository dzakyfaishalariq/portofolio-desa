<template>
    <div v-if="loading">
        <Loading />
    </div>
    <div v-else>
        <div class="conten-area">
            <div class=" container tulisan2">
                <div class=" text-center mt-2">
                    <h1><strong>Peta Lokasi Pasar Pedati</strong></h1>
                </div>
                <div class=" card">
                    <div class=" card-header warna-card-header">
                        <h4 class=" card-title text-center"><strong>Peta Gambar</strong></h4>
                    </div>
                    <div class=" card-body">
                        <div class=" card">
                            <img src="@/assets/image/petaDesa.jpg" class="card-img-top img-fluid ukuranGambar"
                                alt="gambar sungai suci">
                        </div>
                    </div>
                </div>
                <div class=" card mt-3">
                    <div class=" card-header warna-card-header">
                        <h4 class=" card-title text-center"><strong>Google Maps</strong></h4>
                    </div>
                    <div class=" card-body">
                        <div class=" card">
                            <div class=" ratio ratio-16x9">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31851.738113830754!2d102.23789086705199!3d-3.7077253110328647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e36b279da26f763%3A0x53b3e8daa3f1df55!2sPs.%20Pedati%2C%20Kec.%20Pd.%20Klp.%2C%20Kabupaten%20Bengkulu%20Tengah%2C%20Bengkulu!5e0!3m2!1sid!2sid!4v1689346735780!5m2!1sid!2sid"
                                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Loading from '../components/componenhome/LoadingArea.vue'
export default {
    name: 'PetaLokasi',
    data() {
        return {
            loading: true,
        }
    },
    components: {
        Loading
    },
    mounted() {
        setTimeout(() => {
            this.loading = false
        }, 2000)
    },
}
</script>
<style>
.tulisan2 {
    font-family: 'Merriweather', serif;
}
.conten-area {
    margin-top: 100px;
}
.warna-card-header{
    background-color: #C3EDC0;
}
</style>