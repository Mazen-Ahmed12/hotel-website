import {
  X,
  Dot,
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
  ...socialIcons,
};

export const iconNames = Object.keys(icons);
export default icons;
