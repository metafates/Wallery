<template>
    <span>
        <span class="accent--text">{{ tag }}</span>
        <slot></slot>
        <span class="accent--text">{{ tag }}</span>
    </span>
</template>

<script>
export default {
    name: "Tag",
    props: {
        tag: String,
    },
}
</script>