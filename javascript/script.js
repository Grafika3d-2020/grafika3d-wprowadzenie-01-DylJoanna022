console.log(THREE);

const renderer = new THREE.WebGLRenderer();
const scene = new THREE.Scene();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set( 0, 0, 100 );
camera.lookAt(0, 0, 0);

const LineMaterial = new THREE.LineBasicMaterial( { color: 0x00ffff} );
const points = [];
points.push( new THREE.Vector3( -10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 0, -10, 0 ) );

// for (var i=1; i<5; i++) {
//     points.push( new THREE.Vector3( -5*i, -2*i, 0 ) );
//     points.push( new THREE.Vector3( 3*i, 3*i, 0 ) );
// }

const LineGeometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( LineGeometry, LineMaterial );
scene.add( line );



const light1 = new THREE.PointLight({color: 0x0fff00});
scene.add(light1);
light1.position.x = 50;
light1.position.y = -20;
light1.position.z = 10;

const light2 = new THREE.PointLight({color: 0x0fff00});
scene.add(light2);
light2.position.set(-50, 50, 20);

const near = 80;
const far = 150;
const color = 'lightblue';
scene.fog = new THREE.Fog(color, near, far);
scene.background = new THREE.Color(color);

const colorWhite = new THREE.Color('hsl(106, 100%, 90%)');

const width = 10;
const height = 100;
const depth = 10;
const cubeGeometry = new THREE.BoxGeometry( width, height, depth);
const cubeMaterial = new THREE.MeshPhongMaterial({
    color: colorWhite,
    shininess: 80
})

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

cube.rotation.z = -100;
cube.rotation.x = 20;



// renderer.render(scene, camera);

const animate = () => {
    requestAnimationFrame(animate)
    cube.rotation.x +=.02
    renderer.render( scene, camera );
}

animate()