// import React, { useEffect } from 'react';

// export default function ChatKo() {
//   useEffect(() => {
//     const s = document.createElement('script');
//     s.async = true;
//     s.src = 'https://embed.tawk.to/6484ad23cc26a871b021bf53/1h2j48kpq';

//     document.head.appendChild(s);

//     return () => {
//       document.head.removeChild(s);
//     };
//   }, []);

//   return <div id="tawk-container"></div>;
// };

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

    // Додайте обробник події кліку до відповідного елемента, наприклад, кнопки або іконки чату
    const chatButton = document.getElementById('chat-button');
    if (chatButton) {
      chatButton.addEventListener('click', minimizeChatWindow);
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

