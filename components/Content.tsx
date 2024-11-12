import React from "react"
import Footer from "./Footer";

interface ContentProps {
    children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({
    children
}) => {

    return (
        <main className={`h-full rounded-[30px] overflow-y-auto shadow-inner bg-[#8C8C8C]/[.50] backdrop-blur-md border border-[#D6D6D6] box main`}>
            {children}
        </main>
    );
};

export default Content;