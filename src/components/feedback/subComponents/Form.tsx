import { FC, useEffect, useState } from "react";
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
    <FormContainer action="mail.php" method="POST">
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
      <Button type="submit">{button}</Button>
    </FormContainer>
  );
};

export default Form;
