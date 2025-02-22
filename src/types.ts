export interface Page {
    name: string;
    relativePath: string;
}

export interface AppContextType {
    toggleDarkMode: () => void;
    isDarkMode: boolean;
    pages: Page[];
}
