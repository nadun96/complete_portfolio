// Email Service Module - Handles contact form email sending
export class EmailService {
  constructor() {
    // Using Web3Forms - Free, no signup required for testing
    // For production, sign up at https://web3forms.com for your own access key
    this.accessKey = 'YOUR_WEB3FORMS_ACCESS_KEY'; // Replace with actual key
    this.endpoint = 'https://api.web3forms.com/submit';
  }

  /**
   * Send email using Web3Forms API
   * @param {Object} formData - Form data object
   * @returns {Promise} - Response from API
   */
  async sendEmail(formData) {
    const payload = {
      access_key: this.accessKey,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to: 'udarakanadun@gmail.com', // Your email
      from_name: 'Portfolio Contact Form',
      redirect: false // Don't redirect after submit
    };

    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Email send error:', error);
      throw error;
    }
  }

  /**
   * Alternative: Send using EmailJS (requires signup)
   * Sign up at https://www.emailjs.com/
   */
  async sendEmailViaEmailJS(formData) {
    // EmailJS configuration
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'udarakanadun@gmail.com'
    };

    try {
      const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);
      return response;
    } catch (error) {
      console.error('EmailJS error:', error);
      throw error;
    }
  }

  /**
   * Simple fallback: mailto link (opens email client)
   */
  sendViaMailto(formData) {
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:udarakanadun@gmail.com?subject=${subject}&body=${body}`;
  }

  /**
   * Test mode: Log to console instead of sending
   */
  testEmail(formData) {
    console.log('📧 TEST EMAIL - Would send to: udarakanadun@gmail.com');
    console.log('From:', formData.name, '<' + formData.email + '>');
    console.log('Subject:', formData.subject);
    console.log('Message:', formData.message);
    console.log('---');
    
    return Promise.resolve({
      success: true,
      message: 'Test email logged to console'
    });
  }
}
