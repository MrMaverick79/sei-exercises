import * as THREE from 'three';
import { MeshDistanceMaterial } from 'three';

class ParticleSystem {

    constructor(numParticles, particleDistribution ){
        
        //some of these settings are so the GPU is fed a 'nice' set of data tro render

        this.numParticles = numParticles; //doing this means they are now indatnce variables and can be called.
        this.particleDistribution = particleDistribution;

       
        const particleGeometry = new THREE.BufferGeometry(); //use the gpu to do the work

        const positions = []; //where the particles are
        const velocities = []; 

        for (let i = 0; i < this.numParticles; i++) {
            positions.push(
                // THREE.MathUtils.randInt(-this.particleDistribution, this.particleDistribution), //x
                60,
                THREE.MathUtils.randInt(-this.particleDistribution, this.particleDistribution), //y
                THREE.MathUtils.randInt(-this.particleDistribution, this.particleDistribution) //z

            );
            // positions.push(0, 0, 0);

            // velocities.push(
            //     THREE.MathUtils.randFloat(-0.5, 0.3), //x speed
            //     THREE.MathUtils.randFloat(-0.5, 0.3), //y speed
            //     THREE.MathUtils.randFloat(-0.5, 0.3) //z speed

            // );
                velocities.push(0, 0, 0)
            
        } //for


        particleGeometry.setAttribute(
             'position',
              new THREE.Float32BufferAttribute( positions, 3) //optimise GPU render

        );

        particleGeometry.setAttribute(
            'velocity',
             new THREE.Float32BufferAttribute( velocities, 3) //optimise GPU render

       );

        const particleMaterial = new THREE.PointsMaterial({
            color: 0xFFFFFF,
            size: 6,
            map: new THREE.TextureLoader().load('/img/snowflake.png'),
            blending: THREE.AdditiveBlending,
            transparent: true,
            alphaTest: 0.5
        });

        this.points =  new THREE.Points( particleGeometry, particleMaterial) 
        //instead of returnign this mesh (we are in the constructor so it will always return an instance),
        // we save the points mesh as an instance variable
        
    } //constructor()


    animate( velocityScale) {
        const positions = this.points.geometry.attributes.position.array;
        const velocities = this.points.geometry.attributes.velocity.array;

        for (let i = 0; i < this.numParticles; i++) {
            
            //we have to do this becaus the GPU expects an array, and we can't use JS objects.
            const xIndex  = i * 3 + 0; //x 
            const yIndex  = i * 3 + 1; //y
            const zIndex  = i * 3 + 2; //z

            //Newtonian Gravitation!

            //First we need to work out the distance of the current particle.
            const xPos = positions[xIndex], yPos = positions[yIndex], zPos = positions[zIndex]

            const distSquared = (xPos * xPos) + (yPos * yPos) + (zPos * zPos);
            const gravityForce = -0.2 * (1.0 /distSquared) //-0.2 is standing in for thre g constant
            if( distSquared > 15.0 ) {
               

                velocities[xIndex] += gravityForce * xPos;
                velocities[yIndex] += gravityForce * yPos;
                // velocities[zIndex] += gravityForce * zPos;
    
    
    
            }
            //Acceleration (i.e. gravity) force that changes velocity
            //change positions on animate frame.
            positions[xIndex] += velocities[xIndex] *velocityScale; //every star 'falls' as its y position gets smaller every animate frame
            positions[yIndex] += velocities[yIndex] *velocityScale; //every star 'falls' as its y position gets smaller every animate frame
            positions[zIndex] += velocities[zIndex] *velocityScale; //every star 'falls' as its y position gets smaller every animate frame

            //Warping 
            // if(positions[yIndex] < -100){
            //     positions[yIndex] = 100;
            // }



        } //for

        this.points.geometry.attributes.position.needsUpdate = true;

    } //animate

    

} //class

export default ParticleSystem;