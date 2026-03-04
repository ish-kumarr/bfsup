"use client";

import { useEffect, useState } from "react";

export function ProgressiveBlur() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            {/* Bottom Progressive Blur */}
            <div
                className="pointer-events-none fixed inset-x-0 bottom-0 w-full z-[50] select-none h-[150px]"
                style={{
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    maskImage: "linear-gradient(to top, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)",
                    WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)",
                    background: "linear-gradient(to top, rgba(10,10,10,1) 10%, rgba(10,10,10,0) 100%)"
                }}
            />
        </>
    );
}
