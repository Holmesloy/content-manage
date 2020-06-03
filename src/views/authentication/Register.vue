<template>
    <div id="register" class="column-center">
        <!-- <Header :isRegisterStatus="true"></Header> -->

        <div class="main" v-cloak>
            <div class="info flex-column">
                <h1 class="title">注册</h1>

                <el-form
                    :model="registerForm"
                    :rules="rules"
                    ref="registerForm"
                    class="registerForm"
                >
                    <el-form-item prop="username">
                        <el-input
                            type="text"
                            v-model="registerForm.username"
                            placeholder="请输入用户名"
                            @focus="usernameTip"
                        ></el-input>
                        <el-popover
                            ref="usernamePopover"
                            placement="right"
                            trigger="manual"
                            v-model="tipStauts.usernameTip"
                        >
                            <ul>
                                <li>· 2-25个字符</li>
                                <li>· 只能包含字母、数字及下划线</li>
                                <li>· 请勿包含身份证/银行卡等隐藏信息</li>
                            </ul>
                        </el-popover>
                    </el-form-item>

                    <el-form-item prop="password">
                        <el-input
                            type="password"
                            v-model="registerForm.password"
                            placeholder="请设置登录密码"
                            @focus="passwordTip"
                        ></el-input>
                        <el-popover
                            ref="passwordPopover"
                            placement="right"
                            trigger="manual"
                            v-model="tipStauts.passwordTip"
                        >
                            <ul>
                                <li>· 6-20个字符，密码不能与会员名相同</li>
                                <li>· 只能包含字母、数字及特殊符号（除空格）</li>
                                <li>· 字母、数字及特殊符号至少包含2种</li>
                            </ul>
                        </el-popover>
                    </el-form-item>

                    <el-form-item prop="checkPassword">
                        <el-input
                            type="password"
                            v-model="registerForm.checkPassword"
                            placeholder="请再次输入登录密码"
                        ></el-input>
                    </el-form-item>

                    <el-form-item style="margin-top: -10px;">
                        <el-button
                            class="submit"
                            :style="{
                                'background-color': tipStauts.submitBtnStatus
                                    ? 'rgba(221,221,221,1)'
                                    : '#1071FE'
                            }"
                            :disabled="tipStauts.submitBtnStatus"
                            @click="submitForm('registerForm')"
                        >同意条款并注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>

export default {
    name: "Register",
    data() {
        return {
            imgCodeUrl: "",
            time: null,
            timer: null,
            tipStauts: {
                usernameTip: false,
                passwordTip: false,
                codeTip: true,
                tel: false,
                submitBtnStatus: true
            },
            registerForm: {
                username: "",
                password: "",
                checkPassword: "",
            },
            rules: {
                username: [
                    {
                        required: true,
                        trigger: ["change", "blur"],
                        validator: this.validateUsername
                    }
                ],
                password: [
                    {
                        required: true,
                        trigger: ["change", "blur"],
                        validator: this.validatePassword
                    }
                ],
                checkPassword: [
                    {
                        required: true,
                        trigger: ["change", "blur"],
                        validator: this.validatePasswordAgain
                    }
                ],
                
            }
        };
    },
    components: {

    },
    computed: {

    },
    destroyed() {
    },
    created() {

    },
    methods: {
        usernameTip() {
            this.tipStauts.usernameTip = true;
        },
        passwordTip() {
            this.tipStauts.passwordTip = true;
        },
        validateUsername(rule, value, callback) {
            this.tipStauts.usernameTip = false;
            if (!value || Object.is(value.replace(/\s/g, ""))) {
                callback(new Error("请输入用户名"));
            } else {
                if (this.registerForm.password !== "") {
                    this.$refs.registerForm.validateField("password");
                }
                if (value.length >= 2 && value.length <= 25 && /^[A-Za-z_\d]{2,25}$/.test(value)) {
                    callback();
                } else {
                    callback(new Error("用户名格式不对"));
                }
            }
        },
        validatePassword(rule, value, callback) {
            this.tipStauts.passwordTip = false;
            if (!value || Object.is(value.replace(/\s/g, ""))) {
                callback(new Error("请输入密码"));
            } else {
                if (this.registerForm.checkPassword !== "") {
                    this.$refs.registerForm.validateField("checkPassword");
                }
                if (value === this.registerForm.username) {
                    callback(new Error("密码不能与用户名相同!"));
                } else if (
                    value.length >= 6 &&
                    value.length <= 20 &&
                    /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,20}$/.test(value)
                ) {
                    callback();
                } else {
                    callback(new Error("密码格式不对"));
                }
            }
        },
        validatePasswordAgain(rule, value, callback) {
            if (!value || Object.is(value.replace(/\s/g, ""))) {
                callback(new Error("请再次输入密码"));
            } else if (value !== this.registerForm.password) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
        },

    }
};
</script>

<style lang="scss">
#register {
    .el-form-item__error {
        top: 0;
        left: 100%;
        white-space: nowrap;
        margin-left: 30px;
        line-height: inherit;
    }
    .tel-code .el-form-item__content {
        display: flex;
    }
    .el-form-item{
        margin-bottom: 12px;
    }
}
</style>

<style lang="scss" scoped>
#register {
    [v-cloak] {
        display: none !important;
    }
    height: 100%;
    .main {
        overflow-y: scroll;
        flex: auto;
        width: 100%;
        border-top: 1px solid #eeeeee;
        border-bottom: 1px solid #eeeeee;
        background-color: rgba(238, 238, 238, 0.4);
        display: flex;
        justify-content: center;
        .info {
            margin: auto;
            width: 1200px;
            height: 700px;
            background-color: #fff;
            overflow-y: scroll;
            align-items: center;
            h1.title {
                margin-top: 100px;
                margin-bottom: 40px;
                font-size: 24px;
                padding: 0;
            }
            .registerForm {
                width: 500px;
                .username {
                    display: block;
                }
                .code-tip {
                    color: #fff;
                }
                .submit {
                    width: 100%;
                    color: #fff;
                }
            }
        }
        .imageCode {
            padding: 0;
            overflow: hidden;
            height: 40px;
            background-color: white;
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            img {
                line-height: 18px;
            }
        }
    }
}
</style>
