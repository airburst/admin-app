export function DashboardFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="text-muted-foreground mx-auto flex size-full max-w-7xl items-center justify-between gap-3 px-4 py-3 max-sm:flex-col sm:gap-6 sm:px-6">
        <p className="text-sm text-balance max-sm:text-center">
          ©{currentYear}{" "}
          <a href="#" className="text-primary">
            Company
          </a>
        </p>
        <div className="flex items-center gap-5"></div>
      </div>
    </footer>
  );
}
