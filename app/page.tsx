/**
 * You're importing a component that needs useEffect. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.
  Learn more: https://nextjs.org/docs/getting-started/react-essentials
 */
'use client'
import { useEffect } from "react"

export default function Homepage() {
  console.log("Homepage rendering")

  useEffect(() => {
    console.log("hehe")
  }, [])
  return (
    <>
      <h1>This is homepage</h1>
      <p>This is homepage description</p>
    </>
  )
}