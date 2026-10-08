import React from 'react';
import { PageHeader, Card, Badge, Button, ProgressBar } from '../components';
import { LayoutDashboard, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DashboardPage() {
  return (
    <div>
      <PageHeader
        category="Talent Passport"
        badge={<Badge variant="sage" size="sm">Route: /dashboard</Badge>}
        title="Dashboard"
        description="Placeholder view for the candidate dashboard. Individual application page features will be built in the next phase."
        actions={
          <Link to="/profile">
            <Button variant="dark" size="md" icon={<ArrowRight size={16} />} iconPosition="right">
              Go to Profile
            </Button>
          </Link>
        }
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
        <Card
          title="Route Status"
          subtitle="Placeholder view"
          action={<Badge variant="success" size="sm" dot>Active</Badge>}
        >
          <p style={{ marginBottom: 'var(--space-4)' }}>
            This is a placeholder for <code>/dashboard</code>. The design system tokens and shared application layout are active and ready.
          </p>
          <ProgressBar value={100} label="Foundation Status" variant="dark" />
        </Card>

        <Card
          title="Quick Route Navigator"
          subtitle="Click to verify other routes"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <Link to="/profile" style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--space-2) 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
              <span>/profile</span>
              <span>Candidate Profile →</span>
            </Link>
            <Link to="/resume/upload" style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--space-2) 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
              <span>/resume/upload</span>
              <span>Upload Resume →</span>
            </Link>
            <Link to="/resume/edit" style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--space-2) 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
              <span>/resume/edit</span>
              <span>Edit Resume →</span>
            </Link>
            <Link to="/resume/preview" style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--space-2) 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
              <span>/resume/preview</span>
              <span>Preview Resume →</span>
            </Link>
            <Link to="/login" style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--space-2) 0' }}>
              <span>/login</span>
              <span>Candidate Login →</span>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default DashboardPage;
