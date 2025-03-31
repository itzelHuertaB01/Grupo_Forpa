<template>
    <v-container fluid class="fill-height">
        <div id="pdf-viewer" class="pdf-viewer"></div>
    </v-container>
</template>



<style scoped>
.fill-height {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
}

.pdf-viewer {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
}
</style>