<template>
    <v-container fill-height class="d-flex flex-column justify-center align-center my-16">
        <a
            class="text-decoration-none"
            href="https://github.com/metafates/Wallpapers/"
            target="_blank"
        ><v-icon large color="green">mdi-github</v-icon></a>
        <h1 class="my-4">
            <Tag
                tag=" ~ "
                no-tag
                class="text-md-h2 text-h4"
                color="green"
                tag-color="green"
            >Wallery</Tag>
        </h1>
        <p class="text-subtitle-2 text-md-subtitle-1 text-center text--secondary">
            Click on image to open it in a full size
        </p>

    </v-container>
</template>

<script>
import Tag from "@/components/Tag";

export default {
    name: "Title",
    components: {Tag}
}
</script>