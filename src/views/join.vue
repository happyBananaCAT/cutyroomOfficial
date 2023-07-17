<style scoped>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    .scroll::-webkit-scrollbar {
    display: none;
    }
    .backInput{
       width: 20rem;
       height:auto ;
       margin:auto ;
       border-radius: 0.75rem;
       border:2px solid ;
       --tw-border-opacity: 1;
        border-color: rgb(203 213 225 / var(--tw-border-opacity));
        backdrop-filter:blur(15px);
        text-align: center;
    }
    .backImgCenter{
        background: url(src/assets/imgs/join/R-C.jpg); 
        background-size: 100% 100%; 
    }
    .a{
        background: url(src/assets/imgs/join/QQ图片20230406203936.jpg);
    }
 
</style>

<template>
    <div class="min-w-screen h-full min-h-screen w-full  flex">
            <div class=" w-1/5 min-h-screen  relative" style="background-color: rgba(216,242,219,1);">
                    <pictureLeft class=" absolute right-0 top-1/2" pic="src/assets/imgs/join/QQ图片20230406194038.jpg" content="听说填了问卷就能找到漂亮小姐姐当女朋友哟（流口水）"></pictureLeft>
                    <pictureLeft class=" right-0 absolute top-3/4" pic="src/assets/imgs/join/下载.jpg" content="我们绝对不会以任何途径泄露您的个人信息！！！（超认真）"></pictureLeft>
                    <pictureLeft class="absolute right-0 top-48" pic="src/assets/imgs/join/QQ图片20230406200541.jpg" content="他们的组织看起来好好玩，我好想加入~~~（心动♥）" ></pictureLeft>
                </div>
            <div id="signUp" class=" flex-1 scroll overflow-y-scroll  backImgCenter" >
                <h1 class=" text-xl font-semibold h-16 text-left"><br>↓↓↓↓↓下面这只猫猫好像有话要说！</h1>
                <PictureRight 
                content="咳咳，下面我简单喵两句。其实我们萌屋工作室的终极目标是成为香袋米哈游喵！但是开发一个商业游戏实在是太太太难了喵！所以我们的组织现在还在技术积累阶段，
                欢迎各位有识之士加入喵！"></PictureRight>

                <h1 class=" text-4xl text-center my-10 font-extrabold ">加入我们！！！</h1>
                <h4 class=" text-4xl text-center my-10 font-bold ">在此之前，请填写一份调查问卷~~~~</h4>   

                <form name="form" method="post" action="#" ><!--form在这里  -->
                    <div class="backInput">
                        <ProblemChoice problem="1:您的性别是？" must="*"></ProblemChoice>
                        <RadioChoice choiceId="A:" answer="男生" name="gender" id=""></RadioChoice>
                        <RadioChoice choiceId="B:" answer="女生" name="gender" id=""></RadioChoice>
                        <RadioChoice choiceId="C:" answer="钝角" name="gender" id=""></RadioChoice>
                    </div>
                    <br>

                    <div  class="backInput">
                        <ProblemChoice problem="2:您是通过什么渠道了解到萌屋的？" must="*"></ProblemChoice>
                        <MultiplyChoice choiceId="A:" answer="QQ" name="way"></MultiplyChoice>
                        <MultiplyChoice choiceId="B:" answer="B站" name="way"></MultiplyChoice>
                        <MultiplyChoice choiceId="C:" answer="线下宣传" name="way"></MultiplyChoice>
                        <MultiplyChoice choiceId="D:" answer="朋友介绍" name="way"></MultiplyChoice>
                    </div>
                    <br>

                    <div class="backInput">
                        <ProblemChoice problem="3:您是湘潭大学的学生吗？" ></ProblemChoice>
                        <RadioChoice answer="是" name="school"></RadioChoice>
                        <RadioChoice answer="不是" name="school"></RadioChoice>
                    </div>
                    <br>

                    <div class="backInput ">
                        <ProblemChoice problem="4:您的专业与计算机相关吗？"></ProblemChoice>
                        <RadioChoice choiceId="A:" answer="关系密切" name="major"></RadioChoice>
                        <RadioChoice choiceId="B:" answer="有一定关系" name="major"></RadioChoice>
                        <RadioChoice choiceId="C:" answer="不相关" name="major"></RadioChoice>
                        <RadioChoice choiceId="D:" answer="专业不相关,但自己有计算机方面的知识" name="major"></RadioChoice>
                    </div>
                    <br>

                    <div class="backInput">
                        <ProblemChoice problem="关于游戏，你对哪个方向比较感兴趣？"></ProblemChoice>
                        <RadioChoice choiceId="A:" answer="游戏设计/策划" name="direction"></RadioChoice>
                        <RadioChoice choiceId="B:" answer="游戏开发" name="direction"></RadioChoice>
                        <RadioChoice choiceId="C:" answer="游戏音乐" name="direction"></RadioChoice>
                        <RadioChoice choiceId="D:" answer="游戏美术" name="direction"></RadioChoice>
                    </div>
                    <br>

                    <div class="backInput">
                        <ProblemText problem="请您描述一下看到我们这个组织时的第一印象" name="impressions"></ProblemText>
                    </div>
                    <br>

                    <div class="backInput">
                        <ProblemText problem="请列举一下您喜欢玩或正在玩的游戏" name="games"></ProblemText>
                    </div>
                    <br>

                    <div class="backInput">
                        <TelText problem="如果想加入我们，请留下您的邮箱号" name="email"></TelText>
                    </div>
                    <br>

                    <div class="backInput">
                        <TelText problem="手机号也可以留哟~~" name="tel"></TelText>
                    </div>
                    <div class="backInput">
                        <ProblemChoice problem="您玩原神吗？"></ProblemChoice>
                        <MultiplyChoice choiceId="A:" answer="差不多得了" name="op"></MultiplyChoice>
                        <MultiplyChoice choiceId="B:" answer="原神怎么你了" name="op"></MultiplyChoice>
                        <MultiplyChoice choiceId="C:" answer="适可而止矣！涓埃之事，亦殃原神" name="op"></MultiplyChoice>
                        <MultiplyChoice choiceId="D:" answer="op show show way" name="op"></MultiplyChoice>
                        <MultiplyChoice choiceId="E:" answer="无恶意，纯整活" name="op"></MultiplyChoice>
                    </div>
                    <br>
                    <!--  -->
                    <div  class="backInput">
                        <input type="submit" name="submit" value="提交">
                    </div>
                    <br>

                </form>  
            </div>
            <div class=" w-1/5  min-h-screen relative" style="background-color: rgba(143,162,248,1);">
                <pictureRight pic="src/assets/imgs/a66aa2fd3cb46927540e05cd63cee0f3.gif" content="猛舔大佬~~~（滋溜滋溜~~）" class=" absolute top-1/4"></pictureRight>
                <pictureRight pic="src/assets/imgs/join/QQ图片20230406201138.jpg" content="你说的对，但是XXX" class=" absolute bottom-20"></pictureRight>
                <pictureRight pic="src/assets/imgs/join/QQ图片20230406203936.jpg" content="学长们人超好的~~~~~" class="absolute top-2/3"></pictureRight>
                <pictureRight pic="src/assets/imgs/join/QQ图片20230406201951.jpg" 
                content="加入萌屋后，你将有机会学到包括Unity开发，web端开发，游戏设计思想，团队管理，画饼，C#语法，openAI大语言模型等一系列学校里肯定不会教的奇怪技术，帮助你降维打击同学，装最🐂的B！！！" h="height:8rem" class=" top-28"></pictureRight>
            </div>
    </div>
<!--  -->
    
</template>

<script lang="ts">
import ProblemText from "../components/view/join/problemText.vue";
import ProblemChoice from "../components/view/join/problemChoice.vue";
import RadioChoice from "../components/view/join/radioChoice.vue";
import MultiplyChoice from "../components/view/join/multiplyChoice.vue";
import TelText from "../components/view/join/telText.vue";
import PictureRight from "../components/view/join/pictureRight.vue";
import PictureLeft from "../components/view/join/pictureLeft.vue"
</script>
