<style scoped>
.frame {
    padding-top: 4rem;
}
</style>

<template>
    <div class="frame" ref="frame">
        <popChat>同学你好哇😋</popChat>
        <popChat>📣我是萌屋小管家，带您了解一下萌屋📣</popChat>
        <popChat>……稍等，🤓翻一下资料📖（向下滚动继续）</popChat>
        <popChat>咳……舔一下大佬先</popChat>
        <popChat><n-image src="src/assets/imgs/a66aa2fd3cb46927540e05cd63cee0f3.gif" /></popChat>
        <!-- <popChat></popChat> -->
        <popChat>萌屋🏠 >> 是成立于🏫湘潭大学·计算机学院·网络空间安全学院</popChat>
        <popChat>一个创新创业团队，是CSN实验室的创业孵化团队。</popChat>
        <popChat>
            <p>事情变成这个样子，是因为我们的萌主😋非常爱搞事<del>做事不专心，做不成什么东西。</del></p>但是却认识了不少老师，通过三寸不烂之舌取得了大家的支持。
        </popChat>
        <popChat>最先萌屋是由萌主、昶浩、乐生三位同学凑在一起。找了一些老师之后，给出了一套草案，老师很开心，于是就多出了我们这样一个团队</popChat>
        <popChat>
            <p>大概是于<span style="color: orange;">2021年10月28日</span>正式对外成立(记不清惹)</p>正式成立第一批成员，从数组0开始计数。
        </popChat>
        <popChat>正式成立前，三个弧王、鸽王、摸王扣扣叟叟了很久……（然后也没做成什么哈哈哈）</popChat>
        <popChat>然而转机出现在萌屋的第[1]届怪物宝贝的身上，2022届突然冲进来了好几位大佬😱</popChat>
        <popChat>什……！什么！</popChat>
        <popChat>你们要做游戏？！😧</popChat>
        <popChat>于是原先带团队很失败，经历挫折而准备放弃的萌主，燃起了希望。</popChat>
        <popChat>便有了这官网！（我是被逼的）（还是很咕，原先要做的很多东西都拖延没做了🤡）</popChat>
        <popChat><del>对不起，拖延症太严重了，我下次还敢</del></popChat>
        <popChat>故事大概到这里，目前我们主要活跃的成员有大概6人，几乎全是低情商技术和策划人员</popChat>
        <popChat>接下来介绍一下团队的发展情况：</popChat>
        <popChat>
            未来发展两个部分，⌈萌屋研究所⌋ 和 ⌈萌屋工作室⌋<br /><br />
            <p>研究所：以创新为核心内容，整出让大家认可的好活，是目前主要活动场地，在工科楼N606</p><br />
            <p>工作室：以创业赚钱为主（恰烂钱），目前还处于规划阶段，没找到场地，也没有好的创收点子</p>
        </popChat>
        <!-- ⌈⌋ -->
        <popChat>加入萌屋的过程：</popChat>
        <popChat>大概是内推制<br/><br/>
            <table>
                <tr>1.先取得与萌屋成员的联系</tr><br/>
                <tr>2.然后带上自己的作品（游戏demo/策划案/音乐美术作品等）</tr><br/>
                <tr>3.来研究所开会，认识一下大家并且展示作品</tr><br/>
                <tr>4.大家觉得好就可以愉快加入啦！</tr>
            </table>
        </popChat>
        <popChat>接触萌屋成员的渠道有：萌屋煲QQ群</popChat>
        <popChat></popChat>
        <popChat>CSN冬令营/夏令营的萌屋游戏创新创业培训</popChat>
        <popChat>B站的账号，会发一些废片</popChat>
        <popChat></popChat>
        <popChat>原本官网首页是打算做非常非常牛的特效的！</popChat>
        <popChat>结果一直拖，就变成这个样子了……</popChat>
        <popChat>（你知道吗？原先这个聊天场景可是打算做交互的！）</popChat>
        <popChat><del>谁知道做起来就快成聊天软件了！</del></popChat>
        <popChat type="right">原来是这样！</popChat>
        <popChat type="right">那萌屋真的很屑</popChat>
        <popChat type="right">有什么拿得出手的作品吗？</popChat>
        <popChat>……没………没有啊///。。。。<br/><br/>可是我们每个人都能做出demo噢！</popChat>
        <popChat type="right">？</popChat>
        <popChat>？</popChat>
    </div>
</template>

<script setup lang="ts">
import popChat from './intors/popChat.vue'
import { h, onMounted, ref, render, resolveComponent } from 'vue';


//对话树元素
interface dialogTreeElement {
    ctt: string,                //玩家选项
    bck?: string[],             //回复
    nxt?: dialogTreeElement[]   //下一项
}

const dialogTree: dialogTreeElement[] = [
    {
        ctt: "你好",
        bck: [
            '你好呀~',
            '很高兴见到你',
            '<img src="src/assets/imgs/a66aa2fd3cb46927540e05cd63cee0f3.gif"/>'
        ]
    },
    { ctt: "这是做什么的？" },
    { ctt: "不要磨蹭，直接告诉咱吧" }
]   //对话树

const frame = ref<Element>()

</script>