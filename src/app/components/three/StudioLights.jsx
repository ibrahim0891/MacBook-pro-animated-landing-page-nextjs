import { Environment, Lightformer } from "@react-three/drei";
import React from "react";

const StudioLights = () => {
    return (
        <group>
            <Environment resolution={256}>
                <group>
                    <Lightformer
                        scale={10}
                        intensity={10}
                        position={[-10, 5, -5]}
                        rotation-y={Math.PI / 2}
                    />
                    <Lightformer
                        form={"rect"}
                        scale={10}
                        intensity={10}
                        position={[10, 0, 1]}
                        rotation-y={Math.PI / 2}
                    />
                </group>
            </Environment>
            <spotLight angle={0.15} position={[-2,10,5]} decay={0} intensity={Math.PI * 0.2} />
            <spotLight angle={0.15} position={[0 , -25 ,5]} decay={0} intensity={Math.PI * 0.2} />
            <spotLight angle={0.15} position={[0 , 15 ,5]} decay={0.1} intensity={Math.PI * 0.1} />
        </group>
    );
};

export default StudioLights;
