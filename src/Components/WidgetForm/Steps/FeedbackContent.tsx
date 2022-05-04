import { ArrowLeft, Camera } from "phosphor-react";
import React, { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import CloseButton from "../../CloseButton";
import ScreenshotButton from "../ScreenshotButton";

interface FeedbackContentProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequest: () => void;
    onFeedbackSent: () => void;
}

function FeedbackContent({
    feedbackType,
    onFeedbackRestartRequest,
    onFeedbackSent,
}: FeedbackContentProps) {
    const [screenshot, setScreenshot] = useState<String | null>(null);
    const [comment, setComment] = useState("");

    const { title, img } = feedbackTypes[feedbackType];

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(screenshot, comment);
        onFeedbackSent();
    };

    return (
        <>
            <header className="">
                <button
                    type="button"
                    className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestartRequest}
                >
                    <ArrowLeft weight="bold" className="h-4 w-4" />
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={img.source} alt={img.alt} className="w-6 h-6" />
                    {title}
                </span>
                <CloseButton />
            </header>
            <form className="my-4 w-full" onSubmit={(e) => handleSubmit(e)}>
                <textarea
                    onChange={({ target }) => setComment(target.value)}
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Me conte com detalhes..."
                />
                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton
                        onScreenshot={setScreenshot}
                        screenshot={screenshot}
                    />
                    <button
                        type="submit"
                        disabled={comment.length <= 5}
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                    >
                        Enviar feed
                    </button>
                </footer>
            </form>
        </>
    );
}

export default FeedbackContent;
