<template>
    <span>
        <span :class="color + '--text'">&lt;</span>
        <span :class="tagColor + '--text'">{{tag}}</span>
        <span :class="color + '--text'">&gt;</span>
        <slot></slot>
        <span :class="color + '--text'">&lt;/</span>
        <span :class="tagColor + '--text'">{{tag}}</span>
        <span :class="color + '--text'">&gt;</span>
    </span>
</template>

<script>
export default {
    name: "HTMLTag",
    props: {
        color: String,
        tagColor: String,
        tag: String
    },
}
</script>