export const UserRoles = [
  { id: 1, name: "SubAdmin" },
  { id: 2, name: "Approver" },
  { id: 3, name: "Submitter" }
] as const;

type UserRole = typeof UserRoles[number];