// components/CodeBackground.tsx
export const CodeBackground = () => (
 <div className="fixed inset-0 opacity-10 pointer-events-none">
  <pre className="text-xs font-mono absolute animate-scroll">
   {`// Aaron Swartz's Manifesto
function main() {
  const information = power;
  if (information.isFree()) {
    world.improve();
  }
}`.repeat(20)}
  </pre>
 </div>
);
