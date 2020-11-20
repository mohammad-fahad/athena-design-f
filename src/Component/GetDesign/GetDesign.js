import React from "react";
import { importDeclaration } from "@babel/types";
import "./GetDesign.css";

const GetDesign = () => {
    return (
        <div className="getDesign-part mt-4 pt-4 text-center">
            <h3>Get your design right, right now</h3>
            <small>Be the first know our latest offers and updates!</small>
            <form class="search-wrapper cf">
                <div className="input">
                    <input type="text" placeholder="Enter your email address" required />
                </div>
                <div className="input-btn">
                    <button type="submit">Get Started</button>
                </div>
            </form>
        </div>
    );
};

export default GetDesign;