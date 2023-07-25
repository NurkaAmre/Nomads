import Main from "@/components/main"
import CountryDesc from "@/components/country_desc"
import Services from "@/components/services"

export default function Home() {
  return (
    <main className="py-[3.8rem]">
      <Main />
      <CountryDesc />
      <Services />
    </main>
  )
}
