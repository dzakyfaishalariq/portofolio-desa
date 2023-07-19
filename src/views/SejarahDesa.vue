<template>
    <div class=" conten-area">
        <GambarDesa />
        <SejarahPerkembanganDesa />
    </div>
</template>
<script>
import GambarDesa from '../components/componenSejarahDesa/GambarDesa.vue'
import SejarahPerkembanganDesa from '../components/componenSejarahDesa/sejarahPerkembanganDesa.vue'
export default {
    name: 'SejarahDesa',
    components: {
        GambarDesa,
        SejarahPerkembanganDesa
    }
}
</script>
<style>
.conten-area {
    margin-top: 90px;
}
</style>