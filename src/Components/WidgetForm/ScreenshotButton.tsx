import React, { useState } from "react";

import html2canvas from "html2canvas";

import { Camera, Trash } from "phosphor-react";
import Loading from "../Loading";

interface ScreenshotButtonProps {
    screenshot: String | null;
    onScreenshot: (screenshot: String | null) => void;
}

function ScreenshotButton({ onScreenshot, screenshot }: ScreenshotButtonProps) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);
    const handleScreenshot = async () => {
        setIsTakingScreenshot(true);

        const canvas = await html2canvas(document.querySelector("html")!);
        const base64img = canvas.toDataURL("image/png");

        onScreenshot(base64img);
        setIsTakingScreenshot(false);
    };
    if (screenshot)
        return (
            <button
                type="button"
                className="p1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
                style={{
                    backgroundImage: `url(${screenshot})`,
                }}
                onClick={() => onScreenshot(null)}
            >
                <Trash weight="fill" />
            </button>
        );
    return (
        <button
            type="button"
            onClick={handleScreenshot}
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:ring-brand-500"
        >
            {isTakingScreenshot ? (
                <Loading />
            ) : (
                <Camera className="w-6 h-6 text-zinc-100" />
            )}
        </button>
    );
}

export default ScreenshotButton;
