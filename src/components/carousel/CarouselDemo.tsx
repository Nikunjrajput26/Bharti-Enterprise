import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (contentRef.current) {
        const next = contentRef.current.querySelector<HTMLButtonElement>(
          "[data-carousel-next]"
        );
        next?.click();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
<div className="w-full  overflow-x-hidden">
  <Carousel className="w-full h-full">
    <CarouselContent ref={contentRef}>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index} className="basis-full h-[50vh]">
          <div className="p-2 h-full">
            <Card className="h-full">
              <CardContent className="flex h-full items-center justify-center p-6 bg-gray-100">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious data-carousel-prev />
    <CarouselNext data-carousel-next />
  </Carousel>
</div>

  );
}
