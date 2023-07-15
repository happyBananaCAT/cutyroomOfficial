<style scoped>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    .back {
        backdrop-filter:blur(10px);
    }
</style>
<template>
    <div class=" text-xl font-bold  ">
    <span class="font-bold">{{choiceId }}:</span><span class=" font-bold">{{ answer}}</span><input type="radio" v-bind:name=name v-bind:id=id>
    <br>
</div>
</template>
<script setup lang="ts">
export interface Props {
    choiceId:string
    answer:string
    name:string
    id:string
}
const props = withDefaults(defineProps<Props>(), {
   choiceId:'A',
   answer:'是',
   name:'name',
   id:'id',
})
</script>