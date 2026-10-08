import React from 'react';
import { PageHeader, Card, Badge, Button } from '../components';
import { Link } from 'react-router-dom';

export function ResumeEditPage() {
  return (
    <div>
      <PageHeader
        category="Standardized Resume"
        badge={<Badge variant="sage" size="sm">Route: /resume/edit</Badge>}
        title="Edit Standardized Resume"
        description="Placeholder view for editing resume sections including experience, skills, and education."
        actions={
          <Link to="/resume/preview">
            <Button variant="dark" size="md">Next: Preview Resume</Button>
          </Link>
        }
      />

      <Card
        title="Resume Edit Placeholder"
        subtitle="Route: /resume/edit"
        action={<Badge variant="neutral" size="sm">Under Construction</Badge>}
      >
        <p>
          This is placeholder content indicating the <strong>/resume/edit</strong> route.
          Future implementation will provide standardized multi-section resume forms using FormSection, Input, and Select components.
        </p>
      </Card>
    </div>
  );
}

export default ResumeEditPage;
