<template>
<div>Hello my project
    <div>
        <el-input v-model="input" placeholder="say something"></el-input>
    </div>
</div>

</template>

<script>
export default({
    name: "Register",
    data(){
        return{
            input: ""

        };
    }
})


</script>