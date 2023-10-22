"use client"
import React from 'react'
import useLoaderStore from '../stores/loaderStore'
import ThreeDModelViewer from './ThreeDModelViewer'

function Canvas() {

    const { isLoading } = useLoaderStore()

    return (
        <div className="flex justify-center items-center flex-col relative">
            {isLoading ? 
                <div className={`loader absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div> 
            : null }
            <ThreeDModelViewer modelUrl="/MEVoxelArt.glb" />
        </div>
    )
}

export default Canvas

