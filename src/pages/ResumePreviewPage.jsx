import React from 'react';
import { PageHeader, Card, Badge, Button } from '../components';
import { Link } from 'react-router-dom';

export function ResumePreviewPage() {
  return (
    <div>
      <PageHeader
        category="Standardized Resume"
        badge={<Badge variant="sage" size="sm">Route: /resume/preview</Badge>}
        title="Resume Preview"
        description="Placeholder view for inspecting the standardized talent passport resume format."
        actions={
          <Link to="/dashboard">
            <Button variant="dark" size="md">Back to Dashboard</Button>
          </Link>
        }
      />

      <Card
        title="Resume Preview Placeholder"
        subtitle="Route: /resume/preview"
        action={<Badge variant="neutral" size="sm">Under Construction</Badge>}
      >
        <p>
          This is placeholder content indicating the <strong>/resume/preview</strong> route.
          Future implementation will show the rendered clean PDF-style resume with verified tags.
        </p>
      </Card>
    </div>
  );
}

export default ResumePreviewPage;
