import { useState } from 'react';
import { useMultistepForm } from '../../useMultistepForm';
import { ToastContainer, toast } from 'react-toastify';
import { Email, WhereYouFrom, WhoAreYouForm, Age, Password } from '../../forms';
import styles from './formComponent.module.css';
import 'react-toastify/dist/ReactToastify.css';


const InitialData = {
    name: '',
    age: '',
    location: '',
    email: '',
    password: '',
    emailError: false,
}

export function FormComponent() {
    const [data, setData] = useState(InitialData);
    function updateFields(fields) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }
    const { steps, currentStepIndex, step, next, back, isFirstStep, isLastStep } = useMultistepForm([
        <WhoAreYouForm {...data} updateFields={updateFields} />,
        <Age {...data} updateFields={updateFields} />,
        <WhereYouFrom {...data} updateFields={updateFields} />,
        <Email {...data} updateFields={updateFields} />,
        <Password {...data} updateFields={updateFields} />
    ]);

    function onSubmit(e) {
        e.preventDefault();
        if (!isLastStep) return next()

        postData("http://www.mocky.io/v2/5dfcef48310000ee0ed2c281", { answer: 42 }).then((data) => {
            data.errors.map((el) => toast.error(el.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }));
        });
    }

    async function postData(url = "", data = {}) {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }
    return (
        <div className={styles.wrapper}>
            <form onSubmit={onSubmit}>
                {step}
                <div>
                    {!isFirstStep && (
                        <div type="button" onClick={back} className={styles.arrowLeft}>
                        </div>
                    )}
                    <button type="submit" className={styles.btnNext}>{isLastStep ? "Finish" : "Next"}
                        <div className={styles.arrowRight}></div>
                    </button>
                </div>
                <div className={styles.pagination}>
                    {currentStepIndex + 1} / {steps.length}
                </div>
                {data?.emailError === true && <div className={styles.emailValidation}>Email validation error</div>}
            </form>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
        </div>
    )
}