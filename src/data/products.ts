import fillingLineImg from "@/assets/images/filling-line.jpg";
import foodProcessingImg from "@/assets/images/food-processing.jpg";
import roboticsImg from "@/assets/images/robotics.jpg";
import petImg from "@/assets/images/pet.jpg";
import packagingImg from "@/assets/images/packaging.jpg";
import miningImg from "@/assets/images/mining.jpg";
import gearsImg from "@/assets/images/gears.jpg";
import logisticsImg from "@/assets/images/logistics.jpg";
import switchgearImg from "@/assets/images/switchgear.jpg";
import turnkeyImg from "@/assets/images/turnkey.jpg";
import sparePartsImg from "@/assets/images/spare-parts.jpg";
import waterTreatmentImg from "@/assets/images/water-treatment.jpg";
import bottlingAutoImg from "@/assets/images/bottling-auto.jpg";

const containerShipUrl = "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80";

export const products = [
  {
    id: "beverage-filling",
    name: "Beverage Filling Lines",
    image: fillingLineImg,
    description: "Complete filling lines for still water, carbonated drinks, juice, and energy drinks. 2,000 to 36,000 BPH. CE-certified, CIP-ready.",
  },
  {
    id: "bottling-lines",
    name: "Automated Bottling Lines",
    image: bottlingAutoImg,
    description: "Turnkey bottling, capping, labeling, and shrink-wrap integrated into one synchronized production flow.",
  },
  {
    id: "pet-blowing",
    name: "PET Blowing Machines",
    image: petImg,
    description: "Linear and rotary stretch blow molders from 2 to 12 cavities. Fast cycle times, consistent wall thickness.",
  },
  {
    id: "industrial-automation",
    name: "Industrial Automation and Robotics",
    image: roboticsImg,
    description: "PLC, SCADA, and robotic-arm systems for pick-and-place, palletizing, welding, and assembly lines.",
  },
  {
    id: "packaging-machines",
    name: "Packaging and End-of-Line",
    image: packagingImg,
    description: "Carton sealers, case erectors, shrink wrappers, and palletizers for export-ready secondary packaging.",
  },
  {
    id: "mining-equipment",
    name: "Mining and Quarrying Equipment",
    image: miningImg,
    description: "Jaw crushers, cone crushers, vibrating screens, and belt conveyors for aggregate, coal, and mineral operations.",
  },
  {
    id: "water-treatment",
    name: "Water Treatment Plants",
    image: waterTreatmentImg,
    description: "Reverse osmosis, UV sterilization, softening, and demineralization systems. Factory supply to municipal scale.",
  },
  {
    id: "food-processing",
    name: "Food Processing Machinery",
    image: foodProcessingImg,
    description: "Mixing, blending, pasteurization, and filling equipment for dairy, sauce, edible oil, and dry food production.",
  },
  {
    id: "electrical-switchgear",
    name: "Electrical Switchgear and Panels",
    image: switchgearImg,
    description: "LV and MV switchgear, motor control centers, VFD panels, and power distribution boards to IEC and NEMA standards.",
  },
  {
    id: "industrial-components",
    name: "Industrial Components and Gearboxes",
    image: gearsImg,
    description: "Precision gears, gearboxes, valves, pneumatics, motors, and hydraulic components from certified manufacturers.",
  },
  {
    id: "turnkey-factory",
    name: "Turnkey Factory Solutions",
    image: turnkeyImg,
    description: "Greenfield project planning, full equipment integration, commissioning, and operator training. Ready to produce from day one.",
  },
  {
    id: "export-logistics",
    name: "Export Logistics and Shipping",
    image: logisticsImg,
    description: "Full export documentation, marine insurance, customs clearance, and in-country delivery to your facility.",
  },
  {
    id: "spare-parts",
    name: "Spare Parts Supply",
    image: sparePartsImg,
    description: "OEM wear parts, bearings, seals, sensors, and control electronics stocked in Lahore and Emmen for fast dispatch.",
  },
  {
    id: "cargo-freight",
    name: "Heavy Equipment Freight",
    image: containerShipUrl,
    description: "Specialized container and project freight for oversized industrial equipment from European and global origins.",
  },
];
