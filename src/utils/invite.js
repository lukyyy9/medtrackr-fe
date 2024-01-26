import { toast } from 'react-hot-toast';
import { getMyInfos } from '../routes/common';

export const invitePatient = async () => {
  try {
    const res = await getMyInfos();
    const baseUrl = window.location.origin;
    const url = `${baseUrl}/signup?invite=${res.user.email}`;
    await navigator.clipboard.writeText(url);
    toast('Lien d\'invitation copié dans le presse papier.', {
      icon: '🔗',
    });
  } catch (error) {
    toast.error('Failed to copy URL to clipboard.');
    console.error(error);
  }
};
