import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 border-b-2 border-sky-900">
      <div className="flex items-center space-x-2 text-sm">
        <Link to="/" className="text-xl font-bold text-sky-900">
          NPM Registry
        </Link>
      </div>
      <div className="w-full max-w-xl ml-4">
        <SearchInput />
      </div>
    </div>
  );
}
