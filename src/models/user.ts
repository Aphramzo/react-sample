export type Role = {
  id: string;
  name: string;
};

export type User = {
  firstName: string;
  lastName: string;
  address: any; // So sue me
  roles: Array<Role>;
};
