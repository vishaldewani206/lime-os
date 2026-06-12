import { Calendar } from "@/components/ui/calendar"
import { useOutsideClick } from "@/hook/useOutsideClick"
import { useEffect, useRef, useState } from "react"
export const DisplayDate = () => {
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)

  const [formattedDate, setFormattedDate] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();

      const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "2-digit",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      };

      const formatted = now.toLocaleString("en-US", options);

      setFormattedDate(formatted);
    };

    update(); 

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  useOutsideClick(ref, () => setShow(false));
  

  return (
    <div onClick={()=>setShow(!show)} className="relative">
      <p className={`hover:bg-accent/20 px-2 py-1 rounded-full ${show ? "bg-accent/20" : ""}`}>{formattedDate}</p>
      {show && (
        <div ref={ref}>
          <Calendar 
            classNames={{
              selected: "bg-transparent"
            }}
            required buttonVariant={"ghost"}  className="absolute top-10 right-1/2 translate-x-1/2 bg-slate-800 rounded-lg  w-100" mode="single" selected={date} onSelect={setDate} />
        </div>
      )}
    </div>
  )
}
