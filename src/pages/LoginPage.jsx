import React from 'react';
import { Card, Badge, Button } from '../components';
import { Link } from 'react-router-dom';

export function LoginPage() {
  return (
    <Card
      title="Candidate Login"
      subtitle="Route: /login"
      action={<Badge variant="sage" size="sm">Auth</Badge>}
      footer={
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>
            Need an account? <Link to="/register" style={{ fontWeight: 'var(--font-weight-medium)' }}>Register</Link>
          </span>
          <Link to="/dashboard">
            <Button variant="dark" size="sm">Enter as Demo</Button>
          </Link>
        </div>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <p>
          This is placeholder content indicating the <strong>/login</strong> route.
        </p>
        <p style={{ fontSize: 'var(--font-size-xs)' }}>
          Candidate authentication screens, form validation, and credential handling will be built in the application phase.
        </p>
      </div>
    </Card>
  );
}

export default LoginPage;
