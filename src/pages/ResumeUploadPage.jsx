import React from 'react';
import { PageHeader, Card, Badge, Button } from '../components';
import { Link } from 'react-router-dom';

export function ResumeUploadPage() {
  return (
    <div>
      <PageHeader
        category="Standardized Resume"
        badge={<Badge variant="sage" size="sm">Route: /resume/upload</Badge>}
        title="Upload Resume"
        description="Placeholder view for the resume upload screen. Document parsing and upload features will be built in the application phase."
        actions={
          <Link to="/resume/edit">
            <Button variant="dark" size="md">Next: Edit Resume</Button>
          </Link>
        }
      />

      <Card
        title="Resume Upload Placeholder"
        subtitle="Route: /resume/upload"
        action={<Badge variant="neutral" size="sm">Under Construction</Badge>}
      >
        <p>
          This is placeholder content indicating the <strong>/resume/upload</strong> route.
          Future implementation will support PDF/DOCX file dropzones and extraction preview.
        </p>
      </Card>
    </div>
  );
}

export default ResumeUploadPage;
