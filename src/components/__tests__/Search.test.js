import BodyComponent from "../BodyComponent";
import { render,screen } from "@testing-library/react";
import SearchComponent from "../SearchComponent";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(()=>Promise.resolve({
    json:()=>Promise.resolve(MOCK_DATA)
}));


it("should Search for the cards on body component",()=>{



    render(
    <Provider store={appStore}>
    <SearchComponent/>,
    <BodyComponent/>
    </Provider>
);


const inputBox = screen.getByRole("textbox");
expect(inputBox).toBeInTheDocument();



});