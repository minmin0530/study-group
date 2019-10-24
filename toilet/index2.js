window.addEventListener('DOMContentLoaded', init);

function init() {
  const width = 960;
  const height = 540;

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  // シーンを作成
  const scene = new THREE.Scene();
  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height);
  camera.position.set(2.5, 2.5, 10);
  camera.lookAt(new THREE.Vector3(2.5, 2.5, 0));
  // 床を作成
  const meshFloor = new THREE.Mesh(
    new THREE.BoxGeometry(2000, 0.1, 2000),
    new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0.0 })
  );
  scene.add(meshFloor);

  const boxes = [];
  const rx = [];
  const ry = [];
  const rz = [];
  
  for (let y = 0; y < 100; ++y) {
    for (let x = 0; x < 100; ++x) {
      // オブジェクトを作成
    const meshKnot = new THREE.Mesh(
      new THREE.BoxGeometry(0.05, 0.05, 0.05),
      new THREE.MeshStandardMaterial({ color: 0xaa0000, roughness: 0.0 })
    );
    meshKnot.position.set(x * 0.05, 0.05 * y, 0);
    scene.add(meshKnot);
    boxes.push(meshKnot);
    rx.push(Math.random() * 0.01);
    ry.push(Math.random() * 0.01);
    rz.push(Math.random() * 0.01);
  }
}
  // 点光源を作成
  // new THREE.PointLight(色, 光の強さ, 距離, 光の減衰率)
  const light = new THREE.PointLight(0xffffff, 2, 50, 1.0);
  scene.add(light);
  // 照明を可視化するヘルパー
  const lightHelper = new THREE.PointLightHelper(light);
//  scene.add(lightHelper);
  tick();
  // 毎フレーム時に実行されるループイベントです
  function tick() {
    // レンダリング
    renderer.render(scene, camera);

    for (let l = 0; l < 10000; ++l) {
      boxes[l].rotation.x += rx[l];
      boxes[l].rotation.y += ry[l];
      boxes[l].rotation.z += rz[l];
    }

    // 照明の位置を更新
    const t = Date.now() / 500;
    const r = 10.0;
    const lx = r * Math.cos(t);
    const lz = r * Math.sin(t);
    const ly = 6.0 + 5.0 * Math.sin(t / 3.0);
    light.position.set(2.5, 2.5, 5);//lx, ly, lz);
    light.lookAt(new THREE.Vector3(0, 0, 0));
    requestAnimationFrame(tick);
  }
}
