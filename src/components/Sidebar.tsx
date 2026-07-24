import React from 'react';
import { Files, Search, GitMerge, Settings, User, TerminalSquare } from 'lucide-react';
import { clsx } from 'clsx';
import { useAppStore } from '../store/useAppStore';

export function Sidebar() {
  const { isTerminalOpen, toggleTerminal } = useAppStore();

  return (
    <div className="w-12 bg-vscode-panel border-r border-vscode-border flex flex-col items-center justify-between py-2 flex-shrink-0 select-none">
      <div className="flex flex-col space-y-4 w-full">
        <SidebarIcon icon={<Files size={22} />} active title="Explorer" />
        <SidebarIcon icon={<Search size={22} />} title="Search" />
        <SidebarIcon icon={<GitMerge size={22} />} title="Source Control" />
      </div>
      <div className="flex flex-col space-y-4 w-full">
        <SidebarIcon
          icon={<TerminalSquare size={22} />}
          active={isTerminalOpen}
          onClick={toggleTerminal}
          title="Terminal (Ctrl+/)"
        />
        <SidebarIcon icon={<User size={22} />} title="Perfil" />
        <SidebarIcon icon={<Settings size={22} />} title="Settings" />
      </div>
    </div>
  );
}

function SidebarIcon({
  icon,
  active,
  onClick,
  title,
}: {
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  title?: string;
}) {
  return (
    <div
      onClick={onClick}
      title={title}
      className={clsx(
        "w-full flex justify-center py-2 cursor-pointer border-l-2 transition-colors",
        active
          ? "border-vscode-blue text-vscode-text"
          : "border-transparent text-vscode-text/40 hover:text-vscode-text"
      )}
    >
      {icon}
    </div>
  );
}
