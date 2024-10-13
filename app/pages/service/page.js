import Header from "@/app/components/services/header";
import Card from "@/app/components/services/card";
import Search from "@/app/components/services/search";

export default function ServicePage() {
  return (
    <div>
      {/* Header Section */}
      <Header />
      <Search />
      <main className="bg-[#FBE4CC] py-12 px-6">
        <div className="container mx-auto">
          <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2 justify-items-center">
            <Card />
          </div>
        </div>
      </main>
    </div>
  );
}
