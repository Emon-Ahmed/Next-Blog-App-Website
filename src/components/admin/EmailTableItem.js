import React from "react";

export default function EmailTableItem({ item, deleteEmail }) {
  const EmailDate = new Date(item.date);

  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <p>{item.email ? item.email : "No Email"}</p>
      </th>
      <td className="px-6 py-4">{EmailDate.toDateString()}</td>
      <td
        className="px-6 py-4 cursor-pointer"
        onClick={() => deleteEmail(item._id)}
      >
        X
      </td>
    </tr>
  );
}
