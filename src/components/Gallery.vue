<template>
    <v-container fill-height class="justify-center">
        <Loader v-if="loading" />
        <v-row v-else>
            <v-col
                v-for="w in wallpapers"
                :key="w.max"
                md="4"
                cols="6"
            >
                <v-hover v-slot="{hover}">
                    <a :href="w.max" target="_blank" class="text-decoration-none" >
                        <v-img
                            :class="{'scale elevation-0': hover}"
                            class="elevation-3 smooth"
                            :src="w.max"
                            :lazy-src="w.min"
                        >
                            <div :class="hover ? 'd-flex' : 'd-none'" class="justify-start align-end" style="height: 100%">
                                <span class="white pa-3">
                                    {{w.dimensions}}
                                </span>
                            </div>
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
            loading: true
        }
    },
    async mounted() {
        this.wallpapers = await getWallpapers()
        this.loading = false
    }
}
</script>

<style>
.smooth {
    transition: .2s;
}

.scale {
    transform: scale(1.015);
}
</style>
