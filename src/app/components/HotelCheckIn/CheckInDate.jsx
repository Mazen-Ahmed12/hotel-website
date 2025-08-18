
import React from "react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Icon } from "../../../components/icon";
export const CheckInDate = ({ label }) => {
  const [date, setDate] = React.useState(null);
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="check-in-date">{label}</label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[220px] h-[50px] justify-between font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <div className="pl-3">
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </div>
            <Icon name="Calendar" className="mr-2 h-4 w-4 justify-end" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
