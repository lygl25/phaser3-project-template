
var Boot=new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function Preloader ()
    {
        Phaser.Scene.call(this, { key: 'boot' });
    },

    preload: function (){



    },

    create: function ()
    {
        console.log('%c Preloader ', 'background: green; color: white; display: block;');


    }

})


export {Boot}