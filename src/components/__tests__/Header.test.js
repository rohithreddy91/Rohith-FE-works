import { Provider } from 'react-redux';
import { fireEvent, render,screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import appStore from '../../utils/appStore';
import HeaderComponent from '../HeaderComponent';
import '@testing-library/jest-dom';


it("should find the login button on Header Component",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();
 });

 it("should render the header component with the cart items 0 ", ()=>{

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent/>
            </Provider>
        </BrowserRouter>
    );
    const cartItems = screen.getByText(/Cart\(0\)/);
    expect(cartItems).toBeInTheDocument();
 });

it("should render the login button to logout when clicked",()=>{
       render(
        <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name:"login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name:"logout"});
    expect(logoutButton).toBeInTheDocument();

})