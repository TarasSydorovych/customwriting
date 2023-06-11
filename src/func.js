export const sendMess = async (mes) => {
    const token = '6163478688:AAFZtRxGgcMirkkkt2ISrDcrH26OtX-uATw';
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
  
    const formData = new FormData();
    formData.append('chat_id', '1142295907');
    formData.append('text', mes);
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData
      });
  
      if (response.ok) {
        console.log('Повідомлення надіслано успішно!');
      } else {
        console.log('Сталася помилка при відправленні повідомлення.');
      }
    } catch (error) {
      console.error('Виникла помилка:', error);
    }
}