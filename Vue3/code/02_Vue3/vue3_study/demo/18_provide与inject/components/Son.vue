<template>
    <h2>Son子组件</h2>
    <hr>
    <GrandSon />
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import GrandSon from './GrandSon.vue'
export default defineComponent ({
    'name':'App',
    components: {
        GrandSon
    },
    setup() {

        return {
            
        }
    }
    
})
</script>
<style lang='stylus' scoped>

</style>