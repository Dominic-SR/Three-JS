import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../Components/Loader'
import {Model as Island} from '../Models/Island'

const Home = () => {
  return (
    <div>
      <Canvas className='h-screen w-full bg-transparent'
        camera={{
          near:0.1,
          far:1000,
        }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
          <Island />
        </Suspense>

      </Canvas>
    </div>
  )
}

export default Home