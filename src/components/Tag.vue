<template>
    <span>
        <span :class="color + '--text'">{{ tag }}</span>
        <slot></slot>
        <span :class="color + '--text'">{{ tag }}</span>
    </span>
</template>

<script>
export default {
    name: "Tag",
    props: {
        color: String,
        tag: String,
    },
}
</script>