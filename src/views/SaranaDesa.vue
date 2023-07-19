<template>
    <div class="conten-area">
        <KeadaanSosial />
        <RincianProfileDesa />
        <KependudukanDesa />
    </div>
</template>
<script>
import KeadaanSosial from "@/components/componenSaranaDesa/KeadaanSosial.vue";
import RincianProfileDesa from "@/components/componenSaranaDesa/RincianProfileDesa.vue";
import KependudukanDesa from "@/components/componenSaranaDesa/KependudukanDesa.vue";
export default {
    name: "SaranaDesa",
    components: {
        KeadaanSosial,
        RincianProfileDesa,
        KependudukanDesa
    }
}
</script>
<style>
    .conten-area {
        margin-top: 90px;
    }
</style>
