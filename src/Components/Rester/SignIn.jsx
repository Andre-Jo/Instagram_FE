import { Box, Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup"
import { signinAction } from '../../Redux/Auth/Action';

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
});

export const Signin = () => {
    const initialValues = { email: "", password: "" };
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(signinAction(values))
    }

    const handleNavigate = () => navigate("/signup");

    return (
        <div>
            <div className='border'>
                <Box p={8} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <img className='mb-5' src="https://i.imgur.com/zqpwkLQ.png" />
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {(formikProps) => (
                            <Form className='space-y-8'>
                                <Field name="email">
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.email && form.touched.email}>
                                            <Input className='w-full' {...field} id='email' placeholder='Mobile Number or Email'>
                                            </Input>
                                            <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                        </FormControl>)}
                                </Field>

                                <Field name="password">
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.password && form.touched.password}>
                                            <Input className='w-full' {...field} id='password' placeholder='Password'>
                                            </Input>
                                            <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                        </FormControl>)}
                                </Field>

                                <p className='text-center text-sm'>People who use our service may have uploaded your contact information to Instagram. Learn More</p>

                                <p className='text-center text-sm'>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</p>

                                <Button className='w-full' mt={4} colorScheme="blue" type="submit" isLoading={formikProps.isSubmitting}>
                                    Sign In
                                </Button>
                            </Form>)}
                    </Formik>
                </Box>
            </div>
            <div className='border w-full border-slate-300 mt-5'>
                <p className='text-center py-2 text-sm'>If you Don't have account <span onClick={handleNavigate} className='ml-2 text-blue-700 cursor-pointer'>Sign Up</span></p>
            </div>
        </div>
    )
}

export default Signin