import React from 'react'
import Input from './input';

 const FormikControl=(props)=> {

        switch (props.control) {
            case 'input':
                return <Input {...props}/>
                break;
        
            default:
                break;
        }
  
}
export default FormikControl;