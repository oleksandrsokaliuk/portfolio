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
  ItemContainer,
  Label,
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
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(process.env.REACT_APP_EMAILSJS_KEY);
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
          console.log(emailjs);
          console.log("Message sent successfully");
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
            <ItemContainer style={{ width: "100%" }}>
              <Label htmlFor="message">{message}</Label>
              <Input
                type="text"
                id="message"
                name="message"
                placeholder={messagePH}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              {errors.message && touched.message && errors.message}
            </ItemContainer>
            <Button type="submit" disabled={isSubmitting}>
              {button}
            </Button>
          </FormInnerContainer>
        </FormContainer>
      )}
      {/* <FormContainer action="mail.php" method="POST" onSubmit={formSubmitter}>
        <FormInnerContainer>
          <ItemContainer>
            <Label htmlFor="name">{name}</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder={famousNameAndEmail.name}
            />
          </ItemContainer>
          <ItemContainer>
            <Label htmlFor="email">{email}</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder={famousNameAndEmail.email}
            />
          </ItemContainer>
          <ItemContainer style={{ width: "100%" }}>
            <Label htmlFor="message">{message}</Label>
            <Input
              type="text"
              id="message"
              name="message"
              placeholder={messagePH}
            />
          </ItemContainer>
        </FormInnerContainer>
        <Button type="submit" disabled={isSubmitting} {errors.password && touched.password && errors.password}>
          {button}
        </Button>
      </FormContainer> */}
    </Formik>
  );
};

export default Form;
