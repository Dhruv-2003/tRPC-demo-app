// tRPC Client

import { httpBatchLink } from "@trpc/client";

import { AppRouter } from "../pages/api/trpc/[trpc]";
import { createTRPCNext } from "@trpc/next";

// Notice the <AppRouter> generic here.
export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      links: [
        httpBatchLink({
          url: `http://localhost:3000/api/trpc`,
        }),
      ],
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  ssr: false,
});
