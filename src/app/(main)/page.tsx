import Cards from "@/components/cards/Cards";
export const dynamic = "force-dynamic"
function DashboardPage() {
  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-200">Dashboard</h2>
      <Cards />
    </>
  );
}

export default DashboardPage;
