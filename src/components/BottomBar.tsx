import { Folder, Globe, SquareChevronRight } from "lucide-react"
import { AppIcon } from "./bottom-navbar/AppIcon"
import { useBottomNav } from "@/store/useBottomNav"

export const BottomBar = () => {
  const {staticNav} = useBottomNav()
  return (
    <div className={`fixed bottom-0 left-1/2 -translate-x-1/2  w-full max-w-140 flex flex-col items-center group pb-2 overflow-hidden z-50`}>
      <div className="w-full h-8" />

      <div className={`bg-black/20 backdrop-blur-lg border border-purple-600/40 p-4 rounded-2xl flex gap-4 items-center
                      ${!staticNav ? "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100" : ""}
                      transition-all duration-300 ease-out`}>
        <AppIcon name="Browser" Icon={Globe} color="bg-orange-500" />
        <AppIcon name="Files" Icon={Folder} color="bg-blue-500" />
        <AppIcon name="Terminal" Icon={SquareChevronRight} color="bg-gray-800" />
      </div>
    </div>
  )
}