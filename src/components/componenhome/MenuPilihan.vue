<template>
    <div class=" mt-4">
        <div class=" container">
            <div class=" row">
                <div class="col-lg-3">
                    <div data-aos="flip-left" data-aos-duration="4000">
                        <div class="card mt-2 shadow-lg">
                            <img src="@/assets/image/gambarStrukrur.webp" height="260px" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Struktur Organisasi</h5>
                                <p class="card-text">
                                    Struktur organisasi adalah susunan atau kerangka yang terdiri dari berbagai bagian yang
                                    saling berhubungan dan saling mempengaruhi dalam mencapai tujuan organisasi di desa
                                    pasar
                                    pedati.
                                </p>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <!-- <button class="btn btn-primary" type="button">Lihat Info</button> -->
                                </div>
                            </div>
                            <div class=" card-footer foot-warna text-center">
                                <router-link :to="{ name: 'strukturDesa' }" class="btn btn-primary">Lihat Info</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div data-aos="flip-left" data-aos-duration="4000">
                        <div class="card mt-2 shadow-lg">
                            <img src="@/assets/image/payChart.png" class="card-img-top" height="285px" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Data Wilayah</h5>
                                <p class="card-text">
                                    Data wilayah ini meliputi wilayah yang ada di desa pasar pedati, mulai dari luas
                                    wilayah,
                                    batas wilayah, jumlah penduduk, dan lain-lain. Serta lokasi di tiap wilayahnya
                                </p>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <!-- <button class="btn btn-primary" type="button">Lihat Info</button> -->
                                </div>
                            </div>
                            <div class=" card-footer foot-warna text-center">
                                <router-link :to="{ name: 'dataWilayah' }" class="btn btn-primary">Lihat Info</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div data-aos="flip-left" data-aos-duration="4000">
                        <div class="card mt-2 shadow-lg">
                            <img src="@/assets/image/semuaOrang.jpeg" class="card-img-top" height="240px" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Keadaan Sosial</h5>
                                <p class="card-text">
                                    Data Umur ini meliputi data umur penduduk di desa pasar pedati, mulai dari umur 0-5
                                    tahun
                                    dan umur 5-10 tahun, dan lain-lain. Sebagai pengetahuan untuk mengetahui jumlah penduduk
                                    sesuai dengan kriteria umur
                                </p>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <!-- <button class="btn btn-primary" type="button">Lihat Info</button> -->
                                </div>
                            </div>
                            <div class=" card-footer foot-warna text-center">
                                <router-link :to="{ name: 'saranaDesa' }" class="btn btn-primary">Lihat Info</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div data-aos="flip-left" data-aos-duration="4000">
                        <div class="card mt-2 shadow-lg">
                            <img src="@/assets/image/agenda.jpeg" class="card-img-top" height="290px" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Agenda KKN</h5>
                                <p class="card-text">
                                    Agenda KKN ini meliputi agenda kegiatan yang akan dilakukan selama kegiatan KKN di desa
                                    pasar pedati, mulai dari kegiatan sosial, kegiatan ekonomi, dan lain-lain.
                                </p>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <!-- <button class="btn btn-primary" type="button">Lihat Info</button> -->
                                </div>
                            </div>
                            <div class=" card-footer foot-warna text-center">
                                <router-link :to="{ name: 'agendaKKN' }" class="btn btn-primary">Lihat Info</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.foot-warna {
    background-color: #AAC8A7 !important;
}
</style>
