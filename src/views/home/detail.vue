<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
    这是一个详情页
    <a-button @click="router.back()">返回</a-button>
</template>
