<template>
<!--    <v-row>-->
<!--        <v-col-->
<!--            -->
<!--        >-->

<!--        </v-col>-->
<!--    </v-row>-->
    <div>
        here be dragons
    </div>
</template>

<script>
import {getWallpapers} from "@/scripts/getWallpapers";
export default {
    name: "Gallery",
    async mounted() {
        await getWallpapers()
    }
}
</script>
