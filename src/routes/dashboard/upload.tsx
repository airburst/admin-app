import { createFileRoute } from "@tanstack/react-router";
import { FileUpload } from "@/components/upload/file-upload";

export const Route = createFileRoute("/dashboard/upload")({
  component: FileUpload,
});
