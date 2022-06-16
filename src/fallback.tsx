import { Spinner } from "./components";
import { MainLayout } from "./layouts/main";

const Fallback = () => {
  return (
    <MainLayout>
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    </MainLayout>
  );
};

export default Fallback;
