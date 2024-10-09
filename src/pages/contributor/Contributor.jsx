import "./Contributor.css"

const Contributor = () => {
  return (
    <div className="contributor">
      <h1>Become a contributor?</h1>
      <p>Join us and get tips & tricks to become a great <br /> Designer and Developer</p>
      <form>
        <input type="email" placeholder="Enter your email..." />
        <button>Join Us</button>
      </form>
    </div>
  )
}

export default Contributor
