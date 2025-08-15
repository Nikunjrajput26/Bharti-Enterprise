import { AppSidebar } from "@/components/DEMOProduct/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import cableImg from "@/assets/categories/cabels.png";

import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DEMOProductsPage() {
  const categories = [
    { name: "Industrial Fans", img: cableImg },
    { name: "Air Coolers", img: cableImg },
    { name: "HVAC Systems", img: cableImg },
    { name: "Exhaust Systems", img: cableImg },
    { name: "Exhaust Systems", img: cableImg },
    { name: "Exhaust Systems", img: cableImg },
    { name: "Exhaust Systems", img: cableImg },
    { name: "Exhaust Systems", img: cableImg },
  ];
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  return (
    <SidebarProvider>
      <AppSidebar
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 sticky top-30">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Wire & Cable</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>House Wire</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            {categories.map((cat, index) => (
              <Dialog key={cat.name + index}>
                <DialogTrigger asChild>
                  <div
                    className="group cursor-pointer bg-[#f0ecf4] rounded-xl py-4 shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="overflow-hidden flex items-center justify-center">
                      <img
                        src={cat.img}
                        alt={cat.name}
                        className="w-full h-30 object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3
                        className="text-lg font-semibold text-gray-800"
                        style={{ fontFamily: "Oswald, sans-serif" }}
                      >
                        {cat.name}
                      </h3>
                    </div>
                  </div>
                </DialogTrigger>

              <DialogContent className="w-full max-w-6xl h-[90vh] flex flex-col p-6 sm:p-8">
  <DialogHeader>
    <DialogTitle className="text-xl sm:text-2xl font-semibold">
      RR Kabel UL 2586 Cable Details
    </DialogTitle>
    <DialogDescription className="text-sm sm:text-base">
      Industrial-grade cables for precision machinery and control systems.
    </DialogDescription>
  </DialogHeader>

  {/* Scrollable content */}
  <div className="flex-1 overflow-y-auto space-y-6 pr-2">
    {/* Application */}
    <section>
      <h3 className="text-lg font-semibold">Application</h3>
      <p className="text-sm sm:text-base text-muted-foreground">
        This cable is used for grinding machines, CNC, machine tools, control systems, assembly lines,
        machining centers, bottling equipment, data processing equipment, and connections between control panels
        and machines.
      </p>
    </section>

    {/* Technical Data */}
    <section>
      <h3 className="text-lg font-semibold">Technical Data</h3>
      <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground space-y-1">
        <li>Standard: UL-758 UL 2586</li>
        <li>Nominal Voltage: 1000 Vac</li>
        <li>Temperature Range: -30ºC to +150 ºC</li>
        <li>Test Voltage: 1500 V</li>
        <li>Minimum Bending Radius: 12x cable Ø</li>
      </ul>
    </section>

    {/* Cable Construction */}
    <section>
      <h3 className="text-lg font-semibold">Cable Construction</h3>
      <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground space-y-1">
        <li>Annealed plain copper, fine wire conductor AWG 24–16, Table 30.3 UL 1581 ASTM-B.</li>
        <li>Special PVC core insulation class 43, semi-rigid to UL–Std. 1581 tables 50.182 & 50.183.</li>
        <li>Colour coded to H05VV-F up to 5 cores; black with number above 5 cores.</li>
        <li>Cores stranded in layers with optimal lay-length.</li>
        <li>Special PVC outer jacket class 43 to UL–Std. 1581 table 50.182.</li>
        <li>Outer jacket colour: black or grey.</li>
      </ul>
    </section>

    {/* Properties */}
    <section>
      <h3 className="text-lg font-semibold">Properties</h3>
      <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground space-y-1">
        <li>PVC self-extinguishing and flame retardant (test method FT 1, FT 2).</li>
        <li>Durable against mechanical stress and abrasion.</li>
        <li>Available in Shielded, Braided, Shielded + Braided variants.</li>
      </ul>
    </section>

    {/* Extra Demo Data */}
    <section>
      <h3 className="text-lg font-semibold">Available Variants (Sample)</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm sm:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 p-2 text-left">Variant</th>
              <th className="border border-gray-300 p-2 text-left">Conductor Size</th>
              <th className="border border-gray-300 p-2 text-left">Outer Diameter</th>
              <th className="border border-gray-300 p-2 text-left">Colour</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Shielded</td>
              <td className="border border-gray-300 p-2">AWG 24</td>
              <td className="border border-gray-300 p-2">5.5 mm</td>
              <td className="border border-gray-300 p-2">Black</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Braided</td>
              <td className="border border-gray-300 p-2">AWG 20</td>
              <td className="border border-gray-300 p-2">6.2 mm</td>
              <td className="border border-gray-300 p-2">Grey</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Shielded + Braided</td>
              <td className="border border-gray-300 p-2">AWG 18</td>
              <td className="border border-gray-300 p-2">7.0 mm</td>
              <td className="border border-gray-300 p-2">Black</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>

{/*   <DialogFooter className="mt-4 flex flex-wrap gap-3">
    <DialogClose asChild>
      <Button variant="outline" type="button" className="w-full sm:w-auto">
        Close
      </Button>
    </DialogClose>
    <Button type="button" className="w-full sm:w-auto">
      Download Spec Sheet
    </Button>
  </DialogFooter> */}
</DialogContent>

              </Dialog>
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
