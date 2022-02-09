<template>
    <div class="d-flex flex-column justify-center align-center my-16">
        <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <a
                    v-bind="attrs"
                    v-on="on"
                    class="text-decoration-none accent--text text-h2"
                    href="https://www.metafates.one"
                    target="_blank"
                >@</a>
            </template>
            <span>metafates</span>
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