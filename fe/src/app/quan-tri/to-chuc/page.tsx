import AdminLayout from "@/components/layout/AdminLayout";
import OrganizationManagement from "@/components/layout/to-chuc/OrganizationManagement";

export default function OrganizationsPage() {
  return (
    <AdminLayout
      title="Quản lý cơ quan / đơn vị"
      description="Thông tin cơ quan sử dụng hệ thống."
    >
      <OrganizationManagement />
    </AdminLayout>
  );
}