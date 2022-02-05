<template>
    <v-row>
        <v-col
            v-for="w in wallpapers"
            :key="w"
            md="4"
            cols="6"
        >
            <v-skeleton-loader v-if="loading" type="image"></v-skeleton-loader>
            <a v-else :href="w" target="_blank">
                <v-img
                    :src="w"
                    lazy-src="skeleton.png"
                >
                    <template v-slot:placeholder>
                        <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                        >
                            <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                            ></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </a>
        </v-col>
    </v-row>
</template>

<script>
import {getWallpapers} from "@/scripts/getWallpapers";

export default {
    name: "Gallery",
    data() {
        return {
            wallpapers: 30,
            loading: true
        }
    },
    async mounted() {
        this.wallpapers = await getWallpapers()
        this.loading = false
    }
}
</script>
