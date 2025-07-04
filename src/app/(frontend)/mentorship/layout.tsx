import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentorship Platform",
    description: "A platform for mentorship and learning",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="max-h-[100dvh] w-full">
            {children}
        </main>

    );
}
