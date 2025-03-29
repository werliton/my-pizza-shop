import { api } from '@/lib/axios';


export interface SignUpPayload {
    email: string;
    restaurantName: string;
    managerName: string;
    phone: string;
}

export async function signUp(payload: SignUpPayload) {
    await api.post('/restaurants', payload);
}