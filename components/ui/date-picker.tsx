"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdCalendarMonth } from "react-icons/md";

interface DatePickerProps {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export function DatePicker({ date, setDate }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState<Date | undefined>(date);

  return (
    <div className="relative flex gap-2">
      <Button variant="outline" className="lg:text-sm text-xs sm:px-4 px-3 bg-input/40 dark:bg-input/30 border border-borderBrand/80 dark:border-input hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white dark:hover:border-primary">
        Yesterday
      </Button>
      <Button variant="outline" className="lg:text-sm text-xs sm:px-4 px-3 bg-input/40 dark:bg-input/30 border border-borderBrand/80 dark:border-input hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white dark:hover:border-primary">
        Last 7 Days
      </Button>
      <Button variant="outline" className="sm:block hidden bg-input/40 dark:bg-input/30 border border-borderBrand/80 dark:border-input hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white dark:hover:border-primary">
        Last 30 Days
      </Button>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="bg-background dark:bg-background lg:text-sm text-xs px-3 border border-borderBrand/80 dark:border-input hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white dark:hover:border-primary">
            <p>mm / dd / year</p>
            <MdCalendarMonth className="!mb-[2px]" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto overflow-hidden p-0 bg-secondaryBackground"
          align="end"
          alignOffset={-8}
          sideOffset={10}
        >
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            month={month}
            onMonthChange={setMonth}
            onSelect={(newDate) => {
              setDate(newDate);
              setOpen(false);
            }}
            disabled={(date) => date > new Date()}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
