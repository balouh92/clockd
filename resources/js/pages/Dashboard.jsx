import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <main className="mx-auto max-w-2xl p-8">
                <h1 className="text-2xl font-semibold">clockd</h1>
                <p className="mt-2 text-gray-600">Inertia und React laufen.</p>
            </main>
        </>
    );
}
