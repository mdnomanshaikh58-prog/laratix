export const agencyContact = {
  phoneDisplay: '01836218566',
  phoneInternational: '+8801836218566',
  whatsappNumber: '8801836218566',
  email: 'laraticslab@gmail.com',
};

export const agencyContactLinks = {
  phone: `tel:${agencyContact.phoneInternational}`,
  whatsapp: `https://wa.me/${agencyContact.whatsappNumber}`,
  email: `mailto:${agencyContact.email}`,
};

export function createAgencyMailto(subject: string, body: string) {
  return `mailto:${agencyContact.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
