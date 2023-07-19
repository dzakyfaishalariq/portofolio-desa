<template>
    <div v-if="loading">
        <Loading />
    </div>
    <div v-else>
        <div class="conten-area">
            <ParawisataDesaPedati />
        </div>
    </div>
</template>
<script>
import ParawisataDesaPedati from '@/components/parawisataDesa/parawisataDesaPedati.vue'
import Loading from '../components/componenhome/LoadingArea.vue'
export default {
    name: "ParawisataDesa",
    data() {
        return {
            loading: true,
        }
    },
    components: {
        ParawisataDesaPedati,
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