import React from 'react';
import { PageHeader, Card, Badge, Button } from '../components';
import { Link } from 'react-router-dom';

export function ProfilePage() {
  return (
    <div>
      <PageHeader
        category="Talent Passport"
        badge={<Badge variant="sage" size="sm">Route: /profile</Badge>}
        title="Candidate Profile"
        description="Placeholder view for the candidate profile page. Full profile editing and data will be implemented in subsequent phases."
        actions={
          <Link to="/resume/upload">
            <Button variant="dark" size="md">Next: Upload Resume</Button>
          </Link>
        }
      />

      <Card
        title="Candidate Profile Placeholder"
        subtitle="Route: /profile"
        action={<Badge variant="neutral" size="sm">Under Construction</Badge>}
      >
        <p>
          This is placeholder content indicating the <strong>/profile</strong> route.
          Future implementation will feature personal details, verification badges, and career preferences.
        </p>
      </Card>
    </div>
  );
}

export default ProfilePage;
