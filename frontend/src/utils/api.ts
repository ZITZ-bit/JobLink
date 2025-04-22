export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchUsers() {
  const res = await fetch(`${API_URL}/users`);

    if (!res.ok) throw new Error('Error al obtener usuarios');
    
  return res.json();
}
