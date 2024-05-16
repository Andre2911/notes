import http from './Instance.ts';
import {Category, Note} from "../types/types.ts";




export const getAllCategories = async (): Promise<Category[]> => {
    const response = await http.get<Category[]>('/api/categories' );
    return response.data ;
};

export const createCategory = async (name: string): Promise<Category> => {
    const response = await http.post<Category>('/api/categories', { name });
    return response.data;
};
export const deleteCategory = async (id: number): Promise<void> => {
    await http.delete(`/api/categories/${id}`);
}

export const getNotesbyCategory = async (ids: number[]): Promise<Note[]> => {
    const arrayString = ids.join(',');
    const response = await http.get(`/api/notes/byCategory`, { params: {categories: arrayString}, paramsSerializer:  {
        indexes: true
        } });
    return response.data;
}

export const getNote = async (id: number): Promise<Note> => {
    const response = await http.get<Note>(`/api/notes/${id}`);
    return response.data
}

export const createNote = async (dataForm: Note): Promise<Note> => {
    const response = await http.post<Note>('/api/notes', dataForm );
    return response.data;
}

export const deleteNote = async (id: number): Promise<void> => {
    await http.delete(`/api/notes/${id}`);
}
