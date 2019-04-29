import React from 'react';

const FormField = (props) => {
    const showError = () => {
        let errorMsg = null;
        if(props.formdata.validation && !props.formdata.valid){
            errorMsg = (
                <div className='error_label'>
                    {props.formdata.validationMsg}
                </div>
            )
        }
        return errorMsg;
    }
    const renderTemplate = () => {
        let formTemplate = null;
        switch(props.formdata.element){
            case 'input':
                formTemplate = (<div className= 'formBlock'>
                                    <input {...props.formdata.config} value={props.formdata.value} onBlur={(event) => props.change({event, id:props.id, blur:true})} onChange={(event) => props.change({event, id:props.id})}/>
                                    {showError()}
                                </div>)
                                break
            default:
             formTemplate = null;
        }
        return formTemplate;
    }
    return (
        <div>
            {renderTemplate()}
        </div>
    );
};

export default FormField;