<template>
    <div class="ComAlert">
        <div class="content"
             v-for="(item, index) in content" :key="index"
             :class="item.type">
            {{item.text}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ComAlert',
        data () {
            return {
                content: [],
                timer: []
            }
        },
        created () {
        },
        methods: {
            push (text, type) {
                const s = 2000
                this.content.unshift({
                    text,
                    type
                })
                const timer = setTimeout(() => {
                    this.content.pop()
                }, s)

                this.timer.push(timer)
            },
            end (e) {
                console.log(e)
            }
        }
    }
</script>


<style scoped lang="less" rel="stylesheet/less">
    @import "./Alert.less";
</style>
