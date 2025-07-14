// Zentrale Type-Definitionen für das Patienten-Dashboard

export type Project = {
    id: string | number;
    name: string;
    age: string;
    health: string;
};

export type ProjectsState = {
    selectedProjectId: string | number | null | undefined;
    projects: Project[];
};

// Props Types für Komponenten
export type ProjectsSidebarProps = {
    onStartAddProject: () => void;
    projects: Project[];
    selectedProjectId?: string | number | null;
    onSelectProject?: (id: string | number) => void;
};

export type NewProjectProps = {
    onAdd: (projectData: Omit<Project, 'id'>) => void;
    onCancel?: () => void;
};

export type NoPatientSelectedProps = {
    onStartAddProject: () => void;
};

export type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    [key: string]: any;
};

export type ModalProps = {
    children: React.ReactNode;
};

export type ModalRef = {
    open: () => void;
    close: () => void;
};
