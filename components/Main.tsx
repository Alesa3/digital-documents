export default function Main({ children }: { children: React.ReactNode }) {
    return (
      <main className="h-full min-h-screen w-screen bg-black flex justify-center">
        <div className="w-full max-screen-lg bg-white flex justify-center">
          {children}
       
        </div>
      </main>
    );
  }
  