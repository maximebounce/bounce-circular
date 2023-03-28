import Link from 'next/link';

export default function SimpleNavBar() {
  return (
    <nav className="bg-bounce-100 px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/assets/images/bounce-logo.png"
            className="mt-3 mr-3 h-9"
            alt="Bounce Sports logo"
          />
        </Link>
      </div>
    </nav>
  );
}
