import { DashboardSidebar } from './DashboardSidebar';

interface DashboardLayoutProps {
  children: any;
  activeSection: 'stocks' | 'learning' | 'history' | 'pricing';
}

export function DashboardLayout({ children, activeSection }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar activeSection={activeSection} />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
