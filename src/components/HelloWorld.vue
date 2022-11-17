<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
    <div class="card">
        <a-button
            type="primary"
            @click="count++"
        >
            count is {{ count }}
        </a-button>

        <p>
            Edit
            <code> components/HelloWorld.vue </code>
            to test HMR
        </p>
    </div>

    <p>
        Check out
        <a
            href="https://vuejs.org/guide/quick-start.html#local"
            target="_blank"
        >
            create-vue
        </a>
    </p>

    <p>
        Install
        <a
            href="https://github.com/johnsoncodehk/volar"
            target="_blank"
        />
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
    margin: 0;
    padding: 0;
    color: #888;
    font-size: 14px;
}
</style>
