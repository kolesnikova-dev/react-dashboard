export const NarrowWideGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[1fr_3fr] gap-4">
      {children}
    </div>
  );
};

export const WideNarrowGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[3fr_1fr]">
      {children}
    </div>
  );
};


