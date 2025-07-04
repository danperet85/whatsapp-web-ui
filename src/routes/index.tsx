import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ChatProvider from "pages/chat/context/chat";
const ChatPage = React.lazy(() => import("pages/chat/chat-room-page"));
const UnSelectedChatPage = React.lazy(() => import("pages/chat/unselected-page"));
const ConfigPage = React.lazy(() => import("pages/config"));

const router = createBrowserRouter([
  {
    path: "/config",
    element: <ConfigPage />,
  },
  {
    path: "/:id",
    element: <ChatPage />,
  },
  {
    path: "/",
    element: <UnSelectedChatPage />,
  },
]);

export default function AppRoutes() {
  return (
    <ChatProvider>
      <RouterProvider router={router} />
    </ChatProvider>
  );
}
