<template>
    <div class="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-coolGray-50 text-coolGray-800">
        <div class="mb-8 text-center">
            <h1 class="my-3 text-4xl font-bold">Sign in</h1>
            <p class="text-sm text-coolGray-600">Sign in to access your account</p>
        </div>
        <form @submit.prevent class="space-y-12 ng-untouched ng-pristine ng-valid">
            <div class="space-y-4">
                <div>
                    <label for="email" class="block mb-2 text-sm">Email address</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="leroy@jenkins.com"
                        class="w-full px-3 py-2 border rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800"
                    />
                </div>
                <div>
                    <div class="flex justify-between mb-2">
                        <label for="password" class="text-sm">Password</label>
                        <a
                            href="#"
                            class="text-xs hover:underline text-coolGray-600"
                        >Forgot password?</a>
                    </div>
                    <input
                        type="password"
                        name="password"
                        id="pass"
                        placeholder="*****"
                        class="w-full px-3 py-2 border rounded-md border-coolGray-300 bg-coolGray-50 text-coolGray-800"
                    />
                </div>
            </div>
            <div class="space-y-2">
                <div>
                    <button
                        @click="login()"
                        class="w-full px-8 py-3 rounded-md bg-violet-600 text-coolGray-50"
                    >Sign in</button>
                </div>
                <p class="px-6 text-sm text-center text-coolGray-600">
                    Don't have an account yet?
                    <router-link to="/CreateAccount" class="hover:underline text-violet-600">Sign up</router-link>.
                </p>
            </div>
        </form>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios'
import { isAuthenticated } from '../helpers/userAuth'
const router = useRouter()
const login = () => {
    axios.post('http://localhost:8080/Login', {
        headers: {
            "Content-type": "application/json"
        },
        data: {
            user_email: email.value,
            user_password: pass.value
        }
    }).then(function (response) {
        sessionStorage.setItem('user', response.data)
        isAuthenticated.value = true
        router.push('/')
    }).catch(function (error) {
        console.log(error)
    })
}
</script>