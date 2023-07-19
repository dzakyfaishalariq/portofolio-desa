<template>
    <nav class="navbar navbar-expand-lg bg-warna fixed-top">
        <div class="container-fluid">
            <!-- <a class="navbar-brand tulisan" href="#">Logo Desa</a> -->
            <router-link :to="{ name: 'home' }" class="navbar-brand">
                <img src="@/assets/image/logoBenteng.png" alt="" width="60" height="60"
                    class="d-inline-block align-text-top">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <!-- <a class="nav-link tulisan clik-respon" aria-current="page" href="#">Branda</a> -->
                        <router-link :to="{ name: 'home' }" class="nav-link tulisan clik-respon"> Branda </router-link>

                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle tulisan clik-respon" href="#" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Profil Desa
                        </a>
                        <ul class="dropdown-menu">
                            <!-- <li><a class="dropdown-item tulisan2" href="#">Sejarah Desa</a></li> -->
                            <li>
                                <router-link :to="{ name: 'sejarahDesa' }" class="dropdown-item tulisan2">Sejarah
                                    Desa</router-link>
                            </li>
                            <!-- <li><a class="dropdown-item tulisan2" href="#">Struktur Desa</a></li> -->
                            <li>
                                <router-link :to="{ name: 'strukturDesa' }" class="dropdown-item tulisan2">Struktur
                                    Desa</router-link>
                            </li>
                            <li>
                                <!-- <a class="dropdown-item tulisan2" href="#">Parawisata Desa</a> -->
                                <router-link :to="{ name: 'parawisataDesa' }" class="dropdown-item tulisan2">Parawisata
                                    Desa</router-link>
                            </li>
                            <li>
                                <!-- <a class="dropdown-item tulisan2" href="#">Peta Lokasi</a> -->
                                <router-link :to="{ name: 'petaLokasi' }" class="dropdown-item tulisan2">Peta
                                    Lokasi</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle tulisan clik-respon" href="#" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Data Desa
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link :to="{ name: 'dataWilayah' }" class="dropdown-item tulisan2">Data
                                    Wilayah</router-link>
                                <!-- <a class="dropdown-item tulisan2" href="#">Data Wilayah</a> -->
                            </li>
                            <li>
                                <router-link :to="{name:'saranaDesa'}" class="dropdown-item tulisan2">
                                    Keadaan Sosial
                                </router-link>
                                <!-- <a class="dropdown-item tulisan2" href="#">Sarana Prasaranan Desa Pasar Pedati</a> -->
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link tulisan clik-respon" href="#">Agenda KKN</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link tulisan clik-respon" href="#">Kontak</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style>
.bg-warna {
    background-color: #FDFFAE;
}

.clik-respon {
    color: #AAC8A7 !important;
}

.clik-respon:hover {
    border: 1px solid #AAC8A7 !important;
    border-radius: 5px;
    background-color: #AAC8A7 !important;
    color: #FDFFAE !important;
}

.tulisan {
    font-family: 'Caprasimo', cursive;
}

.tulisan2 {
    font-family: 'Kanit', sans-serif;
}
</style>