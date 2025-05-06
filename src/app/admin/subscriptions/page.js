"use client";
import EmailTableItem from "@/components/admin/EmailTableItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function page() {
  const [email, setEmail] = useState([]);

  const fetchEmail = async () => {
    const response = await axios.get("/api/email");
    setEmail(response.data.data);
  };

  const deleteEmail = async (mongoId) => {
    const response = await axios.delete("/api/email", {
      params: { id: mongoId },
    });
    toast.success(response.data.message);
    fetchEmail();
  };

  useEffect(() => {
    fetchEmail();
  }, []);
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Subscription</h1>
      <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Email Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {email.map((item, index) => {
              return (
                <EmailTableItem
                  key={index}
                  item={item}
                  deleteEmail={deleteEmail}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
