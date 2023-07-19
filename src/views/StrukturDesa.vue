<template>
    <div v-if="loading">
        <Loading />
    </div>
    <div v-else>
        <div class=" conten-area">
            <StrukturOrganisasiPemerintahan />
        </div>
    </div>
</template>
<script>
import StrukturOrganisasiPemerintahan from '@/components/componenStrukturDesa/StrukturOrganisasiPemerintahan.vue';
import Loading from '../components/componenhome/LoadingArea.vue'
export default {
    name: 'StrukturDesa',
    data() {
        return {
            loading: true,
        }
    },
    components: {
        StrukturOrganisasiPemerintahan,
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