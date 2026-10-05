export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  imageAlt: string;
  paragraphs: { h: string; body: string[] }[];
  faqs: { q: string; a: string }[];
};

export const posts: Post[] = [
  {
    slug: "signs-water-heater-is-failing",
    title: "Signs a water heater is failing in Vero Beach",
    description: "Rusty water, a wet pan, rumbling, and a shower that fades. How to tell a failing tank from a sweaty one in Vero Beach.",
    date: "2026-03-12",
    image: "/images/drywall-stain.jpg",
    imageAlt: "Water stain on drywall beside a utility closet",
    paragraphs: [
      { h: "A stain on the wall is already late", body: [
        "A Vero Beach tank usually sits on a slab. Water does not drop into a basement. It runs under the garage door or into the hall.",
        "A brown line on the drywall means the leak has already left the closet. Shut the cold inlet if you can, then call the <a href='/'>Vero Beach water heater line</a>.",
      ]},
      { h: "Six signs that are not just humidity", body: [
        "Rust-colored water under the middle of the tank. That is a failed shell, not a loose fitting.",
        "A pan that fills again after you empty it. The pan is hiding the leak, not fixing it.",
        "Popping or rumbling when the heater runs. Sediment is baking on the bottom.",
        "Hot water that fades halfway through one shower. One element may be open, or the tank is too small.",
        "A relief valve that drips every time the heater fires. Do not cap it. Read the <a href='/leaking-water-heater/'>leaking water heater</a> page.",
        "Water that is rusty only at the hot tap. The cold tap is clear. The tank, not the city line, is the source.",
      ]},
      { h: "Sweat is the lookalike", body: [
        "On a humid afternoon the tank can sweat. The jacket feels damp. No seam is dripping.",
        "A real leak tracks one spot. Sweat films the whole tank after a long shower. If you cannot tell, treat it as a leak until someone looks.",
      ]},
      { h: "What to say when you call", body: [
        "Street, ZIP, gas or electric, and whether the floor is still getting wet.",
        "Copperlane connects that call to an available provider. The provider quotes the <a href='/water-heater-repair/'>repair</a> or the <a href='/water-heater-replacement/'>replacement</a>.",
      ]},
    ],
    faqs: [
      { q: "Is a little rust in the pan an emergency?", a: "If the pan keeps refilling, call. A one-time damp ring after a humid day can be sweat. Brown water centered under the tank is a failed shell." },
      { q: "Can I wait until Monday?", a: "A drip that stays in the pan can wait. Water that reaches drywall or an outlet should not." },
    ],
  },
  {
    slug: "shut-off-a-leaking-water-heater",
    title: "How to shut off a leaking water heater",
    description: "Close the cold inlet, or the house main, and kill the breaker. What not to cap while you wait in Vero Beach.",
    date: "2026-03-20",
    image: "/images/relief-valve.jpg",
    imageAlt: "Relief valve and discharge pipe on a water heater",
    paragraphs: [
      { h: "Stop new water first", body: [
        "The tank is still tied to the house supply. Each minute the inlet stays open, more water can leave through the split.",
        "Find the valve on the cold pipe at the top of the heater. Turn it clockwise. If it will not move, do not force it until it snaps.",
      ]},
      { h: "Use the house main when the tank valve sticks", body: [
        "Older gate valves seize. The main shutoff stops the whole house.",
        "Open a hot faucet afterward. Pressure then leaves through the spout instead of the leak. That step is on the <a href='/burst-water-heater/'>burst water heater</a> page too.",
      ]},
      { h: "Kill power. Leave the relief valve alone", body: [
        "Open the breaker labeled water heater. Do not stand in the puddle while you reach the panel.",
        "Do not cap the relief valve. If you smell gas, leave the house and call the gas utility as well as <a href='/contact/'>(772) 555-0140</a>.",
      ]},
      { h: "Then call with the street", body: [
        "Say whether the water stopped. Say if the heater is in a garage, a closet, or a shed.",
        "The line checks the ZIP. An independent provider quotes the visit. Copperlane does not pull the tank.",
      ]},
    ],
    faqs: [
      { q: "Which valve is the cold inlet?", a: "The pipe that feeds the tank, usually on top, often marked with a blue handle. The hot outlet leaves toward the house." },
      { q: "Should I drain the tank myself?", a: "Only after the supply is off and the power is off. A flooded floor plus a hose you cannot control makes the mess larger. If you are unsure, wait for the provider." },
    ],
  },
  {
    slug: "electric-or-gas-water-heater",
    title: "Electric or gas: what to tell the water heater line",
    description: "How to tell an electric tank from a gas tank in a Vero Beach garage, and why the line asks before anyone drives out.",
    date: "2026-04-02",
    image: "/images/element-panel.jpg",
    imageAlt: "Element access panels on an electric water heater",
    paragraphs: [
      { h: "The line asks because the visit is different", body: [
        "An electric tank fails at an element, a thermostat, or the breaker. A gas tank fails at the pilot, the control, or the vent.",
        "Tell the person on <a href='/no-hot-water/'>no hot water</a> which one you have. Guessing sends the wrong parts.",
      ]},
      { h: "How to tell without moving the tank", body: [
        "Electric: a flexible metal conduit or a cord into the top, and two small panels on the side. No flue pipe.",
        "Gas: a metal vent rising off the top, and a gas line with its own valve. You may see a viewing window for the pilot.",
        "Tankless: a box on the wall, not a tall cylinder. Use the <a href='/tankless-water-heater/'>tankless</a> page if that is what you see.",
      ]},
      { h: "What not to do while you look", body: [
        "Do not relight a pilot over and over. Do not keep resetting a breaker that trips at once.",
        "If the floor is wet, this is a leak first and a fuel-type question second. Start at the <a href='/leaking-water-heater/'>leaking water heater</a> steps.",
      ]},
    ],
    faqs: [
      { q: "What if I cannot tell?", a: "Say so. Describe a tall white tank, a vent pipe, or a wall box. The provider can sort it from that." },
      { q: "Are most Vero Beach tanks electric?", a: "Many houses on slab use electric tanks. Do not assume yours is. Look for the vent or the conduit before you call." },
    ],
  },
];
