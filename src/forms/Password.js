import { FormWrapper } from '../components';

export function Password({ password, updateFields }) {
    console.log(password);
    return (
        <FormWrapper title='Create your password'>
            <input type='password' value={password} onChange={e => updateFields({ password: e.target.value })} />
        </FormWrapper>
    )
}