"use client"
import { useEffect, useState, Suspense  } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { OrbitControls } from '@react-three/drei';
import useLoaderStore from '../stores/loaderStore';

type ModelProps = {
  url: string;
};

const Model: React.FC<ModelProps> = ({ url }) => {
  const [model, setModel] = useState<THREE.Group | null>(null);
  const { isLoading, setIsLoading } = useLoaderStore();

  useEffect(() => {
    let isCancelled = false;
    const loader = new GLTFLoader();

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/examples/jsm/libs/draco/');
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      url,
      (gltf) => {
        if (!isCancelled) {
          setModel(gltf.scene);
          setIsLoading(false);
        }
      },
      (xhr) => {
        if(!isLoading) setIsLoading(true);
        console.log(`${(xhr.loaded / xhr.total) * 100} % loaded`);
      },
      (error) => {
        console.log('An error happened:', error);
      },
    );

    return () => {
      isCancelled = true;
    };
  }, [url]);

  return model ? <primitive object={model} position={[-0.9, -0.5, -0.4]} /> : null;
};

type ThreeDModelViewerProps = {
  modelUrl: string;
};

const ThreeDModelViewer: React.FC<ThreeDModelViewerProps> = ({ modelUrl }) => {
  return (
    <div className='model-canvas'>
      <Canvas camera={{ position: [-5, 6, 5], fov: 60 }}>
        <ambientLight />
        {/* <directionalLight position={[0, 10, 5]} intensity={0.7} /> */}
        <Suspense fallback={<div className='loader'></div>}>
          <Model url={modelUrl} />
        </Suspense>
        <OrbitControls target={[0, 0, 0]} autoRotate/>
      </Canvas>
    </div>
  );
};

export default ThreeDModelViewer;
