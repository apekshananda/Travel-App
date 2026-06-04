
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-cover bg-center p-4 md:p-8">
      <div className="mx-auto w-full max-w-7xl">
        {children}
      </div>
    </div>
  );
}