import React, { useContext, useState } from "react";

type Config = {
  phoneNumberId: string;
  recipient: string;
  setPhoneNumberId: (id: string) => void;
  setRecipient: (val: string) => void;
};

const ConfigContext = React.createContext<Config>({
  phoneNumberId: "",
  recipient: "",
  setPhoneNumberId() {},
  setRecipient() {},
});

export function ConfigProvider(props: { children: any }) {
  const { children } = props;

  const [phoneNumberId, setPhoneNumberIdState] = useState<string>(() => {
    return (
      window.localStorage.getItem("phoneNumberId") || process.env.REACT_APP_PHONE_NUMBER_ID || ""
    );
  });

  const [recipient, setRecipientState] = useState<string>(() => {
    return window.localStorage.getItem("recipient") || "";
  });

  const handleSetPhoneNumberId = (id: string) => {
    window.localStorage.setItem("phoneNumberId", id);
    setPhoneNumberIdState(id);
  };

  const handleSetRecipient = (val: string) => {
    window.localStorage.setItem("recipient", val);
    setRecipientState(val);
  };

  return (
    <ConfigContext.Provider
      value={{
        phoneNumberId,
        recipient,
        setPhoneNumberId: handleSetPhoneNumberId,
        setRecipient: handleSetRecipient,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export const useConfig = () => useContext(ConfigContext);
