<template>
    <v-container fill-height class="justify-center" :class="{'overflow-hidden': loading}">
        <v-overlay :value="loading" color="background" opacity="1">
            <Loader />
        </v-overlay>
        <v-row v-masonry="'gallery'" transition-duration="0.3s" item-selector=".wallpaper">
            <v-col
                v-masonry-tile
                v-for="(w, i) in wallpapers"
                :key="i"
                sm="4"
                md="3"
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
                            :src="w.med"
                            :lazy-src="w.min"
                            @load="onImageLoad"
                        >
                            <v-expand-transition>
                                <div
                                    v-if="hover"
                                    class="d-flex justify-center elevation-3 align-center v-card--reveal text-subtitle-1"
                                    :style="{background: w.color}"
                                >
                                    <span :style="{color: invertColor(w.color, true)}">{{w.dimensions}}</span>
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
            loadingTimeoutStarted: false,
            containerId: 'gallery'
        }
    },
    methods: {
        onImageLoad() {
            this.$redrawVueMasonry('gallery')
            if (!this.loadingTimeoutStarted) {
                this.loadingTimeoutStarted = true

                // Wait until masonry render
                setTimeout(() => {
                    this.loading = false
                }, 3000)
            }
        },
        invertColor(hex, bw) {
            function padZero(str, len) {
                len = len || 2;
                const zeros = new Array(len).join('0');
                return (zeros + str).slice(-len);
            }

            if (hex.indexOf('#') === 0) {
                hex = hex.slice(1);
            }
            // convert 3-digit hex to 6-digits.
            if (hex.length === 3) {
                hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            }
            if (hex.length !== 6) {
                throw new Error('Invalid HEX color.');
            }
            let r = parseInt(hex.slice(0, 2), 16)
            let g = parseInt(hex.slice(2, 4), 16)
            let b = parseInt(hex.slice(4, 6), 16);
            if (bw) {
                // https://stackoverflow.com/a/3943023/112731
                return (r * 0.299 + g * 0.587 + b * 0.114) > 186
                    ? '#000000'
                    : '#FFFFFF';
            }
            // invert color components
            r = (255 - r).toString(16);
            g = (255 - g).toString(16);
            b = (255 - b).toString(16);
            // pad each with zeros and return
            return "#" + padZero(r) + padZero(g) + padZero(b);
        }
    },
    async mounted() {
        this.wallpapers = await getWallpapers()
    }
}
</script>
