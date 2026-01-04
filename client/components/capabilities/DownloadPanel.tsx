import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";

interface DownloadPanelProps {
  pdfHref: string;
  className?: string;
}

export function DownloadPanel({ pdfHref, className }: DownloadPanelProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-onealgo-light p-5 shadow-sm",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <div className="rounded-full bg-onealgo-blue-100 p-2">
          <FileText className="h-5 w-5 text-onealgo-blue-900" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-gray-900">
            Download Capabilities Statement
          </h3>
          <p className="text-sm text-gray-600">
            Get a shareable PDF copy for capture teams, contracting officers, and
            teaming partners.
          </p>
          <Button
            asChild
            size="sm"
            className="mt-4 bg-onealgo-orange-500 text-white hover:bg-onealgo-orange-600"
          >
            <a href={pdfHref} target="_blank" rel="noopener noreferrer" download>
              Download PDF
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
