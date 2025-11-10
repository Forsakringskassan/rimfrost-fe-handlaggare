const USE_API = false // flip to true when backend is ready
const API_BASE = 'https://api.example.com' // future

export type Arende = {
    fornamn: string,
    efternamn: string,
    personnummer: number,
    anstalld: boolean,
    harHund: boolean,
    arendeId: number
}

export async function listItems(): Promise<Array<Pick<Arende,'arendeId'|'fornamn'>>> {
  if (!USE_API) {
    const data: Arende[] = await import('../assets/arenden.json').then(m => m.default)
    return data.map(({ arendeId, fornamn }) => ({ arendeId, fornamn }))
  }
  const res = await fetch(`${API_BASE}/items`)
  if (!res.ok) throw new Error('API error')
  const data: Arende[] = await res.json()
  return data.map(({ arendeId, fornamn }) => ({ arendeId, fornamn }))
}

export async function getItemById(id:number): Promise<Arende | null> {
  if (!USE_API) {
    const data: Arende[] = await import('../assets/arenden.json').then(m => m.default)
    return data.find(i => i.arendeId === id) ?? null
  }
  const res = await fetch(`${API_BASE}/items/${id}`)
  if (res.status === 404) return null
  if (!res.ok) throw new Error('API error')
  return res.json()
}
