'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

const apiBase = (process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api').replace(/\/$/, '');
const inputClass = 'w-full rounded-2xl border border-sage/10 bg-cream/50 px-6 py-4 outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20';

export function AuthForm() {
  const router = useRouter();
  const [registering, setRegistering] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function resumeSavedSession() {
      let user = null;
      try {
        user = JSON.parse(localStorage.getItem('botanicalGlowUser') || 'null');
      } catch {
        user = null;
      }

      if (!user) {
        if (!cancelled) setCheckingSession(false);
        return;
      }

      const destination = user.is_superuser ? '/dashboard/' : '/';
      const access = localStorage.getItem('botanicalGlowAccess');
      let accessIsValid = false;
      if (access) {
        try {
          const payload = JSON.parse(atob(access.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
          accessIsValid = Number(payload.exp) * 1000 > Date.now() + 30_000;
        } catch {
          accessIsValid = false;
        }
      }

      if (!accessIsValid) {
        const refresh = localStorage.getItem('botanicalGlowRefresh');
        if (!refresh) {
          localStorage.removeItem('botanicalGlowAccess');
          localStorage.removeItem('botanicalGlowUser');
          window.dispatchEvent(new Event('botanical-auth-changed'));
          if (!cancelled) setCheckingSession(false);
          return;
        }

        try {
          const response = await fetch(`${apiBase}/auth/refresh/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh }),
          });
          if (!response.ok) {
            localStorage.removeItem('botanicalGlowAccess');
            localStorage.removeItem('botanicalGlowRefresh');
            localStorage.removeItem('botanicalGlowUser');
            window.dispatchEvent(new Event('botanical-auth-changed'));
            if (!cancelled) setCheckingSession(false);
            return;
          }
          const tokens = await response.json();
          localStorage.setItem('botanicalGlowAccess', tokens.access);
        } catch {
          // Keep the saved account if the API is temporarily unreachable.
        }
      }

      if (!cancelled) router.replace(destination);
    }

    resumeSavedSession();
    return () => { cancelled = true; };
  }, [router]);

  async function submit(event) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setError('');
    const form = new FormData(formElement);
    const password = form.get('password');
    const payload = registering
      ? { username: form.get('username'), email: form.get('email'), password }
      : { identifier: form.get('identifier'), password };

    setBusy(true);
    try {
      const response = await fetch(`${apiBase}/auth/${registering ? 'register' : 'login'}/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) {
        const details = data.detail || Object.values(data).flat().join(' ');
        throw new Error(details || 'Please check your details and try again.');
      }
      localStorage.setItem('botanicalGlowAccess', data.access);
      localStorage.setItem('botanicalGlowRefresh', data.refresh);
      localStorage.setItem('botanicalGlowUser', JSON.stringify(data.user));
      window.dispatchEvent(new Event('botanical-auth-changed'));
      router.replace(data.user.is_superuser ? '/dashboard/' : '/');
    } catch (requestError) {
      setError(requestError.message || 'Could not connect to the store backend.');
    } finally {
      setBusy(false);
    }
  }

  if (checkingSession) {
    return <div className="grid min-h-[320px] w-full place-items-center text-sage" aria-label="Checking your account"><Loader2 className="h-7 w-7 animate-spin" /></div>;
  }

  return (
    <div className="max-w-md w-full bg-white p-10 md:p-12 rounded-[40px] soft-shadow">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-lora font-bold mb-2">{registering ? 'Create Account' : 'Welcome Back'}</h1>
        <p className="text-earth/60 text-sm">{registering ? 'Join Botanical Glow to save your routine.' : 'Sign in to your Botanical Glow account.'}</p>
      </div>
      <form onSubmit={submit} className="space-y-5">
        {registering ? (
          <>
            <label className="block text-xs font-bold uppercase tracking-widest text-earth/50">
              Username
              <input required name="username" autoComplete="username" className={`${inputClass} mt-2 normal-case font-normal tracking-normal`} placeholder="janedoe" />
            </label>
            <label className="block text-xs font-bold uppercase tracking-widest text-earth/50">
              Email address
              <input required name="email" type="email" autoComplete="email" className={`${inputClass} mt-2 normal-case font-normal tracking-normal`} placeholder="jane@example.com" />
            </label>
          </>
        ) : (
          <label className="block text-xs font-bold uppercase tracking-widest text-earth/50">
            Email or username
            <input required name="identifier" autoComplete="username" className={`${inputClass} mt-2 normal-case font-normal tracking-normal`} placeholder="jane@example.com" />
          </label>
        )}
        <label className="block text-xs font-bold uppercase tracking-widest text-earth/50">
          Password
          <input required name="password" type="password" autoComplete={registering ? 'new-password' : 'current-password'} className={`${inputClass} mt-2 normal-case font-normal tracking-normal`} placeholder="At least 8 characters" />
        </label>
        {error && <p role="alert" className="text-sm text-terracotta">{error}</p>}
        <button type="submit" disabled={busy} className="w-full rounded-full bg-sage py-5 font-bold text-white shadow-lg shadow-sage/20 transition hover:bg-sage/90 disabled:opacity-60">
          {busy ? 'Please wait…' : registering ? 'Create Account' : 'Sign In'}
        </button>
      </form>
      <div className="mt-8 border-t border-sage/10 pt-7 text-center">
        <p className="text-sm text-earth/60">
          {registering ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            type="button"
            onClick={() => { setRegistering(!registering); setError(''); }}
            className="font-bold text-sage hover:underline"
          >
            {registering ? 'Sign in' : 'Create one'}
          </button>
        </p>
      </div>
    </div>
  );
}
