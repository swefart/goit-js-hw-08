import {save, load, remove} from "./storage"
import throttle from "lodash.throttle"

const STORAGE_KEY = 'feedback-form-state';

let formData = {};
let data = load(STORAGE_KEY)


const formEl = document.querySelector('form')

formEl.addEventListener('input', throttle(foo, 500))
document.addEventListener("DOMContentLoaded", setDataToForm())
formEl.addEventListener('submit', submitForm)


function foo(e) {  
  formData[e.target.name] = e.target.value
  save(STORAGE_KEY, formData)
}

function setDataToForm() {
    if (!data) return 
    const { email = "", message = "" } = data;
    formData = data;
    formEl.elements.email.value = email;
    formEl.elements.message.value = message;
}

function submitForm(e) {
    e.preventDefault()
    remove(STORAGE_KEY)
    formEl.reset()
    console.log(formData);
}

