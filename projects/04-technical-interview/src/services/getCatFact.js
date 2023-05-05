const CAT_FACT_ENDPOINT = 'https://catfact.ninja/fact'

export default async getCatFact => {
  const res = await fetch(CAT_FACT_ENDPOINT)
  const json = await res.json()
  return json.fact
}
