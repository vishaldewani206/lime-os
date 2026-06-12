
type WallpaperProps = {
  adjustment: "fill" | "center" | "cover" | "contain"
}

const Wallpaper = ({adjustment}: WallpaperProps) => {

  const fillType = `object-${adjustment}`

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 flex ">
      <img className={`w-full h-full ${fillType}`} src="/images/wallpaper-1.jpg" />
    </div>
  )
}

export default Wallpaper