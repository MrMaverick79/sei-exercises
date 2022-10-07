import * as THREE from 'three';


class ShapeFactory{

    //Define some 'class methods', i.e.
    // metohds we can call on the class, withou creating an instance first: e.g. ShapeFactory.CreatePlane()

    //'static' means you call it on the whole class  ( as opposed to an instance). It becomes 
    // a method for ShapeFactory
    static createPlane(){
        //3D objects are built from 2 elements:
        // 1. a geometry aka a shape
        // 2. a material aka a surface or tetxure

        //These 2 combined are called a mesh

        const planeGeometry = new THREE.PlaneGeometry( 120, 20 );

        const planeMaterial = new THREE.MeshLambertMaterial({
            color: 0x990022 //dark red
        });

        //combine into a mesh
        const planeMesh = new THREE.Mesh( 
            planeGeometry, planeMaterial
        );

        planeMesh.position.set(15, 0 , 0);
        planeMesh.rotation.x = -0.5 * Math.PI; // because Maths
        // planeMesh.receiveShadow = true; //opt in to shadows.

        return planeMesh; 



    }

    static createCube(xSize, ySize, zSize, xPos, yPos, z,Pos) {

        const cubeGeometry = new THREE.BoxGeometry(xSize, ySize, zSize);

        const cubeMaterial = new THREE.MeshLambertMaterial({
            color: 0xFF8F00 //orange-ish

        });

        cubeMaterial.color.setHSL(
            Math.random(), //random
            1.0,
            0.5

         )

        const cubeMesh = new THREE.Mesh ( cubeGeometry, cubeMaterial)

        cubeMesh.position.set(xPos, yPos, z,Pos)

        // cubeMesh.castShadow = true; //opt in to shadows.
        return cubeMesh

    }

    static createShere( radius, xPos, yPos, zPos ){

        const sphereGeometry = new THREE.SphereGeometry(
            radius, // size
            40, //these are the triangles of the X
            40, //number of triangles on the Y
        );

        const texture = new THREE.TextureLoader().load('/img/earth.jpg')

        const sphereMaterial = new THREE.MeshLambertMaterial({
            color: 0xFFFFFF,
            map: texture,
            side: THREE.DoubleSide, 
        })

        const sphereMesh = new THREE.Mesh( sphereGeometry, sphereMaterial);
        sphereMesh.position.set( xPos, yPos, zPos)
        // sphereMesh.castShadow = true;

        return sphereMesh;

    }

} //class ShapeFactory


export default ShapeFactory;