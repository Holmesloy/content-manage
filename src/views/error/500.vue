<template>
    <div id="err500">
        <img :src="error500"/>
        <p class="tip">很抱歉，您访问的页面出错！</p>

    </div>
</template>

<script>
    export default {
        name: "err500",
        data() {
            return {
                error500: require('@/assets/img/500.png')
            }
        }
    }
</script>

<style lang="scss" scoped>
#err500{
    width: 100%;
    height: 100%;
    text-align: center;
    p{
        font-size:20px;
        font-family:Microsoft YaHei;
        font-weight:400;
        line-height:50px;
        color:rgba(189,216,255,1);
    }
}
</style>
