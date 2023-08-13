declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * This env var is used in the storybook script to determine whether to run storybook or Papers
     */
    EXPO_PUBLIC_STORYBOOK_ENABLED: string
    // Env vars coming from dotenv
    EXPO_PUBLIC_SUPABASE_URL: string
    EXPO_PUBLIC_SUPABASE_API_KEY: string
  }
}
