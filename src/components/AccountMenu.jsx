'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, LogOut, LayoutDashboard, UserRound } from 'lucide-react';
import { Link } from '@/components/Link';

function getSavedUser() {
  try {
    return JSON.parse(window.localStorage.getItem('botanicalGlowUser') || 'null');
  } catch {
    return null;
  }
}

export function AccountMenu() {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sync = () => setUser(getSavedUser());
    sync();
    window.addEventListener('botanical-auth-changed', sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener('botanical-auth-changed', sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  function logout() {
    window.localStorage.removeItem('botanicalGlowAccess');
    window.localStorage.removeItem('botanicalGlowRefresh');
    window.localStorage.removeItem('botanicalGlowUser');
    window.dispatchEvent(new Event('botanical-auth-changed'));
    setOpen(false);
  }

  if (!user) {
    return (
      <Link aria-label="Sign in" className="flex h-9 w-9 items-center justify-center rounded-full text-[#5D4037]/70 transition-colors hover:bg-[#8DAA91]/10 hover:text-[#8DAA91]" href="login.html">
        <UserRound className="h-5 w-5" />
      </Link>
    );
  }

  const label = user.username || user.email || 'Account';
  const initials = label.slice(0, 1).toUpperCase();

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Open account menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded-full text-[#5D4037] transition hover:text-sage"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage text-sm font-bold text-white">{initials}</span>
        <ChevronDown className={`hidden h-4 w-4 sm:block transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <>
          <button aria-label="Close account menu" className="fixed inset-0 z-40 cursor-default" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-12 z-50 w-64 rounded-3xl border border-sage/10 bg-white p-4 text-left shadow-xl">
            <div className="border-b border-sage/10 px-2 pb-4">
              <p className="truncate font-bold text-earth">{label}</p>
              <p className="mt-1 truncate text-xs text-earth/55">{user.email}</p>
            </div>
            {user.is_superuser && (
              <Link className="mt-2 flex items-center gap-2 rounded-2xl px-3 py-2.5 text-sm font-semibold text-earth hover:bg-cream hover:text-sage" href="dashboard.html" onClick={() => setOpen(false)}>
                <LayoutDashboard className="h-4 w-4" /> Product dashboard
              </Link>
            )}
            <button onClick={logout} className="mt-1 flex w-full items-center gap-2 rounded-2xl px-3 py-2.5 text-left text-sm font-semibold text-terracotta hover:bg-cream">
              <LogOut className="h-4 w-4" /> Log out
            </button>
          </div>
        </>
      )}
    </div>
  );
}
