<template>
    <div id="err404">
        <img :src="err404"/>
        <p class="tip">很抱歉，您访问的页面不存在，请重新加载！</p>
    </div>
</template>

<script>
    export default {
        name: "err404",
        data() {
            return {
                err404: require('@/assets/img/404.png')
            }
        }
    }
</script>

<style lang="scss" scoped>
#err404{
    width: 100%;
    height: 100%;
    text-align: center;
    p {
        font-size:20px;
        font-family:Microsoft YaHei;
        font-weight:400;
        line-height:50px;
        color:rgba(189,216,255,1);
    }
}
</style>
