const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	1,
	10000
);
camera.position.z = 300;

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("particle-container").appendChild(renderer.domElement);

// Создаем геометрию частиц
const particleCount = 50000;
const positions = [];
const colors = [];

for (let i = 0; i < particleCount; i++) {
	const x = (Math.random() - 0.5) * 100;
	const y = (Math.random() - 0.5) * 100;
	const z = (Math.random() - 0.5) * 100;

	positions.push(x, y, z);

	// Цвета частиц
	const color = new THREE.Color(Math.random(), Math.random(), Math.random());
	colors.push(color.r, color.g, color.b);
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute(
	"position",
	new THREE.Float32BufferAttribute(positions, 3)
);
geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

// Материал с использованием шейдера
const material = new THREE.ShaderMaterial({
	vertexShader: document.getElementById("vertexShader").textContent,
	fragmentShader: document.getElementById("fragmentShader").textContent,
	uniforms: { uTime: { value: performance.now() } },
	vertexColors: true,
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

// Анимация
function animate() {
	requestAnimationFrame(animate);

	material.uniforms.uTime.value += performance.now() * 10;

	renderer.render(scene, camera);
}
animate();
