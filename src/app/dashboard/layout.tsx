import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode;
  }) {
    return (
      // <div className="bg-gradient-to-r from-[#04061a] via-[#000014] to-[#0b406d]  font bg-no-repeat bg-cover bg-center text-[rgba(244,244,245,.9)] overflow-y-hidden overflow-x-hidden min-h-screen">

      <div className=" text-[rgba(244,244,245,.9)] overflow-y-hidden overflow-x-hidden min-h-screen w-full">
      <Navbar />
      <div className="flex mt-[4.4rem] w-[100%] border boder-white h-[100vh]">
      <Sidebar />
      <div className="md:ml-[16rem] w-[100%] xs:mx-auto border boder-white bg-white text-black">
      {children}
      </div>
      </div>
  </div>
    );
  }