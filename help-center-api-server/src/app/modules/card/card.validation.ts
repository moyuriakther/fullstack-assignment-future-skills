import { z } from "zod";

export const createCardValidationSchema = z.object({
    title: z.string({
        invalid_type_error: 'title must be a string',
      }).trim(),
    description: z.string({
        invalid_type_error: 'description must be a string',
      }).trim(),
})