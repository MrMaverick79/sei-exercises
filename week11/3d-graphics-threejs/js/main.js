import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import ShapeFactory from './ShapeFactory';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'; // basically dat.gui
import Stats from 'stats.js'
import { TetrahedronGeometry } from 'three';
import ParticleSystem from './ParticleSystem';


class Universe {
    //This is the core class (i.e. App)

    //animation controls    
    controls = {
        rotationSpeed: 0.001,
        counter: 0,
        counterStep: 0.002, //how fast the counter grows 
        particleVelocityScale: 1
    }


    //This needs to be an arrow function because we are using it as 
    //an event handler 
    init = () => {
        console.log('init');
        this.initThree();
        this.addShapes();
        this.animate(); //start animating
    } // init()

    initThree(){


        this.gui = new GUI();
        this.gui.add(this.controls, 'rotationSpeed', 0 , 0.5);
        this.gui.add(this.controls, 'counterStep', 0 , 0.1).name('Sine wave speed');
        this.gui.add(this.controls, 'particleVelocityScale' , -2, 2).name('Particle speed factor')
        this.stats  = new Stats();
        document.body.appendChild(this.stats.dom)

        //We always need to define 5 things for our 3D universe at a minimum:
        // * A scene (i.e. space),
        // * A camera (i.e an observer, a perspective),
        // * A renderer (i.e. time)
        // * light+
        // * Something to look at

        //Scene:
        this.scene = new THREE.Scene();

        //Camera:
        this.camera = new THREE.PerspectiveCamera(
            60, //fov angle
            window.innerWidth / window.innerHeight, //apsect ratio
            0.1, //near filed--how close before you stop rendering
            1000, //how far things can get
        ); 
            
        //camera positons longhand
        // this.camera.position.x = -30;
        // this.camera.position.y = 40;
        // this.camera.position.z = 30;

        //or in shorthand
        this.camera.position.set(-30, 40, 30)

        this.camera.lookAt( this.scene.position)

        //use the GPU to make the browser 3d world
        this.renderer =  new THREE.WebGLRenderer({
            canvas: document.querySelector('#app')
        });

        this.renderer.setSize( window.innerWidth, window.innerHeight);


        //Shadows are expensive, so they are disabled by default.

        // this.renderer.shadowMap.enabled = true;

        //Let there be light!
        this.spotlight = new THREE.SpotLight( 0xFFFFFF)
        this.spotlight.position.set( -10, 60, 10); //x,y, z
        // this.spotlight.castShadow  = true;


        this.ambientLight =  new THREE.AmbientLight( 0x777777)
        this.scene.add( this.ambientLight)

        //Add to the scene
        this.scene.add( this.spotlight);

        //Create an 'axes helper' to view in the scene
        // this.axesHelper = new THREE.AxesHelper( 50 );
        // this.scene.add( this.axesHelper );

        //mouse controls for camera position
        // andd zoom level. Requires animation loop.
        this.mouseControls = new OrbitControls(
            this.camera,
            this.renderer.domElement
        )

    }

    addShapes(){

        this.shapes = {}; //a container for shapes

        //create & add plane
        // this.shapes.plane = ShapeFactory.createPlane();
        
        // this.scene.add( this.shapes.plane );

        //create & add a cube
        // this.shapes.cube = ShapeFactory.createCube(
        //     4, 4, 4,  //x, y ,z size
        //     -4, 15, 0 // x, y, z position

        // );


        //Create 1000 multi coloured cubes
        // const numCubes = 1000
        // for (let i = 0; i < numCubes; i++) {
        //     const randomCube =  ShapeFactory.createCube(
        //         4, 4, 4,  //x, y ,z size
        //         // -4, 15, 0 // x, y, z position
        //         THREE.MathUtils.randInt( -100, 100), //x
        //         THREE.MathUtils.randInt( -100, 100), //y
        //         THREE.MathUtils.randInt( -100, 100), //z
    
        //     );
        //     this.scene.add( randomCube);
            
        // }
        
        // this.scene.add( this.shapes.cube );

        this.shapes.sphere =  ShapeFactory.createShere(
            12, //radius
            0, 0, 0, //x, y, z
        );

        this.scene.add( this.shapes.sphere );


        //Add a particle system
        this.particleSystem = new ParticleSystem( 100000, 300); //count, distribution
        this.scene.add( this.particleSystem.points)

    } //adShapes()

    animate = () => {

        this.stats.begin() //start timing


        //updtate the counter used for the sin() calculation
        this.controls.counter += this.controls.counterStep;

    
        
        // this.shapes.sphere.position.x = 10 + (Math.sin(this.controls.counter) * 30); //'10 here is the origina x value
        // this.shapes.sphere.position.y = 6 + Math.abs(Math.sin(this.controls.counter) * 30); //Math.abs is so we don't go into the negatives

        // //animate cube
        // this.shapes.cube.rotation.x += this.controls.rotationSpeed;
        // this.shapes.cube.rotation.y += 0.04;

        this.shapes.sphere.rotation.y += this.controls.rotationSpeed

        //animatye the particles.
        this.particleSystem.animate( this.controls.particleVelocityScale );


        this.renderer.render(this.scene, this.camera);

        this.stats.end() //stop the timer and updtate the graph

        //instead of setInterval
        requestAnimationFrame( this. animate )

    }

    handleResize = () => {
        //Update THREE.js whenever the browser window changes.
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);

    }

} //class Universe

//Make an object from the class

const app = new Universe();


//For debugging (as these variables are not in the Global Scope):
//TODO: remove
window.myApp = app;

window.addEventListener('DOMContentLoaded', app.init);

//listening for window resizes
window.addEventListener('resize', app.handleResize) ;