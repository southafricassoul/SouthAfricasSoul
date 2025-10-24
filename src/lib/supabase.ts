import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
import React, { useEffect, useState } from "react";
import { fetchSheetData } from "./lib/googleSheets";

interface Herb {
  HerbID: string;
  CommonName: string;
  ScientificName: string;
  Region: string;
  Description: string;
  Image: string;
  MedicinalUses: string;
  PlantParts: string;
  Benefits: string;
  Traditions: string;
}

function App() {
  const [herbs, setHerbs] = useState<Herb[]>([]);
  const [loading, setLoading] = useState(true);

  // Replace this with your Google Sheet ID
  const sheetId = "YOUR_SHEET_ID_HERE";
  const sheetName = "Herbs";

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchSheetData(sheetId, sheetName);
        setHerbs(data);
      } catch (err) {
        console.error("Error fetching sheet:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) return <p>Loading herbs...</p>;

  return (
    <div className="p-6 bg-gradient-to-b from-green-50 to-green-100 min-h-screen">
      <h1 className="text-3xl font-bold text-green-800 mb-4 text-center">
        South Africa's Soul 🌿
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {herbs.map((herb) => (
          <div
            key={herb.HerbID}
            className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition"
          >
            {herb.Image && (
              <img
                src={herb.Image}
                alt={herb.CommonName}
                className="rounded-xl h-40 w-full object-cover mb-3"
              />
            )}
            <h2 className="text-xl font-semibold text-green-700">
              {herb.CommonName}
            </h2>
            <p className="italic text-gray-500">{herb.ScientificName}</p>
            <p className="text-sm text-gray-700 mt-2">{herb.Description}</p>
            <p className="text-xs text-gray-500 mt-1">
              <strong>Region:</strong> {herb.Region}
            </p>
            <p className="text-xs text-gray-500">
              <strong>Tradition:</strong> {herb.Traditions}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
