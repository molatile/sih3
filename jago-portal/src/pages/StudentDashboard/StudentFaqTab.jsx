import React, { useState } from "react";
import { contacts } from "../../data/mockData";

export default function StudentFaqTab({ appState, setAppState }) {
  const [selectedState, setSelectedState] = useState("All");

  const uniqueStates = ["All", ...new Set(contacts.map(c => c.state))];

  const filteredContacts = selectedState === "All" 
    ? contacts 
    : contacts.filter(c => c.state === selectedState);

  return (
    <div className="space-y-8" id="tab-student-faq">
      {/* Helpdesk Banner */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md flex items-center justify-between shadow-sm">
        <div>
          <h4 className="text-blue-800 font-bold text-lg">Need help?</h4>
          <p className="text-blue-700 mt-1">
            Call our helpdesk: <span className="font-bold text-blue-900 bg-blue-100 px-2 py-1 rounded">1800-XXX-XXXX (Toll Free)</span>
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h3 className="font-bold text-lg mb-4 text-mota-green">Frequently Asked Questions</h3>
        <div className="space-y-3" id="faq-list"></div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-gray-800">Important Contacts</h3>
          <select 
            value={selectedState} 
            onChange={(e) => setSelectedState(e.target.value)}
            className="border border-gray-300 rounded-md text-sm p-2 bg-white focus:ring-mota-green focus:border-mota-green outline-none min-w-[150px]"
          >
            {uniqueStates.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-base whitespace-nowrap">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 font-semibold text-gray-700">Name</th>
                <th className="p-4 font-semibold text-gray-700">Role</th>
                <th className="p-4 font-semibold text-gray-700">Email</th>
                <th className="p-4 font-semibold text-gray-700">Phone</th>
                <th className="p-4 font-semibold text-gray-700 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y" id="contacts-table">
              {filteredContacts.map((c, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium">{c.name}</td>
                  <td className="p-4 text-gray-600">{c.role}</td>
                  <td className="p-4 text-blue-600">{c.email}</td>
                  <td className="p-4 text-gray-600">{c.phone}</td>
                  <td className="p-4 text-center space-x-2">
                    <a href={`mailto:${c.email}`} className="inline-flex items-center justify-center bg-blue-100 text-blue-700 px-3 py-1.5 rounded-md hover:bg-blue-200 transition-colors text-sm font-medium">
                      <span className="mr-1">📧</span> Email
                    </a>
                    <a href={`tel:${c.phone}`} className="inline-flex items-center justify-center bg-green-100 text-green-700 px-3 py-1.5 rounded-md hover:bg-green-200 transition-colors text-sm font-medium">
                      <span className="mr-1">📞</span> Call
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}