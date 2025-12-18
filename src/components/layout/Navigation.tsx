'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '../ui/ThemeToggle';

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 bg-background/80">
      <nav className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between glass-card">
        <div className="flex items-center space-x-8">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover-link ${
                pathname === href ? 'text-accent' : 'text-muted'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <ThemeToggle />
          <Link
            href="/contact"
            className="px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            Hire Me
          </Link>
        </div>
      </nav>
    </header>
  );
}