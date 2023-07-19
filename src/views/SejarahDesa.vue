<template>
    <div v-if="loading">
        <Loading />
    </div>
    <div v-else>
        <div class=" conten-area">
            <GambarDesa />
            <SejarahPerkembanganDesa />
        </div>
    </div>
</template>
<script>
import GambarDesa from '../components/componenSejarahDesa/GambarDesa.vue'
import SejarahPerkembanganDesa from '../components/componenSejarahDesa/sejarahPerkembanganDesa.vue'
import Loading from '../components/componenhome/LoadingArea.vue'
export default {
    name: 'SejarahDesa',
    data() {
        return {
            loading: true,
        }
    },
    components: {
        GambarDesa,
        SejarahPerkembanganDesa,
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