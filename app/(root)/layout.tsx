// this layout is used for the root components like the home, layout, transactions 

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            SIDEBAR
            {children}
        </main>
    );
}
