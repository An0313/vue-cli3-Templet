<template>
    <div class="ComLoading" v-show="showLoading">
        <div class="content hideText">
            <img class="img" src="./loading.png">
            {{text}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "ComLoading",
        props: {},
        components: {},
        data() {
            return {
                text: '加载中..',
                showLoading: false
            }
        },
        created() {
        },
        methods: {
            show (text = this.text) {
                this.text = text
                this.showLoading = true
            },
            hide () {
                this.text = '加载中...'
                this.showLoading = false
            }
        },
        watch: {},
        beforeDestroy() {
        }
    }
</script>

<style scoped lang="less">
    @import "./Loading.less";
</style>
