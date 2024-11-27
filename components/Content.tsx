import React from "react"
import Footer from "./Footer";
import {bindThemeParamsCssVars} from "@telegram-apps/sdk";

bindThemeParamsCssVars

interface ContentProps {
    children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({
    children
}) => {

    return (
        <main className={`h-full rounded-[30px] overflow-y-auto shadow-inner bg-[#eee] backdrop-blur-md border border-[#D6D6D6] box main `}>
            {children}
        </main>
    );
};

export default Content;