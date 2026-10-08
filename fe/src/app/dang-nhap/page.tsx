import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Đăng nhập"
      description="Đăng nhập để truy cập hệ thống quản lý công việc."
    >
      <LoginForm />
    </AuthLayout>
  );
}