const validate = (element, formdata) =>{
    let error = [true, ''];
    if(element.validation.email){
        const valid = element.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null;
        const message = `${!valid ? 'Invalid Email':''}`;
        error = valid ? error : [valid, message];
    }
    if(element.validation.password){
        const valid = element.value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/) !== null;
        const message = `${!valid ? 'Invalid Password':''}`;
        error = valid ? error : [valid, message];
    }    
    if(element.validation.required){
        const valid = element.value.trim()!== '';
        const message = `${!valid ? 'This field is required':''}`;
        error = valid ? error : [valid, message];
    }
    return error;
}
export const updateInput = (element, formdata, formType)=>{
   const oldFormData = {
       ...formdata
   }
   const oldElement = {
       ...oldFormData[element.id]
   }
   oldElement.value = element.event.target.value;
   if(element.blur){
       const validateElement = validate(oldElement, formdata);
       oldElement.valid = validateElement[0];
       oldElement.validationMsg = validateElement[1];
   }
   oldElement.touched = element.blur;
   oldFormData[element.id] = oldElement;
   return oldFormData
}

export const generateData = (formdata) => {
    let data = {};
    for(let key in formdata){
        data[key] = formdata[key].value;
    }
    return data;
}

export const validateForm = (formdata) =>{
    let formValid = true;
    for(let key in formdata){
        formValid = formdata[key].valid && formValid
    }
    return formValid;
}