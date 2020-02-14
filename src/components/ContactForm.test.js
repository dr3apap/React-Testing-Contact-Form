import React from "react";
import {render, fireEvent, waitForElement, wait} from "@testing-library/react";
import ContactForm from "./ContactForm";

test('Form submit and rendered',  ()=>{
const {getByLabelText, getByText} = render(<ContactForm/>)
getByText(/first name/i);
getByLabelText(/first name/i);
getByLabelText(/last name/i);
getByLabelText(/email/i);
getByLabelText(/message/i);
getByText(/last name/i);
getByText(/email/i);
getByText(/message/i);


})


test('Form input accept and submit values entered', async() =>{
  const {getByText, getByLabelText, getByTestId, findByTestId} = render(<ContactForm/>);

const firstNameInput = getByText(/first name/i),
lastNameInput = getByText(/last name/i),
emailInput = getByLabelText(/email/i),
messageInput = getByLabelText(/message/i);



fireEvent.click(getByTestId(/submit/i))

 await wait(() =>{

 getByLabelText(/first name/i)

})
//expect(firstNameElement).toBeInTheDocument();
getByLabelText(/first name/i).value = "firstName"
});
