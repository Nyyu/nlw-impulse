import React, { useState } from "react";

import bugImgURL from "../../Assets/bug.svg";
import ideaImgURL from "../../Assets/idea.svg";
import thoughtImgURL from "../../Assets/thought.svg";
import FeedbackTypeStep from "./Steps/FeedbackTypeStep";
import FeedbackContent from "./Steps/FeedbackContent";
import FeedbackSuccess from "./Steps/FeedbackSuccess";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        img: {
            source: bugImgURL,
            alt: "image de um inseto",
        },
    },
    IDEA: {
        title: "Ideia",
        img: {
            source: ideaImgURL,
            alt: "image de uma lampada",
        },
    },
    OTHER: {
        title: "Outro",
        img: {
            source: thoughtImgURL,
            alt: "image de um balão",
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    const handleRestartFeedback = () => {
        setFeedbackType(null);
        setFeedbackSent(false);
    };

    return (
        <>
            <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
                {feedbackSent ? (
                    <FeedbackSuccess
                        onFeedbackRestartRequested={handleRestartFeedback}
                    />
                ) : (
                    <>
                        {!feedbackType ? (
                            <FeedbackTypeStep
                                onFeedbackTypeChanged={setFeedbackType}
                            />
                        ) : (
                            <FeedbackContent
                                feedbackType={feedbackType}
                                onFeedbackRestartRequest={handleRestartFeedback}
                                onFeedbackSent={() => setFeedbackSent(true)}
                            />
                        )}
                    </>
                )}
                <footer className="text-xs text-neutral-400">
                    Feito com &hearts; por{" "}
                    <a href="#" className="underline-offset-2 underline">
                        Nicolas
                    </a>
                </footer>
            </div>
        </>
    );
}

export default WidgetForm;
