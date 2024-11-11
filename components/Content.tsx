import React from "react"
import Footer from "./Footer";

interface ContentProps {
    children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({
    children
}) => {

    return (
        <main className={`section-bg h-full rounded-[30px] overflow-y-auto shadow-inner border border-[#c9c9c9] box main`}>
            {children}
        </main>
    );
};

export default Content;