import Link from "next/link";
import RegistarForm from "../component/RegistarForm";

function RegisterPage() {
  return (
    <>
      <div className="w-full">
        <h1 className="mb-4 text-xl font-semibold  text-gray-200">
          Create account
        </h1>
        <RegistarForm />
        <hr className="my-8" />
        <p className="mt-4">
          <Link
            className="text-sm font-medium  text-purple-400 hover:underline"
            href="/login"
          >
            Already have an account?
          </Link>
        </p>
      </div>
    </>
  );
}

export default RegisterPage;
