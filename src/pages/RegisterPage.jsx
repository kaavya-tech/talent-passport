import React from 'react';
import { Card, Badge, Button } from '../components';
import { Link } from 'react-router-dom';

export function RegisterPage() {
  return (
    <Card
      title="Register Candidate Account"
      subtitle="Route: /register"
      action={<Badge variant="sage" size="sm">Auth</Badge>}
      footer={
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>
            Already have an account? <Link to="/login" style={{ fontWeight: 'var(--font-weight-medium)' }}>Sign In</Link>
          </span>
          <Link to="/dashboard">
            <Button variant="dark" size="sm">Enter as Demo</Button>
          </Link>
        </div>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <p>
          This is placeholder content indicating the <strong>/register</strong> route.
        </p>
        <p style={{ fontSize: 'var(--font-size-xs)' }}>
          Candidate registration steps, onboarding workflows, and verification signups will be implemented during the application build phase.
        </p>
      </div>
    </Card>
  );
}

export default RegisterPage;
