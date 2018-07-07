var Item4Layer = cc.Layer.extend({
    ctor: function () {
        this._super();

        this.initMenu();
        return true;
    },
    initMenu: function () {
        let back = new cc.MenuItemImage(
            res.back_normal_png,
            res.back_selected_png,
            res.back_disselect_png,
            this.back, this
        );

        back.x = -cc.winSize.width / 2 + back.width / 2;
        back.y = -cc.winSize.height / 2 + back.height / 2;
        let next1 = new cc.MenuItemFont("next1", this.next1, this);
        next1.setColor(cc.color(255, 255, 0));
        let next2 = new cc.MenuItemFont("next2", this.next2, this);
        let next3 = new cc.MenuItemFont("next3", this.next3, this);
        let next4 = new cc.MenuItemFont("next4", this.next4, this);

        next1.x = 0;
        next1.y = 150;
        next2.x = 0;
        next2.y = 50;
        next3.x = 0;
        next3.y = -50;
        next4.x = 0;
        next4.y = -150;


        let menu = new cc.Menu(back, next1, next2, next3, next4);
        this.addChild(menu);
    },

    next1: function () {
        cc.director.pushScene(
            new cc.TransitionFadeTR(3, new Item41Scene))
    },
    next2: function () {
        cc.director.pushScene(
            new cc.TransitionJumpZoom(3, new Item41Scene))
    },
    next3: function () {
        cc.director.pushScene(
            new cc.TransitionCrossFade(3, new Item41Scene))
    },
    next4: function () {
        cc.director.pushScene(
            new cc.TransitionSlideInT(3, new Item41Scene))
    },
    onExitTransitionDidStart: function () {
        cc.log("start")
    },
    back: function () {
        cc.director.popScene();
    }

});

var Item4Scene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new Item4Layer();
        this.addChild(layer);
    }
});

