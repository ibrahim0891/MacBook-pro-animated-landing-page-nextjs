"use client";

import clsx from "clsx";
 
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import MacbookModel14 from "./models/Macbook-14";
import StudioLights from "./three/StudioLights";
import ModelSwitcher from "./three/ModelSwitcher";
import { useMediaQuery } from "react-responsive";
import useMacbookStore from "../store";

const ProductViewer = () => {
    const { color, scale, setColor, setScale } = useMacbookStore();
    const isMobile = useMediaQuery({ query : '(max-width : 1024px)' });
    return (
        <section id='product-viewer'>
            <h2 className="text-center">Take a closer look</h2>
            <div className='controls'>
                <p className='info'>
                    {" "}
                    Macbook Pro {scale == 0.06 ? '14"' : '16"'} in Space black
                </p>
                <div className='flex-center gap-5 mt-5'>
                    <div className='color-control'>
                        <div
                            onClick={() => setColor("#adb5bd")}
                            className={clsx(
                                "bg-neutral-300",
                                color === "#adb5bd" && "active"
                            )}
                        ></div>
                        <div
                            onClick={() => setColor("#2e2c2e")}
                            className={clsx(
                                "bg-neutral-900",
                                color === "#2e2c2e" && "active"
                            )}
                        ></div>
                    </div>
                    <div className='size-control'>
                        <div
                            onClick={() => setScale(0.06)}
                            className={clsx(
                                scale === 0.06
                                    ? "bg-white text-black"
                                    : "bg-transparent text-white"
                            )}
                        >
                            <p> 14"</p>
                        </div>
                        <div
                            onClick={() => setScale(0.08)}
                            className={clsx(
                                scale === 0.08
                                    ? "bg-white text-black"
                                    : "bg-transparent text-white"
                            )}
                        >
                            <p> 16"</p>
                        </div>
                    </div>
                </div>
            </div>
            <Canvas id='canvas'>
              <StudioLights/>
                {/* <MacbookModel14 color={color} scale={scale} /> */}
                <ModelSwitcher isMobile={isMobile} scale={isMobile ? scale - 0.03 : scale} />
            </Canvas>
        </section>
    );
};

export default ProductViewer;
