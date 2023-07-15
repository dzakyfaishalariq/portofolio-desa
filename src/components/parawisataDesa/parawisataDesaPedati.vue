<template>
    <div class=" tulisan2">
        <div class=" container mt-2">
            <h3 class=" text-center"><strong>Parawisata Desa</strong></h3>
        </div>
        <div class=" container mt-2">
            <div class="card mb-3 shadow">
                <img src="@/assets/image/SungaiSuci2.jpg" class="card-img-top img-fluid ukuranGambar"
                    alt="gambar sungai suci">
                <div class="card-body">
                    <h5 class="card-title"><strong>Sungai Suci</strong></h5>
                    <p class="card-text intenden justify">
                        Pantai Sungai Suci Merupakan Destinasi yang ada di bengkulu tengah terutama terletak di desa pasar
                        pedati. Pantai ini memiliki keindahan yang sangat menarik untuk di kunjungi. Baik itu keindahan
                        lingkungannya maupun keindahan alamnya. Dalam pantai Sungai Suci ini terdapat tempat untuk duduk dan
                        bersantai yang terbuat dari kayu. Tempat ini sangat cocok untuk bersantai dan menikmati keindahan
                        alam di pesisir pantai sungai suci ini.
                    </p>
                    <router-link :to="{ name: 'sungaiSuci' }" class="btn btn-primary">Baca Lebih Lanjut</router-link>
                    <!-- <a href="#" class="btn btn-primary">Baca Lebih Lanjut</a> -->
                </div>
            </div>
            <div class="card mb-3 shadow">
                <img src="@/assets/image/wahanaSurya.jpg" class="card-img-top img-fluid ukuranGambar"
                    alt="gambar sungai suci">
                <div class="card-body">
                    <h5 class="card-title"><strong>Wahana Surya</strong></h5>
                    <p class="card-text intenden justify">
                        Wahana Surya adalah salah satu tempat pariwisata yang berada diBengkulu lebih tepat nya di Bengkulu
                        Tengah dan juga berdampingan dengan wisata lain yaitu pantai Sungai Suci, selain pantai Wahana Surya
                        juga memiliki beberapa fasilitas lain seperti permainan out bond, kebun kelapa yang indah, beberapa
                        patung hewan dan angkringan yang bisa kita gunakan untuk bersantai ataupun borfoto selfie bersama
                        keluarga, teman atau kekasih.
                    </p>
                    <!-- <a href="#" class="btn btn-primary">Baca Lebih Lanjut</a> -->
                    <router-link :to="{ name: 'wahanaSurya' }" class="btn btn-primary">Baca Lebih Lanjut</router-link>
                </div>
            </div>
            <div class="card mb-3 shadow">
                <img src="@/assets/image/danauNibung4.jpg" class="card-img-top img-fluid ukuranGambar"
                    alt="gambar sungai suci">
                <div class="card-body">
                    <h5 class="card-title"><strong>Danau Nibung</strong></h5>
                    <p class="card-text intenden justify">
                        Danau Nibung merupakan destinasi terbaru yang ada di Bengkulu Tengah. Danau ini terletak di desa
                        pasar pedati. Danau ini memiliki akses langsung pantai karena terhubung kepantai secara langsung.
                        Danau Nibung ini memiliki dua jempatan gantung dan beberapa fasilitas lainnya seperti tempat foto
                        dan isi ban untuk berenang.
                    </p>
                    <!-- <a href="#" class="btn btn-primary">Baca Lebih Lanjut</a> -->
                    <router-link :to="{ name: 'danauNibung' }" class="btn btn-primary">Baca Lebi Lanjut</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.tulisan2 {
    font-family: 'Merriweather', serif;
}

.ukuranGambar {
    height: 600px !important;
}

.intenden {
    text-indent: 50px;
}

.justify {
    text-align: justify;
}
</style>