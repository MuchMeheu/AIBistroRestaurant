var slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("carousel-images")[0].getElementsByTagName("img");
  if (n > slides.length - 1) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex].style.display = "block";  
}

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
  document.querySelector('.next').addEventListener('click', () => moveSlide(1));
});

//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

//models/table/scene.gltf


// Scene setup
const scene = new THREE.Scene();

// Camera setup
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 10, 30);

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor(0x000000); // Set the background color to black

renderer.setSize(window.innerWidth, window.innerHeight);

// Append the renderer to the div container
const container = document.getElementById('container3d');
if (container) {
    container.appendChild(renderer.domElement);
    renderer.setSize(container.clientWidth, container.clientHeight);
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
} else {
    console.error('Container div not found');
}

// OrbitControls setup
const controls = new OrbitControls(camera, renderer.domElement);
const orbitCenter = new THREE.Vector3(0, 5, 0);
controls.target.copy(orbitCenter);
controls.autoRotate = true; // Enable auto-rotate
controls.autoRotateSpeed = 1.0; // Adjust the speed as needed
controls.update();

// Light source at the orbit center
const pointLight = new THREE.PointLight(0xffffff, 2, 100);
pointLight.position.copy(orbitCenter);
scene.add(pointLight);

// Ambient light for overall scene illumination
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// GLTF model loading
const loader = new GLTFLoader();
loader.load(
    'models/table/scene.gltf',
    function (gltf) {
        scene.add(gltf.scene);
        controls.update();
    },
    function (xhr) {
        console.log(`${(xhr.loaded / xhr.total * 100)}% loaded`);
    },
    function (error) {
        console.error('An error happened', error);
    }
);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Required for auto-rotation
    renderer.render(scene, camera);
}

animate();
