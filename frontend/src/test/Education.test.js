import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Education from "../landing_page/home/Education";

describe( 'Education Component', () => {
    test('renders Education image', () => {
        render(<Education />);
        const educationImage = screen.getByAltText("Education Image");
        expect(educationImage).toBeInTheDocument();
        expect(educationImage).toHaveAttribute("src", 'media/images/education.svg');
    })
})