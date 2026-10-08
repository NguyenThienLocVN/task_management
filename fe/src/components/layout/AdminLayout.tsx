"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import {
  Building2,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  Menu,
  Network,
  Settings,
  ShieldCheck,
  UserRound,
  UsersRound,
} from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

const menus = [
  {
    label: "Tổng quan",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Cơ quan / đơn vị",
    href: "/admin/organizations",
    icon: Building2,
  },
  {
    label: "Phòng / ban",
    href: "/admin/departments",
    icon: Network,
  },
  {
    label: "Người dùng",
    href: "/admin/users",
    icon: UsersRound,
  },
  {
    label: "Vai trò & phân quyền",
    href: "/admin/roles",
    icon: ShieldCheck,
  },
];

export default function AdminLayout({
  children,
  title,
  description,
}: AdminLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 hidden w-72 flex-col border-r border-slate-200 bg-white lg:flex">
        <div className="flex h-20 items-center border-b border-slate-200 px-6">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-white">
              <Building2 className="h-6 w-6" />
            </div>

            <div>
              <div className="font-bold tracking-wide text-slate-900">
                TASK MANAGEMENT
              </div>
              <div className="text-xs text-slate-500">
                Hệ thống quản lý công việc
              </div>
            </div>
          </Link>
        </div>

        <nav className="flex-1 space-y-1 px-4 py-6">
          {menus.map((menu) => {
            const active =
              pathname === menu.href ||
              (menu.href !== "/admin" &&
                pathname.startsWith(`${menu.href}/`));

            const Icon = menu.icon;

            return (
              <Link
                key={menu.href}
                href={menu.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon className="h-5 w-5" />

                <span className="flex-1">{menu.label}</span>

                {active && <ChevronRight className="h-4 w-4" />}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-slate-200 p-4">
          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50">
            <Settings className="h-5 w-5" />
            Cài đặt hệ thống
          </button>

          <button className="mt-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50">
            <LogOut className="h-5 w-5" />
            Đăng xuất
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:pl-72">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-5 backdrop-blur lg:px-8">
          <div className="flex items-center gap-4">
            <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden">
              <Menu className="h-6 w-6" />
            </button>

            <div>
              <h1 className="text-xl font-bold text-slate-900">{title}</h1>

              {description && (
                <p className="mt-0.5 hidden text-sm text-slate-500 sm:block">
                  {description}
                </p>
              )}
            </div>
          </div>

          <button className="flex items-center gap-3 rounded-xl p-2 hover:bg-slate-50">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-slate-800">
                Quản trị viên
              </p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              <UserRound className="h-5 w-5" />
            </div>
          </button>
        </header>

        <main className="p-5 lg:p-8">{children}</main>
      </div>
    </div>
  );
}