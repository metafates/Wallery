<template>
    <v-container fill-height>
        <Title />
        <Gallery />
    </v-container>

</template>
<script>
import Title from "@/components/Title";
import Gallery from "@/components/Gallery";
export default {
    components: {Gallery, Title}
}
</script>