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
import IMG_0551 from "@/assets/memories/IMG_0551.jpg";
import hero from "@/assets/memories/hero.webp";
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
  heroMessage:
    "For every little adventure, and every chance to make you roll your eyes, I would choose you again.",
  letter: {
    greeting: "My Sweetheart ♡,",
    paragraphs: [
      "Now I get to call you my wife, and my favourite thing is sharing the little ordinary moments I used to dream about.",
      "You are still my biggest support and my safest place. Thank you for making ordinary days feel magical, for being my best friend, and for making home feel like you.",
      "Some of my happiest moments are the simple ones: settling in beside you to watch F.R.I.E.N.D.S, laughing together, and getting a little more time together.",
      "And just so you know, I fully plan to keep irritating you, teasing you, and testing the limits of that anger every single day. I'll do it all over again tomorrow, too, because your eye-rolls and dramatic reactions are some of my favourite things.",
      "May every dream you have come true, may your smile never fade, and may we keep choosing each other through every ordinary day and every new adventure.",
    ],
    signOff: "Forever yours ♡,"
  },
  finaleLines: [
    "Thank you for making ordinary days feel magical.",
    "Here's to growing old together—with more laughter, and a lifetime of me teasing you.",
  ],
};

export const heroPhoto: Photo = {
  src: hero,
  alt: "A photographer capturing a lakeside moment beneath the mountains",
  orientation: "landscape",
};

export const everydayPhotos: Photo[] = [
  {
    src: memory1011_144922,
    alt: "A quiet lakeside portrait in a light outfit",
    orientation: "portrait",
  },
  {
    src: memory1011_145013,
    alt: "A sunny selfie together beside the lake",
    orientation: "portrait",
  },
  {
    src: memory1011_145334,
    alt: "A lakeside portrait in the afternoon light",
    caption: "Who you looking at? 😏",
    orientation: "portrait",
  },
  {
    src: memory1011_145701,
    alt: "A wide view of two people together beside the lake",
    caption: "A long way from the usual",
    orientation: "landscape",
  },
  {
    src: IMG_0551,
    alt: "A wide view of two people together beside the lake",
    caption: "Your personal photographer",
    orientation: "landscape",
  },
  {
    src: memory1011_145707,
    alt: "A couple sharing a lakeside moment",
    caption: "Us, out exploring",
    orientation: "portrait",
  },
  {
    src: memory1011_145758,
    alt: "A portrait beside the water",
    caption: "Only eyes for me?",
    orientation: "portrait",
  },
  {
    src: memory1011_165044,
    alt: "A relaxed moment together outdoors",
    orientation: "portrait",
  },
  {
    src: memory1011_165102,
    alt: "A quiet moment together in the open air",
    caption: "You're my favorite view.",
    orientation: "portrait",
  },
  {
    src: memory1011_173059,
    alt: "A sunlit portrait in a wide-brimmed hat",
    caption: "Explorer of my heart♡",
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
    caption: "♡",
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
    orientation: "landscape",
  },
  {
    src: memory1121_204024,
    alt: "A candid moment together in black and white",
    caption: "No rush to be anywhere",
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
    caption: "Somehow, the universe made my favourite person",
    orientation: "portrait",
  },
  {
    src: DSC_1618,
    alt: "A close wedding portrait in emerald",
    orientation: "portrait",
  },
  {
    src: DSC_1788,
    alt: "A wedding portrait beneath the ceremony lights",
    caption: "Us, and one beautifully chaotic forever.",
    orientation: "portrait",
  },
  {
    src: DSC_1838,
    alt: "A warm portrait in ivory wedding attire",
    caption: "A quiet breath in the celebration",
    orientation: "portrait",
  },
  {
    src: DSC_1850,
    alt: "A couple sharing a quiet wedding moment",
    orientation: "portrait",
  },
  {
    src: DSC_1844,
    alt: "A close portrait in the wedding light",
    caption: "My heart has a screensaver now",
    orientation: "landscape",
  },
  {
    src: DSC_1872,
    alt: "A couple sharing a dance at their wedding",
    caption: "A love story in motion",
    orientation: "portrait",
  },
  {
    src: DSC_2052,
    alt: "A couple beneath the flowered wedding stage",
    caption: "A lifetime of memories",
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
    caption: "Royalty ♡",
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
    caption: "She said yes",
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
