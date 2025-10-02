import Header from "@/components/Header";
import PrivateRoute from "@/components/Privateroute";
import Sidebar from "@/components/Sidebar";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
        <Header />
        <div className="flex items-start">
            <Sidebar />
            <PrivateRoute>
            {children}
            </PrivateRoute>
        </div>
    </div>
  );
}