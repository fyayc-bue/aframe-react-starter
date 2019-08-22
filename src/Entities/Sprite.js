const AFRAME = window.AFRAME;
const THREE = window.THREE;

AFRAME.registerComponent('sprite', {
	    
    schema: {
        src: {
            default: ''
        },
        resize:{
            default: '1 1 1'
        }
    },


    init()
    {
        this.textureLoader = new THREE.TextureLoader();
    },


    play()
    {
        console.log( this.data.src );

        this.map = this.textureLoader.load(this.data.src);

        this.material = new THREE.SpriteMaterial({
            map: this.map
        });

        this.sprite = new THREE.Sprite(this.material);

        const resizeData = this.data.resize.split(' ');
        this.sprite.scale.set( resizeData[0], resizeData[1], resizeData[2] );

        this.el.setObject3D('mesh', this.sprite);
    },


    remove() {
        console.log('remove sprite');
        if (this.mesh) this.el.removeObject3D('mesh');
    }

});

AFRAME.registerPrimitive('a-sprite', {
    defaultComponents: {
        sprite: {}
    },
    mappings: {
        src: 'sprite.src',
        resize: 'sprite.resize'
    }
});