import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:xLGndYKahF43@ep-calm-rain-a1wjapzu.ap-southeast-1.aws.neon.tech/AI_content_generator?sslmode=require",
  }
})
