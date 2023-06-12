import React, { useEffect } from 'react';

export default function ChatKo() {
  useEffect(() => {
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://embed.tawk.to/6484ad23cc26a871b021bf53/1h2j48kpq';

    document.head.appendChild(s);

    const minimizeChatWindow = () => {
      if (window.Tawk_API) {
        window.Tawk_API.minimize();
      }
    };

    const customizeTawkButton = () => {
      const buttonContainer = document.querySelector('.tawk-chat-minimized');
      const button = buttonContainer?.querySelector('.tawk-button');

      if (button) {
        button.style.backgroundColor = '#03a9f4';
        button.style.color = '#ffffff';
        button.style.border = 'none';
        button.style.borderRadius = '4px';
        button.style.padding = '8px 12px';
      }
    };

    const chatButton = document.getElementById('chat-button');
    if (chatButton) {
      chatButton.addEventListener('click', minimizeChatWindow);
      customizeTawkButton();
    }

    return () => {
      document.head.removeChild(s);
      if (chatButton) {
        chatButton.removeEventListener('click', minimizeChatWindow);
      }
    };
  }, []);

  return <div id="tawk-container"></div>;
};