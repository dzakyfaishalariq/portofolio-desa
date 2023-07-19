<template>
    <div class=" conten-area">
        <StrukturOrganisasiPemerintahan />
    </div>
</template>
<script>
import StrukturOrganisasiPemerintahan from '@/components/componenStrukturDesa/StrukturOrganisasiPemerintahan.vue';
export default {
    name: 'StrukturDesa',
    components: {
        StrukturOrganisasiPemerintahan
    }
}
</script>
<style>
    .conten-area {
        margin-top: 90px;
    }
</style>