import { AUTHOR } from "@/lib/config";

interface AuthorBylineProps {
  size?: "sm" | "md";
}

export function AuthorByline({ size = "md" }: AuthorBylineProps) {
  if (size === "sm") {
    return (
      <p className="text-sm text-gray-400">
        By {AUTHOR.name}, {AUTHOR.title} &middot; 20 years in solar energy
      </p>
    );
  }

  return (
    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
      <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-sm flex-shrink-0">
        {AUTHOR.initials}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-900">{AUTHOR.name}</p>
        <p className="text-xs text-gray-500">{AUTHOR.title} &middot; 20 years in the solar energy industry</p>
      </div>
    </div>
  );
}
