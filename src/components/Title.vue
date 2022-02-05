<template>
    <v-container fill-height class="d-flex flex-column justify-center align-center">
        <v-icon color="green" x-large>mdi-panorama-variant-outline</v-icon>
        <h1 class="my-4" >
            <HTMLTag
                tag="h1"
                class="text-h2"
                color="green"
                tag-color="green"
            >Wallery</HTMLTag>
        </h1>
        <p class="text-subtitle-1"><a class="green--text darken-4" href="#">GitHub</a></p>
    </v-container>
</template>

<script>
import HTMLTag from "@/components/HTMLTag";
export default {
  name: "Title",
    components: {HTMLTag}
}
</script>

<style scoped>

</style>