import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(1).max(50),
    description: z.string().optional(),
  });
  
 export type formSchemaType = z.infer<typeof formSchema>;