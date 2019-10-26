<template>
    <header :style="{
        backgroundColor: color
    }">
        <slot></slot>
    </header>
</template>
<script>
export default {
    props: {
        color: String
    },
    data() {
        return {
            title: "今日头条"
        }
    },
}
</script>
<style scoped>
header{
    position: fixed;
    z-index: 1000000;
}
</style>