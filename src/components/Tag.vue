<template>
    <span>
        <span class="deep-purple--text">{{ tag }}</span>
        <slot></slot>
        <span class="deep-purple--text">{{ tag }}</span>
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