import { FC, useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { languageSelector } from "../../../redux/languageSlice";
import { FamousNamesEmailsI } from "../../../data/dataTypes";
import { funnyNamesEmails } from "../../../data/generalData";
import {
  Button,
  ButtonErrorContainer,
  Error,
  ErrorContainer,
  FormContainer,
  FormInnerContainer,
  Input,
  InputText,
  ItemContainer,
  ItemContainerWholeWidth,
  Label,
  MessageSent,
} from "../styles/Form.styles";
import { Formik } from "formik";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";

const Form: FC = () => {
  const selectedLanguage = useAppSelector(languageSelector);
  const { name, email, message, messagePH, button } =
    selectedLanguage.feedBack.form;
  const formErrors = selectedLanguage.feedBack.errors;
  const [famousNameAndEmail, setFamousNameAndEmail] =
    useState<FamousNamesEmailsI>({
      name: "",
      email: "",
    });
  useEffect(() => {
    const getFamousNameAndEmail = () => {
      return funnyNamesEmails[
        Math.floor(Math.random() * funnyNamesEmails.length)
      ];
    };

    setFamousNameAndEmail(getFamousNameAndEmail());
  }, []);

  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().min(5, "Too Short!").required("Required"),
  });

  const [emailsIsSent, setEmailIsSent] = useState<boolean>(false);
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={FormSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setEmailIsSent(false);
        // if (!values.name || !values.email || !values.message) {

        //   return;
        // }
        try {
          await emailjs.send(
            "service_v13b2kd",
            "template_eumncb8",
            {
              from_name: "Portfolio",
              to_name: "Oleksandr Sokaliuk",
              message: values,
            },
            process.env.REACT_APP_EMAILSJS_KEY
          );
          // await emailjs.send(
          //   "service_v13b2kd",
          //   "template_eumncb8",
          //   values,
          //   "AVKkAuycPbKpnubtp"
          // );
          setEmailIsSent(true);
          setTimeout(() => {
            setEmailIsSent(false);
          }, 5000);
        } catch (error) {
          console.error("Error sending message:", error);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <FormContainer onSubmit={handleSubmit}>
          <FormInnerContainer>
            <ItemContainer>
              <Label htmlFor="name">{name}</Label>
              <Input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder={famousNameAndEmail.name}
              />
            </ItemContainer>
            <ItemContainer>
              <Label htmlFor="email">{email}</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder={famousNameAndEmail.email}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </ItemContainer>
            <ItemContainerWholeWidth>
              <Label htmlFor="message">{message}</Label>
              <InputText
                id="message"
                name="message"
                placeholder={messagePH}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
            </ItemContainerWholeWidth>
            <ButtonErrorContainer>
              <Button
                type="submit"
                disabled={
                  isSubmitting ||
                  emailsIsSent ||
                  !!errors.message ||
                  !!errors.name ||
                  !!errors.email ||
                  !touched.message ||
                  !touched.email ||
                  !touched.name
                }
              >
                {emailsIsSent ? "The message is sent" : button}
              </Button>
              {((errors.message && touched.message) ||
                (errors.name && touched.name) ||
                (errors.email && touched.email)) && (
                <ErrorContainer>
                  {touched.name && !values.name && (
                    <Error>{formErrors.name.required}</Error>
                  )}
                  {touched.name && errors.name && (
                    <Error>{formErrors.name.condition}</Error>
                  )}
                  {touched.email && !values.email && (
                    <Error>{formErrors.email.required}</Error>
                  )}
                  {touched.email && errors.email && (
                    <Error>{formErrors.email.condition}</Error>
                  )}
                  {touched.message && !values.message && (
                    <Error>{formErrors.message.required}</Error>
                  )}
                  {touched.message && errors.message && (
                    <Error>{formErrors.message.condition}</Error>
                  )}
                </ErrorContainer>
              )}
            </ButtonErrorContainer>
          </FormInnerContainer>
        </FormContainer>
      )}
    </Formik>
  );
};

export default Form;
