<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '~/store';
import { preferredDark } from '~/composables/dark';

const router = useRouter();
const userStore = useUserStore();

const go = (path: string) => {
    router.push(path);
};
</script>

<template>
    <div>VueUse测试 是否为暗黑模式：{{ preferredDark }}</div>
    <div>
        测试store内容
        {{ userStore.info }}
    </div>
    <div>
        <a-button @click="go('/detail')">跳转详情</a-button>
    </div>
</template>
