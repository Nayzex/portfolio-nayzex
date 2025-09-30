import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: "Contact | Portfolio Nathan Siwek - Nayzex",
  description: "Discutons de votre projet digital. Formulaire de contact, WhatsApp, email - plusieurs moyens de me joindre pour échanger.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}