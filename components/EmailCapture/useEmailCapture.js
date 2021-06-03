import { useState } from "react"

/**
 * 
 * TODO: Update useEmailCapture hook to handle email form submissions 
 * with AJAX, avoiding page defaults and redirects.
 * 
 */

export const useEmailCapture = () => {
    const [email, setEmail] = useState("");
    const [successMessage, setSuccessMessage] = useState(null);
    const updateEmail = (e) => setEmail(e.value);
    const submitEmail = () => {
        resetInputField();
        updateSuccessMessage("Your email has been submitted successfully!");
    };
    const updateSuccessMessage = (message) => {
        setSuccessMessage({
            message,
            callback: () => {
                setSuccessMessage(null);
            }
        })
    }
    const resetInputField = () => setEmail("");
    return [email, updateEmail, submitEmail, successMessage];
}