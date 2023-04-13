import { FormWrapper } from '../components';
export function Age({ age, updateFields }) {
    return (
        <FormWrapper title="What is your age?">
            <input type='text' value={age} onChange={e => updateFields({ age: e.target.value })} />
        </FormWrapper>
    )
}