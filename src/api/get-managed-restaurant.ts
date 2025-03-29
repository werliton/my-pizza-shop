import { api } from "@/lib/axios"

interface GetRestaurantsResponse {
    id: string;
    name: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    description: string | null;
    managerId: string | null;
}

export async function getManagedRestaurants(){
  const response = await api.get<GetRestaurantsResponse>('/managed-restaurant')
  return response.data
}
