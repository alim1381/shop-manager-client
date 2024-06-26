import Link from "next/link";
import LoginForm from "../component/LoginForm";

function LoginPage() {
  return (
    <>
      <div className="w-full">
        <h1 className="mb-4 text-xl font-semibold  text-gray-200">
          Login account
        </h1>
        <LoginForm />
        <hr className="my-8" />
        <p className="mt-4">
          <Link
            className="text-sm font-medium  text-purple-400 hover:underline"
            href="/register"
          >
            Create Account
          </Link>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
