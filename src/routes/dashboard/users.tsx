import { createFileRoute } from "@tanstack/react-router";
import type { Item } from "@/components/shadcn-studio/blocks/datatable-transaction";
import TransactionDatatable from "@/components/shadcn-studio/blocks/datatable-transaction";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/dashboard/users")({
  component: UsersPage,
});

function getUserData(): Array<Item> {
  return [
    {
      id: "1",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png",
      avatarFallback: "JA",
      name: "Jack Alfredo",
      email: "jack@shadcnstudio.com",
      role: "Admin",
    },
    {
      id: "2",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png",
      avatarFallback: "MG",
      name: "Maria Gonzalez",
      role: "Agent",
      email: "maria.g@shadcnstudio.com",
    },
    {
      id: "3",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png",
      avatarFallback: "JD",
      name: "John Doe",
      role: "Agent",
      email: "john.doe@shadcnstudio.com",
    },
    {
      id: "4",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png",
      avatarFallback: "EC",
      name: "Emily Carter",
      role: "Agent",
      email: "emily.carter@shadcnstudio.com",
    },
    {
      id: "5",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png",
      avatarFallback: "DL",
      name: "David Lee",
      role: "Agent",
      email: "david.lee@shadcnstudio.com",
    },
    {
      id: "6",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png",
      avatarFallback: "SP",
      name: "Sophia Patel",
      role: "Agent",
      email: "sophia.patel@shadcnstudio.com",
    },
    {
      id: "7",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-7.png",
      avatarFallback: "RW",
      name: "Robert Wilson",
      role: "Agent",
      email: "robert.wilson@shadcnstudio.com",
    },
    {
      id: "8",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png",
      avatarFallback: "LM",
      name: "Lisa Martinez",
      role: "Agent",
      email: "lisa.martinez@shadcnstudio.com",
    },
    {
      id: "9",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-9.png",
      avatarFallback: "MT",
      name: "Michael Thompson",
      role: "Agent",
      email: "michael.thompson@shadcnstudio.com",
    },
    {
      id: "10",
      avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-10.png",
      avatarFallback: "AJ",
      name: "Amanda Johnson",
      role: "Agent",
      email: "amanda.johnson@shadcnstudio.com",
    },
  ];
}

function UsersPage() {
  const users = getUserData();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Users</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <TransactionDatatable data={users} />
      </CardContent>
    </Card>
  );
}
