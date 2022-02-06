<template>
    <v-container fill-height class="justify-center">
        <v-overlay v-if="loading" color="white" opacity="1">
            <Loader />
        </v-overlay>
        <v-row v-masonry="'gallery'" transition-duration="0.3s" item-selector=".wallpaper">
            <v-col
                v-masonry-tile
                v-for="(w, i) in wallpapers"
                :key="i"
                sm="4"
                cols="6"
                class="wallpaper"
            >
                <v-hover v-slot="{hover}">
                    <v-card
                        height="100%"
                        hover
                        :href="w.max"
                        target="_blank"
                    >
                        <v-img
                            :src="w.max"
                            :lazy-src="w.min"
                            @load="$redrawVueMasonry('gallery')"
                        >
                            <v-expand-transition>
                                <div
                                    v-if="hover"
                                    class="d-flex justify-center elevation-3 white align-center v-card--reveal text-subtitle-1"
                                >
                                    <span>{{w.dimensions}}</span>
                                </div>
                            </v-expand-transition>
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
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {getWallpapers} from "@/scripts/getWallpapers";
import Loader from "@/components/Loader";

export default {
    name: "Gallery",
    components: {Loader},
    data() {
        return {
            wallpapers: 30,
            loading: true,
            containerId: 'gallery'
        }
    },
    async mounted() {
        this.wallpapers = await getWallpapers()
        setTimeout(() => {
            this.loading = false
        }, 2000)
    }
}
</script>
