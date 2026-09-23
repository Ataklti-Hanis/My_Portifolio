import type { ContactFormState } from '../types';

export interface SendMessageResponse {
  success: boolean;
  message: string;
}

/**
 * Service abstraction layer for sending contact form messages.
 * In Version 1 (frontend-only), it validates inputs and simulates
 * transmission. In Version 2, it can call a NestJS API or EmailJS endpoint.
 */
export const contactService = {
  async sendMessage(data: ContactFormState): Promise<SendMessageResponse> {
    // 1. Validation
    if (!data.name || data.name.trim().length < 2) {
      return { success: false, message: "Please provide a valid full name." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email.trim())) {
      return { success: false, message: "Please provide a valid email address." };
    }

    if (!data.subject || data.subject.trim().length < 3) {
      return { success: false, message: "Please enter a message subject (at least 3 characters)." };
    }

    if (!data.message || data.message.trim().length < 10) {
      return { success: false, message: "Please write a detailed message (at least 10 characters)." };
    }

    // 2. Simulate API Latency
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 3. Return Success Result
    return {
      success: true,
      message: `Thank you, ${data.name.trim()}! Your message has been sent successfully. I will get back to you shortly.`
    };
  }
};
