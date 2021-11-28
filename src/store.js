import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        backBtnVisible:false,
        picList:[
            {
                id:0,
                src:[
                    './img/aeui2.3ffb4059.jpg',
                ],
                content:'AE制作的UI界面'
            },
            {
                id:1,
                src:[
                    './img/Db1.a1fd25e5.png',
                ],
                content:'AE图标'
            },
            {
                id:2,
                src:[
                    './img/trigger.48572e21.gif',
                ],
                content:'关键帧动画展示——动画标题划过'
            },
            {
                id:3,
                src:[
                    './img/ringRotation.dea76612.gif',
                ],
                content:'关键帧动画展示——圆环动画'
            }
        ],
        article:[
            {
                id:0,
                title:'帧',
                pic:['./img/frame.bf28b5db.png'],
                content:`帧就是影像动画中最小单位的单幅影像画面，相当于电影胶片上的每一格镜头。一帧就是一幅静止的画面，连续的帧就形成动画，如电视图像等。`,
                router:''
            },
            {
                id:1,
                title:'关键帧',
                pic:['./img/keyframe.1e5c3bec.png'],
                content:'关键帧相当于二维动画中的原画。指角色或者物体运动或变化中的关键动作所处的那一帧。关键帧与关键帧之间的动画可以由软件来创建，叫做过渡帧或者中间帧。在AE里面，我们只需要添加关键帧．电脑会自动生成过渡动画。',
                router:''
            },
            {
                id:2,
                title:'FPS（Frames Per Second）',
                pic:['./img/fps.f467ecc7.png'],
                content:'FPS是图像领域中的定义，是指画面每秒传输帧敌，通俗来讲就是指动画或视频的画面致。FPS是测量用于保存、显示动态视频的信息数量。每秒钟帧政愈多，所显示的动作就会愈流畅。通常．要避免动作不流畅的最低是30。某些计算机视频格式．每秒只能提供15帧。',
                router:''
            },
            {
                id:3,
                title:'视频格式',
                pic:['./img/format.b24912ca.png'],
                content:`
                MP4 \n
                MP4是一套用于音频、视频信息的压缩编码标准，由国际标准化组织(ISO）和国际电工委员会(IEC）下属的“动态图像专家组”(Moving Picture Experts Group，即MPEG〉制定，第一版在1998年10月通过，第二版在1999年12月通过。MPEG-4格式的主要用途在于网上流、光盘、语音发送（视频电话)，以及电视广播，
                AVI \n
                AVI，音频视频交错(Audio Video Interleaved)的英文缩写。AVI这个由微软公司发表的视频格式，在视频领域可以说是最悠久的格式之一。AVI格式调用方便、图像质量好，压缩标准可任意选择，是应用最广泛、也是应用时间最长的格式之一。
                MOV \n
                使用过Me机的朋友应该多少按触过QuickTime。QuickTime原本是Apple公司用于Mac计算机上的一种图像视频处理软件。Quick-Time提供了两种标准图像和数字视频格式，即可以支持静态的*.PIC和 .JPG图像格式，动态的基于Indeo压缩法的*.MOV和基于MPEG压缩法的* .MPG视频格式。
                WMV \n
                一种独立于编码方式的在Internet上实时传播多媒体的技术标准，Microsoft公司希望用其取代OuickTime之类的技术标准以及WAV、AVI之类的文件扩展名。WMV的主要优点在于:可扩充的媒体类型、本地或网络回放、可伸缩的媒体类型、流的优先级化、多语言支持、扩展性等。
                MKV \n
                种后缀为MKV的视频文件频频出现在网络上，它可在一个文件中集成多条不同类型的音轨和字幕轨，而且其视频编码的自由度也非常大，可以是常见的DivX、XviD、3IVX.甚至可以是RealVideo 、Quick Time、WMV这类流式视频。
                FLV \n
                FLV是FLASH VIDEO的简称，FLV流媒体格式是一种新的视频格式。由于它形成的文件极小、加载速度极快，使得网络观看视频文件成为可能，它的出现有效地解决了视频文件导入Flash后，使导出的SWF文件体积庞大，不能在网络上很好的使用等缺点。
                `,
                router:''
            },
            {
                id:4,
                title:'常见格式',
                pic:['./img/Db1.a1fd25e5.png'],
                content:'',
                router:''
            },
            {
                id:5,
                title:'比特率',
                pic:['./img/Bitrate.03ec56db.png'],
                content:`比特率是指每秒传送的比特(bit)数。单位为bp(Bit Per Second)，比特率越高，传送数据速度越快。声音中的比特率是指将模拟声音信号转换成数字声音信号后，单位时间内的二进制数据量，是间接衡量音频质量的一个指标。视频中的比特率（码率）原理与声音中的相同，都是指由模拟信号转换为数字信号后，单位时间内的二进制数据量。`,
                router:''
            },
            {
                id:6,
                title:'格式转换',
                pic:['./img/FF150.91a8545c.png'],
                content:'视频格式转换主指通过一些软件，将视频的格式互相转化，使其达到用户的需求。常用的视频格式有影像格式（Video)、流媒体格式(Stream Video)。每一种格式的文件需要有对应的播放器。MOV格式文件用OuickTime据放，RM格式的文件用RealPlayer播放。若出现只装有RealPlayer播放器，所有的却是一个MOV格式文件，为了播放．需要对视频进行格式转换。',
                router:''
            },
            {
                id:7,
                title:'窗口功能',
                pic:['./img/aeWindow.522f8359.png'],
                content:'Adobe系列的软件大都提供了高自由度的面板调整，每一个窗口都能自由的显示、隐藏或者放在软件的各个位置，用户一般不用调整窗口的位置，但是根据自身需求调整窗口布局能让AE使用更加得心应手。当然，你不知道怎么摆放窗口位置的时候你也可以试试AE给出的默认工作区样式',
                router:''
            },
            {
                id:8,
                title:'菜单栏',
                pic:['./img/aenav.d4efd8c0.png'],
                content:`菜单栏提供了许多重要的操作，比如项目的创建与设置、文件的导入导出、面板的详细设置入口。当然一些常用的操作他会默认提供快捷键，一些功能也会集成到相应的面板上，可以进行图形化的操作。
                \n 文件
                可以新建项目，导入导出，与其他Adobe软件动态链接和设置脚本。
                \n 编辑
                计算机常规的复制粘贴都在这里，AE的基础设置就在这。
                \n 合成
                合成面板的基础信息和设置。
                \n 图层
                图层与PS中的类似，大都是图层的基础样式。
                \n 效果
                一些简单的效果预设，比如颜色变暗、变亮。
                \n 动画
                提供了关键帧的调整，以及摄像机的运动调整，还有表达式的编写。
                \n 窗口
                调整窗口设置，显示隐藏你要操作的窗口，还有默认的工作区样式可供选择。
                \n 帮助
                可以查看软件的信息、查看官网论坛、登录账号，新版还提供了Adobe官方的教程。
                `,
                router:''
            },
            {
                id:9,
                title:'工具栏',
                pic:['./img/aenav.d4efd8c0.png'],
                content:`
                \n 选取工具（快捷键V）
                最常用的工具，鼠标默认就是选择工具，用于选择各个文件、各项属性，并且改变位置。
                \n 手型工具（快捷键H）
                随意的拖动合成窗口。
                \n 缩放工具（快捷键Z）
                缩放合成窗口，注意并不是缩放素材。
                \n 旋转工具（快捷键W）
                字面意思，可以旋转素材。
                \n 形状工具（快捷键Q）
                快速生成默认形状，并且能调整填充颜色与描边样式。
                \n 钢笔工具（快捷键G）
                绘画路径，是路径动画的基础。
                \n 文字工具（快捷键ctrl+T）
                生成文字图层输入文字，能调整文字样式，并且制作文字动画，也能附着在路径上。
                \n 画笔工具（快捷键ctrl+B在这同样快捷键的工具中切换）
                自由的绘制线条，有各种各样的画笔样式预设。
                \n 仿制图章工具（快捷键ctrl+B在这同样快捷键的工具中切换）
                将图案的一部分进行复制，操作和PS相同。
                \n 橡皮擦工具（快捷键ctrl+B在这同样快捷键的工具中切换）
                将图案的一部分擦除，操作和PS相同。
                \n Roto笔刷（快捷键Alt+W）
                快速选区，自动识别图案内容建立选区。后续还能追踪物体变化而更新选区，这样就能将视频中的运动物体实时选取出来。
                `,
                router:''
            },
            {
                id:10,
                title:'项目面板和参数',
                pic:['./img/projectPanel.2d540f26.png'],
                content:'项目面板是容纳素材和合成的一个窗口，可以新建文件夹对杂乱的素材进行整理。在面板上方会显示所选素材的基础信息比如分辨率、时长、编码信息。',
                router:''
            },
            {
                id:11,
                title:'图层面板',
                pic:['./img/layersPanel.1282c3a3.png'],
                content:'虽然他是叫图层，但是不同格式的素材都会形成一个层。对于可以显示的素材来说，图层面板里的显示优先级是自上而下的，在上方的素材会最优先显示。',
                router:''
            },
            {
                id:12,
                title:'图层的基本属性',
                pic:['./img/layerBasic.ff6195b5.png'],
                content:`图层的五个基础属性
                \n 锚点（单独显示快捷键A）
                相对于素材自身的坐标而定位的一个点，一些对素材的操作是以锚点来进行的，比如缩放。
                \n 位置（单独显示快捷键P）
                相对于整个项目的坐标而定位的，它能直接的表达你这个素材在这个项目里处在一个什么位置。
                \n 缩放（单独显示快捷键S）
                基于锚点对素材自身进行缩放。
                \n 旋转（单独显示快捷键R）
                基于锚点对素材自身进行旋转。
                \n 不透明度（单独显示快捷键T）
                字面意思，调整素材的不透明度，从0%~100%。
                `,
                router:''
            },
            {
                id:13,
                title:'合成面板',
                pic:['./img/Db1.a1fd25e5.png'],
                content:'无',
                router:''
            },
            {
                id:14,
                title:'关键帧属性',
                pic:['./img/frame2.5c672f2a.png'],
                content:'在某个时间记录素材的属性，并且自动计算出两个关键帧之间发生的变化。如果两个关键帧之间的时间长度一致，但是首位的数值差距不一样，它们的运行速度就会不一样，如图所示1~7的数值增长速度会更快一些。',
                router:''
            },
            {
                id:15,
                title:'动画案例',
                pic:[
                    './img/trigger.48572e21.gif',
                    './img/ringRotation.dea76612.gif'
                ],
                content:'',
                router:''
            },
            {
                id:16,
                title:'文字工具',
                pic:['./img/Db1.a1fd25e5.png'],
                content:'',
                router:''
            },
            {
                id:17,
                title:'效果控件',
                pic:['./img/Db1.a1fd25e5.png'],
                content:'',
                router:''
            },
            {
                id:18,
                title:'蒙板遮罩',
                pic:['./img/Db1.a1fd25e5.png'],
                content:'',
                router:''
            },
            {
                id:19,
                title:'元素间的父子关系',
                pic:['./img/Db1.a1fd25e5.png'],
                content:'',
                router:''
            },
            {
                id:20,
                title:'简单表达式',
                pic:['./img/Db1.a1fd25e5.png'],
                content:'',
                router:''
            },
            {
                id:21,
                title:'渲染设置以及常用格式',
                pic:['./img/Db1.a1fd25e5.png'],
                content:'',
                router:''
            },
            {
                id:22,
                title:'KeyLight一键扣绿',
                pic:['./img/Db1.a1fd25e5.png'],
                content:'',
                router:''
            }
        ]
    },
    mutations:{
        showBackBtn(state,getBool){
            state.backBtnVisible=getBool
        }
    },
    actions:{}
})
