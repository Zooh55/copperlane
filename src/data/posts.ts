export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  imageAlt: string;
  takeaways: string[];
  sections: { h: string; html: string }[];
  faqs: { q: string; a: string }[];
  sources: { href: string; label: string }[];
};

const epaShower = { href: "https://www.epa.gov/watersense/showerheads", label: "EPA WaterSense: showerheads" };
const epaFaucet = { href: "https://www.epa.gov/watersense/bathroom-faucets", label: "EPA WaterSense: bathroom faucets" };
const readyFlood = { href: "https://www.ready.gov/floods", label: "Ready.gov: floods" };
const readyPower = { href: "https://www.ready.gov/power-outages", label: "Ready.gov: power outages" };
const nfpa = { href: "https://www.nfpa.org/education-and-research/home-fire-safety", label: "NFPA: home fire safety" };

export const posts: Post[] = [
  {
    slug: "signs-water-heater-is-failing",
    title: "Signs a water heater is failing in Vero Beach",
    description: "How to tell a failing tank from a sweaty one on a Vero Beach slab, and which signs mean call before the closet floor soaks.",
    date: "2026-01-14",
    image: "/images/drywall-stain.jpg",
    imageAlt: "Water stain on drywall beside a utility closet",
    takeaways: [
      "A brown line on drywall means water already left the closet.",
      "Rust in the middle of the tank is a failed shell, not a loose fitting.",
      "A humid afternoon can make a cold tank sweat. A real leak tracks one spot.",
      "A relief valve that drips every firing cycle is a pressure problem. Do not cap it.",
    ],
    sections: [
      {
        h: "A stain on the wall is already late",
        html: `<p>Most Vero Beach heaters sit on a slab. There is no basement to catch a drip. Water runs under the garage door, into the hall, or down a chase in a South Beach condo.</p>
<p>A brown line on the drywall means the leak has already left the closet. Shut the cold inlet if you can do it dry, then look at the <a href="https://waterheaterleakingverobeachfl.com/leaking-water-heater/">leaking water heater</a> page for what we check on that visit.</p>
<p>If the garage is taking a sheet of water, skip the rest of this guide and use the <a href="https://waterheaterleakingverobeachfl.com/blog/burst-water-heater-what-to-do/">burst water heater steps</a>. If you can still stand on dry concrete, the <a href="https://waterheaterleakingverobeachfl.com/blog/shut-off-a-leaking-water-heater/">shutoff steps</a> come before any diagnosis.</p>`,
      },
      {
        h: "Which sign means which job",
        html: `<table>
<thead><tr><th>What you see</th><th>What it usually is</th><th>What we do</th></tr></thead>
<tbody>
<tr><td>Rust colored water under the middle of the tank</td><td>The steel shell has opened</td><td>Replacement, not a patch</td></tr>
<tr><td>A pan that fills again after you empty it</td><td>A leak the pan is hiding</td><td>Find the source before the pan overflows</td></tr>
<tr><td>Popping when the heater runs</td><td>Sediment baking on the bottom</td><td>Check age, anode, and whether the tank is worth keeping</td></tr>
<tr><td>Hot water that fades in one shower</td><td>A failed element, a tired tank, or a unit that is too small</td><td>A no-heat visit if the floor is dry</td></tr>
<tr><td>Relief valve drips every time the heater fires</td><td>Temperature or house pressure</td><td>Do not cap the valve</td></tr>
<tr><td>Rusty water only at the hot tap</td><td>The tank, not the city line</td><td>Compare hot and cold before you call a well company</td></tr>
</tbody>
</table>
<p>A fitting drip at a union can be a repair. A hole in the shell cannot. That split is the whole point of the first look.</p>`,
      },
      {
        h: "Sweat is the lookalike on a humid afternoon",
        html: `<p>Indian River humidity makes a cold tank sweat after a long shower. The jacket feels damp. No seam is dripping. The puddle is a film, not a stream.</p>
<p>A real leak tracks one seam, one nipple, or the drain valve. Wipe the tank dry, run a hot cycle, and watch one spot. If that spot wets again, it is a leak.</p>
<p>Houses in <a href="https://waterheaterleakingverobeachfl.com/florida-ridge/">Florida Ridge</a> and <a href="https://waterheaterleakingverobeachfl.com/west-vero-corridor/">West Vero Corridor</a> see this every summer. Island air in <a href="https://waterheaterleakingverobeachfl.com/south-beach/">South Beach</a> adds salt film on fittings, which is a different stain from sweat.</p>`,
      },
      {
        h: "What to say when you call",
        html: `<p>Street, ZIP, gas or electric, and whether the floor is still getting wet. That is enough for us to bring the right parts path.</p>
<p>You approve the price before we start. We do not list a dollar amount on this site because a closet drip and a garage flood are not the same visit.</p>
<p>If water is spreading toward outlets, keep people off that floor. Ready.gov treats spreading water as a reason to move people and valuables first, then shut utilities only if you can do it safely.</p>
<p>When we get there we start at the wet spot, not at a catalog. A union that weeps can be tightened or replaced if the threads are still sound. A drain valve that drips from the packing is a small part. Rust that has left a trail under the foam jacket means the steel is finished, and we will say replacement before we unscrew anything.</p>
<p>Bring the street and the ZIP. Garages on the ridge, hall closets nearer town, and island chases do not hide the heater in the same place. If the heater is behind a louvered door, leave that door open so the floor stays visible. Closing it only steams the closet and hides the next drip.</p>
<p>You approve the price in the house, after you can see what failed. We do not read a flat fee off this page. A sweaty tank that needs nothing is a real outcome. We would rather tell you to wipe it and watch than sell a heater you do not need.</p>
<p>If hot water is also gone, say that too. A leak and a dead element can share a closet. We will not treat them as one part. The floor decides which problem is first.</p>
<p>A useful call includes whether the water is still moving. Stopped water can wait for a planned visit. Moving water cannot. We would rather roll for a drip that turned out to be sweat than hear about a closet that soaked the hall overnight.</p>
<p>Keep the path to the heater clear. Lawn tools, stored tile, and a second refrigerator are how we lose time in ridge garages. If the heater is in a chase, unlock that door before we arrive. A locked chase is a leak we cannot see.</p>
<p>One more pass before you call is enough. Touch nothing electrical. Look at the floor, the pan, and the relief pipe, then stop. A heater that fails in slow motion gives you those three clues. A heater that fails all at once does not wait for a checklist, and you already know to get people off the wet floor.</p>
<p>We will tell you on site if the visit is a fitting, a valve, or a new tank. Neighbors with the same model can have different outcomes because one closet stays wet and one stays merely humid. Your closet is the only one that matters for the price you approve.</p>`,
      },
    ],
    faqs: [
      { q: "Is a wet jacket always a leak?", a: "No. On a humid Vero Beach afternoon a cold tank can sweat across the whole jacket. A leak wets one seam or one fitting after you wipe it dry. Wipe one seam and watch it through a heat cycle before you call it either one." },
      { q: "Does rusty hot water mean the city line failed?", a: "Check the cold tap. If cold is clear and hot is rusty, the tank is the source. If both are rusty, the problem is upstream of the heater. Run both taps for a minute so you are not judging water that sat in the pipe overnight." },
      { q: "Can I wait until morning if the pan is only damp?", a: "Only if the pan stays empty and the floor around it stays dry. A pan that refills is still leaking. Call before it spills into the hall. If the floor around the pan is growing wet, morning is too late." },
      { q: "Will a rumbling tank burst tonight?", a: "Rumbling means sediment. It is a warning, not a clock. A wet floor is the sign that moves the visit from soon to now. Call for the noise on a dry day, and call now if the base is wet." },
    ],
    sources: [readyFlood, epaShower, nfpa],
  },
  {
    slug: "shut-off-a-leaking-water-heater",
    title: "How to shut off a leaking water heater",
    description: "Cold inlet, breaker or gas, and the pan. The shutoff order we use on Vero Beach slab houses before a repair or replacement.",
    date: "2026-01-28",
    image: "/images/tech-valve.jpg",
    imageAlt: "Hand on a water heater shutoff valve",
    takeaways: [
      "Stop the cold water into the tank before you chase the drip.",
      "Open the breaker for an electric heater. For gas, turn the appliance valve only if you know which one it is.",
      "Do not cap the relief valve to stop a drip.",
      "If the floor is live with water near outlets, leave the closet.",
    ],
    sections: [
      {
        h: "Stop the supply, then the power",
        html: `<p>A leaking tank keeps filling until the cold inlet is closed. The valve is usually on the copper or PEX line above the heater, not on the hot outlet.</p>
<p>Turn that valve clockwise until it stops. If it will not move, do not force a seized handle with pliers while you are standing in water. Call us and we will shut it down on the <a href="https://waterheaterleakingverobeachfl.com/leaking-water-heater/">leaking water heater</a> visit.</p>
<p>Electric heaters need the breaker open next. Gas heaters need the appliance gas valve off only if you can see the lever and you are not in standing water. If you smell gas, leave and call the gas utility from outside. The NFPA home fire safety guidance is the reason we do not treat a gas smell as a DIY step.</p>`,
      },
      {
        h: "Shutoff order by what you can reach",
        html: `<table>
<thead><tr><th>You can reach</th><th>Do this</th><th>Leave this alone</th></tr></thead>
<tbody>
<tr><td>The cold inlet, and the floor is dry</td><td>Close the inlet. Open the breaker.</td><td>The relief valve</td></tr>
<tr><td>The panel, but not the closet</td><td>Open the water heater breaker</td><td>Do not wade in to find the valve</td></tr>
<tr><td>A gas smell</td><td>Leave the house. Call the gas utility</td><td>Switches, the valve, the closet</td></tr>
<tr><td>A full garage</td><td>Keep people out. Call for a replacement path</td><td>Mops near the panel</td></tr>
</tbody>
</table>
<p>After the inlet is closed, the tank can still hold hot water. It will not keep pouring new water onto the slab.</p>`,
      },
      {
        h: "The pan is not a shutoff",
        html: `<p>A drain pan under the tank catches a slow drip. It does not stop one. If the pan has a drain line, follow that line. On many <a href="https://waterheaterleakingverobeachfl.com/gifford/">Gifford</a> and <a href="https://waterheaterleakingverobeachfl.com/wabasso/">Wabasso</a> houses it ends outside a foundation wall. Water there means the pan is doing its job and the tank is still leaking.</p>
<p>Emptying the pan with a shop vac is fine once the inlet is closed. Emptying it while the inlet is open just makes room for the next gallon.</p>
<p>Read the <a href="https://waterheaterleakingverobeachfl.com/blog/overflowing-water-heater-pan/">overflowing pan guide</a> if the pan is already over the lip. A rust hole at the base is past a shutoff story. That pattern is the <a href="https://waterheaterleakingverobeachfl.com/blog/leaking-from-the-bottom/">bottom leak guide</a>.</p>`,
      },
      {
        h: "After the water stops, do not restart the heater to test it",
        html: `<p>Once the inlet is closed, people want to flip the breaker back and see if the drip was a fluke. Do not. A tank that leaked under pressure will leak again when it heats and expands. Leave the breaker off, or the gas valve off, until we have looked at the shell.</p>
<p>Open a hot faucet on the first floor for a few seconds if the inlet is already closed. That takes a little pressure off the tank. It will not empty the tank onto the floor, and it should not. A full drain through the hose bib is our job if we need the tank empty. A hose in a garage with no floor drain just moves the flood.</p>
<p>Take a photo of the top of the heater and of the wet spot. We use it to confirm fuel and to see whether the relief pipe is the thing dripping. Photos do not replace the visit. They stop us from bringing a gas part to an electric closet.</p>
<p>If the house main is the valve you closed, the kitchen will be dry too. Tell us that on the phone so we know the heater valve failed open. We will not hunt a handle you already bypassed.</p>
<p>Wet drywall in the hall can stay. Poking it with a screwdriver makes a bigger hole and does not find the leak. The leak is at the heater. The wall is only the path. We will say if the closet needs a pan, a new valve, or a new tank after the steel is in front of us.</p>`,
      },
      {
        h: "What we do after you shut it down",
        html: `<p>We look at the shell, the nipples, the drain valve, and the relief line. A fitting leak can be a <a href="https://waterheaterleakingverobeachfl.com/water-heater-repair/">repair</a>. A rust hole is a <a href="https://waterheaterleakingverobeachfl.com/water-heater-replacement/">replacement</a>.</p>
<p>You hear the price before any wrench turns. If the floor is already flooded, the first job is a safe shutdown, not a sales pitch.</p>
<p>Tell us what you already closed. Inlet only, breaker only, or the house main. That sentence saves a lap around the garage. If a hose is already on the drain valve, leave the valve shut. An open drain with the inlet still open is a second flood.</p>
<p>We carry the common inlet valves and dielectric fittings because Vero Beach closets mix copper, PEX, and old galvanized nipples. Salt film on an island fitting is not the same as a split tank. We will show you the threads before we call it a shell failure.</p>
<p>After the work, we open the inlet slowly and watch the same spot you watched. A repair that still drips is not finished. A new tank gets the same watch, including the relief pipe, so we do not leave you with a different leak.</p>
<p>If you cannot find a valve, you have still helped by keeping people off the wet floor and by leaving the breaker alone when the panel is wet. That is a complete first step. We take the shutdown from there.</p>`,
      },
    ],
    faqs: [
      { q: "Which valve is the cold inlet?", a: "It is the valve on the pipe feeding the tank, usually marked with a blue handle or sitting on the line that is cool to the touch when the heater is idle. The hot outlet leaves the top and feeds the house. If neither line is obvious, stop and call rather than closing a gas valve by mistake." },
      { q: "Should I open a hot faucet after I close the inlet?", a: "A single hot faucet can relieve pressure so a drip slows. It does not empty a full tank. Do not open every fixture and walk away. Close that faucet again once the drip slows so a hose bib is not left running." },
      { q: "Can I turn the gas off at the meter?", a: "Leave the meter to the gas utility unless they have already told you to use that valve. The appliance valve at the heater is the one we use when the closet is safe to enter. If you smell gas, leave and make the utility call from outside." },
      { q: "The valve spins and water still runs. What now?", a: "The valve has failed open. Stop forcing it. Shut the house main if you know that valve and can reach it dry. Then call. A spinning handle with no stop is a failed valve, not a valve you almost closed." },
    ],
    sources: [nfpa, readyFlood, readyPower],
  },
  {
    slug: "electric-or-gas-water-heater",
    title: "Electric or gas water heater in Vero Beach",
    description: "How to tell which heater you have, and why the repair path is different on a Vero Beach slab.",
    date: "2026-02-10",
    image: "/images/element-panel.jpg",
    imageAlt: "Access panel on an electric water heater",
    takeaways: [
      "Two access panels and a breaker mean electric. A flue and a gas line mean gas.",
      "A tripped breaker that will not stay on is a stop sign, not a reset contest.",
      "Gas smell means leave. Do not hunt for the pilot in a closed closet.",
      "We quote after we know the fuel, because the parts are not interchangeable.",
    ],
    sections: [
      {
        h: "Look at the top of the tank",
        html: `<p>An electric storage heater has no flue. You will see two pipes, maybe a relief line, and a metal panel or two on the side. The breaker is a double pole in the panel, often labeled water heater.</p>
<p>A gas heater has a vent pipe leaving the top and a gas line with a shutoff at the side. The control is a dial near the bottom, not a panel of wires.</p>
<p>If you are not sure, say so when you call. A photo of the top of the tank is enough. The <a href="https://waterheaterleakingverobeachfl.com/no-hot-water/">no hot water</a> visit changes with that one fact.</p>`,
      },
      {
        h: "Fuel decides the failure",
        html: `<table>
<thead><tr><th></th><th>Electric</th><th>Gas</th></tr></thead>
<tbody>
<tr><td>Common no-heat cause</td><td>Element or thermostat</td><td>Control, thermocouple, or a vent problem</td></tr>
<tr><td>First safe check</td><td>One look at the breaker</td><td>Look for a gas smell before you do anything else</td></tr>
<tr><td>What not to do</td><td>Reset a breaker that trips again</td><td>Relight a pilot in a closet that smells of gas</td></tr>
<tr><td>Leak path</td><td>Same steel shell as gas</td><td>Same steel shell as electric</td></tr>
</tbody>
</table>
<p>The shell fails the same way on both. Fuel only changes the heat source. A rust hole is still a replacement.</p>`,
      },
      {
        h: "Power cuts and pilot questions",
        html: `<p>After a storm, an electric heater stays cold until power is back and the tank recovers. Ready.gov power-outage guidance is simple: treat a dark house as a utility problem first. Do not open panels by flashlight while standing on a wet slab.</p>
<p>A gas heater can still heat during an electric outage only if it does not depend on an electric vent fan or control. Many newer controls do. If you are unsure, leave it off until someone looks.</p>
<p>Houses in <a href="https://waterheaterleakingverobeachfl.com/west-vero-corridor/">West Vero Corridor</a> lose power in the same storms as the island. The heater type, not the neighborhood, decides whether hot water returns with the lights.</p>`,
      },
      {
        h: "What the closet is telling you before we open a panel",
        html: `<p>Stand at the doorway and look, without touching wires. Electric heaters often have a flexible conduit into the top or side. Gas heaters have a rigid vent and a yellow or black gas line. If you see both a flue and conduit, say so. Some power-vent gas heaters need electricity for the fan. They are gas heaters that go cold in an outage.</p>
<p>Find the data plate if it is still readable. You do not need the model memorized. A photo is enough. The plate tells us gallons, wattage or gas input, and the year code the manufacturer used. We still judge the steel with our eyes. The plate just stops a wrong-sized replacement.</p>
<p>A breaker that is warm, buzzing, or smells sharp is not a reset. Leave it off and tell us. That smell is the panel, and the panel is outside the heater job until it is safe. We will not ask you to pull the deadfront.</p>
<p>On a gas heater, a yellow lazy flame or soot on the draft hood is a vent problem, not a shower problem. Leave it shut down. Soot in a closet is the reason the NFPA notes on home fire safety belong in this guide. We look at the vent path before we relight anything.</p>
<p>Write down whether every hot faucet is cold or only one bath is cold. One cold shower with hot water at the kitchen is a cartridge or a mixing valve, and we will say that before anyone drains the tank. Whole-house cold, with good pressure, is the heater.</p>`,
      },
      {
        h: "Switching fuel is a different project",
        html: `<p>Moving from electric to gas, or the other way, means a vent, a gas line, or a new circuit. That is not a same-day swap of the tank in the closet. We say so before you pick a model.</p>
<p>A like-for-like replacement stays on the fuel you already have. A tankless change is its own visit, with its own vent and gas or electric load.</p>
<p>People ask us to convert because a neighbor did. The neighbor may have had a gas meter with room to spare and a wall that could take a vent. Your hall closet may have neither. We will say no to the conversion and yes to a tank that fits, and we will say it before you buy a unit online.</p>
<p>Electric replacements need the existing circuit to match the new heater. Gas replacements need the vent to match the new draft. If the old flue is crushed in the attic, that is part of the price, not a surprise after the tank is in the truck.</p>
<p>Either way, the leak diagnosis does not change with fuel. Water at the base is steel, fittings, or the drain. Heat is a separate question we answer on the same trip if the floor is dry enough to work. When the shell is the problem, the visit is a <a href="https://waterheaterleakingverobeachfl.com/water-heater-replacement/">replacement</a>.</p>
<p>Name the neighborhood when you call. A garage on the west side of town and a chase on the island change how we carry the old tank out. Stairs, a tight door, and a flooded slab are three different exits. The heater is the same machine. The path is not.</p>
<p>Compare the two in the <a href="https://waterheaterleakingverobeachfl.com/blog/tank-vs-tankless-vero-beach/">tank versus tankless guide</a> before you decide the closet is the wrong shape. A cold shower with a dry floor is a different article: <a href="https://waterheaterleakingverobeachfl.com/blog/no-hot-water-breaker-on/">no hot water when the breaker looks on</a>.</p>
<p>Fuel is a label until we confirm it in the closet. Say what you think it is, and send the photo if you have one. We would rather arrive with both possibilities in mind than with the wrong vent parts and a guess.</p>`,
      },
    ],
    faqs: [
      { q: "How do I know it is electric if the labels are gone?", a: "No flue on the top, plus a double breaker, means electric. A metal vent and a gas shutoff mean gas. Send a photo of the top if both seem missing." },
      { q: "The breaker tripped. Should I reset it twice?", a: "Reset it once if the floor is dry and you can stand clear of the panel. If it trips again, leave it off. Something in the heater is shorted." },
      { q: "Can a gas heater leak water the same way?", a: "Yes. The tank wall does not care what heated the water. A puddle under the middle is a shell failure on either fuel." },
      { q: "Do you stock both on the truck?", a: "We come prepared for the fuel you name. If the photo and the closet disagree, we say what is missing before we start." },
    ],
    sources: [readyPower, nfpa, epaShower],
  },
  {
    slug: "leaking-from-the-bottom",
    title: "Water heater leaking from the bottom",
    description: "Bottom leaks on Vero Beach tanks: drain valve, nipple, or a shell that has already rusted through.",
    date: "2026-02-24",
    image: "/images/tank-base.jpg",
    imageAlt: "Water at the base of a storage water heater",
    takeaways: [
      "Water at the base is one of three things: a drain valve, a fitting, or the tank wall.",
      "A shell leak is a replacement. Tightening the drain valve is not a fix for rust in the middle.",
      "On a slab, bottom water has nowhere to go but across the floor.",
      "Sweat on the whole jacket is not the same as a stream at one point.",
    ],
    sections: [
      {
        h: "Where the water actually starts",
        html: `<p>Get a dry towel and wipe the base. Watch for one minute while the heater is idle, then again while it heats. The first wet point is the diagnosis.</p>
<p>A drip at the small valve near the floor is the drain. A drip at a threaded fitting where pipe meets tank is a nipple or union. Water that appears from under the insulation, with rust, is the steel.</p>
<p>That third one is why bottom leaks scare people. The <a href="https://waterheaterleakingverobeachfl.com/water-heater-replacement/">replacement</a> page is the visit. The <a href="https://waterheaterleakingverobeachfl.com/water-heater-repair/">repair</a> page is the first two.</p>`,
      },
      {
        h: "Three bottom sources",
        html: `<table>
<thead><tr><th>Wet spot</th><th>Likely part</th><th>Usual outcome</th></tr></thead>
<tbody>
<tr><td>The little hose-bib at the bottom</td><td>Drain valve</td><td>Repair if the shell is sound</td></tr>
<tr><td>Threads where the pipe enters</td><td>Nipple or dielectric union</td><td>Repair if the tank wall is dry</td></tr>
<tr><td>Rust bloom under the jacket, center bottom</td><td>Tank wall</td><td>Replacement</td></tr>
<tr><td>Film on the whole tank after a shower</td><td>Condensation</td><td>No part to change</td></tr>
</tbody>
</table>
<p>Do not lay a bead of sealant on a rust hole. The hole is the end of the steel, not a seam you can glue.</p>`,
      },
      {
        h: "Why slab houses show this faster",
        html: `<p>A basement heater can drip into a floor drain for a day before anyone notices. A Vero Beach garage cannot. The water finds the door, the hall, or the drywall on the other side of the closet.</p>
<p>In <a href="https://waterheaterleakingverobeachfl.com/florida-ridge/">Florida Ridge</a> the heater is often in the garage. You see the puddle when you pull in. In a <a href="https://waterheaterleakingverobeachfl.com/south-beach/">South Beach</a> chase you may see the ceiling stain first, which means the leak started one floor up.</p>
<p>If the stain is already on the wall, the <a href="https://waterheaterleakingverobeachfl.com/blog/signs-water-heater-is-failing/">failing heater signs</a> are past the early stage. Shut the inlet using the <a href="https://waterheaterleakingverobeachfl.com/blog/shut-off-a-leaking-water-heater/">shutoff steps</a> if the floor is still safe. A pan that is part of the puddle has its own notes in the <a href="https://waterheaterleakingverobeachfl.com/blog/overflowing-water-heater-pan/">overflowing pan guide</a>.</p>`,
      },
      {
        h: "What we tell you on site",
        html: `<p>We say repair or replace before we take the old tank apart. A drain valve on a sound shell is a small job. A shell leak means the new heater, the pan, and the connections.</p>
<p>You approve that price in the closet, with the wet spot in front of both of us. We do not guess it from a phone photo alone when the jacket is still on.</p>
<p>We pull enough jacket back to see steel. Foam that is wet only on the outside can be sweat. Foam that is rusty and soggy at the center bottom is the tank. That is the moment the job changes from a valve to a replacement, and you see it with us.</p>
<p>If the heater sits on a wood platform in a closet, we look at the platform too. Soft wood means the leak is older than this morning. We will not set a new tank on a sponge. The pan and a sound base are part of the same visit.</p>
<p>Drain-down happens after you approve the work. We run a hose to a safe spot, not across the hall carpet. On a slab garage the driveway is usually the safe spot. In a condo chase we ask where the building wants the water before we open the drain.</p>
<p>Bottom leaks rarely stay polite. A thread drip can sit for days. A shell leak speeds up as the steel opens. If you watched it go from a dime-sized spot to a trail toward the door, say that. The change in speed tells us the wall is failing, not a fitting that loosened.</p>
<p>We also check the hot outlet nipple. People stare at the floor and miss a leak that starts at the top and runs down the jacket. Wiping the top fittings is part of the same look. Water on the floor does not always begin on the floor.</p>
<p>After a replacement, the old tank leaves with us. We do not leave a rusted shell in the garage to keep dripping on the way to the curb. The pan under the new heater is empty when we go, and you know where the drain daylights. If that drain ends in a wall, we say so before we leave, because a hidden end is how the next drip becomes a stain.</p>
<p>Mark the edge of the wet spot with a piece of tape if the water is not still spreading. An hour later the tape tells you whether the leak is active. A spot that grew past the tape is not leftover wash water from a mop. A spot that stalled may be what you already wiped.</p>
<p>Do not stack towels against the base and leave for work. Towels hide growth and keep the steel wet. A dry view of a small drip is more useful to us than a pile of wet cloth and a story about how big it was at dawn.</p>
<p>When we replace a bottom-failed tank we also look at the shutoff that did not want to turn. A seized inlet is how the next leak becomes a bigger flood. If that valve is finished, it is part of the price you approve, not an add-on whispered at the end. You will see the old valve and the new one before we pack up.</p>`,
      },
    ],
    faqs: [
      { q: "Can I tighten the drain valve and stop a bottom leak?", a: "Only if the drip is at the valve itself and the tank wall is dry. A rust stain under the jacket will not stop because the handle got another quarter turn. If rust is blooming under the foam, tightening is finished as an idea." },
      { q: "Is a little water at the bottom normal after a flush?", a: "A few drops on the threads right after a flush can be leftover water. A new puddle an hour later is a leak. Wipe it once. If the same spot wets again with the hose off, it is not leftover flush water." },
      { q: "Should I wrap the bottom in a towel overnight?", a: "A towel hides the leak and soaks the slab. Close the inlet if you can, and leave the spot visible so we can see where it starts. Leave the spot bare so we can see the start of the water when we arrive." },
      { q: "Does homeowner insurance cover a rusted tank?", a: "That is between you and the policy. We document what failed. We do not promise a claim result. We will say what failed in plain words. The adjuster decides the rest." },
    ],
    sources: [readyFlood, epaFaucet, nfpa],
  },
  {
    slug: "relief-valve-dripping",
    title: "Why a water heater relief valve drips",
    description: "A dripping T&P valve on a Vero Beach heater is a pressure or heat problem. Capping it is how a drip becomes a burst.",
    date: "2026-03-11",
    image: "/images/relief-valve.jpg",
    imageAlt: "Temperature and pressure relief valve on a water heater",
    takeaways: [
      "The relief valve opens because the tank is too hot or the pressure is too high.",
      "A drip from the pipe coming off that valve is a warning, not a nuisance to plug.",
      "Never cap, plug, or valve off the relief line.",
      "We check temperature, the valve, and house pressure before we call it a bad valve.",
    ],
    sections: [
      {
        h: "The valve is doing the job you hope it never does",
        html: `<p>The temperature and pressure relief valve sits on the top or side of the tank. A pipe should run from it down toward the floor or to a safe drain. When the valve weeps, that pipe drips.</p>
<p>People cap it because the drip stains the pan. That cap removes the only automatic way for the tank to dump pressure. The next step is not a tidy closet. It is a <a href="https://waterheaterleakingverobeachfl.com/burst-water-heater/">burst water heater</a>.</p>
<p>If the pipe is already running, not dripping, treat it as active and use the <a href="https://waterheaterleakingverobeachfl.com/blog/shut-off-a-leaking-water-heater/">shutoff order</a>.</p>`,
      },
      {
        h: "Drip versus discharge",
        html: `<table>
<thead><tr><th>What the pipe does</th><th>Likely cause</th><th>What we check</th></tr></thead>
<tbody>
<tr><td>A drop now and then after a long recovery</td><td>Heat expansion in a closed house</td><td>Valve, setting, expansion path</td></tr>
<tr><td>A steady drip while the heater fires</td><td>Valve wear, high heat, or high pressure</td><td>Thermostat and incoming pressure</td></tr>
<tr><td>A stream</td><td>The valve is open or the tank is over limit</td><td>Shutdown first, then the cause</td></tr>
<tr><td>Wet pan but the relief pipe is dry</td><td>Not this valve</td><td>Shell, nipples, drain</td></tr>
</tbody>
</table>
<p>Replacing the valve without finding the cause just gives you a new valve that drips.</p>`,
      },
      {
        h: "Heat, pressure, and a closed plumbing system",
        html: `<p>When the heater fires, water expands. If the house has a check valve or a pressure reducing valve and nowhere for that expansion to go, pressure climbs. The relief valve is the outlet.</p>
<p>A thermostat stuck on heat does the same thing from the temperature side. Electric heaters show this as a valve that weeps every recovery. Gas heaters can too.</p>
<p>This is a <a href="https://waterheaterleakingverobeachfl.com/water-heater-repair/">repair</a> when the tank wall is sound. It becomes a <a href="https://waterheaterleakingverobeachfl.com/water-heater-replacement/">replacement</a> if we open the jacket and the steel is already gone. The <a href="https://waterheaterleakingverobeachfl.com/blog/leaking-from-the-bottom/">bottom leak guide</a> shows how we tell those apart.</p>`,
      },
      {
        h: "What not to do before we arrive",
        html: `<p>Do not put a plug in the relief opening. Do not add a shutoff on the relief pipe. Do not aim the pipe at a plug. The discharge end should stay open.</p>
<p>If the water is hot enough to steam in the garage, keep kids and pets out of that closet. NFPA home fire guidance is about heat sources in the house. A heater dumping scalding water belongs in that same caution, even though it is not a flame.</p>
<p>Call with the fuel type and whether the pipe is dripping or running. We will say the price after we see the valve and the tank, not before.</p>
<p>On site we look at the discharge pipe first. It should turn down and stop a few inches off the pan or floor, with nothing on the end. A pipe that runs uphill, or into a capped fitting, is a problem even if the valve is quiet today. We correct that path when we change the valve.</p>
<p>Then we look at how hot the tank is running and whether the house has a pressure regulator. High street pressure plus a heater that is set too hot will open a brand new valve. Replacing the valve alone would waste your money, so we do not sell it that way.</p>
<p>If the tank wall is already wet from a separate leak, the valve is no longer the main event. We stop and show you the shell. A relief repair on a dying tank is how people pay twice.</p>
<p>Temperature at the tap is part of the test. Water that is scalding at a bathroom sink means the heater is running too hot, or a mixing valve is missing. We lower the setting when that is the cause. We do not leave a tank cooking so the valve has to dump every cycle.</p>
<p>House pressure shows up at more than the heater. A toilet fill valve that hisses, or a faucet that hammers, belongs in the same conversation. We are there for the heater. We will still tell you if the relief drip is the house, not the tank.</p>
<p>Leave the discharge pipe where it is until we see it. Cutting it flush to stop a nuisance drip removes the air gap and aims hot water at the jacket. That is how a warning becomes a scald on the next opening.</p>
<p>A relief pipe that drips into a pan can look like a tank leak if you only see the pan. Follow the pipe with a dry finger on the outside of it. Wet only at the open end means the valve discharged. Wet higher up, at a joint in the pipe, is a fitting leak on the discharge line. Wet on the tank and dry on the pipe is not the valve at all.</p>
<p>We replace a tired valve when the test says the valve is tired. We do not replace it because the pipe looks old. Brass that has a little tarnish can still seat. A valve that weeps the moment the heater fires is the one that goes.</p>
<p>After the repair we heat the tank and watch. A valve that stays dry through a recovery is the result. A valve that opens again means the cause is still in the system, and we stay with that cause instead of handing you a dry closet that will drip tomorrow.</p>`,
      },
    ],
    faqs: [
      { q: "Can I replace the relief valve myself?", a: "The part is not the whole job. If pressure or a stuck thermostat caused the drip, a new valve drips too. We test the cause before we change the part. A valve swapped onto a tank that is still overheating will open again." },
      { q: "Is a dripping relief valve an emergency?", a: "A slow drip into a pan can wait for a same-visit look if the floor stays dry. A running pipe, steam, or water leaving the pan is a shutdown now. Steam or a stream means people out of the closet and the inlet closed if you can do it dry." },
      { q: "Why does it drip only in the afternoon?", a: "That is often recovery after morning showers, when the tank reheats and expands. It still needs a cause, not a cap. Afternoon recovery is still a cause we should find, even if the pan holds it." },
      { q: "The plumber last year capped it. Is that fine if it stopped?", a: "No. Take the cap off the plan, not as a dare. Call us so we can restore a working relief path and find why it opened. A quiet cap is not a repaired heater. The tank still needs a way to dump pressure." },
    ],
    sources: [nfpa, readyFlood, epaFaucet],
  },
  {
    slug: "no-hot-water-breaker-on",
    title: "No hot water but the breaker is on",
    description: "Cold showers in Vero Beach when the floor is dry and the breaker looks fine. What we check on electric and gas heaters.",
    date: "2026-04-02",
    image: "/images/cold-shower.jpg",
    imageAlt: "Shower running with no steam",
    takeaways: [
      "A dry floor and a cold shower is a heat problem, not a leak.",
      "Reset a tripped breaker once. If it trips again, leave it off.",
      "Gas smell ends the troubleshooting. Leave the house.",
      "A tank that fades halfway through one shower may be undersized or full of sediment.",
    ],
    sections: [
      {
        h: "Confirm it is heat, not water",
        html: `<p>Open a hot faucet. If the stream is strong and cold, you have water and no heat. If the stream is weak at every faucet, the heater is the wrong suspect.</p>
<p>Check the cold tap too. Rust only on the hot side still points at the tank, but it is a different visit from a cold shower. Start with the <a href="https://waterheaterleakingverobeachfl.com/no-hot-water/">no hot water</a> page if the floor is dry.</p>
<p>A wet floor plus no heat can be both problems. Deal with the water first, using the <a href="https://waterheaterleakingverobeachfl.com/blog/shut-off-a-leaking-water-heater/">shutoff guide</a>.</p>`,
      },
      {
        h: "Breaker on is not the same as power at the element",
        html: `<table>
<thead><tr><th>What you already tried</th><th>What it rules out</th><th>What is still open</th></tr></thead>
<tbody>
<tr><td>Breaker looks on</td><td>Nothing, until it is tested</td><td>A breaker can look on and be tripped</td></tr>
<tr><td>Reset once, it stayed</td><td>A dead short that repeats instantly</td><td>Element, thermostat, or no power on one leg</td></tr>
<tr><td>Reset once, it tripped again</td><td>A safe DIY path</td><td>Leave it off and call</td></tr>
<tr><td>Gas heater, no smell, no hot water</td><td>A simple leak</td><td>Control, sensor, or vent</td></tr>
</tbody>
</table>
<p>We do not ask you to pull the element panel. Those screws hide live parts on an electric heater. Ready.gov is clear that a dark or uncertain electrical situation is not a home project in standing water. A dry closet is still not a reason to open the panel if you have not done it before.</p>`,
      },
      {
        h: "Fades halfway through the shower",
        html: `<p>That pattern means the heater made some hot water and then ran out. One element can be open, so the tank only heats the top. Sediment can steal the bottom of the tank. Or the heater is simply small for the house.</p>
<p>A guest bath plus a washing machine at the same hour will empty a small tank even when every part works. We say that out loud before we sell a larger one.</p>
<p>The <a href="https://waterheaterleakingverobeachfl.com/blog/electric-or-gas-water-heater/">electric or gas guide</a> tells you which parts list we bring. The <a href="https://waterheaterleakingverobeachfl.com/blog/tank-vs-tankless-vero-beach/">tank versus tankless</a> note is for people who are tired of running out, not for a leak.</p>`,
      },
      {
        h: "After a storm",
        html: `<p>If the block is still dark, the heater is waiting on the utility. An electric tank does not recover until power returns and then needs time to heat a full shell.</p>
<p>Do not reset breakers in a flooded garage. South Beach and Wabasso houses see storm water that has nothing to do with the heater. If the closet is dry and the lights are on, then we look at the heater.</p>
<p>A gas heater that went cold after a storm may have a control that needs power, or a pilot that dropped when the house shook. If you do not smell gas and you have relit that pilot before, one careful relight is reasonable. If you have never done it, leave it. We would rather light it than talk you through a closet.</p>
<p>Electric heaters with one working element give lukewarm water that disappears. That feels like a half failure because it is. We meter the elements instead of guessing which one. You see the dead one before it goes in the trash.</p>
<p>If every fixture is cold and the heater is hot to the touch, the problem may be a mixing valve or a recirculation line, not the tank. We check that before we drain anything. Draining a good tank does not fix a valve in the hall. A dead element or thermostat, with a sound shell, is the <a href="https://waterheaterleakingverobeachfl.com/water-heater-repair/">repair</a> visit.</p>
<p>Say how many baths went cold. One shower that fades while the kitchen stays hot is a fixture. Every hot tap going cold together is the heater. That single detail keeps us from draining a tank that was doing its job.</p>
<p>If the heater is electric, leave the panel screws alone. The test meters live parts. We do that. Your job ended when you looked at the breaker once and told us what it did.</p>
<p>If the heater is gas and the closet is clear of any smell, leave the controls where they are. Turning the dial to the highest setting does not repair a failed sensor. It only makes the next successful start too hot. Write down what the dial says now so we can put it back where you had it.</p>
<p>Run the hot side at the tub, not only at the sink. A low-flow faucet can feel cold because it mixes poorly, while the tub spout tells the truth about the tank. If the tub is hot and one shower is cold, we are looking at that valve, not condemning the heater.</p>
<p>Timers and switches show up in some garages, leftover from an old energy setup. A timer that is off looks exactly like a failed heater. Glance at it if you see a clock dial by the tank. Tell us if you flipped it. If there is no timer, do not go looking for one behind the unit.</p>
<p>We restore heat and then we stay long enough to feel hot water at a faucet. Leaving when the meter says the element is good, without hot water at the tap, is an unfinished visit. You should not have to call back to ask if it worked. Hot at the tub is the finish line, not a meter reading alone.</p>`,
      },
    ],
    faqs: [
      { q: "The breaker is on and the shower is cold. Is the tank empty?", a: "If the faucet runs at normal pressure, the tank is full of cold water. Empty tanks sputter and spit air. This is a heat failure. Strong pressure and cold water means the tank is full and the heat is not happening." },
      { q: "How many times can I reset the breaker?", a: "Once. A second trip means leave it off. Repeated resets are how a failed element becomes a damaged panel. One reset that holds is information. A second trip is the end of the experiment." },
      { q: "Could a thermostat be the only bad part?", a: "Yes on many electric heaters. We test before we change parts so you are not paying for both elements and a thermostat you did not need. We test both thermostats and elements so you buy the part that failed." },
      { q: "Will a leaking relief valve also kill the hot water?", a: "It can dump heat, but you would see water at the relief pipe. A dry closet and a cold shower points at power, gas, or the heating parts. Look at the relief pipe. If it is dry, it is not the reason the shower is cold." },
    ],
    sources: [readyPower, nfpa, epaShower],
  },
  {
    slug: "how-long-water-heaters-last-in-florida",
    title: "How long water heaters last in Florida humidity",
    description: "Why Vero Beach tanks fail from humidity, salt air, and sediment, and what we look at instead of a calendar.",
    date: "2026-04-20",
    image: "/images/florida-home.jpg",
    imageAlt: "Florida house with a garage that often holds the water heater",
    takeaways: [
      "A calendar year is a weak predictor. The tank in the closet is the evidence.",
      "Humidity, salt air, and a quiet anode decide more than the sticker date.",
      "Rusty water at the hot tap and a wet base are late signs, not maintenance.",
      "We do not quote a lifespan number. We quote the heater we are looking at.",
    ],
    sections: [
      {
        h: "Stop counting birthdays. Look at the steel.",
        html: `<p>People want a year count. Florida does not cooperate. A tank in a dry inland closet and a tank in a salty island chase age on different clocks, even if the stickers match.</p>
<p>We look at rust at the base, the color of the hot water, the anode if the heater is still worth opening, and whether the pan has been wet before. That is the <a href="https://waterheaterleakingverobeachfl.com/blog/signs-water-heater-is-failing/">sign list</a> we actually use.</p>
<p>If the shell is already open, the remaining life is zero. That visit is on the <a href="https://waterheaterleakingverobeachfl.com/water-heater-replacement/">replacement</a> page.</p>`,
      },
      {
        h: "What shortens a tank here",
        html: `<table>
<thead><tr><th>Local condition</th><th>What it does</th><th>What you might notice</th></tr></thead>
<tbody>
<tr><td>Humid garage air</td><td>Hides early drips as sweat, then rusts fittings</td><td>A jacket that is always damp</td></tr>
<tr><td>Salt air near the island</td><td>Attacks nipples, valves, and the pan</td><td>Green or crusty threads</td></tr>
<tr><td>Sediment in the bottom</td><td>Bakes, rumbles, and steals capacity</td><td>Popping when the heater runs</td></tr>
<tr><td>A spent anode</td><td>The glass lining loses its backup</td><td>Rusty hot water while cold stays clear</td></tr>
<tr><td>A capped relief valve</td><td>Pressure has nowhere to go</td><td>The failure is sudden, not gradual</td></tr>
</tbody>
</table>
<p>None of those rows comes with a guaranteed year. They tell us whether this heater is a repair or a replacement today.</p>`,
      },
      {
        h: "Island chase versus inland garage",
        html: `<p><a href="https://waterheaterleakingverobeachfl.com/south-beach/">South Beach</a> and parts of <a href="https://waterheaterleakingverobeachfl.com/wabasso/">Wabasso</a> put heaters in tight chases with marine air. Fittings crust. Pans rust from the outside even when the tank is sound.</p>
<p>Florida Ridge and West Vero Corridor garages are humid but less salty. The failure we see there is more often the bottom of the steel and a pan nobody has looked at.</p>
<p>The <a href="https://waterheaterleakingverobeachfl.com/blog/leaking-from-the-bottom/">bottom leak article</a> is the inland pattern. Crusty valves show up more in the island notes on our <a href="https://waterheaterleakingverobeachfl.com/blog/relief-valve-dripping/">relief valve page</a>.</p>`,
      },
      {
        h: "Maintenance that is real, and maintenance that is theater",
        html: `<p>Knowing where the cold inlet is, keeping the relief pipe open, and not ignoring a pan that refills: that is useful. Buying a flush kit and never using it does not add years by magic.</p>
<p>EPA WaterSense showerheads and bath faucets cut how much hot water a shower asks for. That does not seal a rust hole. It does mean a smaller demand on a tank that is still healthy.</p>
<p>When we are in the closet we will say if the heater is worth keeping. You approve any work before we start. We will not invent a remaining-year number to push a sale.</p>
<p>What we can see without a lab: crust on the nipples, a soft pan, a relief pipe with a plug, rusty water that clears on the cold side, and rumbling that matches sediment. What we cannot see: the day it will open. Anyone who gives you that day is guessing.</p>
<p>If the heater is still sound and you want it kept, we talk about the anode and the temperature setting. Hotter is not safer. Hotter is more scale and more scald risk at the tap. A moderate setting and a working relief valve beat a new sticker date.</p>
<p>If the heater is not sound, waiting for a convenient week is how a closet becomes a garage flood. We will say that plainly. The choice to wait is still yours, with the wet spot as the evidence.</p>
<p>Humidity is the local constant. A tank that looks fine in January can sweat through August and hide a real drip in that film. The wipe test is the whole trick. One dry towel, one seam, one heat cycle. If you do that twice in a summer and the towel stays dry, you have a sweaty tank, not a failing one.</p>
<p>Salt is the other constant east of the river. Fittings that look furry are losing metal from the outside. The tank wall can still be fine. We replace the fitting and leave the heater when that is the truth. We do not use crust on a nipple as an excuse to sell a tank.</p>
<p>Write nothing down about years. Write down rust, noise, rusty hot water, and whether the pan has been wet. Those four notes are the history we can use. A manufacture date is a footnote. The steel in the closet outranks the sticker every time.</p>
<p>The anode is the one maintenance part worth naming. It is a rod inside the tank that corrodes so the steel corrodes less. When it is gone, the tank is on its own. We can check it when the heater is still worth keeping. We will not pull an anode out of a tank that is already leaking at the base. That tank is done, and opening it only makes a wet closet wetter.</p>
<p>Flushing sediment is useful on a heater that rumbles and still holds water. It is useless as a cure for rusty water that keeps coming. Rust in the stream is the lining and the steel, not a scoop of sand you can hose out.</p>
<p>If you want a plan, the plan is simple. Watch the pan. Keep the relief pipe open. Call when the base is wet or the hot side turns brown. Those are actions. A year count on a magnet is not a plan.</p>`,
      },
    ],
    faqs: [
      { q: "Is there a normal lifespan in Florida?", a: "We do not publish one. Humidity, salt, water quality, and whether the relief valve was left alone change the answer house by house. The tank in front of us is the answer. Bring us the wet spot, the water color, and the noise. Leave the birthday math at home." },
      { q: "Does a rumbling heater mean it is at the end?", a: "It means sediment. Some of those tanks are still sound. Some are thin at the bottom. We do not condemn it from the noise alone. We look at the base and the water color before we talk about replacement." },
      { q: "Should I replace it because the sticker is old and it has not leaked?", a: "Only if you want to, after you see the condition. Age on a sticker is context. A dry, quiet, clear-water heater is not an emergency. If you want it changed for your own reasons, we will still show you a dry base first." },
      { q: "Will a tankless last longer here?", a: "It fails differently. Scale and vent parts, not a rusted shell. Read the tank versus tankless guide before you treat it as a longer calendar. Longer is the wrong word. Different failures, different closet, different price." },
    ],
    sources: [epaShower, epaFaucet, readyFlood],
  },
  {
    slug: "tank-vs-tankless-vero-beach",
    title: "Tank or tankless water heater in Vero Beach",
    description: "A plain comparison for Vero Beach closets and garages: storage tank versus tankless, without a sales script.",
    date: "2026-05-08",
    image: "/images/tankless-unit.jpg",
    imageAlt: "Wall mounted tankless water heater",
    takeaways: [
      "A leaking storage tank is usually replaced with another storage tank in the same spot.",
      "Tankless needs the right gas or electric supply and a vent path. The closet does not always have them.",
      "Tankless does not solve a flood. It solves running out of hot water, when the house can feed it.",
      "You get the price for the option that fits the closet, after we look.",
    ],
    sections: [
      {
        h: "Start with the problem you actually have",
        html: `<p>If the garage is wet, you need the water stopped and a heater that holds water again. That is a storage replacement more often than a tankless conversion. The <a href="https://waterheaterleakingverobeachfl.com/burst-water-heater/">burst</a> and <a href="https://waterheaterleakingverobeachfl.com/leaking-water-heater/">leak</a> pages are that job.</p>
<p>If the floor is dry and you run out of hot water every evening, tankless is a fair question. It is not a shortcut around a gas line or an electrical service that cannot carry it.</p>`,
      },
      {
        h: "Side by side, without the brochure",
        html: `<table>
<thead><tr><th></th><th>Storage tank</th><th>Tankless</th></tr></thead>
<tbody>
<tr><td>Best reason to choose it</td><td>The closet already fits one and the leak is the emergency</td><td>You run out of hot water and the utilities can feed the unit</td></tr>
<tr><td>Failure we see</td><td>Shell, nipples, elements, relief valve</td><td>Scale, codes on the controller, vent, or flow</td></tr>
<tr><td>Space</td><td>Floor space in a garage or closet</td><td>Wall space, plus vent and service clearances</td></tr>
<tr><td>Storm note</td><td>Electric tanks wait on power</td><td>Many units also wait on power for controls</td></tr>
</tbody>
</table>
<p>We will not tell you tankless is always cheaper to run. We do not have your bill, and we will not invent one.</p>`,
      },
      {
        h: "What the closet has to allow",
        html: `<p>A garage in <a href="https://waterheaterleakingverobeachfl.com/florida-ridge/">Florida Ridge</a> often has room for either. A hall closet in <a href="https://waterheaterleakingverobeachfl.com/gifford/">Gifford</a> sometimes has room for the tank that is already there and nothing else.</p>
<p>Gas tankless needs a vent that can leave the house and a gas supply that can feed it while other appliances run. Electric tankless needs a heavy circuit. If those are missing, the project is bigger than the unit on the wall.</p>
<p>Read the <a href="https://waterheaterleakingverobeachfl.com/tankless-water-heater/">tankless service page</a> and the <a href="https://waterheaterleakingverobeachfl.com/blog/electric-or-gas-water-heater/">fuel guide</a> before you pick from a photo online.</p>`,
      },
      {
        h: "Scale and salt air",
        html: `<p>Tankless heaters hate scale in the heat exchanger. A storage tank hides sediment at the bottom and rumbles. Different symptom, same local water.</p>
<p>Island air still eats fittings on both. A wall unit in South Beach does not get a free pass because it has no tank to rust through. If the storage tank is already leaking from the base, settle that on the <a href="https://waterheaterleakingverobeachfl.com/blog/leaking-from-the-bottom/">bottom leak page</a> before you redesign the closet.</p>
<p>EPA WaterSense fixtures lower how much hot water you ask for in a shower. They do not change which machine belongs in the closet. They do make a right-sized storage tank easier to live with if tankless will not fit.</p>
<p>We size the conversation to the baths you actually run together. Two showers at once is a different house from one bath and a dishwasher. Tell us the truth about morning routines. A unit that looks big on a box can still lag if the gas line is small.</p>
<p>Service access matters as much as the brochure photo. A tankless unit crammed above a closet shelf with no room to pull the cover will not get flushed, and then it scales up. If we cannot stand in front of it, we will not pretend the install is finished.</p>
<p>Price comes after that look. The number for a same-spot storage swap and the number for a tankless conversion are different jobs. You pick with both numbers in hand, not from a web menu.</p>
<p>A storage tank recovers after you stop using hot water. A tankless unit makes heat while you use it, and it stops when the flow stops. If your complaint is a morning rush, either machine can be the right one once the closet and the fuel are honest. If your complaint is water on the floor, the storage tank in place is the thing to deal with first.</p>
<p>We flush the conversation of slogans. Endless hot water is only endless when the unit is large enough and the supply can feed it. A small tankless unit on a weak gas line gives you a warm disappointment. We would rather leave the tank you have than install that.</p>
<p>Ask us to show the vent path and the shutoff while the tools are still in the truck. The decision is easier when you can see the wall the unit would hang on. A closet that cannot take the vent should stay a storage-tank closet, and we will say that out loud.</p>
<p>Noise is different too. A storage tank pops when sediment heats. A tankless unit clicks and the fan runs while water moves. Neither sound is a leak. Water where water should not be is the leak. Do not let a new noise talk you into the other machine.</p>
<p>Clearance above and beside the unit is part of a tankless install we will actually service later. A storage tank needs a pan and a path for the relief pipe. If your closet has one of those and not the other, that is the machine that belongs there.</p>
<p>We can quote both when both are possible. We will not quote tankless as a teaser number and then discover the gas line on the day of install. The look happens first. The price comes from the look. If the closet cannot feed a tankless unit, we will not invent a way to make the brochure fit. A storage tank that already fits is a complete answer.</p>`,
      },
    ],
    faqs: [
      { q: "Can you swap a leaking tank for tankless the same day?", a: "Only if the vent, gas or electric supply, and wall space are already right. Most leak calls are not that house. We say which one you are standing in. A flood day is for stopping water and restoring a heater the closet can already feed." },
      { q: "Does tankless leak?", a: "It can leak at fittings, the heat exchanger, or a failed valve. It does not fail as a rusted storage shell, but water on the floor is still water on the floor. Treat water on the floor the same way you would treat water under a tank. Find the start, then call." },
      { q: "Will tankless give hotter water?", a: "It gives ongoing hot water when it is sized and fueled correctly. It does not make the shower hotter than the temperature you set. Set the temperature you want. The machine does not outrun that setting." },
      { q: "Which one do you recommend for a flood?", a: "The one that stops the flood and matches the utilities already in the closet. For most wet-floor calls that is another storage heater. Stop the water with a storage heater that matches the fuel already in the closet." },
    ],
    sources: [epaShower, epaFaucet, readyPower],
  },
  {
    slug: "overflowing-water-heater-pan",
    title: "Water heater pan overflowing",
    description: "What a full drain pan means in a Vero Beach closet, where the pan line should go, and when the pan is hiding a failed tank.",
    date: "2026-06-03",
    image: "/images/closet-leak.jpg",
    imageAlt: "Utility closet with a water heater and a wet floor",
    takeaways: [
      "A pan catches drips. It does not fix the heater.",
      "If the pan refills, the leak is still active.",
      "Follow the pan drain. Water at the outside wall means the pan is dumping a real leak.",
      "A pan that overflows onto a slab will find the hall.",
    ],
    sections: [
      {
        h: "The pan is a bucket with a job",
        html: `<p>The plastic or metal pan under the heater is there so a drip has a place to sit and, on a good install, a place to leave. It is not a repair.</p>
<p>If you bail it and it fills again, something above it is still leaking. Find that source with the <a href="https://waterheaterleakingverobeachfl.com/blog/leaking-from-the-bottom/">bottom leak checks</a>, or shut the inlet and call.</p>
<p>The <a href="https://waterheaterleakingverobeachfl.com/leaking-water-heater/">leaking water heater</a> visit starts with that question: is the pan the whole story, or is it late to the story?</p>`,
      },
      {
        h: "Full, slow, or dry",
        html: `<table>
<thead><tr><th>Pan</th><th>Meaning</th><th>Next step</th></tr></thead>
<tbody>
<tr><td>Dry, tank jacket damp all over</td><td>Often sweat</td><td>Wipe and watch one seam</td></tr>
<tr><td>An inch of water, comes back</td><td>Active leak</td><td>Close the inlet if you can</td></tr>
<tr><td>Overflowing the lip</td><td>The leak beat the drain</td><td>Protect the floor, then call</td></tr>
<tr><td>Dry pan, water at the outside wall</td><td>The drain line already carried it out</td><td>The leak is still real</td></tr>
<tr><td>Rusty pan, dry today</td><td>It has overflowed before</td><td>Look at the shell, not just the pan</td></tr>
</tbody>
</table>
<p>A clogged pan line turns a small drip into a closet flood. The clog did not cause the drip.</p>`,
      },
      {
        h: "Where the drain line goes on a slab",
        html: `<p>On a basement house the pan might drop to a floor drain. Here it should run to a visible outside point or another approved spot, not into a wall cavity.</p>
<p>Walk the outside of the closet wall at <a href="https://waterheaterleakingverobeachfl.com/gifford/">Gifford</a> and <a href="https://waterheaterleakingverobeachfl.com/florida-ridge/">Florida Ridge</a> houses. A wet streak on the stucco under a small pipe is the pan doing its job.</p>
<p>If there is no drain line at all, the pan holds water until it spills. That is common in older closets. We will say if adding a drain is part of the repair or if the tank has to come out first. See the <a href="https://waterheaterleakingverobeachfl.com/water-heater-repair/">repair</a> page only when the shell is intact. If you still need the inlet closed, use the <a href="https://waterheaterleakingverobeachfl.com/blog/shut-off-a-leaking-water-heater/">shutoff steps</a> first.</p>`,
      },
      {
        h: "When the pan is the least of it",
        html: `<p>Water over the lip near a bedroom hall is no longer a pan problem. Move people off wet floors near outlets. Ready.gov flood guidance is written for bigger water, and the first move is the same: people, then utilities if you can reach them safely.</p>
<p>A pan that has rusted through under a rusty tank is a <a href="https://waterheaterleakingverobeachfl.com/water-heater-replacement/">replacement</a>. We replace the pan with the heater so the next drip has somewhere to go.</p>
<p>You approve the price after we show you the wet spot and the shell. Bailing the pan overnight will not change that price. It only risks the floor.</p>
<p>A shop vac is fine when the breaker is off and you are standing on dry ground. It is a bad idea when the cord would cross a puddle. Towels in the pan are also a bad idea. They hold water against the tank and hide the level, so you cannot tell if the leak slowed.</p>
<p>We look for a pan drain that was never connected, a drain that loops uphill, and a drain that ends inside a wall. Any of those will overflow a good pan. Fixing the hose is cheap next to a ruined hall, and we will say if that is the whole job.</p>
<p>If the tank above that pan is rotten, the hose is not the whole job. You will see the rust before you approve a replacement. We set the new pan so the next drip has a path you can see outside or at a proper drain.</p>
<p>Check the pan on a normal week, not only when the hall smells wet. An empty pan is the result you want. A pan with a ring of rust and no water today has overflowed before. That ring is a reason to look at the tank, not a reason to paint the pan and forget it.</p>
<p>Condensate from a nearby air handler can land in the same pan and fool you. If the heater jacket is dry and the pan fills only when the air conditioner runs, tell us. We will not replace a heater that is not leaking. The hose from the air handler is the other trade, and we will say so.</p>
<p>Keep a small gap around the pan so you can see the lip. Stored boxes drink the overflow and delay the moment you notice. The pan only helps if someone can see that it is winning or losing.</p>
<p>If the pan drain daylights in a flower bed, look there before you assume the closet is dry. A bed that is suddenly soggy, with the hose bib off, is often the pan telling on the heater. Ants and mulch will hide that spot. Pull the mulch back once and see if the pipe end is wet.</p>
<p>A pan that is the wrong size, smaller than the tank, catches nothing. We see those under heaters that were swapped without the pan being swapped. Water misses the pan and wets the slab while the pan stays clean and empty. Empty is not proof. The floor around the pan is the proof.</p>`,
      },
    ],
    faqs: [
      { q: "Can I drill a hole in the pan so it stops overflowing?", a: "Not through the floor, and not into a wall. A random hole dumps water where you cannot see it. If the pan has no drain, call. We route it on purpose or we change the heater. A hole you drill becomes a leak you cannot point to later." },
      { q: "The pan is full but I cannot find a drip. Is that possible?", a: "Yes. The jacket hides the start. Wipe, watch, and do not assume sweat if the pan is filling. Sweat rarely fills a pan to the lip. The jacket hides the first inch of a leak. A full pan means keep looking, or have us look." },
      { q: "Should the pan be full of water all the time?", a: "No. A working pan is empty, or it drains as fast as a small drip arrives. Standing water means a leak, a clogged drain, or both. Empty and dry is the normal pan. Anything else is a leak, a clog, or both." },
      { q: "Do you replace the pan if the tank is fine?", a: "If the pan is cracked or rusted out and the tank is sound, the pan can be its own repair. We will not lift a sound tank out just to sell a heater. A cracked pan under a sound tank is worth changing. A sound tank is not a sales lead." },
    ],
    sources: [readyFlood, epaFaucet, nfpa],
  },
  {
    slug: "burst-water-heater-what-to-do",
    title: "What to do when a water heater bursts",
    description: "The first moves when a Vero Beach water heater lets go: people, power, the inlet if you can reach it, then the replacement.",
    date: "2026-07-16",
    image: "/images/burst-flood.jpg",
    imageAlt: "Water spreading across a garage floor from a failed heater",
    takeaways: [
      "A burst tank is a replacement. There is no patch for a split shell.",
      "Get people off wet floors before you hunt for the valve.",
      "Close the cold inlet only if you can do it without standing in water near outlets.",
      "We quote the replacement after the house is safe to work in, and you approve it before we start.",
    ],
    sections: [
      {
        h: "This is not a drip anymore",
        html: `<p>A burst heater dumps the tank. On a Vero Beach slab that water crosses the garage in minutes. The shell is done. The visit is a <a href="https://waterheaterleakingverobeachfl.com/burst-water-heater/">burst water heater</a> replacement, not a sealant stop.</p>
<p>If you are still reading, the water is either slowing or you are on dry ground. If it is still roaring, leave the closet and call.</p>`,
      },
      {
        h: "Order of moves",
        html: `<table>
<thead><tr><th>Order</th><th>Move</th><th>Skip it when</th></tr></thead>
<tbody>
<tr><td>1</td><td>People and pets off the wet floor</td><td>Never</td></tr>
<tr><td>2</td><td>Open the water heater breaker if you can reach the panel dry</td><td>You would stand in water to do it</td></tr>
<tr><td>3</td><td>Close the cold inlet if the handle is dry and obvious</td><td>The valve is under water or seized</td></tr>
<tr><td>4</td><td>Call us with the street and ZIP</td><td>You smell gas. Then call the gas utility from outside first</td></tr>
</tbody>
</table>
<p>Ready.gov tells people to move themselves and valuables, then shut utilities only when it is safe. A garage flood is smaller than a storm flood. The order does not change. The <a href="https://waterheaterleakingverobeachfl.com/blog/shut-off-a-leaking-water-heater/">shutoff article</a> is the longer version for a leak you can still walk around.</p>`,
      },
      {
        h: "Gas, electric, and the smell test",
        html: `<p>Electric heaters and standing water are a shock risk. Do not mop toward the panel. NFPA home fire and electrical safety guidance is the reason we treat a wet panel as off limits.</p>
<p>If you smell gas, the heater is no longer the first call. Leave, and call the gas utility from outside. Do not flip switches on the way out.</p>
<p>The <a href="https://waterheaterleakingverobeachfl.com/blog/electric-or-gas-water-heater/">fuel guide</a> helps you name what you have when you call us after the house is safe.</p>`,
      },
      {
        h: "What the replacement visit includes",
        html: `<p>We haul the failed tank, set the new storage heater, set a pan, and connect the inlet, outlet, and relief line. Like for like fuel unless we have already talked through a change.</p>
<p>A tankless conversion in the middle of a flood is the wrong project. Read <a href="https://waterheaterleakingverobeachfl.com/blog/tank-vs-tankless-vero-beach/">tank versus tankless</a> on a dry day.</p>
<p>We cover Florida Ridge, West Vero Corridor, Gifford, Wabasso, and South Beach. Have the ZIP ready. You approve the price before we start the swap.</p>
<p>The new heater goes in only after the old water is under control. We do not set a new tank in a lake. If the garage is still filling from a valve that failed open, the house main comes first, then the swap.</p>
<p>You will see the pan, the relief pipe aimed down, and the inlet open slowly while we watch the connections. A burst visit that ends with a drip at a new fitting is not done. We stay for that check.</p>
<p>Drywall and flooring are a separate trade. We can point at what got wet. We do not pretend a heater swap is a rebuild of the hall. Get the water stopped the same day. Schedule the dry-out with someone who does that work. The heater itself is a <a href="https://waterheaterleakingverobeachfl.com/water-heater-replacement/">replacement</a>, not a patch.</p>
<p>If water reached outlets, leave those breakers off until the floor is dry and someone has looked at the devices. A new heater does not make a soaked receptacle safe. That is outside our heater work, and we will not flip those breakers to prove a point.</p>
<p>Photos of the split tank help your own records. We do not need them to know the shell failed. We need the address, the fuel, and a safe way in. Meet us at the garage if the house is full of water and the front door is the long way around.</p>
<p>Once the new heater is in and the connections are dry, run a hot faucet until the air clears. Spurting at the tap is leftover air, not a second failure. Cloudiness that clears is air too. Rust that does not clear is a reason to call us back the same day. Keep the closet door open until the floor stays dry.</p>
<p>After the inlet is closed, the tank still holds what it held. That water is hot. Do not open the drain valve to hurry it onto the driveway unless the hose is already outside and you are not standing in the puddle. Most of the time the right move is to wait. We drain it when the replacement starts.</p>
<p>Furniture that got wet can be moved to dry tile if you can do it without crossing a live puddle. Drywall that is soft can wait. The heater cannot. Order the day around the water, not around the baseboard.</p>
<p>We set the new heater level, pipe the relief line down, and fill it before we fire it. Firing an empty tank is how elements and gas controls die on day one. You will see water at a faucet before we turn the heat on. That sequence is the visit, and you approve the price before any of it starts. We do not fire the heater until a faucet proves the tank is full. Air at the tap is normal for a minute. Rust that stays is not.</p>`,
      },
    ],
    faqs: [
      { q: "Can a burst tank be welded or patched?", a: "No. The steel that split is the pressure vessel. The repair is a new heater. The split is the end of that vessel. The work is a new heater and a pan that can catch the next drip." },
      { q: "Should I bail water before you arrive?", a: "Only from a dry standing spot, after the inlet is closed and the breaker is open. Do not use a shop vac in standing water next to outlets. Dry ground and an open breaker come first. A mop in a live puddle is how a flood becomes a shock." },
      { q: "Will the house main stop it if the heater valve will not turn?", a: "Yes, if you can reach the house main dry. That cuts water to every fixture. Tell us you did that so we are not hunting a closed valve. Use the main only if you can reach it dry, and tell us the house is off so we restore the right valve." },
      { q: "Do you need the old heater out before you quote?", a: "We can see a split shell without a long teardown. The quote covers the replacement you are approving. We do not start until you say yes. A split shell is visible. You approve the replacement before we drag the old tank out." },
    ],
    sources: [readyFlood, nfpa, readyPower],
  },
];
