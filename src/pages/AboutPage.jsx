import React from 'react';
import { 
  TrendingUp, 
  Check, 
  Film, 
  BarChart3, 
  ShieldCheck, 
  MapPin, 
  Camera, 
  Layers, 
  Award,
  BadgeCheck,
  CheckCircle2,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { LinkedinIcon } from '../components/SocialIcons';
import { trustMetrics, brandInfo } from '../data/agencyData';
import FinalCta from '../components/FinalCta';

export default function AboutPage() {
  return (
    <div className="page-view">
      {/* About Header with Core Belief */}
      <section className="page-header-section">
        <div className="container">
          <div className="section-pill">
            <TrendingUp size={14} />
            <span>Our Core Belief</span>
          </div>
          <h1 className="page-header-title">
            Good Marketing Should Do More Than Look Good.
          </h1>
          <p className="page-header-desc">
            We believe marketing should move a business forward. Upswing brings strategy, marketing, creative production and execution together to help brands build attention, earn trust and generate growth.
          </p>
        </div>
      </section>

      {/* Trust & Credibility Strip */}
      <section className="about-trust-strip">
        <div className="container">
          <div className="trust-metrics-grid">
            {trustMetrics.map((item, idx) => (
              <div key={idx} className="trust-metric-cell">
                <span className="trust-number">{item.value}</span>
                <span className="trust-label">{item.label}</span>
                <span className="trust-sub">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Purpose Statement */}
      <section className="section-padding">
        <div className="container">
          {/* Founder & Leadership Spotlight */}
          <div className="founder-spotlight-card">
            <div className="founder-grid">
              <div className="founder-media-col">
                <div className="founder-image-wrapper">
                  <img
                    src={brandInfo.founder.image}
                    alt={brandInfo.founder.name}
                    className="founder-portrait-img"
                    loading="lazy"
                  />
                  <div className="founder-verified-badge">
                    <BadgeCheck size={16} />
                    <span>Founder & Lead Strategist</span>
                  </div>
                </div>
                <div className="founder-social-bar">
                  <a
                    href={brandInfo.founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="founder-linkedin-link"
                    aria-label="Prashant Pal on LinkedIn"
                  >
                    <LinkedinIcon size={18} color="#0A66C2" />
                    <span>Connect on LinkedIn</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <div className="founder-info-col">
                <div className="founder-badge-row">
                  <span className="eyebrow-tag orange">
                    <Sparkles size={13} />
                    <span>Leadership & Agency Vision</span>
                  </span>
                  <span className="founder-experience-chip">Delhi NCR • Serving Globally</span>
                </div>

                <h3 className="founder-headline">
                  "We built Upswing to give ambitious brands what fractured agencies never could: true end-to-end accountability."
                </h3>

                <div className="founder-body-copy">
                  <p>
                    Most businesses find themselves trapped having to coordinate between three separate vendors: a video production crew that doesn't understand ad conversions, a media buyer who runs generic static banners, and a development team disconnected from commercial revenue.
                  </p>
                  <p>
                    At Upswing, we unified all three disciplines. We run performance Meta & Google Ads with 100% direct-account billing and zero markup, build custom high-speed web infrastructure, and bring professional cinema production directly to your premises.
                  </p>
                </div>

                <div className="founder-credentials-grid">
                  <div className="founder-credential-pill">
                    <CheckCircle2 size={15} color="var(--accent-orange)" />
                    <span>Paid Ads & ROAS Optimization</span>
                  </div>
                  <div className="founder-credential-pill">
                    <CheckCircle2 size={15} color="var(--accent-orange)" />
                    <span>Custom IT & Web Architecture</span>
                  </div>
                  <div className="founder-credential-pill">
                    <CheckCircle2 size={15} color="var(--accent-orange)" />
                    <span>Cinematic Commercial Production</span>
                  </div>
                  <div className="founder-credential-pill">
                    <CheckCircle2 size={15} color="var(--accent-orange)" />
                    <span>Direct Executive Ownership</span>
                  </div>
                </div>

                <div className="founder-signature-row">
                  <div>
                    <h4 className="founder-name">{brandInfo.founder.name}</h4>
                    <p className="founder-title">{brandInfo.founder.role}, Upswing Agency</p>
                  </div>
                  <a href="#contact" className="btn-primary founder-cta-btn">
                    <span>Discuss Your Project</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="section-header-centered">
            <span className="section-pill">How We Think</span>
            <h2 className="section-title">The Principles Behind Our Work</h2>
            <p className="section-subtitle">
              We founded Upswing to eliminate the typical agency frustrations: empty buzzwords, outsourced subcontractors, and zero accountability.
            </p>
          </div>

          <div className="about-principles-grid">
            <div className="about-principle-card">
              <div className="principle-number-tag">01</div>
              <h3 className="about-card-title">Strategy Before Execution</h3>
              <p className="about-card-desc">
                Posting random social media reels without a strategic positioning foundation is just noise. We first define what makes your business defensible, who your most profitable customers are, and why they should choose you.
              </p>
            </div>

            <div className="about-principle-card">
              <div className="principle-number-tag">02</div>
              <h3 className="about-card-title">Creative That Performs</h3>
              <p className="about-card-desc">
                We create content that isn't just visually attractive—it supports a clear business objective. Every video cut, headline, and color choice is engineered to command attention and inspire action.
              </p>
            </div>

            <div className="about-principle-card">
              <div className="principle-number-tag">03</div>
              <h3 className="about-card-title">Production + Marketing Under One Roof</h3>
              <p className="about-card-desc">
                Most agencies outsource video shoots to random freelancers or tell you to film on your phone. We maintain our own cinema 4K cameras, prime lenses, and dedicated editors to guarantee consistent visual excellence.
              </p>
            </div>

            <div className="about-principle-card">
              <div className="principle-number-tag">04</div>
              <h3 className="about-card-title">Business-Focused Outcomes</h3>
              <p className="about-card-desc">
                Follower counts do not pay business payroll. We align creative assets and paid ads with verified phone inquiries, consultation bookings, walk-in footfall, and high-intent customer transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Studio Capabilities */}
      <section className="section-padding" style={{ background: 'var(--navy-900)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header-centered">
            <span className="section-pill">In-House Capabilities</span>
            <h2 className="section-title">Dedicated Creative & Media Teams</h2>
            <p className="section-subtitle">
              No bloated middle management. You work directly with the strategists, cinematographers, and media specialists executing your campaigns.
            </p>
          </div>

          <div className="team-units-grid">
            <div className="team-unit-card">
              <div className="team-unit-icon">
                <Camera size={24} color="var(--accent-orange)" />
              </div>
              <h3 className="team-unit-title">Cinematography & Lighting</h3>
              <p className="team-unit-desc">
                Professional cinematographers skilled in directional lighting, gimbal motion, macro product details, and architectural composition.
              </p>
              <ul className="team-unit-tags">
                <li>Cinema 4K Cameras</li>
                <li>Motorized Gimbals</li>
                <li>Studio Softboxes</li>
              </ul>
            </div>

            <div className="team-unit-card">
              <div className="team-unit-icon">
                <Film size={24} color="var(--accent-orange)" />
              </div>
              <h3 className="team-unit-title">Editorial & Color Grading</h3>
              <p className="team-unit-desc">
                Full-time post-production editors crafting 9:16 vertical hooks, sound design with ASMR effects, beat-synced pacing, and custom color grading.
              </p>
              <ul className="team-unit-tags">
                <li>DaVinci Resolve</li>
                <li>Premiere Pro</li>
                <li>Sound FX & Foley</li>
              </ul>
            </div>

            <div className="team-unit-card">
              <div className="team-unit-icon">
                <BarChart3 size={24} color="var(--accent-orange)" />
              </div>
              <h3 className="team-unit-title">Performance Media Buying</h3>
              <p className="team-unit-desc">
                Certified Google Ads and Meta Ads media buyers setting up pixel integrations, conversion triggers, search query hygiene, and retargeting pools.
              </p>
              <ul className="team-unit-tags">
                <li>Google Search & PMax</li>
                <li>Meta Advantage+</li>
                <li>Tag Manager Tracking</li>
              </ul>
            </div>

            <div className="team-unit-card">
              <div className="team-unit-icon">
                <Layers size={24} color="var(--accent-orange)" />
              </div>
              <h3 className="team-unit-title">Brand & Graphic Design</h3>
              <p className="team-unit-desc">
                Brand designers developing vector logo marks, cohesive typography scales, commercial packaging layouts, and high-converting carousel assets.
              </p>
              <ul className="team-unit-tags">
                <li>Brand Systems</li>
                <li>Social Carousels</li>
                <li>Vector Identity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* India Presence & Client Partnership */}
      <section className="section-padding">
        <div className="container">
          <div className="about-partnership-box">
            <div className="partnership-header">
              <div className="section-pill">
                <MapPin size={14} />
                <span>Our Studio Location</span>
              </div>
              <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
                Rooted in Delhi NCR, Serving Forward-Thinking Brands
              </h2>
              <p className="section-subtitle" style={{ margin: '0 0 2rem 0', textAlign: 'left' }}>
                Based in Noida and Delhi NCR, our production crew travels on-location across Uttar Pradesh and major Indian business hubs, while our digital performance and strategy teams serve clients globally.
              </p>
            </div>

            <div className="partnership-points-grid">
              <div className="partnership-point">
                <ShieldCheck size={20} color="var(--accent-orange)" />
                <div>
                  <h4>Transparent Commercial Contracts</h4>
                  <p>Clear statement-of-work documentation, defined revision windows, and zero surprise ancillary fees.</p>
                </div>
              </div>

              <div className="partnership-point">
                <Check size={20} color="var(--accent-orange)" />
                <div>
                  <h4>Direct Slack & WhatsApp Channels</h4>
                  <p>Fast, direct communication with your dedicated account strategist and production crew.</p>
                </div>
              </div>

              <div className="partnership-point">
                <Award size={20} color="var(--accent-orange)" />
                <div>
                  <h4>Data-Driven Reporting Cadence</h4>
                  <p>Unfiltered fortnightly updates showing real ad platform performance and verified customer inquiries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <FinalCta />
    </div>
  );
}
