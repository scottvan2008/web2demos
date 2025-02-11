import "./globals.css";

export const metadata = {
    title: "Web 2 Demos",
    description: "Web 2 Demos",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
