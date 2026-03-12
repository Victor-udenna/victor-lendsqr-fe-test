import Dexie from "dexie";
import type { Table } from "dexie";
import { faker } from "@faker-js/faker";

interface PersonalInformation {
  firstname: string;
  lastname: string;
  email: string;
  phone_number: string;
  bvn: string;
  gender: string;
  children: number;
  residence_type: string;
  marital_status: string;
}

interface EducationEmployment {
  education_level: string;
  is_employed: boolean;
  employment_sector: string;
  employment_duration: string;
  office_email: string;
  min_monthly_income: number;
  max_monthly_income: number;
  loan_repayment: number;
}

interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

interface Guarantor {
  firstname: string;
  lastname: string;
  phone_number: string;
  email: string;
  relationship: string;
}

export type User = {
  id: number;
  userid: string;
  status: string;
  withLoan: boolean;
  withSavings: boolean;
  organization: string;
  dateJoined: Date;
  bank: string;
  account_number: number;
  account_balance: number;
  user_tier: number;
  personal_information: PersonalInformation;
  education_employment: EducationEmployment;
  socials: Socials;
  guarantor: Guarantor;
};

class UserDatabase extends Dexie {
  users!: Table<User>;

  constructor() {
    super("UserData");
    this.version(4).stores({
      users:
        "++id, status, userid, withLoan, organization, withSavings, dateJoined, personal_information, education_employment, socials, guarantor",
    });
  }
}

const db = new UserDatabase();

export async function fetchUserById(id: string) {
  try {
    const user = await db.users.get(id);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}

export async function updateUserStatus(Id: number, newStatus: string) {
  try {
    await db.users.update(Id, { status: newStatus });
    console.log(`User ${Id} status updated to ${newStatus}`);
  } catch (error) {
    console.error("Error updating user status:", error);
  }
}

const bankList = [
  "Access Bank Plc",
  "Zenith Bank Plc",
  "First Bank of Nigeria Limited",
  "United Bank for Africa (UBA)",
  "Guaranty Trust Bank (GTBank)",
  "Union Bank of Nigeria Plc",
  "Fidelity Bank Plc",
  "Sterling Bank Plc",
  "Ecobank Nigeria",
  "Stanbic IBTC Bank Plc",
  "Polaris Bank Limited",
  "Unity Bank Plc",
  "Wema Bank Plc",
  "Heritage Bank Plc",
  "Keystone Bank Limited",
];

const employeeResidenceTypes = [
  "Apartment",
  "House",
  "Condominium",
  "Townhouse",
  "Duplex",
  "Shared Housing",
  "Dormitory",
  "Mobile Home",
  "Company-provided Housing",
  "Temporary Housing",
];

const organizationList = ["Lendsqr", "TechCorp", "Initech", "Globex", "Umbrella"];

const generateFakeData = async () => {
  const fakedata: User[] = [];

  for (let i = 0; i < 500; i++) {
    fakedata.push({
      id: i,
      userid: faker.string.uuid(),
      status: faker.helpers.arrayElement(["blacklisted", "active", "inactive", "pending"]),
      organization: faker.helpers.arrayElement(organizationList),
      withLoan: faker.helpers.arrayElement([true, false]),
      withSavings: faker.helpers.arrayElement([true, false]),
      dateJoined: faker.date.past({ years: 5 }),
      bank: faker.helpers.arrayElement(bankList),
      account_number: parseInt(faker.finance.accountNumber()),
      account_balance: faker.number.int({ min: 400000, max: 1000000 }),
      user_tier: faker.helpers.arrayElement([1, 2, 3]),
      personal_information: {
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        email: faker.internet.email(),
        phone_number: faker.phone.number(),
        bvn: faker.number.bigInt({ min: 1000000000000, max: 9999999999999 }).toString(),
        gender: faker.person.sex(),
        children: faker.number.int({ min: 0, max: 6 }),
        residence_type: faker.helpers.arrayElement(employeeResidenceTypes),
        marital_status: faker.helpers.arrayElement(["single", "married"]),
      },
      education_employment: {
        education_level: faker.helpers.arrayElement(["B.Sc", "M.Sc", "Diploma", "High School"]),
        is_employed: faker.datatype.boolean(),
        employment_sector: faker.helpers.arrayElement([
          "fintech",
          "healthcare",
          "education",
          "technology",
        ]),
        employment_duration: faker.number.int({ min: 1, max: 20 }).toString(),
        office_email: faker.internet.email(),
        min_monthly_income: faker.number.int({ min: 100000, max: 500000 }),
        max_monthly_income: faker.number.int({ min: 300000, max: 1000000 }),
        loan_repayment: faker.number.int({ min: 10000, max: 500000 }),
      },
      socials: {
        twitter: faker.internet.username(),
        facebook: faker.internet.username(),
        instagram: faker.internet.username(),
      },
      guarantor: {
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        phone_number: faker.phone.number(),
        email: faker.internet.email(),
        relationship: faker.helpers.arrayElement(["friend", "colleague", "family", "mentor"]),
      },
    });
  }

  try {
    await db.users.clear();
    await db.users.bulkAdd(fakedata);
  } catch (error) {
    console.error("Error adding data to Dexie:", error);
  }
};

const checkAndFetchData = async () => {
  try {
    const count = await db.users.count();

    if (count < 500) {
      console.log(`Current count is ${count}. Refetching data...`);
      await generateFakeData();
    } else {
      console.log(`Current count is ${count}. No need to refetch.`);
    }
  } catch (error) {
    console.error("Error checking user count:", error);
  }
};

checkAndFetchData();

export default db;
