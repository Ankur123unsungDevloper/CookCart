import { FoodProfileImage } from "@/components/foodprofileimg-model";
import { RegisterModal } from "@/components/register-modal";

const DashBoardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      {children}
      <RegisterModal />
      <FoodProfileImage />
    </div>
  );
};

export default DashBoardLayout;