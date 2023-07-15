<<<<<<< Updated upstream
<template>
    join us!
</template>
=======
<style scoped>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    .Input{
      width: 80%  ;
      height: 100%;
      margin-top:7vh;
      border-radius: 0.75rem;
      border:5px dotted ;
      --tw-border-opacity: 1;
      border-color: rgb(203 213 225 / var(--tw-border-opacity));
      backdrop-filter:blur(15px);
      text-align: center;
    }
    img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
}
/* input{
  border-radius: 0.375rem;
} */
    .animation{
      animation: action 3s linear 1 alternate forwards paused;
      margin-top: 5vh;
      opacity: 0;
      overflow: hidden;
      padding-top: 2px;
      border-radius: 100%;
      margin:auto;
}
  .animation:hover{
    animation-play-state:running ;
  }
@keyframes action{
  0%{

  }
  100%{
    border-radius: 0.75rem;
    opacity: 1;
  }
}
</style>

<template>
    <div  class="min-w-screen h-full min-h-screen w-full bg-slate-300">
      <div
            class="flex h-[20vmin] min-h-[10rem] w-full flex-col items-center justify-center shadow-md drop-shadow-md max-sm:h-[30vmax]">
            <img src="https://img.lzppt.com/preview/202107/102802-60f8d7b2563f2.png"
                alt="" class="absolute -z-[1] h-full w-full object-cover" />
            <h1 class="text-4xl">加入我们！！！</h1>
            <span class="my-3 w-1/2 border-b-2 border-solid border-gray-500"></span>
            <p class="text-xl">在那之前，请完成一张调查问卷~😊</p>
        </div><!-- nav_head -->
        <div class="w-full h-full flex ">
            <div id="left" class="h-screen w-1/5">
              <img src="https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=600">
              <waterdrop content="暂时不知道该写些什么"></waterdrop>
            </div>
            <!-- left -->
              
            <div id="mid" class="h-screen w-full ">
              <img src="https://images.pexels.com/photos/1089842/pexels-photo-1089842.jpeg?auto=compress&cs=tinysrgb&w=600">

                <n-carousel
                  direction="vertical"
                  dot-placement="right"
                  mousewheel
                  class=" w-[66%] h-[95%] flex ml-[32vmin] "
                >
                
                <div class="Input  w-full h-full">
                  <form name="gender" value="gender" method="post" action="#">
                  <Problem problem="您的性别是？" id="" ></Problem>
                    <radio choiceId="A" answer="男" name="gender" id="gender" ></radio> 
                    <radio choiceId="B" answer="女" name="gender" id="gender"></radio>
                    <radio choiceId="C" answer="钝角" name="gender" id="gender"></radio>
                    <div class="animation bg-slate-600 " id="animation">
                      <bubble content="你好,我是一只肥猫" avatar="https://i.pinimg.com/originals/11/e8/4d/11e84dd733c7a9ace10c71dfee83e659.png"></bubble> 
                      <bubble content="如果您对这个小工作室感兴趣的话，可以填写一下这些调查问卷哦"  avatar="https://i.pinimg.com/originals/11/e8/4d/11e84dd733c7a9ace10c71dfee83e659.png"></bubble> 
                      <bubble content="在这里能学习到各种领域的技术栈，还能学习画饼😅"  avatar="https://i.pinimg.com/originals/11/e8/4d/11e84dd733c7a9ace10c71dfee83e659.png"></bubble>
                      <bubble content="看起来好像很有意思" color="background-color:rgb(200, 214, 229)" l_hide="visibility:hidden" r_hide="" avatar="https://th.bing.com/th/id/R.9c1b6b52cc743ece07ee7dbc6b4c91dd?rik=CMLbAoH90beZnA&riu=http%3a%2f%2fwww.kt5.cn%2fwp-content%2fuploads%2f2019%2f10%2fpersona5-8.jpg&ehk=BOtoqoeort29BQC5WE6T%2fmJhhZ57Xs%2bOSJVMZ8IRsR0%3d&risl=&pid=ImgRaw&r=0"></bubble>
                      <bubble content="滑动鼠标滚轮就能继续查看问卷" avatar="https://i.pinimg.com/originals/11/e8/4d/11e84dd733c7a9ace10c71dfee83e659.png"></bubble> 
                      <bubble content="顺便一提，左右两边的奇怪小球是会动的哟"  avatar="https://i.pinimg.com/originals/11/e8/4d/11e84dd733c7a9ace10c71dfee83e659.png"></bubble>
                      <bubble content="祝你开心😀"  avatar="https://i.pinimg.com/originals/11/e8/4d/11e84dd733c7a9ace10c71dfee83e659.png"></bubble>
                    </div>
                  </form>
                 

                </div>
              

                <div class="Input ">
                  <form name="way" value="way" method="post" action="#">
                  <Problem problem="您是通过什么渠道了解到萌屋的？" id=""></Problem>
                  <radio choiceId="A" answer="QQ" name="way"></radio>
                  <radio choiceId="B" answer="B站" name="way"></radio>
                  <radio choiceId="C" answer="线下宣传" name="way"></radio>
                  <radio choiceId="D" answer="朋友介绍" name="way"></radio>
                  <div class="animation bg-slate-600 " id="animation">
                    <bubble content="你好，我是一只傻修勾" avatar="https://img2.woyaogexing.com/2018/03/28/548022236eedf61f!400x400_big.jpg"></bubble>
                    <bubble content="说到宣传,其实我们之前试过去发传单呢" avatar="https://img2.woyaogexing.com/2018/03/28/548022236eedf61f!400x400_big.jpg"></bubble>
                    <bubble content="不知道你有没有看见过我们的传单呢" avatar="https://img2.woyaogexing.com/2018/03/28/548022236eedf61f!400x400_big.jpg"></bubble>
                    <bubble content="除了线下宣传，萌屋还会举行一系列的活动" avatar="https://img2.woyaogexing.com/2018/03/28/548022236eedf61f!400x400_big.jpg"></bubble>
                    <bubble content="具体有什么呢？" l_hide="visibility:hidden" color="background-color:rgb(200, 214, 229)" r_hide="" avatar="https://th.bing.com/th/id/R.9c1b6b52cc743ece07ee7dbc6b4c91dd?rik=CMLbAoH90beZnA&riu=http%3a%2f%2fwww.kt5.cn%2fwp-content%2fuploads%2f2019%2f10%2fpersona5-8.jpg&ehk=BOtoqoeort29BQC5WE6T%2fmJhhZ57Xs%2bOSJVMZ8IRsR0%3d&risl=&pid=ImgRaw&r=0"></bubble>
                    <bubble content="比如有学院的夏令营，冬令营活动，参加还可以+学分,可以注意一下哟" avatar="https://img2.woyaogexing.com/2018/03/28/548022236eedf61f!400x400_big.jpg"></bubble>
                  </div>
                  </form>
                </div>

                <div class="Input">
                  <form name="school" value="school" method="post" action="#">
                    <Problem problem="您是湘潭大学的学生吗？" ></Problem>
                        <Radio choiceID="A" answer="是" name="school"></Radio>
                        <Radio choiceID="B" answer="不是" name="school"></Radio>
                        <!-- 这里可以写一下吹嘘学校的话,还没想好怎么写-->
                        <div class="animation bg-slate-600 " id="animation">
                          <bubble></bubble>
                        </div>
                  </form>
                </div>

                <div class="Input ">
                  <form name="major" value="major" method="post" action="#">
                        <Problem problem="您就读的专业与计算机相关吗？"></Problem>
                        <Radio choiceId="A" answer="关系密切" name="major"></Radio>
                        <Radio choiceId="B" answer="有一定关系" name="major"></Radio>
                        <Radio choiceId="C" answer="不相关" name="major"></Radio>
                        <Radio choiceId="D" answer="专业不相关,但自己有计算机方面的知识" name="major"></Radio>
                        <div class="animation bg-slate-600 " id="animation">
                          <bubble content="不知道现在浏览这个网站的你是什么专业呢？" avatar="https://th.bing.com/th/id/OIP.JrEsye4NHECo_erZKqpmCAHaG2?pid=ImgDet&rs=1"></bubble>
                          <bubble content="如果你是计算机类专业的话。。。"  avatar="https://th.bing.com/th/id/OIP.JrEsye4NHECo_erZKqpmCAHaG2?pid=ImgDet&rs=1"></bubble>
                          <bubble content="请一定要学好编程!"  avatar="https://th.bing.com/th/id/OIP.JrEsye4NHECo_erZKqpmCAHaG2?pid=ImgDet&rs=1"></bubble>
                          <bubble content="那岂不是要一直内卷吗" l_hide="visibility:hidden" color="background-color:rgb(200, 214, 229)" r_hide="" avatar="https://th.bing.com/th/id/R.9c1b6b52cc743ece07ee7dbc6b4c91dd?rik=CMLbAoH90beZnA&riu=http%3a%2f%2fwww.kt5.cn%2fwp-content%2fuploads%2f2019%2f10%2fpersona5-8.jpg&ehk=BOtoqoeort29BQC5WE6T%2fmJhhZ57Xs%2bOSJVMZ8IRsR0%3d&risl=&pid=ImgRaw&r=0"></bubble>
                          <bubble content="毕竟内卷无可避免呢...."  avatar="https://th.bing.com/th/id/OIP.JrEsye4NHECo_erZKqpmCAHaG2?pid=ImgDet&rs=1"></bubble>
                          <bubble content="但是也别太卷了，卷累了可以躺平一下，适当打打游戏~~~"  avatar="https://th.bing.com/th/id/OIP.JrEsye4NHECo_erZKqpmCAHaG2?pid=ImgDet&rs=1"></bubble>
                        </div>
                  </form>
                </div>

                <div class="Input">
                  <form name="direction" value="direction" method="post" action="#">
                        <Problem problem="对于游戏，您对哪个方向比较感兴趣？"></Problem>
                        <Radio choiceId="A" answer="游戏设计/策划" name="direction"></Radio>
                        <Radio choiceId="B" answer="游戏开发" name="direction"></Radio>
                        <Radio choiceId="C" answer="游戏音乐" name="direction"></Radio>
                        <Radio choiceId="D" answer="游戏美术" name="direction"></Radio>
                        <div class="animation bg-slate-600 " id="animation">
                          <bubble content="你知道这些游戏开发岗位的工作一般是什么吗？" avatar="https://th.bing.com/th/id/OIP.KrNODYRFyHZoViFHhNT5wAHaHU?pid=ImgDet&rs=1"></bubble>
                          <bubble content="策划负责瞎码案子和与摆烂摸鱼的程序团队交流" avatar="https://th.bing.com/th/id/OIP.KrNODYRFyHZoViFHhNT5wAHaHU?pid=ImgDet&rs=1"></bubble>
                          <bubble content="程序负责加班熬夜和掉头发" avatar="https://th.bing.com/th/id/OIP.KrNODYRFyHZoViFHhNT5wAHaHU?pid=ImgDet&rs=1"></bubble>
                          <bubble content="美术和音乐负责满足策划的奇怪审美" avatar="https://th.bing.com/th/id/OIP.KrNODYRFyHZoViFHhNT5wAHaHU?pid=ImgDet&rs=1"></bubble>
                          <bubble content="总之,上班的人是不可能轻松的🙏" avatar="https://th.bing.com/th/id/OIP.KrNODYRFyHZoViFHhNT5wAHaHU?pid=ImgDet&rs=1"></bubble>
                          <bubble content="社畜的眼泪🥲" avatar="https://th.bing.com/th/id/OIP.KrNODYRFyHZoViFHhNT5wAHaHU?pid=ImgDet&rs=1"></bubble>
                      </div>
                  </form>
                </div>


                <div class="Input">
                  <form name="game" value="game" method="post" action="#">
                    <Problem problem="请列举一下您喜欢玩或正在玩的游戏"></Problem>
                    <textarea  cols="40" rows="3" class="resize-none rounded-xl bg-gray-200 text-xl  p-5  placeholder-gray-400" placeholder="艾尔登法环"></textarea>
                    <div class="animation bg-slate-600 " id="animation">
                      <bubble content="为什么默认显示的是老头环呢？" avatar="https://th.bing.com/th/id/R.375e0aa737a8ebde1850e30434067330?rik=f7jwJE%2bVKm7x6w&pid=ImgRaw&r=0"></bubble>
                      <bubble content="其实这张调查问卷的设计者在制作时刚刚买了艾尔登法环" avatar="https://th.bing.com/th/id/R.375e0aa737a8ebde1850e30434067330?rik=f7jwJE%2bVKm7x6w&pid=ImgRaw&r=0"></bubble>
                      <bubble content="并在5天之内玩了35个小时，玩到快要猝死" avatar="https://th.bing.com/th/id/R.375e0aa737a8ebde1850e30434067330?rik=f7jwJE%2bVKm7x6w&pid=ImgRaw&r=0"></bubble>
                      <bubble content="曾经还在3天内玩了20余个小时的只狼" avatar="https://th.bing.com/th/id/R.375e0aa737a8ebde1850e30434067330?rik=f7jwJE%2bVKm7x6w&pid=ImgRaw&r=0"></bubble>
                      <bubble color="background-color:rgb(200, 214, 229)" content="6" l_hide="visibility:hidden" r_hide="" avatar="https://th.bing.com/th/id/R.9c1b6b52cc743ece07ee7dbc6b4c91dd?rik=CMLbAoH90beZnA&riu=http%3a%2f%2fwww.kt5.cn%2fwp-content%2fuploads%2f2019%2f10%2fpersona5-8.jpg&ehk=BOtoqoeort29BQC5WE6T%2fmJhhZ57Xs%2bOSJVMZ8IRsR0%3d&risl=&pid=ImgRaw&r=0"></bubble>
                      <bubble content="游戏虽好，也要注意身学业和身体哦~~~" avatar="https://th.bing.com/th/id/R.375e0aa737a8ebde1850e30434067330?rik=f7jwJE%2bVKm7x6w&pid=ImgRaw&r=0"></bubble>
                    </div>
                  </form>
                </div>

                <div class="Input">
                  <form name="contact" value="contact" method="post" action="#">
                    <Problem problem="如果您对我们的组织感兴趣，请留下您的联系方式(QQ,电话,邮箱等皆可)"></Problem>
                    <textarea  class="resize-none rounded-xl bg-gray-200 text-xl  p-5 w-[80%] placeholder-gray-400" placeholder="114514"></textarea>
                    <div class="animation bg-slate-600 " id="animation">
                      <bubble content="请您注意！" avatar="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1e33c78-bb4d-4df0-a2a7-8d1b5cd57bff/db4i0o1-96ca6406-26f0-40be-a18e-ca11b7d5f5a1.jpg/v1/fill/w_1024,h_636,q_75,strp/link_gyate_by_kirbmaster_db4i0o1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjM2IiwicGF0aCI6IlwvZlwvYTFlMzNjNzgtYmI0ZC00ZGYwLWEyYTctOGQxYjVjZDU3YmZmXC9kYjRpMG8xLTk2Y2E2NDA2LTI2ZjAtNDBiZS1hMThlLWNhMTFiN2Q1ZjVhMS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.fqqc0cgR7e-M_ZLtmmvzKQGPvzCXNLn7oSU8Didpbgs"></bubble>
                      <bubble content="我们不会以任何形式泄露您填写的个人信息" avatar="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1e33c78-bb4d-4df0-a2a7-8d1b5cd57bff/db4i0o1-96ca6406-26f0-40be-a18e-ca11b7d5f5a1.jpg/v1/fill/w_1024,h_636,q_75,strp/link_gyate_by_kirbmaster_db4i0o1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjM2IiwicGF0aCI6IlwvZlwvYTFlMzNjNzgtYmI0ZC00ZGYwLWEyYTctOGQxYjVjZDU3YmZmXC9kYjRpMG8xLTk2Y2E2NDA2LTI2ZjAtNDBiZS1hMThlLWNhMTFiN2Q1ZjVhMS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.fqqc0cgR7e-M_ZLtmmvzKQGPvzCXNLn7oSU8Didpbgs"></bubble>
                      <bubble content="如果您愿意填写联系方式，我们感谢您对这个组织的信任" avatar="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1e33c78-bb4d-4df0-a2a7-8d1b5cd57bff/db4i0o1-96ca6406-26f0-40be-a18e-ca11b7d5f5a1.jpg/v1/fill/w_1024,h_636,q_75,strp/link_gyate_by_kirbmaster_db4i0o1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjM2IiwicGF0aCI6IlwvZlwvYTFlMzNjNzgtYmI0ZC00ZGYwLWEyYTctOGQxYjVjZDU3YmZmXC9kYjRpMG8xLTk2Y2E2NDA2LTI2ZjAtNDBiZS1hMThlLWNhMTFiN2Q1ZjVhMS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.fqqc0cgR7e-M_ZLtmmvzKQGPvzCXNLn7oSU8Didpbgs"></bubble>
                      <bubble content="如果您不愿填写也没有关系，注意保护个人信息是很好的" avatar="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1e33c78-bb4d-4df0-a2a7-8d1b5cd57bff/db4i0o1-96ca6406-26f0-40be-a18e-ca11b7d5f5a1.jpg/v1/fill/w_1024,h_636,q_75,strp/link_gyate_by_kirbmaster_db4i0o1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjM2IiwicGF0aCI6IlwvZlwvYTFlMzNjNzgtYmI0ZC00ZGYwLWEyYTctOGQxYjVjZDU3YmZmXC9kYjRpMG8xLTk2Y2E2NDA2LTI2ZjAtNDBiZS1hMThlLWNhMTFiN2Q1ZjVhMS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.fqqc0cgR7e-M_ZLtmmvzKQGPvzCXNLn7oSU8Didpbgs"></bubble>
                      <bubble content="在生活中也请您注意保护好自己的各种信息！！！" avatar="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1e33c78-bb4d-4df0-a2a7-8d1b5cd57bff/db4i0o1-96ca6406-26f0-40be-a18e-ca11b7d5f5a1.jpg/v1/fill/w_1024,h_636,q_75,strp/link_gyate_by_kirbmaster_db4i0o1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjM2IiwicGF0aCI6IlwvZlwvYTFlMzNjNzgtYmI0ZC00ZGYwLWEyYTctOGQxYjVjZDU3YmZmXC9kYjRpMG8xLTk2Y2E2NDA2LTI2ZjAtNDBiZS1hMThlLWNhMTFiN2Q1ZjVhMS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.fqqc0cgR7e-M_ZLtmmvzKQGPvzCXNLn7oSU8Didpbgs"></bubble>
                    </div>
                  </form>
                </div>   


                <div class="Input">
                  <form name="genshin" value="genshin" method="post"  action="#">
                    <problem problem="您玩原神吗？"></problem>
                    <radio choiceId="A" answer="差不多得了"></radio>
                    <radio choiceId="B" answer="你说的对，但是....."></radio>
                    <radio choiceId="C" answer="XX,起洞！！！"></radio>
                    <radio choiceID="D" answer="感觉不如...."></radio>
                    <br>
                    <div class="animation bg-slate-600 " id="animation">
                      <bubble content="这个问题纯纯整活，无恶意（叠甲）" avatar="https://i.pinimg.com/originals/11/e8/4d/11e84dd733c7a9ace10c71dfee83e659.png"></bubble>
                      <bubble content="这张问卷中出现的游戏角色你都知道吗" avatar="https://i.pinimg.com/originals/11/e8/4d/11e84dd733c7a9ace10c71dfee83e659.png"></bubble>                     
                      <bubble content="有《女神异闻录5》中的雨宫莲，《艾尔登法环》中的菈妮，《塞尔达传说》中的林克，《巫师》中的杰洛特" avatar="https://i.pinimg.com/originals/11/e8/4d/11e84dd733c7a9ace10c71dfee83e659.png"></bubble>
                      <bubble content="以上的每个游戏都是游戏史上的经典之作，如果您还没有玩过，请一定要试一试！" avatar="https://i.pinimg.com/originals/11/e8/4d/11e84dd733c7a9ace10c71dfee83e659.png"></bubble>
                      <bubble content="最后，感谢您在百忙之中抽出时间来完成这张问卷，期待与您再次见面！" avatar="https://i.pinimg.com/originals/11/e8/4d/11e84dd733c7a9ace10c71dfee83e659.png"></bubble>
                    </div>
                    <input type="submit" name="submit" value="提交" class=" rounded-md bg-slate-600 text-lg  w-[10%] text-white">
                  </form>
            </div>
                </n-carousel>
                
            <!-- mid -->
          </div>
            <div id="right" class="h-screen w-1/5" >
              <img src="https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=600">
              <waterdrop content="暂时不知道该写什么"></waterdrop>
            </div>
        </div>
        <!-- right -->
        
</div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'

import Problem from "../components/view/join/Problem.vue";
import waterdrop from '../components/view/join/waterdrop.vue';
import radio from "../components/view/join/radio.vue";
import bubble from "../components/view/join/bubble.vue"



</script>



>>>>>>> Stashed changes
