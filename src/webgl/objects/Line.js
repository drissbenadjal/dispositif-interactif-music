import * as THREE from "three";
import AudioController from "../../utils/AudioController";

export default class Line {
  constructor() {
    this.colors = [
      0x9900cc, 0x8100e6, 0x6800ff, 0x4e00ff, 0x3500ff, 0x1b00ff, 0x0200ff, 0x0066e6, 0x00cccc, 0x00ffcc
    ];
    

    this.group = new THREE.Group();

    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshNormalMaterial();

    this.materials = [];

    this.colors.forEach((color) => {
      const material = new THREE.MeshBasicMaterial({
        color: color,
      });

      this.materials.push(material);
    });

    const MODULO = Math.round(256 / this.colors.length);
    this.SPACING = 1.5;

    // this.mesh = new THREE.Mesh(this.geometry, this.material);

    let n = -1;

    for (let i = 0; i < 256; i++) {
      if (i % MODULO === 0) {
        n++;
      }

      const mesh = new THREE.Mesh(this.geometry, this.materials[n]);

      mesh.position.x = i * this.SPACING;

      this.group.add(mesh);
    }

    this.group.position.set((-256 * this.SPACING) / 2, 0, 0);
  }

  tick() {
    for (let i = 0; i < this.group.children.length; i++) {
      this.group.children[i].scale.y = AudioController.fdata[i];
    }
  }
}
