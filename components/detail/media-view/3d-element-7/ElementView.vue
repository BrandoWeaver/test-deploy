<template>
  <div
    class="relative w-full overflow-hidden rounded-md shadow-md"
    :style="{ aspectRatio: '16 / 9' }"
  >
    <div
      v-if="isLoading"
      class="absolute inset-0 z-10 flex items-center justify-center bg-gray-200 animate-pulse rounded-md"
    >
      <svg
        class="w-10 h-10 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-4 4 4 4-4V5h-2l-4 4-2-2-4 4z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div
      ref="container"
      class="model-container absolute inset-0 rounded-m"
      :class="{ fullscreen: isFullscreen, zoomed: isFullscreen && isZoomed }"
      @dblclick="onDblClick"
    >
      <div class="absolute top-2 right-2 z-30 hover:cursor-pointer">
        <button
          @click="toggleFullscreen"
          class="bg-white p-1 rounded-full shadow flex items-center gap-1"
        >
          <Icon
            :icon="
              isFullscreen
                ? 'ic:baseline-zoom-in-map'
                : 'material-symbols:zoom-out-map'
            "
            width="24"
            height="24"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Icon } from '@iconify/vue/dist/iconify.js'

definePageMeta({ colorMode: 'light' })

const props = defineProps<{ model_preview: string }>()

// Refs & state
const container = ref<HTMLElement | null>(null)
const isLoading = ref(true)
const isFullscreen = ref(false)
const isZoomed = ref(false)

// THREE.js essentials
let scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  controls: OrbitControls,
  model: THREE.Group | null = null

// Zoom animation vars
let zoomAnimId: number | null = null
let originalCameraZ = 5
const targetZoomInZ = 2

// Rotation velocity for smooth key interaction
const modelVelocity = {
  rotationY: 0,
  rotationX: 0,
}

// -------------------
// Fullscreen toggling
// -------------------
const toggleFullscreen = () => {
  if (!document.fullscreenElement && container.value?.requestFullscreen) {
    container.value.requestFullscreen()
    isFullscreen.value = true
  } else if (document.exitFullscreen) {
    document.exitFullscreen()
    isFullscreen.value = false
  }
}

const onFullscreenChange = () => {
  const fullscreen = !!document.fullscreenElement
  isFullscreen.value = fullscreen

  if (!fullscreen && isZoomed.value) {
    animateZoom(camera.position.z, originalCameraZ)
    isZoomed.value = false
  }
}

watch(isFullscreen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

// -------------
// Zoom control
// -------------
const animateZoom = (fromZ: number, toZ: number, duration = 300) => {
  if (!camera) return

  if (zoomAnimId !== null) cancelAnimationFrame(zoomAnimId)

  const startTime = performance.now()

  const animate = (time: number) => {
    const elapsed = time - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easeInOutQuad =
      progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress

    camera.position.z = fromZ + (toZ - fromZ) * easeInOutQuad
    controls.update()

    if (progress < 1) {
      zoomAnimId = requestAnimationFrame(animate)
    } else {
      zoomAnimId = null
    }
  }

  zoomAnimId = requestAnimationFrame(animate)
}

const onDblClick = () => {
  if (!isFullscreen.value) return

  if (!isZoomed.value) {
    originalCameraZ = camera.position.z
    animateZoom(camera.position.z, targetZoomInZ)
  } else {
    animateZoom(camera.position.z, originalCameraZ)
  }

  isZoomed.value = !isZoomed.value
}

// ------------------
// Window & resize
// ------------------
const onWindowResize = () => {
  if (!camera || !renderer || !container.value) return

  const width = container.value.clientWidth
  const height = container.value.clientHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

// -----------------
// Zoom to fit model
// -----------------
const zoomToModel = () => {
  if (!model || !camera) return

  const box = new THREE.Box3().setFromObject(model)
  const size = new THREE.Vector3()
  box.getSize(size)
  const center = new THREE.Vector3()
  box.getCenter(center)

  const maxDim = Math.max(size.x, size.y, size.z)
  const fov = (camera.fov * Math.PI) / 180
  let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.5

  camera.position.copy(center)
  camera.position.z += cameraZ

  controls.target.copy(center)
  controls.update()
}

// -----------------
// Key Handlers
// -----------------
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isFullscreen.value) {
    toggleFullscreen()
  }

  if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
    event.preventDefault()
  }

  const rotateSpeed = 0.02
  switch (event.key) {
    case 'ArrowLeft':
      modelVelocity.rotationY = rotateSpeed
      break
    case 'ArrowRight':
      modelVelocity.rotationY = -rotateSpeed
      break
    case 'ArrowUp':
      modelVelocity.rotationX = rotateSpeed
      break
    case 'ArrowDown':
      modelVelocity.rotationX = -rotateSpeed
      break
  }
}

const handleKeyUp = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'ArrowLeft':
    case 'ArrowRight':
      modelVelocity.rotationY = 0
      break
    case 'ArrowUp':
    case 'ArrowDown':
      modelVelocity.rotationX = 0
      break
  }
}

// -----------------
// Init & Animate
// -----------------
onMounted(() => {
  if (!container.value) return

  const width = container.value.clientWidth
  const height = container.value.clientHeight

  // Scene + camera + renderer setup
  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.z = 5

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setClearColor(0x000000, 0)
  renderer.setSize(width, height)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.3

  container.value.appendChild(renderer.domElement)

  // Controls setup
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.enableZoom = true
  controls.minDistance = 2
  controls.maxDistance = 10

  // Lights
  scene.add(new THREE.AmbientLight(0xffffff, 1.1))
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8)
  dirLight.position.set(5, 5, 5)
  scene.add(dirLight)
  scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 0.3))

  // Load model
  const loader = new GLTFLoader()
  loader.load(props.model_preview, (gltf) => {
    model = gltf.scene

    // Center + scale model
    const box = new THREE.Box3().setFromObject(model)
    const size = new THREE.Vector3()
    box.getSize(size)
    const center = new THREE.Vector3()
    box.getCenter(center)

    const scale = 2 / size.y
    model.scale.set(scale, scale, scale)
    model.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 8)
    model.position.sub(center)

    // Enable shadows on mesh children
    model.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh
        mesh.castShadow = true
        mesh.receiveShadow = true
      }
    })

    scene.add(model)
    zoomToModel()
    isLoading.value = false
  })

  // Event listeners
  renderer.domElement.addEventListener('dblclick', zoomToModel)
  document.addEventListener('fullscreenchange', onFullscreenChange)
  window.addEventListener('resize', onWindowResize)
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keyup', handleKeyUp)

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate)

    controls.update()
    renderer.render(scene, camera)

    if (model) {
      model.rotation.y += modelVelocity.rotationY
      model.rotation.x += modelVelocity.rotationX

      modelVelocity.rotationY *= 0.9
      modelVelocity.rotationX *= 0.9
    }
  }
  animate()
})

onUnmounted(() => {
  document.removeEventListener('fullscreenchange', onFullscreenChange)
  window.removeEventListener('resize', onWindowResize)
  window.removeEventListener('keydown', handleKeyDown)
  window.removeEventListener('keyup', handleKeyUp)

  renderer.dispose()
  controls.dispose()
})
</script>

<style scoped>
.model-container {
  width: 100%;
  height: 100%;
}

.model-container.fullscreen {
  position: fixed !important;
  top: 0;
  left: 0;
  background-color: white;
  width: 100vw !important;
  height: 100vh !important;
  z-index: 9999;
  border-radius: 0 !important;
}
</style>
