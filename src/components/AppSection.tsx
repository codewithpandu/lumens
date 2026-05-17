import { cn } from "@/lib/utils";

export default function AppSection({
  children,
  className,
  ...props
}: Readonly<
  {
    children: React.ReactNode;
    className?: string;
  } & React.HTMLAttributes<HTMLDivElement>
>) {
  return (
    <section {...props} className={cn("w-full", className)}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
