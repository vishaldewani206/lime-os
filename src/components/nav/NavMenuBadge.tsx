type NavMenuBadgeProps = {
  Icon: any,
  text: string,
  subText?: string,
  onClick: React.EventHandler<React.MouseEvent<HTMLElement>>,
  on: boolean
}
const NavMenuBadge = ({Icon, text, subText, onClick, on}: NavMenuBadgeProps) => {
  return (
    <div onClick={onClick} className={`px-4 py-2 flex gap-3 rounded-full items-center hover:opacity-80 cursor-pointer ${on ? "bg-primary" : "bg-gray-400"}`}>
      <Icon className="w-5" />
      <div>
        <h4 className="font-bold -mb-1">{text}</h4>
        {subText && <p className="text-gray-300">{subText}</p>}
      </div>
    </div>
  )
}

export default NavMenuBadge