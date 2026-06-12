import { useNavState } from "@/store/useNav";


export const BrightnessWrapper = ({ children }:{children:  React.ReactNode}) => {
  const brightness = useNavState((s) => s.brightness);
  const night = useNavState((s) => s.nightMode);


  return (
    <div
      className={`w-screen h-screen ${night && "bg-amber-600/10"}`}
      style={{
        filter: `brightness(${brightness}%)`,
        backgroundColor: night ?  `rgb(252, 186, 3)` : "",
      }}
    >
      {children}
    </div>
  );
};