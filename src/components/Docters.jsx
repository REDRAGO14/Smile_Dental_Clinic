export default function Doctors() {
  return (
    <section className="p-12 bg-teal-50 text-center">
      <h3 className="text-3xl font-bold mb-8">Meet Our Doctors</h3>
      <div className="flex justify-center gap-10">
        <div className="shadow p-6 rounded bg-white">
          <p className="font-semibold">Dr. Sara Ahmed</p>
          <p className="text-gray-500">Orthodontist</p>
        </div>
        <div className="shadow p-6 rounded bg-white">
          <p className="font-semibold">Dr. John Doe</p>
          <p className="text-gray-500">Dentist</p>
        </div>
      </div>
    </section>
  );
}
