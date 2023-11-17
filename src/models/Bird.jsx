import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import birdScene from '../assets/3d/bird.glb'
import { useFrame, useThree } from '@react-three/fiber';

const Bird = ({ isRotating, ...props }) => {
    const { scene, animations } = useGLTF(birdScene)
    const ref = useRef();
    const { actions } = useAnimations(animations, ref)
    const { viewport } = useThree();

    useEffect(() => {
        actions['Take 001'].play();
    }, [actions])

    useFrame(({ clock, camera }, delta) => {
        if (ref.current.position.x > camera.position.x + 80) {
            ref.current.position.x = camera.position.x - 80;
        }
        else {
            ref.current.position.x += 10 * delta;
        }
    })

    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird