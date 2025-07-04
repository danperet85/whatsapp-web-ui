import { useState } from "react";
import Icon from "common/components/icons";
import {
  AttachButton,
  Button,
  ButtonsContainer,
  IconsWrapper,
  Input,
  SendMessageButton,
  Wrapper,
} from "./styles";

const attachButtons = [
  { icon: "attachRooms", label: "Choose room" },
  { icon: "attachContacts", label: "Choose contact" },
  { icon: "attachDocument", label: "Choose document" },
  { icon: "attachCamera", label: "Use camera" },
  { icon: "attachImage", label: "Choose image" },
];

type FooterProps = {
  onSendMessage?: (text: string) => void;
};

export default function Footer(props: FooterProps) {
  const { onSendMessage } = props;
  const [showIcons, setShowIcons] = useState(false);
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    if (onSendMessage) onSendMessage(text);
    setText("");
  };

  return (
    <Wrapper>
      <IconsWrapper>
        <AttachButton onClick={() => setShowIcons(!showIcons)}>
          <Icon id="attach" className="icon" />
        </AttachButton>
        <ButtonsContainer>
          {attachButtons.map((btn) => (
            <Button showIcon={showIcons} key={btn.label}>
              <Icon id={btn.icon} />
            </Button>
          ))}
        </ButtonsContainer>
      </IconsWrapper>
      <Input
        placeholder="Type a message here .."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <SendMessageButton onClick={handleSend}>
        <Icon id="send" className="icon" />
      </SendMessageButton>
    </Wrapper>
  );
}
