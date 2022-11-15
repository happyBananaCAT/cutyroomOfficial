<template>
    <div id="view">
        <div id="flowy"></div>
        <div id="floor"></div>
    </div>
</template>
<style scoped>
#view{
    display: flex;
    align-items: center;
    flex-direction: column;
}
#view>div{
    position: absolute;
    height: 25%;
    width: 25%;
}
@media (max-aspect-ratio: 1/1) {
    #flowy{
        /* height: ; */
    }
}
</style>

<script setup lang="ts">

</script>