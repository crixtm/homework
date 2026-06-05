import { User } from "@test_data/user_type";

export const usersValid: User[] = [
  {
    user: "admin",
    credentials: {
      email: "admin.user@test.hu",
      pass: "Admin123!",
    },
  },
]

export const usersWrongCredentials: User[] = [
 {
    user: "admin wrong email",
    credentials: {
      email: "admin_wrong@test.hu",
      pass: "Admin123!",
    },
  }, 
  {
    user: "admin wrong pass",
    credentials: {
      email: "admin.user@test.hu",
      pass: "WRONG!",
    },
  },
 {
    user: "user does not exist but good pass",
    credentials: {
      email: "nonExisting@test.hu",
      pass: "Admin123!",
    },
  },

  {
    user: "user does not exist",
    credentials: {
      email: "asdfasdf@test.hu",
      pass: "asdfasdf",
    },
  },
];