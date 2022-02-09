<template>
    <div class="d-flex flex-column justify-center align-center my-16">
        <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <a
                    v-bind="attrs"
                    v-on="on"
                    class="text-decoration-none"
                    href="https://github.com/metafates/Wallpapers/"
                    target="_blank"
                ><v-icon large color="accent">mdi-github</v-icon></a>
            </template>
            <span>Github Repo</span>
        </v-tooltip>
        <h1 class="my-4 text-h3 text-md-h2">
            Wallery
        </h1>
        <p class="text-subtitle-2 text-md-subtitle-1 text-center text--secondary">
            Click on image to open it in a full size
        </p>

    </div>
</template>

<script>
export default {
    name: "Title",
}
</script>