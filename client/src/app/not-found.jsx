import Link from 'next/link';
import { Button, EmptyState } from '../components/ui';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6">
      <EmptyState
        title="404 - Page Not Found"
        description="Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist."
        action={
          <Link href="/">
            <Button variant="primary">Return Home</Button>
          </Link>
        }
      />
    </div>
  );
}
