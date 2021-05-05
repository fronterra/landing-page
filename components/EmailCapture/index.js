import React from 'react';
import { TextInput, FormButton, FormContainer } from './EmailCaptureElements';
import { useEmailCapture } from './useEmailCapture';

const EmailCapture = () => {
    const [email, updateEmail, submitEmail] = useEmailCapture();
    return (
        <>
            <TextInput placeholder="Email" onChange={updateEmail} value={email}/>
            <FormButton type="button" onClick={() => submitEmail()}>
                Submit
            </FormButton>
        </>        
    );
};

export default EmailCapture;