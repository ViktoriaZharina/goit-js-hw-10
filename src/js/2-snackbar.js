import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector("form");
const fieldset = document.querySelector('fieldset')
const textInput = document.querySelector('input[name="delay"]')
const radioInputFulfilled = fieldset.querySelector('input[value="fulfilled"]');
let delay = 0;
textInput.addEventListener("input", (event) => {
    delay = event.currentTarget.value
});
form.addEventListener("submit", event => {
    event.preventDefault();
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (radioInputFulfilled.checked) {
                resolve(`Fulfilled promise in ${delay} ms`)
            } else {
                reject(`Rejected promise in ${delay} ms`)
            }
        }, delay);
    });
    promise
        .then(() => {
            iziToast.success({
                title: 'OK',
                message: `Fulfilled promise in ${delay} ms`,
                position: "topCenter"
            });
        })
        .catch(() => {
            iziToast.error({
                title: 'Error',
                message: `Rejected promise in ${delay} ms`,
                position: "topCenter"
            });
        })
})
    