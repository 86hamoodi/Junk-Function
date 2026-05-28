import React from "react";
import { Phone, MessageCircle, CheckCircle, Truck, Sofa, Refrigerator, Warehouse, Trash2, Hammer, Leaf, MapPin, Star } from "lucide-react";

export default function JunkFunctionWebsite() {
  const services = [
    { icon: Sofa, title: "Furniture Removal" },
    { icon: Refrigerator, title: "Appliance Removal" },
    { icon: Warehouse, title: "Garage Cleanouts" },
    { icon: Trash2, title: "Trash Hauling" },
    { icon: Hammer, title: "Construction Debris" },
    { icon: Leaf, title: "Yard Waste" },
  ];

  const benefits = ["Same Day Service", "Free Estimates", "Honest Pricing", "No Job Too Big or Small"];

  return (
    <div className="min-h-screen bg-[#50f000] text-black">
      <header className="bg-black text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="text-2xl font-black tracking-wide">
            <span className="text-white">JUNK</span> <span className="text-lime-400">FUNCTION</span>
          </div>
          <a href="tel:6150000000" className="rounded-full bg-lime-400 px-5 py-2 font-black text-black shadow-lg">
            Call Now
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden px-5 py-16 text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-black blur-3xl" />
          <div className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-black blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-5xl">
          <p className="mb-3 text-xl font-black uppercase tracking-widest">Junk Removal and Clean Up</p>
          <h1 className="text-6xl font-black uppercase leading-none sm:text-8xl">
            We Haul <span className="text-white drop-shadow-[5px_5px_0px_#000]">It All</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl font-bold">
            Fast junk removal, same day cleanouts, and free estimates in the Nashville area. You point, we haul.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="tel:6150000000" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-8 py-4 text-xl font-black text-white shadow-xl">
              <Phone size={24} /> Call (615) 000-0000
            </a>
            <a href="sms:6150000000" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-xl font-black text-black shadow-xl">
              <MessageCircle size={24} /> Text Today
            </a>
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-12 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-4xl font-black uppercase text-lime-400">Fast Junk Removal</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="rounded-2xl border border-lime-400/40 bg-zinc-950 p-6 shadow-xl">
                  <Icon className="mb-4 text-lime-400" size={42} />
                  <h3 className="text-2xl font-black">{service.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit} className="rounded-2xl bg-white p-6 text-center shadow-xl">
              <CheckCircle className="mx-auto mb-3 text-black" size={38} />
              <p className="text-xl font-black uppercase">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-4xl font-black uppercase">Let Us Do The Heavy Lifting</h2>
            <p className="mt-4 text-lg font-semibold text-zinc-700">
              From single-item pickups to full garage, home, and property cleanouts, Junk Function makes cleanup simple. We show up on time, give honest pricing, and handle the mess so you can enjoy your space again.
            </p>
            <div className="mt-6 space-y-3 font-bold">
              <p className="flex items-center gap-2"><Star className="text-lime-500" /> Locally owned and operated</p>
              <p className="flex items-center gap-2"><MapPin className="text-lime-500" /> Serving Nashville and surrounding areas</p>
              <p className="flex items-center gap-2"><Truck className="text-lime-500" /> Residential and commercial cleanouts</p>
            </div>
          </div>
          <div className="rounded-3xl bg-black p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-black text-lime-400">Get A Free Estimate</h3>
            <p className="mt-3 text-lg">Send us a picture of what you need removed and we’ll give you a quick quote.</p>
            <a href="tel:6150000000" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-lime-400 px-6 py-4 text-xl font-black text-black">
              <Phone /> Call or Text Today
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-black px-5 py-8 text-center text-white">
        <p className="text-2xl font-black"><span className="text-lime-400">JUNK</span> FUNCTION</p>
        <p className="mt-2 font-bold">Junk Removal and Clean Up • Nashville, TN</p>
        <p className="mt-2 text-lime-400 font-black">(615) 000-0000</p>
      </footer>
    </div>
  );
}
