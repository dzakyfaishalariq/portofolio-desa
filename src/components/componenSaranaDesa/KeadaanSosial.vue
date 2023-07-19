<template>
    <div class=" container tulisan2">
        <div class=" card mt-2">
            <img src="@/assets/image/saranaDanPrasarana.jpg" class=" card-img gambar" alt="Gambar Prasarana">
            <div class=" card-img-overlay">
                <h1 class=" card-title text-center"><b class="tebal">Keadaan Sosial</b></h1>
            </div>
        </div>
        <div class=" mt-3">
            <p class=" intenden justify">
                Penduduk Desa Pasar Pedati berasal dari berbagai daerah dan suku, dimana mayoritas penduduknya yang paling
                dominan Penduduk asli Melayu Bengkulu, Lembak, dan Rejang Serawai Bengkulu Selatan. Selain itu ada juga dari
                Pulau Jawa, Jawa Timur, Jawa Tengah, Jawa Barat, Bali dan Madura, suku Batak, Aceh bahkan dari Timur yaitu
                NTT dan Papua. Sehingga tradisi-tradisi Musyawarah Untuk Mufakat, Gotong Royong dan Kearifan Lokal yang lain
                sudah dilakukan oleh masyarakat sejak adanya Desa Pasar Pedati dan hal tersebut secara efektif menjadi
                landasan berkumpul dan bermufakat menjaga dan menghindarkan adanya benturan-benturan antar kelompok di
                masyarakat.
            </p>
            <div class=" card">
                <div class=" card-body">
                    <div class=" row">
                        <div class=" col-lg-6">
                            <p class=" intenden justify">
                                Desa Pasar Pedati, yang terletak di sebuah daerah yang indah dan subur, memiliki jumlah
                                penduduk sebanyak 4.685 jiwa. Data Capil Tahun 2021 menunjukkan bahwa dari jumlah tersebut,
                                terdapat 2.397 jiwa laki-laki dan 2.288 jiwa perempuan. Selain itu, terdapat 1.307 Kepala
                                Keluarga (KK) yang tersebar di tiga wilayah dusun yang ada, yaitu Dusun 001 Pasar Pedati,
                                Dusun 002 Pasar Pedati, dan Dusun 003 Sungai Hitam.
                            </p>
                            <p class=" intenden justify">
                                Desa Pasar Pedati memiliki kehidupan masyarakat yang harmonis dan penuh kebersamaan. Setiap
                                wilayah dusun memiliki peran dan karakteristiknya sendiri. Dusun 001 Pasar Pedati terkenal
                                dengan pasar tradisionalnya yang menjadi pusat perdagangan dan aktivitas ekonomi masyarakat.
                                Dusun 002 Pasar Pedati dikenal dengan keindahan alamnya yang menawarkan pemandangan yang
                                menakjubkan bagi wisatawan dan warga sekitar. Sedangkan Dusun 003 Sungai Hitam merupakan
                                wilayah yang kaya akan sumber daya alam, terutama berkat keberadaan sungai yang menjadi
                                sumber mata pencaharian penduduk.
                            </p>
                            <p class=" intenden justify">
                                Dengan keberagaman dan potensi yang dimiliki, Desa Pasar Pedati terus berusaha untuk
                                meningkatkan kualitas hidup masyarakatnya. Pemerintah desa dan masyarakat bekerja sama untuk
                                mengembangkan potensi ekonomi, memperkuat infrastruktur, serta meningkatkan akses layanan
                                kesehatan dan pendidikan. Dengan demikian, Desa Pasar Pedati menjadi tempat yang nyaman dan
                                berkembang, di mana penduduknya dapat menikmati kehidupan yang sejahtera dan harmonis di
                                tengah keindahan alam dan kekayaan budaya lokal yang dimiliki.

                            </p>
                        </div>
                        <div class=" col-lg-6">
                            <canvas id="dataLP"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Chart from 'chart.js/auto';
export default {
    name: "KeadaanSosial",
    mounted() {
        const ctx = document.getElementById('dataLP').getContext('2d');
        new Chart(
            ctx, {
            type: 'pie',
            data: {
                 labels: ['Laki-laki', 'Perempuan'],
                datasets: [{
                    label: 'Jumlah Penduduk',
                    data: [2397, 2288],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Jumlah Penduduk Desa Pasar Pedati'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
            }
        }
        );
    },
}
</script>
<style>
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