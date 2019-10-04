import React, { useEffect, useState } from 'react'

export function useFetch<T = any>(url: string, options?: RequestInit) {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  useEffect(() => {
    setLoading(true)
    fetch(url, options)
      .then((r) => r.json())
      .then((json) => {
        setData(json)
      })
      .catch((e) => setError(e))
      .finally(() => {
        setLoading(false)
      })
  }, [url, options])
  return {
    data,
    loading,
    error,
  }
}
