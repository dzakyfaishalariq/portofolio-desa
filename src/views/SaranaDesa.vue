<template>
    <div v-if="loading">
        <Loading />
    </div>
    <div v-else>
        <div class="conten-area">
            <KeadaanSosial />
            <RincianProfileDesa />
            <KependudukanDesa />
        </div>
    </div>
</template>
<script>
import KeadaanSosial from "@/components/componenSaranaDesa/KeadaanSosial.vue";
import RincianProfileDesa from "@/components/componenSaranaDesa/RincianProfileDesa.vue";
import KependudukanDesa from "@/components/componenSaranaDesa/KependudukanDesa.vue";
import Loading from '../components/componenhome/LoadingArea.vue'
export default {
    name: "SaranaDesa",
    data() {
        return {
            loading: true,
        }
    },
    components: {
        KeadaanSosial,
        RincianProfileDesa,
        KependudukanDesa,
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
.conten-area {
    margin-top: 90px;
}
</style>
