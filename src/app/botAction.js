"use server";

import axios from "axios";

export const sendContactForm = async (form) => {
  const name = form.get("name");
  const phone = form.get("phone");

  if (!name || !phone) return {error: "Not all inputs filled!", success: false};

  const text = `New Contact: \nname: ${name}\nphone: ${phone}`;
  
  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
  console.log(url);

  const res = await axios.post(url, {
    chat_id: process.env.MY_TELEGRAM_CHAT_ID,
    text: text,
  });

  return res?.data;
};
