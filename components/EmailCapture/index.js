import React from 'react';
import { TextInput, FormButton, FormContainer } from './EmailCaptureElements';
import { useEmailCapture } from './useEmailCapture';

const EmailCapture = () => {
    const [email, updateEmail, submitEmail] = useEmailCapture();
    return (
        <>
            <FormContainer name="contact" action="/success" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <TextInput type="email" name="email" placeholder="Email" onChange={updateEmail} value={email}/>
                <FormButton type="submit">
                    Send
                </FormButton>                
            </FormContainer>

        </>        
    );
};

export default EmailCapture;