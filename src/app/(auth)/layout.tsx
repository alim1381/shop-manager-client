function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex items-center min-h-screen p-6  bg-gray-900">
      <div className=" h-full mx-auto overflow-hidden  rounded-lg shadow-xl bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="flex items-center justify-center p-6 sm:p-12 ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default layout;
