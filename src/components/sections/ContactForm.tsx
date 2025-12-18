'use client';

import { useState } from 'react';
import { Button } from '../ui/Button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-800 
            focus:border-black dark:focus:border-white outline-none transition-colors
            bg-transparent"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-800 
            focus:border-black dark:focus:border-white outline-none transition-colors
            bg-transparent"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-800 
            focus:border-black dark:focus:border-white outline-none transition-colors
            bg-transparent"
          required
        />
      </div>

      <Button type="submit" variant="primary" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
