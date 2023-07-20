<template>
    <div class=" container tulisan2 mt-3">
        <div class=" card">
            <div class=" card-body">
                <div class=" row">
                    <div class=" col-lg-6">
                        <div class=" card mt-2">
                            <div class=" card-header warna-area-header">
                                <h4 class=" text-center"><strong>Kependudukan Desa Pasar Pedati</strong></h4>
                            </div>
                            <div class=" card-body">
                                <canvas id="KependudukanDesa"></canvas>
                            </div>
                            <div class=" card-footer warna-area-header">
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
                                                                    <td>1-5</td>
                                                                    <td>432</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>6-10</td>
                                                                    <td>552</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>11-15</td>
                                                                    <td>528</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>16-20</td>
                                                                    <td>527</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5</td>
                                                                    <td>21-25</td>
                                                                    <td>533</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>6</td>
                                                                    <td>26-30</td>
                                                                    <td>597</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>7</td>
                                                                    <td>31-35</td>
                                                                    <td>525</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>8</td>
                                                                    <td>36-40</td>
                                                                    <td>495</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>9</td>
                                                                    <td>41-45</td>
                                                                    <td>446</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>10</td>
                                                                    <td>46-50</td>
                                                                    <td>385</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>11</td>
                                                                    <td>51-55</td>
                                                                    <td>317</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>12</td>
                                                                    <td>56-60</td>
                                                                    <td>288</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>13</td>
                                                                    <td>61-65</td>
                                                                    <td>171</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>14</td>
                                                                    <td>66-70</td>
                                                                    <td>122</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>15</td>
                                                                    <td>71-75</td>
                                                                    <td>77</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>16</td>
                                                                    <td>76-80</td>
                                                                    <td>47</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>17</td>
                                                                    <td>81-85</td>
                                                                    <td>46</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>18</td>
                                                                    <td>86-90</td>
                                                                    <td>22</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>19</td>
                                                                    <td>>90</td>
                                                                    <td>23</td>
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
                            <div class=" card-header warna-area-header">
                                <h4 class=" text-center"><strong>Menurut Agama</strong></h4>
                            </div>
                            <div class=" card-body">
                                <canvas id="MenurutAgama"></canvas>
                            </div>
                            <div class=" card-footer warna-area-header">
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
                                                                    <td>6008</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>KRISTEN</td>
                                                                    <td>50</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>KATOLIK</td>
                                                                    <td>32</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>HINDU</td>
                                                                    <td>36</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5</td>
                                                                    <td>BUDHA</td>
                                                                    <td>7</td>
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
                            <div class=" card-header warna-area-header">
                                <h4 class=" text-center"><strong>Menurut Pendidikan</strong></h4>
                            </div>
                            <div class=" card-body">
                                <canvas id="MenurutPendidikan"></canvas>
                            </div>
                            <div class=" card-footer warna-area-header">
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <!-- <button class="btn btn-primary" type="button">Lihat Tabel</button> -->
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#tes4">
                                        Lihat Tabel
                                    </button>
                                </div>
                            </div>
                            <div class="modal fade" id="tes4" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog modal-xl">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Data Menurut Pendidikan</h1>
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
                                                                <th>Pendidikan</th>
                                                                <th>Jumlah Orang</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Tidak/Belum Sekolah</td>
                                                                <td>1808</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Tidak Tamat SD/Sederajat</td>
                                                                <td>510</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>Tamat SD/Sederajat</td>
                                                                <td>1366</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>SLTP/Sederajat</td>
                                                                <td>816</td>
                                                            </tr>
                                                            <tr>
                                                                <td>5</td>
                                                                <td>SLTA/Sederajat</td>
                                                                <td>1213</td>
                                                            </tr>
                                                            <tr>
                                                                <td>6</td>
                                                                <td>Diploma I/II</td>
                                                                <td>35</td>
                                                            </tr>
                                                            <tr>
                                                                <td>7</td>
                                                                <td>Akademi/Diploma III/S. Muda</td>
                                                                <td>69</td>
                                                            </tr>
                                                            <tr>
                                                                <td>8</td>
                                                                <td>Diploma IV/Strata I</td>
                                                                <td>297</td>
                                                            </tr>
                                                            <tr>
                                                                <td>9</td>
                                                                <td>Strata II</td>
                                                                <td>18</td>
                                                            </tr>
                                                            <tr>
                                                                <td>10</td>
                                                                <td>Strata III</td>
                                                                <td>1</td>
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
                    <div class=" col-lg-6">
                        <div class="card mt-2">
                            <div class="card-header warna-area-header">
                                <h4 class=" text-center">
                                    <strong>Menurut Status Perkawinan</strong>
                                </h4>
                            </div>
                            <div class=" card-body">
                                <canvas id="MenurutStatusPerkawinan"></canvas>
                            </div>
                            <div class=" card-footer warna-area-header">
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <!-- <button class="btn btn-primary" type="button">Lihat Tabel</button> -->
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#tes5">
                                        Lihat Tabel
                                    </button>
                                </div>
                                <div class="modal fade" id="tes5" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-xl">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Data Menurut Status
                                                    Perkawinan</h1>
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
                                                                    <th>Status Perkawinan</th>
                                                                    <th>Jumlah Orang</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Belum Kawin</td>
                                                                    <td>2907</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Kawin</td>
                                                                    <td>2872</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Cerai Hidup</td>
                                                                    <td>140</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>Cerai Mati</td>
                                                                    <td>214</td>
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
                    <div class=" col-lg-12">
                        <div class=" card mt-2">
                            <div class=" card-header warna-area-header">
                                <h4 class=" text-center">
                                    <strong>Mata Pencarian Masyarakat</strong>
                                </h4>
                            </div>
                            <div class=" card-body">
                                <canvas id="MataPencarianMasyarakat"></canvas>
                            </div>
                            <div class=" card-footer warna-area-header">
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <!-- <button class="btn btn-primary" type="button">Lihat Tabel</button> -->
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#tes6">
                                        Lihat Tabel
                                    </button>
                                </div>
                                <div class="modal fade" id="tes6" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-xl">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Data Menurut Mata
                                                    Pencarian Masyarakat</h1>
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
                                                                    <th>Mata Pencarian Masyarakat</th>
                                                                    <th>Jumlah Orang</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Wiraswasta</td>
                                                                    <td>703</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Mengurus Rumah Tangga</td>
                                                                    <td>1310</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Pelajar/Mahasiswa</td>
                                                                    <td>767</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>Belum/Tidak Bekerja</td>
                                                                    <td>2002</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5</td>
                                                                    <td>Guru</td>
                                                                    <td>30</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>6</td>
                                                                    <td>Pedagang</td>
                                                                    <td>47</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>7</td>
                                                                    <td>Petani/Pekebun.</td>
                                                                    <td>186</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>8</td>
                                                                    <td>Buruh Harian Lepas.</td>
                                                                    <td>320</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>9</td>
                                                                    <td>Pengacara.</td>
                                                                    <td>1</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>10</td>
                                                                    <td>Pegawai Negeri Sipil.</td>
                                                                    <td>119</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>11</td>
                                                                    <td>Buruh Tani/Perkebunan.</td>
                                                                    <td>30</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>12</td>
                                                                    <td>Bidan.</td>
                                                                    <td>5</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>13</td>
                                                                    <td>Buruh Nelayan/Perikanan.</td>
                                                                    <td>7</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>14</td>
                                                                    <td>Buruh Peternakan</td>
                                                                    <td>1</td>
                                                                </tr>

                                                                <tr>
                                                                    <td>15</td>
                                                                    <td>Buruh Tani/Perkebunan.</td>
                                                                    <td>30</td>
                                                                </tr>

                                                                <tr>
                                                                    <td>16</td>
                                                                    <td>Dokter.</td>
                                                                    <td>2</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>17</td>
                                                                    <td>Dosen.</td>
                                                                    <td>4</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>18</td>
                                                                    <td>Imam Mesjid.</td>
                                                                    <td>1</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>19</td>
                                                                    <td>Industri.</td>
                                                                    <td>2</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>20</td>
                                                                    <td>Karyawan BUMD.</td>
                                                                    <td>1</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>21</td>
                                                                    <td>Karyawan Honorer.</td>
                                                                    <td>50</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>22</td>
                                                                    <td>Karyawan Swasta.</td>
                                                                    <td>267</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>23</td>
                                                                    <td>Kepolisian RI.</td>
                                                                    <td>13</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>24</td>
                                                                    <td>Konstruksi.</td>
                                                                    <td>1</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>25</td>
                                                                    <td>Konsultan.</td>
                                                                    <td>1</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>26</td>
                                                                    <td>Mekanik.</td>
                                                                    <td>7</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>27</td>
                                                                    <td>Nelayan/Perikanan</td>
                                                                    <td>98</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>28</td>
                                                                    <td>Pelaut.</td>
                                                                    <td>1</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>30</td>
                                                                    <td>Pensiunan.</td>
                                                                    <td>33</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>31</td>
                                                                    <td>Perangkat Desa.</td>
                                                                    <td>4</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>32</td>
                                                                    <td>Perawat</td>
                                                                    <td>2</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>33</td>
                                                                    <td>Sopir</td>
                                                                    <td>59</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>34</td>
                                                                    <td>Tentara Nasional Indonesia.</td>
                                                                    <td>3</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>35</td>
                                                                    <td>Transportasi.</td>
                                                                    <td>10</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>36</td>
                                                                    <td>Tukang Batu.</td>
                                                                    <td>4</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>37</td>
                                                                    <td>Tukang Jahit.</td>
                                                                    <td>8</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>38</td>
                                                                    <td>Tukang Kayu.</td>
                                                                    <td>3</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>39</td>
                                                                    <td>Tukang Las/Pandai Besi.</td>
                                                                    <td>2</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>40</td>
                                                                    <td>Tukang Listrik.</td>
                                                                    <td>1</td>
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
        const ctx3 = document.getElementById('MenurutPendidikan').getContext('2d');
        const ctx4 = document.getElementById('MenurutStatusPerkawinan').getContext('2d');
        const ctx5 = document.getElementById('MataPencarianMasyarakat').getContext('2d');
        new Chart(
            ctx, {
            type: 'line',
            data: {
                labels: ['1-5', '6-10', '11-15', '16-20', '21-25', '26-30', '31-35', '36-40', '41-45', '46-50', '51-55', '56-60', '61-65', '66-70', '71-75', '76-80', '81-85', '86-90', '>90'],
                datasets: [{
                    label: 'Jumlah Kependudukan Desa Pasar Pedati',
                    data: [432, 552, 528, 527, 533, 597, 525, 495, 446, 385, 317, 288, 171, 122, 77, 47, 46, 22, 23],
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
                        text: 'Jumlah Penduduk Desa Pasar Pedati Berdasarkan Usia'
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
                    data: [6008, 50, 32, 36, 7],
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
        new Chart(
            ctx3,
            {
                type: 'bar',
                data: {
                    labels: ['Tidak/Belum Sekolah', 'Tidak Tamat SD/Sederajat', 'Tamat SD/Sederajat', 'SLTP/Sederajat', 'SLTA/Sederajat', 'Diploma I/II', 'Akademi/Diploma III/S. Muda', 'Diploma IV/Strata I', 'Strata II', 'Strata III'],
                    datasets: [{
                        label: 'Jumlah Penduduk',
                        data: [1808, 510, 1366, 816, 1213, 35, 69, 297, 18, 1],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 1,
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'Jumlah Penduduk Desa Pasar Pedati Berdasarkan Pendidikan'
                        }
                    },
                    scales: {
                        x: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Pendidikan'
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
                }
            }
        );
        new Chart(
            ctx4,
            {
                type: 'doughnut',
                data: {
                    labels: ['Belum Kawin', 'Kawin', 'Cerai Hidup', 'Cerai Mati'],
                    datasets: [{
                        label: 'Jumlah Penduduk',
                        data: [2907, 2875, 140, 214],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 1)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 1,
                    }]
                }
            }
        );
        new Chart(
            ctx5,
            {
                type: 'bar',
                data: {
                    labels: ['Wiraswasta', 'Mengurus Rumah Tangga', 'Pelajar/Mahasiswa', 'Belum/Tidak Bekerja', 'Guru', 'Pedagang', 'Petani/Pekebun', 'Buruh Harian Lepas', 'Pengacara', 'Pegawai Negeri Sipil', 'Buruh Tani/Perkebunan', 'Bidan', 'Buruh Nelayan/Perikanan', 'Buruh Peternakan', 'Buruh Tani/Perkebunan', 'Dokter', 'Dosen', 'Imam Mesjid', 'Industri', 'Karyawan BUMD', 'Karyawan Honorer', 'Karyawan Swasta', 'Kepolisian RI', 'Konstruksi', 'Konsultan', 'Mekanik', 'Nelayan/Perikanan', 'Pelaut', 'Pensiunan', 'Perangkat Desa', 'Perawat', 'Sopir', 'Tentara Nasional Indonesia', 'Transportasi', 'Tukang Batu', 'Tukang Jahit', 'Tukang Kayu', 'Tukang Las/Pandai Besi', 'Tukang Listrik'],
                    datasets: [
                        {
                            label: 'Jumlah Penduduk (type Garis)',
                            data: [703, 1310, 767, 2002, 30, 47, 186, 320, 1, 119, 30, 5, 7, 1, 30, 2, 4, 1, 2, 1, 50, 267, 13, 1, 1, 7, 98, 1, 33, 4, 2, 59, 3, 10, 4, 8, 3, 2, 1],
                            backgroundColor: [
                                'rgba(89, 22, 131, 0.5)',
                            ],
                            borderColor: [
                                'rgba(89, 22, 131, 0.5)',
                            ],
                            borderWidth: 1,
                            type: 'line',
                            // lakukan penebalan garis
                            pointRadius: 10,
                            pointHoverRadius: 15,
                            pointBackgroundColor: 'rgba(89, 22, 131, 0.5)',
                            pointBorderColor: 'rgba(89, 22, 131, 0.5)',
                            showLine: true,
                        },
                        {
                            label: 'Jumlah Penduduk',
                            data: [703, 1310, 767, 2002, 30, 47, 186, 320, 1, 119, 30, 5, 7, 1, 30, 2, 4, 1, 2, 1, 50, 267, 13, 1, 1, 7, 98, 1, 33, 4, 2, 59, 3, 10, 4, 8, 3, 2, 1],
                            backgroundColor: [
                                'rgba(139, 143, 249, 0.5);',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                            ],
                            borderWidth: 1,
                        },
                    ]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'Jumlah Penduduk Desa Pasar Pedati Berdasarkan Pekerjaan'
                        }
                    },
                    scales: {
                        x: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Pekerjaan'
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
                }
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