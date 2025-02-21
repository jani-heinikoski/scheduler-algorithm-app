export interface Page {
    name: string;
    href: string;
}

export interface ResponsiveAppBarProps {
    pages: Array<Page>;
    toggleDarkMode: () => void;
}
