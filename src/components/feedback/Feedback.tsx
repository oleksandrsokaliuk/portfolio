import { FC } from "react";
import Form from "./subComponents/Form";
import ContactData from "./subComponents/ContactData";
import { Container } from "./styles/Feedback.styles";

const Feedback: FC = () => {
  return (
    <Container>
      <ContactData />
      <Form />
    </Container>
  );
};

export default Feedback;
