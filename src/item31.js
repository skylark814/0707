var Item31Layer = cc.Layer.extend({
    ctor: function () {
        this._super();

        let title = new cc.LabelTTF("Item31", "", 48);
        title.x = cc.winSize.width / 2;
        title.y = cc.winSize.height * 7 / 8;
        this.addChild(title);

        this.initMenu();

        return true;
    },

    initMenu: function () {
        let home = new cc.MenuItemFont("首頁",this.home,this);

        var back = new cc.MenuItemImage(
            res.back_normal_png,
            res.back_selected_png,
            res.back_disselect_png,
            this.back, this
        );
        let item1 = new cc.MenuItemFont("Item1",this.item1,this);


        var menu = new cc.Menu(home,back,item1);
        menu.alignItemsHorizontally();
        this.addChild(menu);
    },

    back: function () {
        // cc.director.popScene();
        cc.director.popToSceneStackLevel(2);

    },
    home: function () {
        cc.director.popToSceneStackLevel(1);
    },
    item1:function(){
        cc.director.popToSceneStackLevel(1);
        cc.director.pushScene(new Item1Scene());

    }
});

var Item31Scene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new Item31Layer();
        this.addChild(layer);
    }
});

