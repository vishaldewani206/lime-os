import {  BatteryMedium, Moon, Power, Sun, Volume2 } from "lucide-react"
import { Slider } from "../ui/slider"
import NavMenuBadge from "./NavMenuBadge"
import { useNavState } from "@/store/useNav";
import type { Ref } from "react";

const NavMenu = ({ref}: {ref: Ref<HTMLDivElement>}) => {
  const { toggleWifi, toggleNightMode, wifi, nightMode } = useNavState();
  
  const brightness = useNavState((s) => s.brightness);
  const changeBrightness = useNavState((s) => s.changeBrightness);

  return (
    <div ref={ref} className="absolute -bottom-80 right-2 bg-slate-800 w-70 p-4 rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <p className="flex gap-1 items-center hover:bg-white/10 px-2 py-1 rounded-2xl">
          <BatteryMedium className="w-5" />
          <span>75%</span>
        </p>
        <p className="hover:bg-white/10 px-2 py-1 rounded-2xl">
        <Power className="w-5" />
        </p>
      </div>

      <div className="flex items-center gap-2 my-4">
        <Volume2 className="w-5" />
        <Slider
          defaultValue={[75]}
          max={100}
          step={1}
          className="mx-auto w-full max-w-xs"
        />
      </div>

      <div className="flex items-center gap-2 mt-2 mb-8">
        <Sun className="w-5" />
        <Slider
          value={[brightness]}
          max={100}
          step={1}
          onValueChange={(value) => changeBrightness(value[0])}
          className="mx-auto w-full max-w-xs"
        />
      </div>

      <div className="space-y-4">
        <NavMenuBadge on={wifi} onClick={toggleWifi} Icon={()=><img src="/images/icons/wifi-on.svg" />} text="Wifi" subText="Connected" />
        <NavMenuBadge on={nightMode} onClick={toggleNightMode} Icon={Moon} text="Night Mode" subText="Off" />
      </div>
    </div>
  )
}

export default NavMenu