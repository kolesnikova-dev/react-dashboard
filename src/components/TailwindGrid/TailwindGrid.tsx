export const TailwindGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[1fr_2fr] gap-4">
      {children}
    </div>
  );
}