import { useState } from 'react';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface AuthPageProps {
  onNavigate: (view: string) => void;
}

export function AuthPage({ onNavigate }: AuthPageProps) {
  const { signIn, signUp } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      if (isSignUp) {
        await signUp(email, password, displayName);
        setSuccess('Account created successfully.');
        setTimeout(() => onNavigate('home'), 1500);
      } else {
        await signIn(email, password);
        onNavigate('home');
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-[72px] min-h-screen bg-white">
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-72px)]">
        <div className="hidden lg:block relative">
          <img
            src="https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Gallery"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-end p-16">
            <div>
              <p className="text-white/50 text-[11px] uppercase tracking-[0.2em] mb-3">
                Artfullness
              </p>
              <h2 className="font-serif text-4xl text-white font-medium leading-snug mb-4">
                Art that heals.<br />Purchases that matter.
              </h2>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                Join a community of artists and collectors using creativity
                to champion mental health awareness.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-5 py-16 lg:px-16">
          <div className="w-full max-w-md">
            <div className="mb-10">
              <h1 className="font-serif text-3xl font-medium text-gray-900 mb-2">
                {isSignUp ? 'Create an account' : 'Welcome back'}
              </h1>
              <p className="text-gray-500 text-sm">
                {isSignUp
                  ? 'Join Artfullness to discover and collect meaningful art.'
                  : 'Sign in to your Artfullness account.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {isSignUp && (
                <div>
                  <label className="text-[11px] text-gray-400 uppercase tracking-wider block mb-2">
                    Display Name
                  </label>
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-gray-400 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
              )}

              <div>
                <label className="text-[11px] text-gray-400 uppercase tracking-wider block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-gray-400 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="text-[11px] text-gray-400 uppercase tracking-wider block mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-gray-400 transition-colors pr-12"
                    placeholder="Enter password"
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-sm text-red-600 bg-red-50 px-4 py-3">{error}</p>
              )}
              {success && (
                <p className="text-sm text-green-700 bg-green-50 px-4 py-3">{success}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-4 text-[13px] font-medium tracking-wide hover:bg-gray-900 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <span>{loading ? 'Please wait...' : isSignUp ? 'Create Account' : 'Sign In'}</span>
                {!loading && <ArrowRight size={16} />}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                  onClick={() => { setIsSignUp(!isSignUp); setError(''); setSuccess(''); }}
                  className="font-medium text-black hover:underline"
                >
                  {isSignUp ? 'Sign in' : 'Create one'}
                </button>
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-[11px] text-gray-400 text-center leading-relaxed">
                By continuing, you agree to the Artfullness Terms of Service.
                Your purchases support mental health initiatives worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
