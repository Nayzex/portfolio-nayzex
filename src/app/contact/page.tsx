import type { Metadata } from 'next';
import { ContactPageClient } from '@/features/contact';

export const metadata: Metadata = {
  title: "Contact | Portfolio Nathan Siwek - Nayzex",
  description: "Discutons de votre projet digital. Formulaire de contact sécurisé avec CAPTCHA - contactez-moi pour échanger sur vos ambitions digitales.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}