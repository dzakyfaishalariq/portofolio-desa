<template>
    <!-- sarana dan prasarana desa pasar pedati -->
    <div class=" container mt-2 tulisan2">
        <div class="card">
            <div class=" card-header">
                <h4 class=" text-center"><strong>Sarana Prasarana Desa Pasar Pedati</strong></h4>
            </div>
            <div class=" card-body">
                <div class=" row">
                    <div class=" col-lg-12">
                        <canvas id="saranaPrasarana"></canvas>
                    </div>
                    <div class=" col-lg-12">
                        <hr>
                        <h5>Tabel Informasi</h5>
                        <div class=" table-responsive">
                            <table class=" table table-light table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Sarana Prasarana</th>
                                        <th>Jumlah</th>
                                        <th>Kondisi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Kantor Desa</td>
                                        <td>1 Unit</td>
                                        <td>
                                            <span class=" badge text-bg-success">Baik</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Balai Pertemuan Desa</td>
                                        <td>1 Unit</td>
                                        <td>
                                            <span class=" badge text-bg-success">Baik</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Masjid Tempat Ibadah</td>
                                        <td>7 Unit</td>
                                        <td>
                                            <span class=" badge text-bg-success">Baik</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Mushola</td>
                                        <td>7 Unit</td>
                                        <td>
                                            <span class=" badge text-bg-success">Baik</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Pemakaman Umum</td>
                                        <td>5 Unit</td>
                                        <td>
                                            <span class=" badge text-bg-warning">Cukup</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Lapangan Bola kaki</td>
                                        <td>1 Unit</td>
                                        <td>
                                            <span class=" badge text-bg-success">Baik</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Sekolah PAUD</td>
                                        <td>4 Unit</td>
                                        <td>
                                            <span class=" badge text-bg-warning">Cukup</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Sekolah Dasar</td>
                                        <td>2 Unit</td>
                                        <td>
                                            <span class=" badge text-bg-success">Baik</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>SLTP/ Mts</td>
                                        <td>2 Unit</td>
                                        <td>
                                            <span class=" badge text-bg-success">Baik</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>SLTA/ MA</td>
                                        <td>2 Unit</td>
                                        <td>
                                            <span class=" badge text-bg-success">Baik</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>Pelabuhan Nelayan</td>
                                        <td>2 Unit</td>
                                        <td>
                                            <span class=" badge text-bg-danger">Belum Layak</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td>Pariwisata</td>
                                        <td>4 Unit</td>
                                        <td>
                                            <span class=" badge text-bg-secondary">Sedang</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td>Gedung Perpustakaan</td>
                                        <td>1 Unit</td>
                                        <td>
                                            <span class=" badge text-bg-secondary">Sedang</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>14</td>
                                        <td>Balai Posyandu</td>
                                        <td>1 Unit</td>
                                        <td>
                                            <span class=" badge text-bg-secondary">Sedang</span>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
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
    name: "RincianProfileDesa",
    mounted() {
        const ctx = document.getElementById('saranaPrasarana').getContext('2d');
        new Chart(
            ctx, {
            type: 'bar',
            data: {
                labels: ['Kantor Desa', 'Balai Pertemuan Desa', 'Masjid Tempat Ibada', 'Mushola', 'Pemakaman Umum', 'Lapangan Bola kaki', 'Sekolah PAUD', 'Sekolah Dasar', 'SLTP/ Mts', 'SLTA/ MA', 'Pelabuhan Nelayan', 'Pariwisata', 'Gedung Perpustakaan', 'Balai Posyandu'],
                datasets: [{
                    label: 'Sarana Dan Prasarana',
                    data: [1, 1, 7, 7, 5, 1, 4, 2, 2, 2, 2, 4, 1, 1]
                }]
            },
            options: {
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Sarana Prasarana'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        display: true,
                        title: {
                            display: true,
                            text: 'Jumlah/unit'
                        }
                    }
                }
            }
        }
        );
    }
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