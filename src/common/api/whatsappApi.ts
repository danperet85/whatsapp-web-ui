export type SendTextMessageParams = {
  token: string;
  phoneNumberId?: string;
  recipient: string;
  message: string;
};

export async function sendTextMessage(params: SendTextMessageParams) {
  const {
    token,
    phoneNumberId = process.env.REACT_APP_PHONE_NUMBER_ID,
    recipient,
    message,
  } = params;
  if (!phoneNumberId) {
    throw new Error("Phone number ID is required");
  }
  const url = `https://graph.facebook.com/v17.0/${phoneNumberId}/messages`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: recipient,
      type: "text",
      text: { body: message },
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to send message");
  }

  return res.json();
}
