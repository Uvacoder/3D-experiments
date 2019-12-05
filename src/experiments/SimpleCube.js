import React, { useState, useRef } from 'react'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Canvas, extend, useThree, useRender } from 'react-three-fiber'
import { useSpring, a } from 'react-spring/three'

extend({ OrbitControls })

const Controls = () => {
	const orbitRef = useRef()
	const { camera, gl } = useThree()

	useRender(() => {
		orbitRef.current.update()
	})

	return (
		<orbitControls
			autoRotate
			maxPolarAngle={Math.PI / 3}
			minPolarAngle={Math.PI / 3}
			args={[camera, gl.domElement]}
			ref={orbitRef}
		/>
	)
}

const Box = () => {
	const [hovered, setHover] = useState(false)
	const [active, setActive] = useState(false)
	const props = useSpring({
		scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
		color: hovered ? 'skyblue' : 'tomato',
	})

	return (
		<a.mesh
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}
			onClick={() => setActive(!active)}
			scale={props.scale}
			castShadow
		>
			<ambientLight />
			<spotLight position={[0, 5, 10]} penumbra={1} castShadow />
			<boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
			<a.meshPhysicalMaterial attach='material' color={props.color} />
		</a.mesh>
	)
}

const SimpleCube = () => (
	<Canvas
		camera={{ position: [0, 0, 5] }}
		onCreated={({ gl }) => {
			gl.shadowMap.enabled = true
			gl.shadowMap.type = THREE.PCFSoftShadowMap
		}}
	>
		<fog attach='fog' args={['white', 5, 15]} />
		<Controls />
		<Box />
	</Canvas>
)

export default SimpleCube
