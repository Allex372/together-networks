import { useEffect } from 'react';
import { FormWrapper } from '../components';

export function Email({ email, updateFields }) {
    let error = false;
    const emailInput = document.getElementById('email');
    function errorHandler() {
        if (emailInput?.value && !emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            error = true;
        } else {
            error = false;
        }

    }
    emailInput?.value && errorHandler();

    useEffect(() => {
        updateFields({ emailError: error });
    }, [error]);

    return (
        <FormWrapper title="Your email adress">
            <input type='email' id='email' value={email} onChange={e => updateFields({ email: e.target.value })} />
        </FormWrapper>
    )
}