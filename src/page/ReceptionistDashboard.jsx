import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster, toast } from 'react-hot-toast';
import { 
  HiOutlineClock, 
  HiOutlineShieldCheck,
  HiOutlineArrowPath, 
  HiOutlinePhone, 
  HiOutlineCheckCircle,
  HiOutlineSparkles
} from "react-icons/hi2";

export default function ReceptionistDashboard() {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("Active"); // Default to Active (No finished)
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Terminology Mapping for UI
  const statusMap = {
    "Pending": "New Request",
    "Waiting": "Arrived",
    "In-Suite": "In Treatment",
    "Complete": "Finished"
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://smile-dental-clinic-lkzo.onrender.com/api/booking");
      const data = await res.json();
      setBookings(data);
    } catch (err) {
      toast.error("Offline Mode - Showing Mock Data");
      setBookings([
        { _id: "1", fullName: "James Bond", phoneNumber: "0911007007", service: "Implantology", status: "Pending" },
        { _id: "2", fullName: "Diana Prince", phoneNumber: "0922111333", service: "Cosmetic Artistry", status: "Waiting", arrivalTime: new Date() },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const stats = useMemo(() => {
    const treated = bookings.filter(b => b.treatmentStartTime && b.arrivalTime);
    const avg = treated.length ? (treated.reduce((a, b) => a + (new Date(b.treatmentStartTime) - new Date(b.arrivalTime)), 0) / treated.length / 60000).toFixed(1) : "0.0";
    
    return {
      avgWait: avg,
      activeSuites: bookings.filter(b => b.status === "In-Suite").length,
      followUps: bookings.filter(b => b.status === "Complete" && !b.nextAppointmentDate).length
    };
  }, [bookings]);

  const updatePatient = async (id, updates) => {
    setBookings(prev => prev.map(b => b._id === id ? { ...b, ...updates } : b));
    try {
      await fetch(`https://smile-dental-clinic-lkzo.onrender.com/api/bookings/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      toast.success(`Updated to ${statusMap[updates.status] || 'Successfully'}`);
    } catch (err) { toast.error("Sync failed"); }
  };

  const filteredBookings = bookings.filter(b => {
    const matchesSearch = b.fullName.toLowerCase().includes(searchTerm.toLowerCase());
    if (filter === "Active") return matchesSearch && b.status !== "Complete";
    if (filter === "Follow-up") return matchesSearch && b.status === "Complete" && !b.nextAppointmentDate;
    if (filter === "All") return matchesSearch;
    return matchesSearch && b.status === filter;
  });

  return (
    <div className="min-h-screen bg-[#FBFBFE] p-6 lg:p-12 font-sans text-blue-500">
      <Toaster />
      <header className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2">Clinic <span className="font-serif italic text-blue-800">Flow.</span></h1>
          <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">{new Date().toDateString()}</p>
        </div>
        <div className="flex gap-3 w-full lg:w-96">
          <input 
            type="text" placeholder="Search patient name..." 
            className="px-6 py-4 bg-white rounded-2xl border border-blue-500-50 w-full shadow-sm focus:ring-2 ring-blue-500/20 outline-none transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={fetchData} className="p-4 bg-white border border-blue-500-50 rounded-2xl shadow-sm hover:bg-blue-500-50 transition-all">
            <HiOutlineArrowPath className={loading ? "animate-spin" : ""}/>
          </button>
        </div>
      </header>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard label="Avg. Lounge Wait" value={`${stats.avgWait} min`} icon={<HiOutlineClock/>} />
        <StatCard label="Active Suites" value={`${stats.activeSuites} / 4`} icon={<HiOutlineShieldCheck/>} />
        <StatCard label="Follow-up Required" value={stats.followUps} icon={<HiOutlinePhone />} highlight={stats.followUps > 0}/>
      </div>

      {/* FILTER TABS */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {["Active", "Waiting", "In-Suite", "Follow-up", "All"].map(f => (
          <button key={f} onClick={() => setFilter(f)} className={`whitespace-nowrap px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${filter === f ? "bg-blue-500 text-white" : "bg-white text-blue-500-300 border border-blue-500-50"}`}>
            {f === "Active" ? "Current Queue" : f}
          </button>
        ))}
      </div>

      {/* PATIENT LIST */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-blue-500-50 overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] uppercase text-gray-300 font-black border-b border-blue-500-50">
              <th className="p-8">Patient Details</th>
              <th className="p-8">Clinic Service</th>
              <th className="p-8">Current Status</th>
              <th className="p-8 text-right">Quick Action</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="popLayout">
              {filteredBookings.map(b => (
                <motion.tr 
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={b._id} 
                  className="border-b border-blue-500-50 hover:bg-blue-500-50/10 transition-all"
                >
                  <td className="p-8">
                    <div className="flex flex-col">
                      <span className="font-bold text-lg">{b.fullName}</span>
                      <span className="text-blue-800 font-mono text-xs tracking-tighter font-bold">{b.phoneNumber || "No contact"}</span>
                    </div>
                  </td>
                  <td className="p-8 text-sm font-medium text-gray-500">{b.service}</td>
                  <td className="p-8">
                    <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                      b.status === "In-Suite" ? "bg-blue-500 text-white" : 
                      b.status === "Waiting" ? "bg-blue-50 text-blue-800" : "bg-gray-100 text-gray-400"
                    }`}>
                      {statusMap[b.status]}
                    </span>
                  </td>
                  <td className="p-8 text-right">
                     {b.status === "Pending" && (
                       <button onClick={() => updatePatient(b._id, {status: "Waiting", arrivalTime: new Date()})} className="bg-blue-800 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase">Check In</button>
                     )}
                     {b.status === "Waiting" && (
                       <button onClick={() => updatePatient(b._id, {status: "In-Suite", treatmentStartTime: new Date()})} className="bg-blue-500 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase">Start Treatment</button>
                     )}
                     {b.status === "In-Suite" && (
                       <button onClick={() => updatePatient(b._id, {status: "Complete"})} className="border border-blue-500 text-blue-500 px-4 py-2 rounded-xl text-[10px] font-black uppercase hover:bg-blue-500 hover:text-white transition-all">Discharge</button>
                     )}
                     {b.status === "Complete" && <HiOutlineCheckCircle className="text-blue-500 ml-auto" size={28}/>}
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
        {filteredBookings.length === 0 && (
          <div className="p-20 text-center flex flex-col items-center opacity-30">
            <HiOutlineSparkles size={48} className="mb-4 text-blue-500-200"/>
            <p className="font-black uppercase tracking-widest text-sm">All Clear - No Pending Tasks</p>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, icon, highlight }) {
  return (
    <div className={`p-6 rounded-3xl border ${highlight ? 'border-blue-400 bg-blue-50/30' : 'border-blue-500-50 bg-white'} flex gap-4 items-center shadow-sm`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${highlight ? 'bg-blue-500 text-white' : 'bg-blue-50 text-blue-800'}`}>{icon}</div>
      <div>
        <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{label}</p>
        <p className="text-2xl font-black text-blue-500">{value}</p>
      </div>
    </div>
  );
}