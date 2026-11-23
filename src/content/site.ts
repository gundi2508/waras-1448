import DSC_1615 from "@/assets/wedding/DSC_1615.webp";
import DSC_1618 from "@/assets/wedding/DSC_1618.webp";
import DSC_1788 from "@/assets/wedding/DSC_1788.webp";
import DSC_1838 from "@/assets/wedding/DSC_1838.webp";
import DSC_1844 from "@/assets/wedding/DSC_1844.webp";
import DSC_1850 from "@/assets/wedding/DSC_1850.webp";
import DSC_1872 from "@/assets/wedding/DSC_1872.webp";
import DSC_2052 from "@/assets/wedding/DSC_2052.webp";
import DSC_2212 from "@/assets/wedding/DSC_2212.webp";
import DSC_2789 from "@/assets/wedding/DSC_2789.webp";
import DSC_2793 from "@/assets/wedding/DSC_2793.webp";
import IMG_20261007 from "@/assets/wedding/IMG_20261007_230607.webp";
import IMG_20261009 from "@/assets/wedding/IMG_20261009_210327.webp";
import IMG_0551 from "@/assets/memories/IMG_0551.webp";
import memory1011_144922 from "@/assets/memories/20261011_144922.webp";
import memory1011_145013 from "@/assets/memories/20261011_145013.webp";
import memory1011_145334 from "@/assets/memories/20261011_145334.webp";
import memory1011_145701 from "@/assets/memories/20261011_145701.webp";
import memory1011_145707 from "@/assets/memories/20261011_145707.webp";
import memory1011_145758 from "@/assets/memories/20261011_145758.webp";
import memory1011_165044 from "@/assets/memories/20261011_165044.webp";
import memory1011_165102 from "@/assets/memories/20261011_165102.webp";
import memory1011_173059 from "@/assets/memories/20261011_173059.webp";
import memory1011_173255 from "@/assets/memories/20261011_173255.webp";
import memory1101_190109 from "@/assets/memories/20261101_190109.webp";
import memory1101_200057 from "@/assets/memories/20261101_200057.webp";
import memory1101_200149 from "@/assets/memories/20261101_200149.webp";
import memory1121_204024 from "@/assets/memories/20261121_204024.webp";
import memory1121_204107 from "@/assets/memories/20261121_204107.webp";
import illustratedKeepsake from "@/assets/memories/Screenshot_20261114_211945_Instagram.webp";

export type Photo = {
  src: string;
  alt: string;
  caption?: string;
  orientation: "portrait" | "landscape";
};

export const siteContent = {
  recipient: "Sakina",
  birthdayDate: "17 Jumad al-Ukhra",
  heroMessage: "[Add a personal line just for her]",
  letter: {
    greeting: "Dear Sakina,",
    paragraphs: [
      "[Write the message you want her to remember. A small moment or an inside joke is a lovely place to start.]",
      "[Add another personal paragraph here, if you like.]",
    ],
    signOff: "[Your name]",
  },
};

export const heroPhoto: Photo = {
  src: IMG_0551,
  alt: "A photographer capturing a lakeside moment beneath the mountains",
  caption: "A day by the water",
  orientation: "landscape",
};

export const everydayPhotos: Photo[] = [
  {
    src: memory1011_144922,
    alt: "A quiet lakeside portrait in a light outfit",
    caption: "A little fresh air",
    orientation: "portrait",
  },
  {
    src: memory1011_145013,
    alt: "A sunny selfie together beside the lake",
    caption: "Us, out exploring",
    orientation: "portrait",
  },
  {
    src: memory1011_145334,
    alt: "A lakeside portrait in the afternoon light",
    caption: "The view was lovely",
    orientation: "portrait",
  },
  {
    src: memory1011_145701,
    alt: "A wide view of two people together beside the lake",
    caption: "A long way from the usual",
    orientation: "landscape",
  },
  {
    src: memory1011_145707,
    alt: "A couple sharing a lakeside moment",
    caption: "Right where we belong",
    orientation: "portrait",
  },
  {
    src: memory1011_145758,
    alt: "A portrait beside the water",
    caption: "A pause in the day",
    orientation: "portrait",
  },
  {
    src: memory1011_165044,
    alt: "A relaxed moment together outdoors",
    caption: "Taking our time",
    orientation: "portrait",
  },
  {
    src: memory1011_165102,
    alt: "A quiet moment together in the open air",
    caption: "A favourite kind of afternoon",
    orientation: "portrait",
  },
  {
    src: memory1011_173059,
    alt: "A sunlit portrait in a wide-brimmed hat",
    caption: "Chasing the last of the light",
    orientation: "portrait",
  },
  {
    src: memory1011_173255,
    alt: "A portrait together in the evening light",
    caption: "The two of us",
    orientation: "portrait",
  },
  {
    src: memory1101_190109,
    alt: "A candid portrait in a softly lit room",
    caption: "A lovely little moment",
    orientation: "portrait",
  },
  {
    src: memory1101_200057,
    alt: "A relaxed café moment in warm light",
    caption: "Coffee, and then some more",
    orientation: "portrait",
  },
  {
    src: memory1101_200149,
    alt: "A quiet moment together at a table",
    caption: "No rush to be anywhere",
    orientation: "landscape",
  },
  {
    src: memory1121_204024,
    alt: "A candid moment together in black and white",
    orientation: "landscape",
  },
  {
    src: memory1121_204107,
    alt: "A smiling portrait in black and white",
    caption: "A smile I know by heart",
    orientation: "portrait",
  },
];

export const weddingPhotos: Photo[] = [
  {
    src: DSC_1615,
    alt: "A portrait in emerald at the wedding",
    caption: "A day dressed in green",
    orientation: "portrait",
  },
  {
    src: DSC_1618,
    alt: "A close wedding portrait in emerald",
    caption: "A moment before it all began",
    orientation: "portrait",
  },
  {
    src: DSC_1788,
    alt: "A wedding portrait beneath the ceremony lights",
    caption: "All the colour of the day",
    orientation: "portrait",
  },
  {
    src: DSC_1838,
    alt: "A warm portrait in ivory wedding attire",
    caption: "A quiet breath in the celebration",
    orientation: "portrait",
  },
  {
    src: DSC_1844,
    alt: "A close portrait in the wedding light",
    caption: "One of my favourite frames",
    orientation: "landscape",
  },
  {
    src: DSC_1850,
    alt: "A couple sharing a quiet wedding moment",
    caption: "The room faded away",
    orientation: "portrait",
  },
  {
    src: DSC_1872,
    alt: "A couple sharing a dance at their wedding",
    caption: "A song just for us",
    orientation: "portrait",
  },
  {
    src: DSC_2052,
    alt: "A couple beneath the flowered wedding stage",
    caption: "Surrounded by everyone we love",
    orientation: "landscape",
  },
  {
    src: DSC_2212,
    alt: "A couple sharing a warm reception moment",
    orientation: "landscape",
  },
  {
    src: DSC_2789,
    alt: "A wedding portrait in emerald in a softly lit hallway",
    caption: "A pause between celebrations",
    orientation: "portrait",
  },
  {
    src: DSC_2793,
    alt: "A tender wedding moment at a doorway",
    caption: "The beginning of our next chapter",
    orientation: "portrait",
  },
  {
    src: IMG_20261007,
    alt: "A ceremony moment beneath the flowers",
    caption: "A promise, held close",
    orientation: "portrait",
  },
  {
    src: IMG_20261009,
    alt: "A close portrait together at the celebration",
    caption: "A little more of that day",
    orientation: "landscape",
  },
];

export const keepsake = {
  src: illustratedKeepsake,
  alt: "An illustrated portrait of a couple with a message about life together",
};
