const API_URL = process.env.REACT_APP_WHATSAPP_API_URL;
const TOKEN = process.env.REACT_APP_WHATSAPP_TOKEN;

type RequestOptions = {
  method?: string;
  body?: any;
};

async function request<T>(url: string, options: RequestOptions = {}): Promise<T> {
  const res = await fetch(url, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }
  return res.json();
}

export async function fetchMessages(phoneNumberId: string) {
  return request<any>(`${API_URL}/${phoneNumberId}/messages`);
}

export async function sendMessage(phoneNumberId: string, message: any) {
  return request<any>(`${API_URL}/${phoneNumberId}/messages`, {
    method: "POST",
    body: message,
  });
}
