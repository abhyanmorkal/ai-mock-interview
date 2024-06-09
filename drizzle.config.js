/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://aidb_owner:kpctV1Nogx9P@ep-aged-sun-a1bi4tfa.ap-southeast-1.aws.neon.tech/aidb?sslmode=require",
  },
};
