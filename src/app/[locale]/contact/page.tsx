import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact - Portfolio Nayzex',
  description: 'Contactez-moi pour discuter de votre projet de développement web ou mobile',
};

export default function ContactPage() {
  return <ContactPageClient />;
}
