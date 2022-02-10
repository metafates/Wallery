<template>
    <div class="d-flex flex-column justify-center align-center my-16">
        <v-btn icon x-large @click="changeTheme" class="theme-switch">
            <v-icon
                color="accent"
            >{{themeSwitchIcon}}</v-icon>
        </v-btn>
        <h1 class="my-4 text-h3 text-md-h2">
            W<a
            v-bind="attrs"
            v-on="on"
            class="text-decoration-none accent--text text-h2 no-select"
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
    },
    computed: {
        themeSwitchIcon() {
            return this.$vuetify.theme.dark ? 'mdi-lightbulb-off-outline' : 'mdi-lightbulb-on'
        }
    },
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
</style>