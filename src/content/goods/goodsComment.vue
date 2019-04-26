<template>
    <div>
      <commetn :id="id"></commetn>
    </div>
</template>

<script>
import commetn from '../subComponent/comment.vue'

export default {
    props: [

    ],
    data() {
        return {
          id:this.$route.params.id
        };
    },
    computed: {

    },
    created() {
      
    },
    mounted() {

    },
    watch: {

    },
    methods: {
     
    },
    components: {
      commetn
    },
};
</script>

<style scoped>

</style>
