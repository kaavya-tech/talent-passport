import React from 'react';
import { Card, Button } from '../components';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div style={{ maxWidth: '480px', margin: 'var(--space-12) auto' }}>
      <Card
        title="Page Not Found (404)"
        subtitle="The requested route does not exist"
      >
        <p style={{ marginBottom: 'var(--space-6)' }}>
          Please use the navigation menu or return to the main dashboard.
        </p>
        <Link to="/dashboard">
          <Button variant="dark">Return to Dashboard</Button>
        </Link>
      </Card>
    </div>
  );
}

export default NotFoundPage;
