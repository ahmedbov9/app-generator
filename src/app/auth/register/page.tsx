import { UserCheck } from "lucide-react";
import Link from "next/link";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 via-orange-400 to-pink-500 flex items-center justify-center py-10">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative container lg:w-2/6 w-full">
        {/* Register Form Container */}
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
          {/* Header */}
          <div className="flex justify-center items-center flex-col mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl border border-white/20 mb-4">
              <UserCheck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white arabic-text mb-2">
              إنشاء حساب جديد
            </h1>
            <p className="text-white/70 arabic-text">
              انضم إلى روزيت وابدأ في إنشاء تطبيقاتك
            </p>
          </div>

          {/* Register Form */}
          <RegisterForm />
          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-white/20"></div>
            <span className="text-white/60 text-sm arabic-text">أو</span>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          {/* Social Registration */}
          <div className="space-y-3">
            <button className="w-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 arabic-text">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              إنشاء حساب بجوجل
            </button>
          </div>

          {/* Login Link */}
          <div className="flex items-center justify-center mt-8">
            <p className="text-white/70 arabic-text">
              لديك حساب بالفعل؟{" "}
              <Link
                href="/login"
                className="text-blue-300 hover:text-blue-200 font-semibold transition-colors duration-300"
              >
                تسجيل الدخول
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
