import Navbar from "../app/Navbar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/dom";

// test if Navbar renders on the page
test("Navbar renders", () => {
  render(<Navbar />);
  // expect the Navbar to be in the document

   
  
});
