import React from 'react';
import { MessageCircle } from 'lucide-react';
import { brandInfo } from '../data/agencyData';

export default function FloatingWhatsApp() {
  return (
    <a
      href={brandInfo.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Direct message Upswing Agency on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
      <span className="floating-whatsapp-tooltip">Chat with us</span>
    </a>
  );
}
