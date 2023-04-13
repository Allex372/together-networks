import { FormWrapper } from '../components';

export function WhereYouFrom({ location, updateFields }) {
    return (
        <FormWrapper title="I am from">
            <select id="country" name="location" value={location} onChange={e => updateFields({ location: e.target.value })}>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
            </select>
            {/* <input type='text' value={location} onChange={e => updateFields({ location: e.target.value })} /> */}
        </FormWrapper>
    )
}