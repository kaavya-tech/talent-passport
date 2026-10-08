import React, { useState, useEffect } from 'react';

// Talent Passport - Complete Frontend Application (Proof-of-Skill Platform)
// Design System: Sage Green + Ivory
const styles = `
  :root {
    --color-primary-sage: #8FAF9A;
    --color-dark-sage: #557463;
    --color-light-sage: #DDE8DF;
    --color-ivory: #F8F5EC;
    --color-card: #FFFDF8;
    --color-primary-text: #26352D;
    --color-secondary-text: #66736B;
    --color-border: #D9DED7;
  }

  body {
    margin: 0;
    font-family: system-ui, -apple-system, sans-serif;
    background-color: var(--color-ivory);
    color: var(--color-primary-text);
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem;
    min-height: 100vh;
    box-sizing: border-box;
  }

  .card {
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: 2rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 8px rgba(85, 116, 99, 0.05);
  }

  .btn-primary {
    background: var(--color-primary-sage);
    color: #fff;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }

  .btn-primary:hover {
    background: var(--color-dark-sage);
  }

  .btn-secondary {
    background: var(--color-dark-sage);
    color: #fff;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }

  .btn-secondary:hover {
    background: #445e50;
  }

  .btn-outline {
    background: transparent;
    color: var(--color-dark-sage);
    border: 1px solid var(--color-dark-sage);
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .btn-outline:hover {
    background: var(--color-light-sage);
  }

  input, textarea, select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--color-border);
    border-radius: 4px;
    background: #fff;
    color: var(--color-primary-text);
    box-sizing: border-box;
    margin-top: 0.4rem;
    margin-bottom: 1rem;
    font-family: inherit;
    font-size: 0.95rem;
  }

  input:focus, textarea:focus, select:focus {
    outline: 2px solid var(--color-dark-sage);
    border-color: var(--color-dark-sage);
  }

  label {
    font-size: 0.9rem;
    color: var(--color-secondary-text);
    font-weight: 500;
  }

  .badge {
    display: inline-block;
    background: var(--color-light-sage);
    color: var(--color-dark-sage);
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 600;
  }

  /* Responsive Utilities */
  @media (max-width: 768px) {
    .container {
      padding: 1.5rem 1rem;
    }
    .card {
      padding: 1.25rem;
    }
    .grid-2col {
      grid-template-columns: 1fr !important;
    }
    .header-row {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 1rem !important;
    }
    .header-actions {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  }
`;

export default function App() {
  const [view, setView] = useState('role-select');
  const [candidateProfile, setCandidateProfile] = useState({ name: '', email: '', phone: '' });
  const [verifierProfile, setVerifierProfile] = useState({ name: '', email: '', phone: '' });
  
  const [resumeData, setResumeData] = useState({
    title: 'Senior Software Architect',
    summary: 'Specializing in distributed systems, backend resilience, and cloud microservices.',
    skills: 'Distributed Systems, React, Node.js, System Architecture, Python',
    experience: '5+ years building and debugging enterprise microservices.'
  });

  const [simulationState, setSimulationState] = useState({
    status: 'Completed',
    task: 'Diagnose and redesign a failing distributed application',
    aiUsageLogged: 'Used AI assistant for syntax verification and debugging log analysis (14 prompts recorded)',
    rubricScores: {
      technicalCapability: 'Level 4 (Advanced)',
      problemSolving: 'Strong (Clean error handling & recovery)',
      communication: 'Clear architecture decision documentation'
    }
  });

  const [verificationStatus, setVerificationStatus] = useState('Pending Verifier Review');

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div>
      {/* 1. ROLE SELECTION SCREEN */}
      {view === 'role-select' && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'var(--color-ivory)', padding: '1rem' }}>
          <div className="card" style={{ maxWidth: '480px', width: '100%', textAlign: 'center' }}>
            <h1 style={{ color: 'var(--color-primary-text)', marginBottom: '0.5rem' }}>Talent Passport</h1>
            <p style={{ color: 'var(--color-secondary-text)', marginBottom: '2rem' }}>Proof-of-Skill Platform &amp; Verified Capability Record</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button className="btn-primary" onClick={() => setView('candidate-onboarding')}>
                I am a Candidate
              </button>
              <button
                className="btn-secondary"
                onClick={() => {
                  setVerifierProfile({ name: 'Lead Verifier', email: 'verifier@talentpassport.io', phone: '+91 99999 88888' });
                  setView('verifier-dashboard');
                }}
              >
                I am a Verifier
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. CANDIDATE ONBOARDING */}
      {view === 'candidate-onboarding' && (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <form className="card" style={{ maxWidth: '420px', width: '100%' }} onSubmit={(e) => { e.preventDefault(); setView('candidate-resume'); }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ color: 'var(--color-primary-text)', margin: 0 }}>Candidate Onboarding</h2>
              <button type="button" className="btn-outline" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }} onClick={() => setView('role-select')}>Back</button>
            </div>
            
            <label>Full Name</label>
            <input type="text" required placeholder="Aarav Sharma" value={candidateProfile.name} onChange={e => setCandidateProfile({...candidateProfile, name: e.target.value})} />
            
            <label>Email Address</label>
            <input type="email" required placeholder="aarav@example.com" value={candidateProfile.email} onChange={e => setCandidateProfile({...candidateProfile, email: e.target.value})} />
            
            <label>Phone Number</label>
            <input type="tel" required placeholder="+91 98765 43210" value={candidateProfile.phone} onChange={e => setCandidateProfile({...candidateProfile, phone: e.target.value})} />
            
            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Continue to Resume Builder</button>
          </form>
        </div>
      )}

      {/* 3. RESUME BUILDER & TEMPLATE GENERATOR */}
      {view === 'candidate-resume' && (
        <div className="container">
          <div className="header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div>
              <h2 style={{ color: 'var(--color-primary-text)', margin: 0 }}>Digital Resume &amp; Passport Generator</h2>
              <p style={{ color: 'var(--color-secondary-text)', margin: '0.2rem 0 0' }}>Enter your details to generate your standardized aesthetic resume card.</p>
            </div>
            <div className="header-actions" style={{ display: 'flex', gap: '0.75rem' }}>
              <button className="btn-outline" onClick={() => setView('candidate-onboarding')}>Back</button>
              <button className="btn-primary" onClick={() => setView('candidate-dashboard')}>Save &amp; Go to Dashboard</button>
            </div>
          </div>

          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div className="card">
              <h3 style={{ color: 'var(--color-dark-sage)', marginTop: 0 }}>Edit Information</h3>
              <label>Professional Title</label>
              <input type="text" value={resumeData.title} onChange={e => setResumeData({...resumeData, title: e.target.value})} />
              
              <label>Summary</label>
              <textarea rows="3" value={resumeData.summary} onChange={e => setResumeData({...resumeData, summary: e.target.value})} />
              
              <label>Key Skills (comma-separated)</label>
              <input type="text" value={resumeData.skills} onChange={e => setResumeData({...resumeData, skills: e.target.value})} />
              
              <label>Experience Background</label>
              <textarea rows="3" value={resumeData.experience} onChange={e => setResumeData({...resumeData, experience: e.target.value})} />
            </div>

            <div className="card" style={{ border: '2px solid var(--color-primary-sage)', background: '#FFFDF8' }}>
              <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                <h2 style={{ margin: 0, color: 'var(--color-primary-text)' }}>{candidateProfile.name || 'Candidate Name'}</h2>
                <p style={{ color: 'var(--color-dark-sage)', fontWeight: '600', margin: '0.2rem 0' }}>{resumeData.title}</p>
                <p style={{ color: 'var(--color-secondary-text)', fontSize: '0.85rem', margin: 0 }}>{candidateProfile.email || 'aarav@example.com'} | {candidateProfile.phone || '+91 98765 43210'}</p>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ color: 'var(--color-dark-sage)', margin: '0 0 0.3rem' }}>Professional Summary</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-primary-text)', margin: 0 }}>{resumeData.summary}</p>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ color: 'var(--color-dark-sage)', margin: '0 0 0.3rem' }}>Skill Evidence</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {resumeData.skills.split(',').filter(s => s.trim().length > 0).map((s, i) => (
                    <span key={i} className="badge">{s.trim()}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 style={{ color: 'var(--color-dark-sage)', margin: '0 0 0.3rem' }}>Experience</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-primary-text)', margin: 0 }}>{resumeData.experience}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. CANDIDATE DASHBOARD & SIMULATION / PASSPORT VIEW */}
      {view === 'candidate-dashboard' && (
        <div className="container">
          <div className="header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div>
              <h1 style={{ color: 'var(--color-primary-text)', margin: 0 }}>Welcome, {candidateProfile.name || 'Candidate'}</h1>
              <p style={{ color: 'var(--color-secondary-text)', margin: '0.2rem 0 0' }}>Identity Verified → Simulation Evidence → Talent Passport</p>
            </div>
            <div className="header-actions" style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn-outline" onClick={() => setView('candidate-resume')}>Edit Resume</button>
              <button className="btn-secondary" onClick={() => setView('role-select')}>Logout / Switch</button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="card">
              <h3 style={{ color: 'var(--color-dark-sage)', marginTop: 0 }}>Identity Continuity</h3>
              <p style={{ fontSize: '0.9rem' }}>Phone &amp; Email verified successfully. Session continuity token active.</p>
              <span className="badge">Verified Identity</span>
            </div>

            <div className="card">
              <h3 style={{ color: 'var(--color-dark-sage)', marginTop: 0 }}>Practical Simulation Status</h3>
              <p style={{ fontSize: '0.9rem' }}><strong>Task:</strong> {simulationState.task}</p>
              <p style={{ fontSize: '0.9rem' }}><strong>AI Usage Record:</strong> {simulationState.aiUsageLogged}</p>
              <span className="badge">{simulationState.status}</span>
            </div>

            <div className="card">
              <h3 style={{ color: 'var(--color-dark-sage)', marginTop: 0 }}>Verifier Decision</h3>
              <p style={{ fontSize: '0.9rem' }}>Status from Verifier Portal:</p>
              <span className="badge" style={{
                background: verificationStatus === 'Approved' ? 'var(--color-light-sage)' : verificationStatus === 'Rejected' ? '#FBEFEF' : '#FBF6EB',
                color: verificationStatus === 'Approved' ? 'var(--color-dark-sage)' : verificationStatus === 'Rejected' ? '#B55454' : '#B38637'
              }}>
                {verificationStatus}
              </span>
            </div>
          </div>

          <div className="card" style={{ marginTop: '1.5rem' }}>
            <h3 style={{ color: 'var(--color-dark-sage)', marginTop: 0 }}>Evidence-Backed Rubric Scorecard</h3>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--color-primary-text)', lineHeight: 1.8 }}>
              <li><strong>Technical Capability:</strong> {simulationState.rubricScores.technicalCapability}</li>
              <li><strong>Problem-Solving:</strong> {simulationState.rubricScores.problemSolving}</li>
              <li><strong>Communication:</strong> {simulationState.rubricScores.communication}</li>
            </ul>
          </div>
        </div>
      )}

      {/* 5. VERIFIER DASHBOARD & AUDIT PANEL */}
      {view === 'verifier-dashboard' && (
        <div className="container">
          <div className="header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div>
              <h1 style={{ color: 'var(--color-primary-text)', margin: 0 }}>Verifier Review Portal</h1>
              <p style={{ color: 'var(--color-secondary-text)', margin: '0.2rem 0 0' }}>Evaluate practical simulations, AI tool logs, and approve candidate passports.</p>
            </div>
            <button className="btn-outline" onClick={() => setView('role-select')}>Logout / Switch</button>
          </div>

          <div className="card">
            <h3 style={{ color: 'var(--color-dark-sage)', marginTop: 0 }}>Candidate Queue</h3>
            <div style={{ padding: '1.2rem', border: '1px solid var(--color-border)', borderRadius: '6px', background: '#fff', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem', color: 'var(--color-primary-text)', fontSize: '1.1rem' }}>
                  {candidateProfile.name || 'Aarav Sharma'} ({resumeData.title})
                </h4>
                <span className="badge" style={{
                  background: verificationStatus === 'Approved' ? 'var(--color-light-sage)' : verificationStatus === 'Rejected' ? '#FBEFEF' : '#FBF6EB',
                  color: verificationStatus === 'Approved' ? 'var(--color-dark-sage)' : verificationStatus === 'Rejected' ? '#B55454' : '#B38637'
                }}>
                  {verificationStatus}
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-secondary-text)', margin: '0 0 0.5rem' }}>
                Email: {candidateProfile.email || 'aarav@example.com'} | Phone: {candidateProfile.phone || '+91 98765 43210'}
              </p>
              
              <div style={{ background: 'var(--color-ivory)', padding: '1rem', borderRadius: '4px', margin: '1rem 0' }}>
                <p style={{ margin: '0 0 0.3rem', fontSize: '0.85rem' }}><strong>Simulation Artifacts:</strong> {simulationState.task}</p>
                <p style={{ margin: '0 0 0.3rem', fontSize: '0.85rem' }}><strong>AI Audit Trail:</strong> {simulationState.aiUsageLogged}</p>
                <p style={{ margin: 0, fontSize: '0.85rem' }}><strong>Rubric Score:</strong> {simulationState.rubricScores.technicalCapability}</p>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  className="btn-primary"
                  onClick={() => setVerificationStatus('Approved')}
                  style={{
                    background: verificationStatus === 'Approved' ? 'var(--color-dark-sage)' : 'var(--color-primary-sage)'
                  }}
                >
                  ✓ Approve Eligibility
                </button>
                <button
                  className="btn-outline"
                  style={{
                    borderColor: '#B55454',
                    color: '#B55454',
                    background: verificationStatus === 'Rejected' ? '#FBEFEF' : 'transparent'
                  }}
                  onClick={() => setVerificationStatus('Rejected')}
                >
                  ✕ Reject
                </button>
                {verificationStatus !== 'Pending Verifier Review' && (
                  <button
                    className="btn-outline"
                    onClick={() => setVerificationStatus('Pending Verifier Review')}
                    style={{ fontSize: '0.85rem' }}
                  >
                    Reset Decision
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
