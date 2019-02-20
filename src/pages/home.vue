<template>
    <div class="page">
    </div>
</template>

<script>
    export default {
        name: "home",
        props: {},
        data() {
            return {}
        },
        created() {
            this.$g.ajax('test', {}, this.getData.bind(this))
        },
        methods: {
            getData(d) {
            },
        },
        watch: {},
        beforeDestroy() {
        }
    }
</script>

<style scoped lang="less">

</style>
