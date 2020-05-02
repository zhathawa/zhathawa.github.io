document.addEventListener("DOMContentLoaded", earthBby);

function earthBby() {

  async function loadTexture(type, file) {
    return new Promise(res => {
      if (type == 'texture') {
        var tex = new THREE.TextureLoader().load(file);
        res(tex);
      }
      else if (type == 'enviro'){
        var loader = new THREE.CubeTextureLoader();
        var mapArray = [];
        for (var i = 0; i < 6; i++) {
          mapArray.push(file);
        }

        var textureCube = loader.load(mapArray);
        res(textureCube);
      }
    });
  }

  var earthTextures = {
    bumpMapColor: "js/tex/bumpMapColor.jpg",
    bumpMapGray: "js/tex/bumpMapGray.jpg",
    background: "js/tex/da_Universe.jpg",
    earthLights: "js/tex/earth_lights_lrg.jpg",
    landOceanIce: "js/tex/land_ocean_ice_2048.jpg",
    deepColors: "js/tex/world.200412.3x5400x2700.jpg",
    topoBathy: "js/tex/world.topo.bathy.200406.3x5400x2700.jpg"
  };

  Object.freeze(earthTextures);

  var texture = loadTexture('texture', earthTextures.topoBathy);
  var bumpMap = loadTexture('texture', earthTextures.bumpMapGray);
  //var enviro = loadTexture('enviro', earthTextures.background);
  // var canvasTex = loadTexture('texture', earthTextures.background);

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

  camera.position.set(0, 0, 6);

  var renderer = new THREE.WebGLRenderer({antialias:true, canvas: document.querySelector("#canvas"), alpha: true});

  renderer.setClearColor("#000000", 0);
  renderer.setSize(window.innerWidth, window.innerHeight);


  var geometry = new THREE.SphereGeometry(2.5, 32, 16);

  var pms = Promise.all([texture, bumpMap]).then(textures => {
    var tex = textures[0];
    var bmap = textures[1];

    var material = new THREE.MeshPhongMaterial({map: tex, bumpMap: bmap, bumpScale: 1});
    var earthMesh = new THREE.Mesh(geometry, material);
    earthMesh.rotation.x = Math.PI * 23.4 / 180;
    scene.add(earthMesh);
    scene.add(new THREE.AmbientLight(0xffffff));

    var mainLight = new THREE.PointLight(0xffffff, 1, 100, 2);
    mainLight.position.set(10, 10, 10);
    scene.add(mainLight);

    var star;
    var sMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
    var starMesh;

    function getPosition() {
      return (Math.random() * 2 * camera.position.z) - camera.position.z;
    }

    for (var i = 0; i < 100; i++) {
      star = new THREE.CircleGeometry(.05, 10);
      starMesh = new THREE.Mesh(star, sMaterial);
      starMesh.position.set(getPosition(), getPosition(), 0);
      scene.add(starMesh);
    }

    function animate() {
      requestAnimationFrame(animate);
     earthMesh.rotation.y += 0.001;
      renderer.render(scene, camera);
    }

    animate();
  });

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth/ window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
