<template>
    <div data-aos="fade-up" data-aos-duration="4000">
        <div class=" card text-bg-dark mt-2">
            <!-- paggil gambar di assets -->
            <img src="@/assets/image/SungaiSuci4.jpg" class=" card-img gambar1" alt="gambar desa">
            <div class="card-img-overlay">
                <h5 class="card-title bg-tulisan tulisan">Selamat Datang Di</h5>
                <h5 class="card-title bg-tulisan tulisan">Desa Pasar Pedati</h5>
                <div class=" text-center">
                    <!-- <a href="#" class=" btn btn-primary ukuran-btn mt-5 tulisan">Explore</a> -->
                    <router-link :to="{ name: 'sejarahDesa' }" class="btn btn-primary ukuran-btn mt-5 tulisan">Explore</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.bg-tulisan {
    color: #f8f9f8 !important;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 30px;
}

.ukuran-btn {
    font-size: 30px !important;
    width: 160px;
    height: 60px;
}

.gambar1 {
    height: 600px !important;
    width: 100%;
}

.tulisan {
    font-family: 'Caprasimo', cursive !important;
}
</style>