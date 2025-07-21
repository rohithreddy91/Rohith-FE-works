import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

describe("Contact Component",()=>{
it("should render the contact componenet",()=>{
    render(<Contact/>)

    const heading =screen.getByRole("heading");

    expect(heading).toBeInTheDocument();

});

it("should render the submit button on contact  component",()=>{
    render(<Contact/>)
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();

});

it("shoould render the input fileds in the contact page",()=>{
    render(<Contact/>);

    const inputFields = screen.getAllByRole("textbox");
    expect(inputFields.length).toBe(2);
});

it("should render the input fields with the placeholder text",()=>{
    render(<Contact/>);

    const inputText = screen.getByPlaceholderText("Name");
    expect(inputText).toBeInTheDocument();
});
});