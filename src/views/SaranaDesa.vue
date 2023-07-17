<template>
    <KeadaanSosial />
    <RincianProfileDesa />
    <KependudukanDesa />
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
