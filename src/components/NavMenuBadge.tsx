type NavMenuBadgeProps = {
  Icon: any,
  text: string,
  subText?: string
}
const NavMenuBadge = ({Icon, text, subText}: NavMenuBadgeProps) => {
  return (
    <div className='bg-primary px-4 py-2 flex gap-3 rounded-full items-center hover:bg-primary/80 cursor-pointer'>
      <Icon className="w-5" />
      <div>
        <h4 className="font-bold -mb-1">{text}</h4>
        {subText && <p className="text-gray-300">{subText}</p>}
      </div>
    </div>
  )
}

export default NavMenuBadge