<script setup lang="ts">
import * as mm from "@magenta/music/es6";
import { onMounted } from "vue";
const player = new mm.Player();
onMounted(() => {
    mm.urlToNoteSequence('/src/assets/midis/HopesandDreams.mid')
    .then((seq)=>{
        player.start(seq);
        mm.Player.tone.start();
    })
})
</script>

<template>
    <div>

    </div>
</template>