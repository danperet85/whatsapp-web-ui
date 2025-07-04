import { useState } from "react";
import { useConfig } from "common/context/config";
import { Container, Title, Form, Field, Label, Input, Button } from "./styles";

export default function ConfigPage() {
  const { phoneNumberId, recipient, setPhoneNumberId, setRecipient } = useConfig();
  const [phone, setPhone] = useState(phoneNumberId);
  const [defaultRecipient, setDefaultRecipient] = useState(recipient);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneNumberId(phone);
    setRecipient(defaultRecipient);
  };

  return (
    <Container>
      <Title>Configuration</Title>
      <Form onSubmit={handleSubmit}>
        <Field>
          <Label>Phone Number ID</Label>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Field>
        <Field>
          <Label>Default Recipient</Label>
          <Input value={defaultRecipient} onChange={(e) => setDefaultRecipient(e.target.value)} />
        </Field>
        <Button type="submit">Save</Button>
      </Form>
    </Container>
  );
}
