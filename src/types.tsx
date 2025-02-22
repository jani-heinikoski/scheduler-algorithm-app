export interface Page {
    name: string;
    relativePath: string;
}

export interface ResponsiveAppBarProps {
    pages: Array<Page>;
    toggleDarkMode: () => void;
}
