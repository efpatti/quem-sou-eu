// components/SubItem.tsx
import { ReactNode } from "react";

export default function SubItem({ children }: { children: ReactNode }) {
  return (
    <div className="text-center space-y-2">
      {children}
    </div>
  );
}
