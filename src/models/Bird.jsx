import React from 'react'
import { useGLTF } from '@react-three/drei'
import birdScene from '../assets/3d/bird.glb'

const Bird = (props) => {
    const { scene, animations } = useGLTF(birdScene)

    return (
        <mesh {...props}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird