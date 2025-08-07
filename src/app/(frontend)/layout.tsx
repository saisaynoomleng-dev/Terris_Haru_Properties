import { SanityLive } from "@/sanity/lib/live";
import "../globals.css";

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main>
            {children}

            <SanityLive />
        </main>
    );
};

export default MainLayout;
