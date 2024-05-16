import http from './Instance.ts';


interface LoginResponse {
    token: string;
    user: {
        id: number;
        email: string;
        name: string;
    }
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
    const response = await http.post('/auth/login', { username: email, password });
    return response.data;
};