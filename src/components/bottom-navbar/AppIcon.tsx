import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type AppIconTypes = {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
}

export const AppIcon = ({name, Icon, color} : AppIconTypes) => {
  return (
    <Tooltip>
      <TooltipTrigger className="hover:-translate-y-2 transition-all hover:scale-110 cursor-pointer">
      <Icon className={`text-white p-2 w-10 h-10 rounded-full ${color}`} />
      </TooltipTrigger>
      <TooltipContent>
        <p>Open {name}</p>
      </TooltipContent>
    </Tooltip>
  )
}
