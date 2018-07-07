var Item3Layer = cc.Layer.extend({
    ctor: function () {
        this._super();
        cc.log("Item3:ctor()");
        let title = new cc.LabelTTF("Item3", "", 48);
        title.x = cc.winSize.width / 2;
        title.y = cc.winSize.height * 7 / 8;
        this.addChild(title);

        this.initMenu();
        return true;
    },
    initMenu: function () {
        let next = new cc.MenuItemFont("next", this.next, this);
        let back = new cc.MenuItemImage(
            res.back_normal_png,
            res.back_selected_png,
            res.back_disselect_png,
            this.back, this
        );

        let menu = new cc.Menu(next, back);
        menu.alignItemsHorizontally();
        this.addChild(menu);
    },

    back: function () {
        cc.director.popScene();
    },

    next: function () {
        cc.director.pushScene(new Item31Scene());
    },

    onEnter: function () {
        cc.log("Item3:onEnter()");
    },
    onExit:function(){
        cc.log("Item3:onExit()");
    }
});

var Item3Scene = cc.Scene.extend({
    ctor:function(){
        this._super();
        var layer = new Item3Layer();
        this.addChild(layer);
    },
    onEnter: function () {

    }
});

