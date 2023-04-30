import React from "react";
import {default as HeaderFull} from "./Full/Header";

export default function Header({article, section}) {
    return (
        <HeaderFull 
            article = {article} 
            section = {section}
        />
    );
}