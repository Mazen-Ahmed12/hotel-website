import {
  X,
  Dot,
  Search,
  Menu,
  MoveUpRight,
  House,
  Calendar,
  CheckCircle2,
} from "lucide-react";

import {
  SiBehance,
  SiFacebook,
  SiInstagram,
  SiX,
} from "@icons-pack/react-simple-icons";

export const socialIcons = {
  facebook: SiFacebook,
  instagram: SiInstagram,
  twitter: SiX,
  behance: SiBehance,
};

const icons = {
  x: X, 
  Dot:Dot,  
  Search:Search,
  Menu:Menu,
  MoveUpRight:MoveUpRight,
  House:House,
  Calendar:Calendar,
  CheckCircle: CheckCircle2,
  ...socialIcons,
};

export const iconNames = Object.keys(icons);
export default icons;
