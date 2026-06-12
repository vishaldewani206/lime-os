
const Navbar = () => {
  return (
    <nav className="flex justify-between px-3 py-1 bg-black/30 text-white">
      <div>
        <img src="/favicon.svg" className="w-6 h-6 bg-white p-1 rounded-full object-contain" alt="" />
      </div>
      <div>Jun 12 6:11 PM</div>
      <div>
        <img src="/images/icons/wifi-on.svg" className="w-5" />
      </div>
    </nav>
  )
}

export default Navbar