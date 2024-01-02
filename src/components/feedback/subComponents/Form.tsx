import { FC, useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { languageSelector } from "../../../redux/languageSlice";
import { FamousNamesEmailsI } from "../../../data/dataTypes";
import { funnyNamesEmails } from "../../../data/generalData";
import {
  Button,
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

const Form: FC = () => {
  const selectedLanguage = useAppSelector(languageSelector);
  const { name, email, message, messagePH, button } =
    selectedLanguage.feedBack.form;
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

  const [emailsIsSent, setEmailIsSent] = useState<boolean>(false);
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      onSubmit={async (values, { setSubmitting }) => {
        setEmailIsSent(false);
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
              {errors.name && touched.name && errors.name}
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
              {errors.email && touched.email && errors.email}
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
              {errors.message && touched.message && errors.message}
            </ItemContainerWholeWidth>
            <Button type="submit" disabled={isSubmitting || emailsIsSent}>
              {emailsIsSent ? "The message is sent" : button}
            </Button>
          </FormInnerContainer>
        </FormContainer>
      )}
    </Formik>
  );
};

export default Form;
