'use client';
import { useEffect } from 'react';
import { Button, EmptyState } from '../components/ui';

export default function Error({ error, reset }) {
  useEffect(() => {
    // We would log to an error reporting service here
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6">
      <EmptyState
        title="Something went wrong!"
        description="An unexpected error occurred. Our team has been notified."
        action={
          <Button variant="primary" onClick={() => reset()}>
            Try again
          </Button>
        }
      />
    </div>
  );
}
