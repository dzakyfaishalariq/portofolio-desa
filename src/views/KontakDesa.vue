<template>
    <div v-if="loading">
        <loading />
    </div>
    <div v-else>
        <div class=" conten-area">
            <KontakDesaPasarPedati/>
        </div>
    </div>
</template>
<script>
import Loading from '../components/componenhome/LoadingArea.vue'
import KontakDesaPasarPedati from '../components/componenKontakDesa/KontakDesaPasarPedati.vue'
export default{
    name: 'KontakDesa',
    data(){
        return{
            loading: true,
        }
    },
    components: {
        Loading,
        KontakDesaPasarPedati
    },
    mounted() {
        setTimeout(() => {
            this.loading = false
        }, 2000)
    },
}
</script>