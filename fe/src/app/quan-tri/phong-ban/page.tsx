import AdminLayout from "@/components/layout/AdminLayout";
import DepartmentManagement from "@/components/layout/phong-ban/DepartmentManagement";

export default function DepartmentsPage() {
  return (
    <AdminLayout
      title="Quản lý phòng / ban"
      description="Quản lý cơ cấu tổ chức và phân cấp phòng ban."
    >
      <DepartmentManagement />
    </AdminLayout>
  );
}