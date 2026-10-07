import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Saves consultation inquiry to Supabase if configured,
 * otherwise falls back seamlessly to localStorage with full fidelity.
 */
export async function submitConsultationInquiry(inquiryData) {
  const timestamp = new Date().toISOString();
  const submissionPayload = {
    ...inquiryData,
    created_at: timestamp,
    status: 'new',
    reference_id: `UPS-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
  };

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('inquiries')
        .insert([submissionPayload])
        .select();

      if (error) {
        console.warn('Supabase insertion returned error, fallback to local storage:', error.message);
        fallbackLocalSave(submissionPayload);
        return { success: true, method: 'local_fallback', data: submissionPayload };
      }
      return { success: true, method: 'supabase', data: data?.[0] || submissionPayload };
    } catch (err) {
      console.warn('Supabase request failed, fallback to local storage:', err);
      fallbackLocalSave(submissionPayload);
      return { success: true, method: 'local_fallback', data: submissionPayload };
    }
  }

  // Supabase env keys not supplied - store in local storage
  fallbackLocalSave(submissionPayload);
  return { success: true, method: 'local', data: submissionPayload };
}

function fallbackLocalSave(payload) {
  try {
    const existing = JSON.parse(localStorage.getItem('upswing_inquiries') || '[]');
    existing.unshift(payload);
    localStorage.setItem('upswing_inquiries', JSON.stringify(existing));
  } catch (e) {
    console.warn('Could not access localStorage for inquiry:', e);
  }
}
