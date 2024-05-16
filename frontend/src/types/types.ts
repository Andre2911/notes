export type Category = {
    id: number;
    name: string;
}

export type Note = {
    id: number | null;
    title: string;
    content: string;
    category: Category | null;
    createdAt: string;
    status: "ARCHIVED" | "UNARCHIVED";
};