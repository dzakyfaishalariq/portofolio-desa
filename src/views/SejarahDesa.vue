<template>
    <GambarDesa />
    <SejarahPerkembanganDesa />
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