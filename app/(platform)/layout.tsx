import { ClerkProvider } from "@clerk/nextjs";

const Platformlayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  );
};

export default Platformlayout;