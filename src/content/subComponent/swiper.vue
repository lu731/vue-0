<template>
    <div>
      <mt-swipe :auto="4000" class="banner">
      <mt-swipe-item v-for="emit in banner" :key="emit.id">
        <img :src="emit.img" :class="{img:judge}">
      </mt-swipe-item>
    </mt-swipe>
    </div>
</template>

<script>
export default {
    props: [
      "banner",
      "judge"
    ],
    data() {
        return {

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

    },
};
</script>

<style scoped>
.banner {
  height: 200px;
}
.mint-swipe-item{
  text-align: center;
}
.banner img {
  height: 100%;
}
.img{
  width: 100%;
}
</style>
