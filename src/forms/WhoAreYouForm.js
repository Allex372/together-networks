import { FormWrapper } from '../components';
import './formStyles.module.css';

export function WhoAreYouForm({ name, updateFields }) {
    return (
        <FormWrapper title='Who are you?'>
            <select name="location" value={name} onChange={e => updateFields({ name: e.target.value })}>
                <option value="developer">Developer</option>
                <option value="enginner">Enginner</option>
                <option value="qa">QA</option>
            </select>
            {/* <input className={styles.inputStyle} type='text' value={name} onChange={e => updateFields({ name: e.target.value })} /> */}
        </FormWrapper>
    )
}