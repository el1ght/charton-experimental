import React from "react"
import Footer from "./Footer";

interface ContentProps {
    children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({
    children
}) => {

    return (
        <main className={`h-full rounded-[30px] overflow-y-auto shadow-inner bg-[#ededed] border border-[#c9c9c9] box main`}>
            {children}
            <Footer />
        </main>
    );
};

export default Content;