import React, { useState } from 'react';
import { Icon } from './icon';

// The main component that renders the newsletter form.
export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState('');

  /**
   * Handles the form submission.
   * Prevents default form behavior and logs the form data.
   * In a real application, you would handle the API call here.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      setStatus('Please agree to the terms and policies.');
      return;
    }
    if (!email) {
      setStatus('Please enter a valid email address.');
      return;
    }
    
    // Log the data for demonstration
    setStatus('Form submitted successfully!');
    setEmail('');
    setAgreed(false);
  };

  return (
    <div className="flex items-center justify-center p-4  font-sans text-white">
      <div className="w-full max-w-sm p-8 bg-[#191919] rounded-[30px] shadow-2xl">
        <h2 className="text-xl font-bold tracking-wider mb-8 text-center md:text-left">NEWSLETTER</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              placeholder="Ex. info@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white text-sm text-gray-300 p-2 pr-10"
            />
            <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200">
              <Icon name="Send" size={25} />
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              id="terms-checkbox"
              className="rounded text-gray-600 bg-transparent border-gray-600 ring-offset-gray-900 focus:ring-gray-700"
            />
            <label htmlFor="terms-checkbox" className="text-gray-400 text-xs">
              I agree to all terms and policies
            </label>
          </div>
        </form>
        
        {status && (
          <p className="mt-4 text-sm text-center text-gray-400">{status}</p>
        )}
      </div>
    </div>
  );
};

