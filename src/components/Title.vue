<template>
    <div class="d-flex flex-column justify-center align-center my-16">
        <a
            class="text-decoration-none"
            href="https://github.com/metafates/Wallpapers/"
            target="_blank"
        ><v-icon large color="deep-purple ">mdi-github</v-icon></a>
        <h1 class="my-4">
            <Tag
                tag=" ~ "
                class="text-md-h2 text-h4"
            >Wallery</Tag>
        </h1>
        <p class="text-subtitle-2 text-md-subtitle-1 text-center text--secondary">
            Click on image to open it in a full size
        </p>

    </div>
</template>

<script>
import Tag from "@/components/Tag";

export default {
    name: "Title",
    components: {Tag}
}
</script>