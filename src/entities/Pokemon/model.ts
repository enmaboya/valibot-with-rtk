import type { InferOutput } from 'valibot';
import { object, string } from 'valibot';

export const SomeItemSchema = object({
    name: string(),
    url: string(),
});

export type SomeItem = InferOutput<typeof SomeItemSchema>

/* Try uncommenting this type, there's no issue with it.
*/
// export type SomeItem = {
//     name: string,
//     url: string,
// }
