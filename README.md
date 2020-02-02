# three.js-skeleton

[use]: https://github.com/you-create/three.js-skeleton/generate

A basic template for small three.js experiments. An example is being built,
stand by.

Looks good? [Use this template][use].

## Table of Content

1. [Aims](#aims)
2. [Details](#details)
    1. [Introduction and Overview](#introduction-and-overview)
    2. [Directory structure](#directory-structure)
        1. [Overview](#overview)
        2. [Sub-directories](#sub-directories)
        3. [General, single-page documents](#general-single-page-documents)
        4. [Additional files](#additional-files)
    3. [Entry HTML file](#entry-html-file)
        1. [Overview](#overview-1)
        2. [Structure](#structure)
    4. [Entry JavaScript file](#entry-javascript-file)
        1. [Overview](#overview-2)
        2. [Structure](#structure-1)
            1. [Global variables' definitions](#global-variables-definitions)
            2. [The main if structure](#the-main-if-structure)
            3. [The `init` function](#the-init-function)
            4. [The `render` function](#the-render-function)
            5. [The `animate` function](#the-animate-function)
3. [Use this template](#use-this-template)
4. [License](#license)

## Aims

- Open
- Readable
- Maintainable

## Details

### Introduction and Overview

This is a template that is designed to best suit small three.js experiments. It
aims to be **open**, **readable**, and **maintainable**.

- **Open**: You can create new repositories from this template and you can use
  a different license for those repos
- **Readable**: Code readability is encouraged
- **Maintainable**: Structuring is done in such a way that makes it quick to
  find and fix things

If you use this template, it is important that you know how this template is
designed. Please read on.

### Directory structure

#### Overview

- `index.html`: The main HTML file, the entry point of the web page
- `css/`: Contains CSS source files
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

Directories are a great way to group things. It is important that you create
sub-directories to group files in `css/`, `js/`, `lib/`, and sub-directories of
`assets/`. You are encouraged to create directories to group files and name
those directories in the way that you find comfortable to work with. Haven't
found yourself a good way to manage and name directories? Here are a few
suggestions:

- `css/` and `js/`: If there are only a few source files and they don't fit well
  into different distinct categories, you don't have to create sub-directories
- `lib/`: Each library should have its own dedicated directory, even when it has
  only one file
- `assets/textures/`: Each set of maps that define a different material should
  be in its own distinct directory
- `assets/cube-maps/`: Similar to `assets/textures/`
- `assets/fonts/`: Each typeface (which can contain many individual fonts)
  should be in its own directory
- `assets/img/`, `assets/videos/`, `assets/models/`: If there are only a small
  number of files and they don't fit well into different distinct categories,
  you don't have to create sub-directories

> An example project is being built and promises to demonstrate good directory
management according to these suggestions.

#### General, single-page documents

These files usually appear in open-source projects, though they don't have to.
But when they do, they must be placed at the root of the project directory.

- `README.md`: A descriptive document written in Markdown that describes the
  project
- `LICENSE`: A copy of the project's license

Other files that would fit into this category include `CONTRIBUTING.md` and
`AUTHORS`.

#### Additional files

These files appear in the template, but that's about it. You may or may not need
these files depending on your needs. Configuration files like these must be
placed at the root of the project directory.

- `.gitignore`: Git ignore file
- `.eslintrc.js`: ESLint configuration file
- `.editorconfig`: EditorConfig file

### Entry HTML file

#### Overview

The entry HTML file is and should be `index.html`. It appears at the root of the
directory structure. It contains a `<canvas>` element, as well as links to
JavaScript code that does things to that canvas.

#### Structure

1. The HTML document's Head (`<head>`) contains `<meta>` tags, the `<title>`
   tag, and links to stylesheets.
2. The HTML document's Body (`<body>`) contains a `<canvas>` tag where the
   three.js experiment takes place, followed by `<script>` tags that define the
   JavaScript code that does things to the DOM, the canvas, etc.
3. You should order the tags in such a way that makes your three.js app works,
   and that makes it easy for you to look at without getting overwhelmed,
   because there might be a lot of `<script>` tags. Adding blank lines and
   comments is recommended to separate the `<script>` tags.

Suggested order for `<script>` tags:

1. Polyfills
2. Source files from `three.js`
3. Other libraries' source files
4. Your three.js app's source files
5. Analytics & other JavaScript code

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
