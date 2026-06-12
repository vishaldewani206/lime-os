import { BatteryMedium, Volume2Icon } from "lucide-react"
import NavMenu from "./NavMenu"
import { useRef, useState } from "react"
import { DisplayDate } from "./DisplayDate"
import { useOutsideClick } from "@/hook/useOutsideClick"

const Navbar = () => {
  const [openNavMenu, setOpenNavMenu] = useState(false)

  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => setOpenNavMenu(false));

  return (
    <nav className="flex justify-between px-3 py-1 bg-black/30 text-white select-none relative">
      <div>
        <img src="/favicon.svg" className="w-6 h-6 bg-white p-1 rounded-full object-contain" alt="" />
      </div>
      <div>
        <DisplayDate />
      </div>
      <div onClick={()=>setOpenNavMenu(!openNavMenu)} className={`flex gap-3 justify-center items-center hover:bg-accent/20 px-2 py-1 rounded-full ${openNavMenu ? "bg-accent/20" : ""}`}>
        <img src="/images/icons/wifi-on.svg" className="w-5" alt="wifi" />
        <Volume2Icon className="w-5" />
        <p className="flex gap-1 items-center">
          <BatteryMedium className="w-5" />
          <span>75%</span>
        </p>
      </div>
      {openNavMenu && <NavMenu ref={ref} />}
    </nav>
  )
}

export default Navbar