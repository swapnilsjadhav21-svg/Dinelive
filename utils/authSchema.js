import * as Yup from 'yup';

const validateScema = Yup.object().shape({
    email:Yup.string().required("Email is requird").email("Invalid email Format"),
    password:Yup.string().required("password is requird").min(6,"password must be atleast 6 characters"),
});

export default validateScema;