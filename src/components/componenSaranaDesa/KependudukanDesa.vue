<template>
    <div class=" container tulisan2 mt-3">
        <div class=" card">
            <div class=" card-body">
                <div class=" row">
                    <div class=" col-lg-6">
                        <div class=" card mt-2">
                            <div class=" card-header">
                                <h4 class=" text-center"><strong>Kependudukan Desa Pasar Pedati</strong></h4>
                            </div>
                            <div class=" card-body">
                                <canvas id="KependudukanDesa"></canvas>
                            </div>
                            <div class=" card-footer">
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <!-- <button class="btn btn-primary" type="button">Lihat Tabel</button> -->
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#tes2">
                                        Lihat Tabel
                                    </button>
                                </div>
                                <div class="modal fade" id="tes2" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-xl">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Tabel Kependudukan Desa
                                                    Pasar Pedati</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class=" card">
                                                    <div class=" table-responsive">
                                                        <table
                                                            class=" table table-active table-bordered table-striped table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th>No</th>
                                                                    <th>Kelompok Umur</th>
                                                                    <th>Jumlah</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>0-4</td>
                                                                    <td>340</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>5-9</td>
                                                                    <td>419</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>10-14</td>
                                                                    <td>451</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>15-19</td>
                                                                    <td>453</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5</td>
                                                                    <td>20-24</td>
                                                                    <td>472</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>6</td>
                                                                    <td>25-29</td>
                                                                    <td>437</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>7</td>
                                                                    <td>30-34</td>
                                                                    <td>422</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>8</td>
                                                                    <td>35-39</td>
                                                                    <td>357</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>9</td>
                                                                    <td>40-44</td>
                                                                    <td>305</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>10</td>
                                                                    <td>45-49</td>
                                                                    <td>273</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>11</td>
                                                                    <td>50-54</td>
                                                                    <td>223</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>12</td>
                                                                    <td>55-59</td>
                                                                    <td>169</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>13</td>
                                                                    <td>60-64</td>
                                                                    <td>127</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>14</td>
                                                                    <td>65-69</td>
                                                                    <td>89</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15</td>
                                                                    <td>70-74</td>
                                                                    <td>78</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>16</td>
                                                                    <td>>74</td>
                                                                    <td>70</td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-6">
                        <div class=" card mt-2">
                            <div class=" card-header">
                                <h4 class=" text-center"><strong>Menurut Agama</strong></h4>
                            </div>
                            <div class=" card-body">
                                <canvas id="MenurutAgama"></canvas>
                            </div>
                            <div class=" card-footer">
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <!-- <button class="btn btn-primary" type="button">Lihat Tabel</button> -->
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                        Lihat Tabel
                                    </button>
                                </div>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-xl">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Data Menurut Agama</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class=" card">
                                                    <div class=" table-responsive">
                                                        <table
                                                            class=" table table-active table-bordered table-hover table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>No</th>
                                                                    <th>Agama</th>
                                                                    <th>Jumlah Orang</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>ISLAM</td>
                                                                    <td>4461</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>KRISTEN</td>
                                                                    <td>84</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>KATOLIK</td>
                                                                    <td>68</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>HINDU</td>
                                                                    <td>56</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5</td>
                                                                    <td>BUDHA</td>
                                                                    <td>16</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-6">
                        <div class=" card mt-2">
                            <div class=" card-header">
                                <h4 class=" text-center"><strong>Menurut Pendidikan</strong></h4>
                            </div>
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
    name: "KependudukanDesa",
    mounted() {
        const ctx = document.getElementById('KependudukanDesa').getContext('2d');
        const ctx2 = document.getElementById('MenurutAgama').getContext('2d');
        new Chart(
            ctx, {
            type: 'line',
            data: {
                labels: ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '>74'],
                datasets: [{
                    label: 'Jumlah Kependudukan Desa Pasar Pedati',
                    data: [340, 419, 451, 453, 472, 437, 422, 357, 305, 273, 223, 169, 127, 89, 78, 70],
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
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Usia'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Jumlah Penduduk'
                        }
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
            }
        }
        );
        new Chart(
            ctx2, {
            type: 'pie',
            data: {
                labels: ['Islam', 'Kristen', 'Katolik', 'Hindu', 'Budha'],
                datasets: [{
                    label: 'Jumlah Penduduk',
                    data: [4461, 84, 68, 56, 16],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                }]
            },
        }
        );
    },
}
</script>
<style>
#KependudukanDesa {
    width: 100%;
    height: 590px !important;
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