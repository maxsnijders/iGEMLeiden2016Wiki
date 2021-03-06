$(document).ready(function(){
  var display = $("#rpm-demo");

  var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, display.width()/display.height(), 0.1, 10000 );

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( display.width(), display.height() );
	display.append( renderer.domElement );

  var loader = new THREE.JSONLoader(); // init the loader util

  // init loading
  loader.load('models/RPM.js', function (geometry) {
    // create a new material
    var material = new THREE.MeshLambertMaterial({ color : '#444', side: THREE.DoubleSide });

    // create a mesh with models geometry and material
    var mesh = new THREE.Mesh(
      geometry,
      material
    );

    mesh.rotation.y = -Math.PI/5;

    scene.add(mesh);

    var ambientLight = new THREE.AmbientLight( 0x555555 );
		scene.add( ambientLight );

		var lights = [];
		lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
		lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
		lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

		lights[ 0 ].position.set( 0, 200, 0 );
		lights[ 1 ].position.set( 100, 200, 100 );
		lights[ 2 ].position.set( - 1000, - 200, - 100 );

		scene.add( lights[ 0 ] );
		scene.add( lights[ 1 ] );
		scene.add( lights[ 2 ] );

    var render = function () {
  		requestAnimationFrame( render );

  		mesh.rotation.x += 0.01;
  		mesh.rotation.y += 0.01;

  		renderer.render(scene, camera);
  	};

  	render();
  });

	//var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	//var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	//var cube = new THREE.Mesh( geometry, material );
	//scene.add( cube );

	camera.position.z = 300;

});
