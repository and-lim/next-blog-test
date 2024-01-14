export default function Jumbotron() {
  return (
    <section className="grid grid-cols-2 h-[60vh] items-center my-20 px-20">
    <div>
      <h2 className="text-7xl font-bold">
        Make better <br /> Blog 🧾
      </h2>
      <p className="text-3xl font-light mt-5">why learn how to write a blog?</p>
    </div>
    <div>
      <img src="/jumbotron.png" alt="jumbotron" />
    </div>
  </section>
  )
}
