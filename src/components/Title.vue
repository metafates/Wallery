<template>
    <div class="d-flex flex-column justify-center align-center my-16">
        <div class="theme-switch">
            <v-icon color="accent" large @click="changeTheme">mdi-theme-light-dark</v-icon>
        </div>
<!--        <v-tooltip top>-->
<!--            <template v-slot:activator="{ on, attrs }">-->
<!--                <a-->
<!--                    v-bind="attrs"-->
<!--                    v-on="on"-->
<!--                    class="text-decoration-none accent&#45;&#45;text text-h2 no-select scale"-->
<!--                    href="https://www.metafates.one"-->
<!--                    target="_blank"-->
<!--                >@</a>-->
<!--            </template>-->
<!--            <span>metafates</span>-->
<!--        </v-tooltip>-->
        <h1 class="my-4 text-h3 text-md-h2">
            W<a
            v-bind="attrs"
            v-on="on"
            class="text-decoration-none accent--text text-h2 no-select scale"
            href="https://www.metafates.one"
            target="_blank"
        >@</a>llery
        </h1>
        <p class="text-subtitle-2 text-md-subtitle-1 text-center text--secondary">
            Click on image to open it in a full size
        </p>
    </div>
</template>

<script>
export default {
    name: "Title",
    methods: {
        changeTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        }
    }
}
</script>

<style scoped>
.theme-switch {
    position: absolute;
    left: 20px;
    top: 20px;
}

.no-select {
    user-select: none;
}

.scale {
    transition: 0.3s;
}

.scale:hover {
    transform: scale(1.3);
}
</style>