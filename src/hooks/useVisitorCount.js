import { useState, useEffect } from 'react'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

async function fetchTotalCount() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/daily_visitors?select=count`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  })
  const data = await res.json()
  return data.reduce((sum, row) => sum + row.count, 0)
}

export function useVisitorCount() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return

    const today = new Date().toISOString().split('T')[0]
    const alreadyCounted = sessionStorage.getItem('visited_today') === today

    async function recordVisit() {
      try {
        if (!alreadyCounted) {
          await fetch(`${SUPABASE_URL}/rest/v1/rpc/increment_daily_visitor`, {
            method: 'POST',
            headers: {
              apikey: SUPABASE_ANON_KEY,
              Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
          })
          sessionStorage.setItem('visited_today', today)
        }
        const total = await fetchTotalCount()
        setCount(total)
      } catch (err) {
        console.error('Visitor count error:', err)
      }
    }

    recordVisit()
  }, [])

  return count
}
