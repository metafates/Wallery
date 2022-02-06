<template>
    <v-app>
        <header>
            <Title />
        </header>
        <v-main>
            <Gallery/>
        </v-main>
        <v-footer class="pa-16">
            <v-col
                class="text-center"
                cols="12"
            >
                By <strong><a class="deep-purple--text text-decoration-none" href="https://github.com/metafates"
                              target="_blank">metafates</a></strong> with
                <v-icon color="red">mdi-heart</v-icon>
            </v-col>
        </v-footer>
    </v-app>
</template>

<script>
// import Home from "@/views/Home";
import Title from "@/components/Title";
import Gallery from "@/components/Gallery";
export default {
    name: 'App',
    components: {Gallery, Title},
};
</script>
