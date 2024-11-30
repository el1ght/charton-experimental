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
        <main className={`h-full overflow-y-auto box main text-color rounded-b-[60px]`}>
            {children}
        </main>
    );
};

export default Content;