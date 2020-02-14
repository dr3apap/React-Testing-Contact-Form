import React from "react";
import {render, fireEvent, waitForElement} from "@testing-library/react";
import ContactForm from "./ContactForm";

test('Form submit and rendered',  ()=>{
const {getByLabelText, getByText} = render(<ContactForm/>)
getByText(/first name/i);
// getByLabelText(/first name/i);
// getByLabelText(/last name/i);
// getByLabelText(/email/i);
// getByLabelText(/message/i);
// getByLabelText(/submit/i);
getByText(/last name/i);
getByText(/email/i);
getByText(/message/i);
// getByText(/submit/i);

})


test('Form input accept and submit values entered', async() =>{
  const {getByText, getByLabelText, getByTestId, findByTestId} = render(<ContactForm/>);

const firstNameInput = getByText(/first name/i),
// lastNameInput = getByLabelText(/last name/i),
// emailInput = getByLabelText(/email/i),
// messageInput = getByLabelText(/message/i);
lastNameInput = getByText(/last name/i),
emailInput = getByText(/email/i),
messageInput = getByText(/message/i);



// fireEvent.change(firstNameInput, {target:{value:'Test First Name'}});
// fireEvent.change(lasNameInput, {target:{value:'Test Last Name'}});
// fireEevent.change(emailInput, {target:{value:'Test Email'}});
// fireEevent.change(messageInput, {target:{value:'Test Message'}});

expect(firstNameInput.value).toBe('Test first Name')
expect(lastNameInput.value).toBe('Test last Name');
expect(emailInput.value).toBe('Test email');
expect(messageInput.value).toBe('Test message');

fireEvent.click(getByTextId(/submit/i))

await waitForElement(()=>{

 getByTestId(/firstName/i)
})
expect(firstName).toBeInTheDocument();

});
