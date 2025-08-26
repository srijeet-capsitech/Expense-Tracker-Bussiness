export const UserRoles = [
  { id: 1, name: "SubAdmin" },
  { id: 2, name: "Approver" },
  { id: 3, name: "Submitter" },
  { id: 4, name: "Admin" },
] as const;

export type UserRole = (typeof UserRoles)[number]["name"];
