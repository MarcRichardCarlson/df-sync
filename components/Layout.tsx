import classNames from "classnames";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  showGradientFill?: boolean;
  showHeaderCTA?: boolean;
}

const Layout = ({ children, className }: LayoutProps) => {

  return (
      <main className={classNames("z-10 flex-1 layout wrapper relative flex min-h-screen flex-col overflow-hidden", className)}>
        {children}
      </main>
  );
}

export default Layout;