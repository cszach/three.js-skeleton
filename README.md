# three.js-skeleton

[use]: https://github.com/you-create/three.js-skeleton/generate

A basic template for small three.js experiments. An example is being built,
stand by.

Looks good? [Use this template][use].

## Table of Content

1. [Aims](#aims)
2. [Specification](#spec)
    1. [Introduction and Overview](#introduction-and-overview)
        1. [Open](#open)
        2. [Readable](#readable)
        3. [Maintainable](#maintainable)
    2. [Directory structure](#directory-structure)
        1. [Overview](#overview)
        2. [Sub-directories](#sub-directories)
        3. [General, single-page documents](#general-single-page-documents)
        4. [Additional files](#additional-files)
    3. [Entry HTML file](#entry-html-file)
        1. [Overview](#overview)
        2. [Rules](#rules)
    4. [Entry JavaScript file](#entry-javascript-file)
        1. [Overview](#overview)
        2. [Structure](#structure)
            1. [Global variables' definitions](#global-variables-definitions)
            2. [The main if structure](#the-main-if-structure)
            3. [`init`](#init)
            4. [`render`](#render)
            5. [`animate`](#animate)
3. [Use this template](#use-this-template)
4. [License](#license)

## Aims

- Open
- Readable
- Maintainable

## Specification

### Introduction and Overview

This is a semi-formal specification that governs the directory structure as well
as the design architecture of this template. This template is a basic template
for three.js experiments, and it aims to be **open**, **readable**, and
**maintainable**. To achieve these aims, clear stipulations have been set for
each aim, and these stipulations serve as guidelines for the main content of
this specification.

#### Open

1. Everyone who uses this template is encouraged to modify the template however
   they wish, adapting their own needs or any requirement that they must comply
   with.
2. Everyone who uses this template to start a new project is free to use a
   different license for their project, as this template is a dedication to the 
   public domain.

#### Readable

1. To encourage code readability, text found in text files (including code) in
   this template is carefully formatted, linted, and fixed. The specification
   also encourages the use of linters to quickly and effortlessly find and fix
   errors.
2. Above of all, everyone who uses this template is encouraged to write text
   and code in their own coding style, or to comply with any guidelines they
   have to comply with.

#### Maintainable

1. Configuration files and general single-paged documents like `README` or
   `LICENSE` must be placed at the root of the directory structure.
2. Code files must be separated from other files (e.g. textures, maps, models).
3. Code files must be properly grouped using directories. Similarly, other files
   must be properly grouped using directories. Grouping and directory naming has
   to be done in such a way that makes it quick and easy to find files.
4. The entry point on the JavaScript side (which is basically a JavaScript
   source file) does the three.js experiment. This is where the 3D scene,
   cameras, renderers, as well as other meshes are created and animated.
5. Different chunks of code doing different jobs must be separated using
   comments, blank lines, code blocks, or functions.
6. Code should be formatted and fixed (e.g. using a linter).

### Directory structure

#### Overview

- `index.html`: The main HTML file, the entry point of the web page
    - `basic.css`: Basic CSS styles, these include CSS styles that make the
    canvas for the three.js experiment as big as the inner browser window
    - `app.css`: Defines CSS styles for elements that are part of the experiment
    itself, such as overlays
- `js/`: Contains JavaScript source files
    - `app.js`: The main JavaScript source file, the entry point of the app
- `lib/`: Contains libraries and source files written by others imported into
  the project, these must be properly placed into sub-directories
- `assets/`: Contains images, fonts, and models used in the experiment
    - `img/`: Contains images (may be used as textures)
    - `videos/`: Contains videos
	- `textures/`: Contains textures (maps, matcaps, etc.)
	- `cube-maps/`: Contains cube-maps
	- `models/`: Contains files describing models (i.e. meshes)
    - `fonts/`: Contains fonts

#### Sub-directories

- JavaScript source files in `js/`, excluding the entry file `app.js`, should be
  reasonably placed into sub-directories
- CSS source files in `css/` should also be reasonably placed into
  sub-directories, especially when there are many of them
- In `css/` or `js/`, if there are only a few source files and they don't
  properly fit into distinct groups, they don't have to be placed inside sub-directories (this does not imply that CSS files and JavaScript files can be
  put altogether under a single directory)
- Each library in `lib/` must have its own dedicated directory, where all of its
  files are stored, even if the library has one or a few files
- Every set of maps that define a material must be placed inside a distinct
  sub-directory of `assets/textures/`
- Every set of maps that define a cube map must be placed inside a distinct
  sub-directory of `assets/cube-maps/`
- Model/Mesh files in `assets/models/` should be reasonably grouped using
  sub-directories, especially when there are many of them
- Files in `assets/img/` and `assets/videos/` should also be reasonably grouped
  using sub-directories, especially when there are many of them
- Fonts that belong to a typeface (i.e. font family) must be placed inside a
  distinct sub-directory of `assets/fonts/`

#### General, single-page documents

These files usually appear in open-source projects, though they don't have to.
But when they do, they must be placed at the root of the project directory.

- `README.md`: A descriptive document written in Markdown that describes the
  project
- `LICENSE`: A copy of the project's license

Other files that would fit into this category include `CONTRIBUTING.md` and
`AUTHORS`.

#### Additional files

These files appear in the template, but that's about it. Configuration files
like these must be placed at the root of the project directory.

- `.eslintrc.js`: ESLint configuration file
- `.gitignore`: Git ignore file

### Entry HTML file

#### Overview

The entry HTML file is and should be `index.html`. It appears at the root of the
directory structure. It contains a `<canvas>` element, as well as links to
JavaScript code that does things to that canvas.

#### Rules

1. `<meta>` tags, `<title>`, and links to stylesheets must be in `<head>`
2. The `<canvas>` and `<script>` tags must be in the document `<body>`
3. The `<canvas>` element is assigned an ID "app" (loosy spec, you might not
   want to do this)
4. `<script>` tags must go after the `<canvas>` tag
5. Among the `<script>` tags:
    1. Those that link to three.js should go first (if there is no good reason
       to NOT put them first)
    2. The tag that links to the entry JavaScript source file should go last
    3. Tags must be grouped and separated reasonably, as shown below

```html
<html>
	<head>
		...
	</head>
	<body>
		<canvas id="app"></canvas>

		<!-- three.js -->

		<script src="lib/three.js/build/three.min.js"></script>
		<script src="lib/three.js/examples/js/WebGL.js"></script>
		<script src="lib/three.js/examples/js/controls/OrbitControls.js"></script>

		<!-- Other libs -->

		<script src="lib/three.js-pilot/threejs-pilot.js"></script>
		<script src="lib/TweenJS/tweenjs.min.js"></script>

		<!-- App -->

		<script src="js/app.js"></script>

	</body>
</html>
```

### Entry JavaScript file

#### Overview

The entry JavaScript file, also considered the main JavaScript file, is `app.js`
in this template. Other common names are `index.js` and `main.js`.

#### Structure

##### Global variables' definitions

At the top of the file lie various variable definitions.

The first chunk defines the following:

1. Variables for the 3D scene, the camera, the renderer, and the controls
2. Variables for the meshes, as well as their geometries and materials
3. Variables for helpers and loaders
4. Variables for other things, such as overlaying DOM elements

The second chunk defines variables that will be used as arguments for the scene,
the camera, and/or the renderer.

Below is a code snippet taken from `app.js`.

```javascript
// GLOBALS

let scene, camera, renderer, controls;
let plane, cube, light;
let info;

let canvas = document.querySelector( '#app' );
let canvasWidth, canvasHeight;
let context = canvas.getContext( 'webgl2', { alpha: false } );
```

A full example is also shown below.

```javascript
// GLOBALS

let scene, camera, renderer, controls;
let cube, cubeGeo, cubeMat, wood,
    torusKnot, torusKnotGeo, torusKnotMat, matcap,
    plane, planeGeo, planeMat;
let key, back, point; // Lights
let helper, textureLoader;
let info, exitButton;
let debugging = false;

let canvas = document.querySelector( '#app' );
let canvasWidth, canvasHeight;
let context = canvas.getContext( 'webgl2', { alpha: false } );
```

##### The main `if` structure

Next comes the main `if` structure. It simply goes like this:

```javascript
if ( THREE.WEBGL.isWebGL2Available() ) {

	init();
	animate();

} else {

	document.body.appendChild( THREE.WEBGL.getWebGL2ErrorMessage() );

}
```

It checks whether WebGL is supported in this browser or not.

##### The `init` function

The function `init` does what its name suggests. Simply put, it does things that
should be done before running the animation loop `render`. Things that are done
in `init` can include:

- Loading textures and models
- Composing meshes from geometries and materials
- Adding overlays and creating the loading screen
- Adding controls

##### The `render` function

One main thing that is done in the `render` function is to call the `render`
method of the renderer. Updates are also done in this function. This is the
function that is executed per frame. Often times developers put animations
inside this function as well, but in this template, animations are moved over to
the `animate` function.

```javascript
function render() {

	if ( canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight ) {

		canvasWidth = canvas.clientWidth;
		canvasHeight = canvas.clientHeight;
		onCanvasResize();

	}

	controls.update();

	renderer.render( scene, camera );

}
```

##### The `animate` function

The `animate` function has all the code that animates things in the scene. It is
called after the `init` function has been executed and runs in parallel with the
`render` function. Here is an example of what you can put in the `animate`
function:

```javascript
function animate() {

	createjs.Tween.get( cube.rotation, { loop: true } )
		.set( { x: 0, y: 0, z: 0 } )
		.to( { x: Math.PI * 2, y: Math.PI * 2 }, 1500, createjs.Ease.quadInOut )
		.to( { x: 0, y: 0 }, 0 );

	createjs.Tween.get( cube.scale, { loop: true } )
		.set( { x: 1, y: 1, z: 1 } )
		.to( { x: 1.8, y: 1.8, z: 1.8 }, 750, createjs.Ease.quadIn )
		.to( { x: 1, y: 1, z: 1 }, 750, createjs.Ease.quadOut );

}
```

## Use this template

You can start a project using this repository as a template. Just click
[here][use]. Don't want to click there? Click the green "Use this template"
button, next to the "Clone or download" button. For help, see this [page][help]
in GitHub Help.

Once you've created a new repository from this template, you can:

- Add, delete, and modify existing files
- Use a different license for your project

[help]: https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template

## License

Everything in this repository is licensed under the Creative Commons Zero v1.0 
Universal. A copy of the license is included in the repository (see 
[`LICENSE`](LICENSE)). If you start a new repository using this repository as a
template, feel free to use another license.
