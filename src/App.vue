<template>
    <v-app>
        <v-main>
            <Home />
        </v-main>
        <v-footer class="pa-16">
            <v-col
                class="text-center"
                cols="12"
            >
                By <strong><a class="green--text text-decoration-none" href="https://github.com/metafates"
                              target="_blank">metafates</a></strong> with
                <v-icon color="red">mdi-heart</v-icon>
            </v-col>
        </v-footer>
    </v-app>
</template>

<script>
import Home from "@/views/Home";
export default {
    name: 'App',
    components: {Home},
};
</script>
