<template>
    <!-- <AgendaKKN /> -->
    <div class=" conten-area">
        <div v-if="loading">
            <LoadingArea />
        </div>
        <div v-else>
            <ComponenAgendaKkn/>
        </div>
    </div>
</template>

<script>
import LoadingArea from '@/components/componenhome/LoadingArea.vue'
import ComponenAgendaKkn from '@/components/componenAgendaKKN/ComponenAgendaKkn.vue'
export default {
    name: "AgendaKKN",
    data() {
        return {
            loading: true,
        }
    },
    components: {
        LoadingArea,
        ComponenAgendaKkn
    },
    mounted() {
        setTimeout(() => {
            this.loading = false
        }, 2000)
    },
}
</script>
<style></style>