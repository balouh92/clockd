import { Head, router } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <main className="mx-auto max-w-2xl p-8">
                <h1 className="text-2xl font-semibold">clockd</h1>
                <p className="mt-2 text-gray-600">Inertia und React laufen.</p>
                <button
                    type="button"
                    onClick={() => router.post('/logout')}
                    className="mt-6 rounded-md border border-gray-300 px-3 py-1.5 text-sm"
                >
                    Abmelden
                </button>
            </main>
        </>
    );
}
