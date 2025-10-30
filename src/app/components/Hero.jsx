'use client'

import { useEffect, useRef } from "react";

const Hero = () => {
    let videoRef = useRef()

    useEffect(() => {
      if(videoRef.current){
        videoRef.current.playbackRate = 2; 
      }
    },[])
    return (
        <section 
            id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img draggable="false" src="/title.png" alt="Macbook Title" />
                <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>
                <button> Buy</button>
                <p>From $1599 or $133/mo for 12 months</p>
            </div> 
        </section>
    );
};

export default Hero;