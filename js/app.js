// GLOBALS

let scene, camera, renderer, controls;
let plane, cube, light;
let info;

let canvas = document.querySelector( '#app' );
let canvasWidth, canvasHeight;
let context = canvas.getContext( 'webgl2', { alpha: false } );

if ( THREE.WEBGL.isWebGL2Available() ) {

	init();
	animate();

} else {

	document.body.appendChild( THREE.WEBGL.getWebGL2ErrorMessage() );

}

function init() {

	// SCENE, CAMERA, RENDERER, CONTROLS

	canvasWidth = canvas.clientWidth;
	canvasHeight = canvas.clientHeight;

	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xdddddd );

	camera = new THREE.PerspectiveCamera( 75, canvasWidth / canvasHeight, 0.1, 100 );
	camera.position.set( 0, 3, 10 );

	renderer = new THREE.WebGLRenderer( {
		canvas,
		context,
		antialias: true
	} );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setPixelRatio( window.devicePixelRatio );

	controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.enableDamping = true;

	// MESHES

	plane = addPlane( scene );
	cube = addCube( scene );
	light = addDirectionalLight( scene );

	plane.material.color.setRGB( 0.1294, 0.5882, 0.9529 );

	// OVERLAYS

	info = document.createElement( 'div' );
	info.innerHTML = "Drag to look around";
	document.body.appendChild( info );

	// ANIMATION SETUP

	createjs.Ticker.framerate = 60;
	renderer.setAnimationLoop( render );

}

function render() {

	if ( canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight ) {

		canvasWidth = canvas.clientWidth;
		canvasHeight = canvas.clientHeight;
		onCanvasResize();

	}

	controls.update();

	renderer.render( scene, camera );

}

function animate() {

	createjs.Tween.get( cube.rotation, { loop: true } )
		.set( { x: 0, y: 0, z: 0 } )
		.to( { x: Math.PI * 2, y: Math.PI * 2 }, 1500, createjs.Ease.quadInOut )
		.to( { x: 0, y: 0 }, 0 );

	createjs.Tween.get( cube.scale, { loop: true } )
		.set( { x: 1, y: 1, z: 1 } )
		.to( { x: 1.8, y: 1.8, z: 1.8 }, 750, createjs.Ease.quadIn )
		.to( { x: 1, y: 1, z: 1 }, 750, createjs.Ease.quadOut );

	createjs.Tween.get( plane.material.color, { loop: true } )
		.to( { r: 0.298, g: 0.6863, b: 0.3137 }, 3750 )
		.to( { r: 1, g: 0.7569, b: 0.0275 }, 3750 )
		.to( { r: 1, g: 0.3412, b: 0.1333 }, 3750 )
		.to( { r: 0.1294, g: 0.5882, b: 0.9529 }, 3750 );

}

function onCanvasResize() {

	camera.aspect = canvasWidth / canvasHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( canvasWidth, canvasHeight );

}
