import React from 'react';
import { EmailInput, FormButton, FormContainer } from './StyledComponents';
import { useEmailCapture } from './useEmailCapture';

const EmailCapture = () => {
    
    /**
     * TODO: connect `useEmailCapture` hook to `data-netlify` form submission flow.
     * They have an api specifically for handling controlled inputs and 
     * stateful components.
     */
    const [email, updateEmail, submitEmail] = useEmailCapture();

    return (
        <>
            <FormContainer name="contact" action="/success" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <EmailInput type="email" name="email" placeholder="Email" onChange={updateEmail} value={email}/>
                <FormButton type="submit">
                    Send
                </FormButton>
            </FormContainer>
        </>        
    );
};

export default EmailCapture;