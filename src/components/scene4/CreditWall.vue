<style scoped>
.markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
}

@media (max-width: 767px) {
    .markdown-body {
        padding: 15px;
    }
}
</style>

<template>
    <div style="overflow-y: scroll;">
        <vue-markdown class="markdown-body" :source="test" :options="{
            html: true,
            linkify: true,
            typographer: true,
            breaks: true,
            highlight: (str: string, lang: string) => {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return hljs.highlight(str, { language: lang }).value;
                    } catch (__) { }
                }
                return ''
            }
        }" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, VueElement } from 'vue';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import '/node_modules/github-markdown-css/github-markdown-light.css'
import VueMarkdown from 'vue-markdown-render';

const test = ref('正在加载感谢墙……\n\n长时间加载不出来快刷新看看！\n\n再不就是服务器出问题了（；´д｀）ゞ\n\n<b style="font-size:3vmin">或者也可以看看右上角菜单里面的更多内容🤓</b>');

fetch('http://localhost:1337/api/articles/1')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        test.value = json.data.attributes.content
    })
</script>