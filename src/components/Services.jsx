export default function Services() {
  const services = [
    "Teeth Whitening",
    "Dental Implants",
    "Braces & Aligners",
    "Routine Checkup",
  ];

  return (
    <section className="p-12 bg-white text-center">
      <h3 className="text-3xl font-bold mb-8">Our Services</h3>
      <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="p-6 shadow rounded">
            <h4 className="text-xl font-semibold">{service}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
