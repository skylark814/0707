var Item2Layer = cc.Layer.extend({
    ctor:function (data) {
        this._super();

        cc.log("Item2Layer:" + data);
        cc.log("Item2Layer:var1 = " + var2);    //menu傳進來的“全域變數”(小心使用)

        this.initMenu();
        return true;
    },

    initMenu: function () {
        var back = new cc.MenuItemImage(
            res.back_normal_png,
            res.back_selected_png,
            res.back_disselect_png,
            this.back, this
        );

        var menu = new cc.Menu(back);
        this.addChild(menu);
    },

    back: function () {
        cc.director.popScene();
    },


});

var Item2Scene = cc.Scene.extend({
    mydata:null,
    ctor:function(data){     //傳參數用這組寫法
        this._super();
        this.mydata = data;
        cc.log("Item2Scene:ctor():" + data);
        var layer = new Item2Layer(this.mydata);
        this.addChild(layer);

    },

    // onEnter:function () {    //不傳參數用這組
    //     this._super();
    //     cc.log("Item2Scene:onEnter()" + this.mydata)
    //     var layer = new Item2Layer();
    //     this.addChild(layer);
    // }

});

