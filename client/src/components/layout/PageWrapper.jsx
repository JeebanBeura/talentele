/**
 * Wraps every page with a minimum screen height and white background.
 */
export default function PageWrapper({ children, className = "", ...props }) {
  return (
    <main 
      className={`flex min-h-screen w-full flex-col bg-white ${className}`}
      {...props}
    >
      {children}
    </main>
  );
}
