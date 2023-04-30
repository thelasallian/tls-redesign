import React from "react";
import {default as HeaderFull} from "./Full/Header";
import {default as HeaderMobile} from "./Mobile/Header";

export default function Header({article, section}) {
    return (
        <HeaderMobile 
            article = {article} 
            section = {section}
        />
    );
}