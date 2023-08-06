import Main from "@/components/main"
import CountryDesc from "@/components/country_desc"
import Services from "@/components/services"
import Todo from "@/components/todo"

export default function Home() {
  return (
    <main className="py-[3.8rem]">
      <Main />
      <CountryDesc />
      <Services />
      <Todo />
    </main>
  )
}
