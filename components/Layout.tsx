import classNames from "classnames";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  showGradientFill?: boolean;
  showHeaderCTA?: boolean;
}

const Layout = ({ children, showGradientFill, showHeaderCTA, className }: LayoutProps) => {

  return (
      <main className={classNames("z-10 flex-1 layout wrapper relative flex min-h-screen flex-col overflow-hidden", className)}>
        {children}
        
        {/* Circle Gradient Fill */}
        {showGradientFill && (
          <div className="gradient-ellipse fixed bottom-0 left-1/2 z-0 aspect-square h-screen w-2/3 -translate-x-1/2 translate-y-1/2 lg:w-1/2" />
        )};
      </main>
  );
}

export default Layout;