import { Head, useForm } from '@inertiajs/react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (event) => {
        event.preventDefault();
        post('/login');
    };

    return (
        <>
            <Head title="Anmelden" />
            <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
                <form onSubmit={submit} className="w-full max-w-sm space-y-5 rounded-xl bg-white p-8 shadow">
                    <h1 className="text-2xl font-semibold">clockd</h1>

                    <div className="space-y-1">
                        <label htmlFor="email" className="block text-sm font-medium">
                            E-Mail
                        </label>
                        <input
                            id="email"
                            type="email"
                            autoComplete="username"
                            autoFocus
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2"
                        />
                        {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="password" className="block text-sm font-medium">
                            Passwort
                        </label>
                        <input
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2"
                        />
                        {errors.password && <p className="text-sm text-red-600">{errors.password}</p>}
                    </div>

                    <label className="flex items-center gap-2 text-sm">
                        <input
                            type="checkbox"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        Angemeldet bleiben
                    </label>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full rounded-md bg-gray-900 px-4 py-2 font-medium text-white disabled:opacity-50"
                    >
                        Anmelden
                    </button>
                </form>
            </main>
        </>
    );
}
