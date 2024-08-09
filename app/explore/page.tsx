import PagePadding from "@/components/PagePadding";
import Category from "./components/Category";

export default function ExplorePage() {
  return (
    <PagePadding>
      <div className="mt-4">
        <Category />
      </div>
    </PagePadding>
  );
}
