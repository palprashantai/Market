import React, { useEffect } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { brandInfo } from '../data/agencyData';

export default function LegalModal({ type, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!type) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {type === 'privacy' ? (
              <Shield size={22} color="var(--accent-orange)" />
            ) : (
              <FileText size={22} color="var(--accent-orange)" />
            )}
            <h3 id="legal-modal-title" className="modal-title">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Engagement'}
            </h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Last updated:</strong> October 2026. Upswing Agency operates in accordance with applicable data protection laws under the Information Technology Act, 2000 and Digital Personal Data Protection Act (DPDPA), India.
              </p>
              <h4>1. Information We Collect</h4>
              <p>
                We only collect information directly submitted through our inquiry and project discovery forms (such as your name, business name, email address, phone number, and project scope) to schedule discovery calls and prepare project estimates.
              </p>
              <h4>2. Use of Information</h4>
              <p>
                Your information is used strictly to coordinate project deliverables, production shoot dates, media campaign configurations, and authorized client communications. We never sell, rent, or lease your contact information to third parties.
              </p>
              <h4>3. Ad Accounts & Client Data</h4>
              <p>
                All paid ad campaigns are executed within the client’s designated Meta Business Portfolio and Google Ads accounts. You retain direct ownership and control over your customer lists, pixel events, and commercial payment methods.
              </p>
              <h4>4. Inquiries & Contact</h4>
              <p>
                For privacy inquiries or data requests, please contact our team at <a href={`mailto:${brandInfo.email}`}>{brandInfo.email}</a>.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Last updated:</strong> October 2026. Upswing Agency provides professional digital marketing, brand identity, and in-house video production services under transparent commercial terms.
              </p>
              <h4>1. Scope of Engagement</h4>
              <p>
                All creative production, advertising campaigns, and strategic roadmaps are defined in writing prior to project kickoff. Upswing delivers high-resolution creative assets (4K video files, vector branding, campaign creatives) and manages campaign configurations. Clients maintain direct ownership of their social handles and media spend billing.
              </p>
              <h4>2. Media Spend & Direct Platform Billing</h4>
              <p>
                Clients pay Meta and Google directly for media advertising spend. Upswing charges a transparent professional management and creative production retainer fee with zero ad spend markups.
              </p>
              <h4>3. Review Windows & Revisions</h4>
              <p>
                Each deliverable milestone includes structured review rounds (typically two revision passes for video edits and creative designs) to guarantee alignment with project specifications.
              </p>
              <h4>4. Intellectual Property & Commercial Ownership</h4>
              <p>
                Upon settlement of agreed invoice milestones, full commercial ownership rights to all delivered master video files, branding vectors, and approved ad creatives transfer 100% to the client.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
