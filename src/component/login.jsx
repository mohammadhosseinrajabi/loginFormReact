import { FastField, Form, Formik, isEmptyArray } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./Formikcomponent/formikControl";

const initialValues={
    email:"",
    password:""
}
const onSubmit=(values)=>{
console.log(values);
}
const validationSchema=Yup.object({

    email:Yup.string().required("لطفا این فیلد پر شود").email("لطفا قالب نوشتاری را رعایت کنید مثال: aaa@eXample.bbb"),
    password:Yup.string().required("لطفا این فیلد پر شود").min(8,"حداقل 8 کاراکتر")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,'حداقل یک حرف کوچک و یک حرف بزرگ و یک اعداد و کاراکتر های خاص استغاده کنید')

})
const Login =()=>{
return(
    	
	<div class="limiter">
    <div class="container-login100">
        <Formik
        initialValues={initialValues}
        onSubmit={onsubmit}
        validationSchema={validationSchema}
        >    
         {
            formik=>{
                console.log(formik);
                return(
                    <div class="wrap-login100">
                    <div class="login100-pic js-tilt" data-tilt>
                        <img src="auth/images/img-01.png" alt="IMG"/>
                    </div>
        
                    <Form class="login100-form validate-form">
                        <span class="login100-form-title">
                           فرم  ورود
                        </span>
        
                     <FormikControl
                     formik={formik}
                     control="input"
                     type="email"
                     name="email"
                     icon="fa fa-envelope"
                     label="ایمیل"
                     />


                    <FormikControl
                    formik={formik}
                    control="input"
                    type="password"
                    name="password"
                    icon="fa fa-lock"
                    label="رمز عبور"
                    />
                        {/* <div class={`wrap-input100 validate-input ${formik.errors.password && formik.touched.password ? 'alert-validate' : null}`} data-validate ={formik.errors.password}>
                            <FastField class="input100" type="password" name="password" placeholder="رمز عبور"/>
                            <span class="focus-input100"></span>
                            <span class="symbol-input100">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div> */}
                        
                        <div class="container-login100-form-btn">
                            <button class="login100-form-btn">
                                ورود
                            </button>
                        </div>
        
                        <div class="text-center p-t-12">
                            
                            <br />
                            <a class="txt2" href="#">
                            فراموشی رمز
                            </a>
                        </div>
        
                        <div class="text-center p-t-136">
                            <a class="txt2" href="#">
                            ساخت اکانت
                                <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                            </a>
                        </div>
                    </Form>
                    </div>
                )
            }
         }    
        </Formik>
    </div>
</div>
)
}
export default Login;