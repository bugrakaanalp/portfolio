export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-semibold tracking-wide uppercase bg-[#F5F5F7] text-[#86868B] border border-[#E8E8ED]">
      {children}
    </span>
  );
}