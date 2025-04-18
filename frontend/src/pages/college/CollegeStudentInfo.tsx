"use client";

import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import studentpic from "../../assets/heroImage.png";
import { Button } from "../../components/ui/button";
import { MenuItem2 } from "../../types";
import CollegeNavBar from "../../components/college/CollegeNavBar";

const NavBarMenu: MenuItem2[] = [
  { id: 0, title: "Dashboard", link: "/college/dashboard" },
  { id: 1, title: "Stats", link: "/college/stats" },
  { id: 2, title: "Student Info", link: "/college/studentinfo" },
  { id: 3, title: "Company Info", link: "/college/companyinfo" },
];

type Application = {
  id: string;
  student: string;
  pic: string;
  company: string;
  date: string;
  status: "Placed" | "Not Placed" | "Interview";
};

export function CollegeStudentInfo() {
  const [data] = useState<Application[]>([
    {
      id: "1",
      student: "Arjun Mehta 22bcs011",
      pic: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREhUSEhIWFhUXFRcbFRUYGRUWFxcbGBgWFhgYGxUdHSogGBolGxcWITEhJykrLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGi0lICUvLS0tLS8tLSsvLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDB...",
      company: "Google",
      date: "2024-03-15",
      status: "Interview",
    },
    {
      id: "2",
      student: "Riya Sharma 22bcs012",
      pic: "https://randomuser.me/api/portraits/women/45.jpg",
      company: "Infosys",
      date: "2024-02-10",
      status: "Not Placed",
    },
    {
      id: "3",
      student: "Kabir Singh 22bcs013",
      pic: "https://randomuser.me/api/portraits/men/46.jpg",
      company: "Amazon",
      date: "2024-01-22",
      status: "Placed",
    },
    {
      id: "4",
      student: "Sneha Patil 22bcs014",
      pic: "https://randomuser.me/api/portraits/women/47.jpg",
      company: "TCS",
      date: "2024-03-15",
      status: "Not Placed",
    },
    {
      id: "5",
      student: "Devansh Kapoor 22bcs015",
      pic: "https://randomuser.me/api/portraits/men/48.jpg",
      company: "Wipro",
      date: "2024-02-10",
      status: "Not Placed",
    },
    {
      id: "6",
      student: "Meera Joshi 22bcs016",
      pic: "https://randomuser.me/api/portraits/women/49.jpg",
      company: "Adobe",
      date: "2024-01-22",
      status: "Placed",
    },
    {
      id: "7",
      student: "Aniket Rao 22bcs017",
      pic: "https://randomuser.me/api/portraits/men/50.jpg",
      company: "Flipkart",
      date: "2024-03-15",
      status: "Not Placed",
    },
    {
      id: "8",
      student: "Pooja Sinha 22bcs018",
      pic: "https://randomuser.me/api/portraits/women/51.jpg",
      company: "Cognizant",
      date: "2024-02-10",
      status: "Not Placed",
    },
    {
      id: "9",
      student: "Harsh Vardhan 22bcs019",
      pic: "https://randomuser.me/api/portraits/men/52.jpg",
      company: "Capgemini",
      date: "2024-01-22",
      status: "Placed",
    },
    {
      id: "10",
      student: "Isha Reddy 22bcs020",
      pic: "https://randomuser.me/api/portraits/women/52.jpg",
      company: "Zoho",
      date: "2024-01-22",
      status: "Placed",
    },
  ]);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Application;
    direction: "asc" | "desc";
  } | null>(null);

  const handleSort = (key: keyof Application) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig) return 0;
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  return (
    <div className="w-full h-full">
      <CollegeNavBar menuItems={NavBarMenu} />
      <div className="pt-30 mt-2 mx-4 h-full pb-20 px-30">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("company")}
                    className="p-0"
                  >
                    Company <ArrowUpDown className="ml-1 h-4 w-4" />
                  </Button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedData.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <img
                        src={item.pic}
                        alt={item.student}
                        className="w-6 h-6 rounded-full"
                      />
                      <span>{item.student}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                  <td className="px-6 py-4">
                    <div
                      className={` py-1 rounded-md text-center ${
                        item.status === "Placed"
                          ? "bg-green-200 text-green-800"
                          : item.status === "Not Placed"
                          ? "bg-red-200 text-red-800"
                          : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {item.status}
                    </div>
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
