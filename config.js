// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的萌萌小可爱",  // 同上...
        "今天是你的生日~",
        "时间过得真快啊",
        "从19年相识",
        "这是你第五个生日啦~",
        "我是个俗气至顶的人",
        "见山是山，见海是海，见花便是花",
        "唯独遇见了你",
        "云海开始翻涌",
        "江潮开始澎湃",
        "昆虫的小触须挠着全世界的痒",
        "你无需开口",
        "我和天地万物便通通奔向了你",
        "愿你永远都有好运气",
        "有玩不完的游戏吃不完的好吃哒",
        "希望你每天都过得开心",
        "你若一直在，那我便一直爱你",
        "亲你~然后抱走",
        "生日快乐！我最爱最喜欢的萌萌~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/xiaokeai.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点击开始哦",
        play: "来点音乐吧",
        bannar_coming: "加点色彩",
        balloons_flying: "嗯好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐！！！",
        story: "给小可爱的话",
    }
};
